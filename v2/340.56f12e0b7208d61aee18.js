(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{"8Jbi":function(n,e,a){"use strict";a.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-bar-chart-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBarChartExample2 {\n    readonly value = [\n        [1000, 8000, 4000, 3000, 4000],\n        [6000, 2000, 4500, 7000, 5000],\n    ];\n\n    readonly labelsX = [`Jan 2021`, `Feb`, `Mar`];\n    readonly labelsY = [`0`, `10 000`];\n}\n"}}]);