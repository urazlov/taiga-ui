(window.webpackJsonp=window.webpackJsonp||[]).push([[1861],{VQP5:function(n,t,a){"use strict";a.r(t),t.default='<table\n    tuiTable\n    class="table"\n    [columns]="columns"\n>\n    <thead>\n        <tr tuiThGroup>\n            <th\n                tuiTh\n                [resizable]="true"\n            >\n                Name\n            </th>\n            <th tuiTh>Balance</th>\n        </tr>\n    </thead>\n    <tbody\n        tuiTbody\n        [data]="data"\n    >\n        <tr\n            *tuiRow="let item of data"\n            tuiTr\n        >\n            <td\n                *tuiCell="\'balance\'"\n                tuiTd\n            >\n                {{ item.balance | tuiFormatNumber }}\n            </td>\n        </tr>\n    </tbody>\n</table>\n'}}]);