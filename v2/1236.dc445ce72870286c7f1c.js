(window.webpackJsonp=window.webpackJsonp||[]).push([[1236],{dQcW:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-radio-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioExample1 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(`One`),\n        testValue2: new FormControl({value: `One`, disabled: true}),\n    });\n}\n"}}]);