(window.webpackJsonp=window.webpackJsonp||[]).push([[900],{CS8i:function(n,t,e){"use strict";e.r(t),t.default='<div class="wrapper">\n    <tui-input-range\n        id="input-range-with-key-steps"\n        new\n        [min]="min"\n        [max]="max"\n        [steps]="totalSteps"\n        [keySteps]="keySteps"\n        [segments]="segments"\n        [formControl]="control"\n    >\n        Not linear growing sliders\n    </tui-input-range>\n\n    <div class="ticks-labels">\n        <span *ngFor="let label of ticksLabels">{{ label }}</span>\n    </div>\n</div>\n\n<p class="tui-space_top-12 tui-space_bottom-0">\n    Control value:\n    <output for="input-range-with-key-steps">\n        <code>{{ control.value | json }}</code>\n    </output>\n</p>\n'}}]);