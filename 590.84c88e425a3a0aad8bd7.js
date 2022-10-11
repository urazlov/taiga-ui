(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{kal1:function(e,n,i){"use strict";i.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogService, TuiSizeL, TuiSizeXS} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-data-list-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDataListExample2 {\n    dropdownOpen = false;\n    size: TuiSizeXS | TuiSizeL = `s`;\n\n    readonly burgers = [`Classic`, `Cheeseburger`, `Royal Cheeseburger`];\n    readonly drinks = [`Cola`, `Tea`, `Coffee`, `Slurm`];\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n    ) {}\n\n    selectOption(item: string): void {\n        this.dropdownOpen = false;\n        this.dialogService.open(`You selected ${item}`).subscribe();\n    }\n}\n"}}]);