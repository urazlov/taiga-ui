(window.webpackJsonp=window.webpackJsonp||[]).push([[1131],{lcxx:function(e,n,i){"use strict";i.r(n),n.default="import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {PreviewDialogService} from '@taiga-ui/addon-preview';\nimport {isPresent} from '@taiga-ui/cdk';\nimport {TuiDialogContext} from '@taiga-ui/core';\nimport {BehaviorSubject, Observable, of, timer} from 'rxjs';\nimport {filter, map, mapTo, startWith, switchMap} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-preview-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPreviewExample3 {\n    @ViewChild(`preview`)\n    readonly preview?: TemplateRef<TuiDialogContext<void>>;\n\n    readonly items = [\n        {\n            title: `some table.xlsx`,\n            hasPreview: false,\n        },\n        {\n            title: `Content #2`,\n            hasPreview: true,\n        },\n    ];\n\n    readonly index$$ = new BehaviorSubject<number>(0);\n\n    readonly item$ = this.index$$.pipe(\n        map(index => this.items[index]),\n        filter(isPresent),\n    );\n\n    readonly title$ = this.item$.pipe(map(item => item.title));\n\n    readonly contentUnavailable$ = this.item$.pipe(map(item => !item.hasPreview));\n\n    readonly imageSrc$ = this.item$.pipe(\n        switchMap(item =>\n            item.hasPreview ? this.emulateBackendRequest().pipe(startWith(``)) : of(null),\n        ),\n    );\n\n    readonly loading$ = this.imageSrc$.pipe(map(src => src === ``));\n\n    constructor(\n        @Inject(PreviewDialogService)\n        private readonly previewDialogService: PreviewDialogService,\n    ) {}\n\n    show(): void {\n        this.previewDialogService.open(this.preview || ``).subscribe();\n    }\n\n    download(): void {\n        console.info(`downloading...`);\n    }\n\n    emulateBackendRequest(): Observable<string> {\n        return timer(1500).pipe(\n            mapTo(`https://ng-web-apis.github.io/dist/assets/images/web-api.svg`),\n        );\n    }\n}\n"}}]);