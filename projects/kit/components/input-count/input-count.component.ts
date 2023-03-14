import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    AbstractTuiNullableControl,
    clamp,
    isNativeFocused,
    isPresent,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_IS_MOBILE,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    formatNumber,
    TUI_NUMBER_FORMAT,
    TUI_TEXTFIELD_APPEARANCE,
    TUI_TEXTFIELD_SIZE,
    tuiCreateNumberMask,
    tuiMaskedNumberStringToNumber,
    TuiNumberFormatSettings,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldSizeDirective,
    TuiTextMaskOptions,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TUI_PLUS_MINUS_TEXTS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TextMaskConfig} from 'angular2-text-mask';
import {Observable} from 'rxjs';

import {TUI_INPUT_COUNT_OPTIONS, TuiInputCountOptions} from './input-count-options';

// @dynamic
@Component({
    selector: 'tui-input-count',
    templateUrl: './input-count.template.html',
    styleUrls: ['./input-count.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputCountComponent),
        },
        {
            provide: AbstractTuiControl,
            useExisting: forwardRef(() => TuiInputCountComponent),
        },
    ],
})
export class TuiInputCountComponent
    extends AbstractTuiNullableControl<number>
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly primitiveTextfield?: TuiPrimitiveTextfieldComponent;

    private unfinishedValue: string | null = '';

    @Input()
    @tuiDefaultProp()
    step = this.options.step;

    @Input()
    @tuiDefaultProp()
    min = this.options.min;

    @Input()
    @tuiDefaultProp()
    max = this.options.max;

    @Input()
    @tuiDefaultProp()
    hideButtons = this.options.hideButtons;

    @Input()
    @tuiDefaultProp()
    prefix = '';

    @Input()
    @tuiDefaultProp()
    postfix = this.options.postfix;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_APPEARANCE)
        private readonly appearance: string,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_PLUS_MINUS_TEXTS)
        readonly minusTexts$: Observable<[string, string]>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_INPUT_COUNT_OPTIONS)
        readonly options: TuiInputCountOptions,
        @Inject(TUI_NUMBER_FORMAT)
        private readonly numberFormat: TuiNumberFormatSettings,
    ) {
        super(control, changeDetectorRef);
    }

    @tuiPure
    getMask(allowNegative: boolean): TextMaskConfig {
        return {
            mask: tuiCreateNumberMask({
                allowNegative,
                decimalSymbol: this.numberFormat.decimalSeparator,
                thousandSymbol: this.numberFormat.thousandSeparator,
            }),
            guide: false,
        } as TuiTextMaskOptions as unknown as TextMaskConfig;
    }

    // TODO: 3.0 Remove in v.3
    @HostBinding('class._hide-buttons')
    get buttonsHidden(): boolean {
        return this.hideButtons || this.appearance === 'table';
    }

    get iconUp(): PolymorpheusContent<Record<string, unknown>> {
        return this.options.icons.up;
    }

    get iconDown(): PolymorpheusContent<Record<string, unknown>> {
        return this.options.icons.down;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return !this.primitiveTextfield || this.computedDisabled
            ? null
            : this.primitiveTextfield.nativeFocusableElement;
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    get exampleText(): string {
        return String(this.min);
    }

    get computedValue(): string {
        return this.focused ? this.nativeValue : this.formatNumber(this.value);
    }

    get minusButtonDisabled(): boolean {
        return !this.interactive || (isPresent(this.value) && this.value <= this.min);
    }

    get plusButtonDisabled(): boolean {
        return !this.interactive || (isPresent(this.value) && this.value >= this.max);
    }

    onButtonMouseDown(event: MouseEvent, disabled: boolean = false): void {
        if (disabled || !this.nativeFocusableElement || this.isMobile) {
            return;
        }

        event.preventDefault();
        setNativeFocused(this.nativeFocusableElement);
    }

    onFocused(focused: boolean): void {
        if (!focused) {
            this.onBlur();
        }

        this.updateFocused(focused);
    }

    onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    onPressed(pressed: boolean): void {
        this.updatePressed(pressed);
    }

    onValueChange(): void {
        if (this.isNativeValueNotFinished) {
            this.unfinishedValue = this.nativeValue;

            return;
        }

        this.unfinishedValue = null;

        const capped = this.capValue(this.nativeNumberValue);

        if (this.isNotNumber(capped)) {
            this.updateValue(null);

            return;
        }

        const newValue = this.formatNumber(capped);

        if (this.nativeValue !== newValue) {
            this.nativeValue = newValue;
        }

        this.updateValue(capped);
    }

    decreaseValue(): void {
        if (this.readOnly) {
            return;
        }

        const newValue = (this.value || 0) - this.step;

        this.safeUpdateValue(newValue);
    }

    increaseValue(): void {
        if (this.readOnly) {
            return;
        }

        const newValue = (this.value || 0) + this.step;

        this.safeUpdateValue(newValue);
    }

    onKeydown(event: KeyboardEvent): void {
        switch (event.key) {
            case 'ArrowUp':
            case 'Up':
                this.increaseValue();
                event.preventDefault();
                break;
            case 'ArrowDown':
            case 'Down':
                this.decreaseValue();
                event.preventDefault();
                break;
            default:
                break;
        }
    }

    private get nativeNumberValue(): number {
        return parseInt(
            this.nativeValue.split(this.numberFormat.thousandSeparator).join(''),
            10,
        );
    }

    private get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : '';
    }

    private set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    private safeUpdateValue(newValue: number): void {
        const value = clamp(newValue, this.min, this.max);

        this.updateValue(value);
        this.nativeValue = this.formatNumber(value);
    }

    private capValue(value: number): number | null {
        const capped = Math.min(value, this.max);

        return Number.isNaN(capped) || capped < this.min ? null : capped;
    }

    private onBlur(): void {
        const nativeNumberValue = this.unfinishedValue
            ? tuiMaskedNumberStringToNumber(
                  this.unfinishedValue,
                  this.numberFormat.decimalSeparator,
                  this.numberFormat.thousandSeparator,
              )
            : this.nativeNumberValue;

        this.unfinishedValue = null;

        if (this.isNotNumber(nativeNumberValue)) {
            this.updateValue(null);

            return;
        }

        const value = Math.max(nativeNumberValue || 0, this.min);
        const formattedValue = this.formatNumber(value);

        this.nativeValue = formattedValue;
        this.updateValue(value);

        if (this.primitiveTextfield) {
            this.primitiveTextfield.value = formattedValue;
        }
    }

    private formatNumber(value: number | null): string {
        return this.isNotNumber(value)
            ? ''
            : formatNumber(
                  value,
                  null,
                  this.numberFormat.decimalSeparator,
                  this.numberFormat.thousandSeparator,
              );
    }

    private isNotNumber(value: number | null): value is null {
        return !isPresent(value) || Number.isNaN(value);
    }

    private get isNativeValueNotFinished(): boolean {
        const {nativeNumberValue} = this;

        return nativeNumberValue < 0
            ? nativeNumberValue > this.max
            : nativeNumberValue < this.min;
    }
}
