(window.webpackJsonp=window.webpackJsonp||[]).push([[1055],{iG7M:function(n,e,o){"use strict";o.r(e),e.default="```ts\nconstructor(private readonly dialogsService: TuiMobileDialogService) {}\n\n// ...\n\nthis.dialogsService\n    .open(\n        'Text',\n        {\n            label: 'Heading',\n            actions: ['Button 1', 'Button 2'],\n            data: 'Some data'\n        },\n    )\n    .subscribe(index => {\n        // Index of clicked button\n        console.log(index);\n    });\n```\n"}}]);