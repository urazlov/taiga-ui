(window.webpackJsonp=window.webpackJsonp||[]).push([[811],{us7P:function(e,n,i){"use strict";i.r(n),n.default='<tui-input-files\n    *ngIf="!control.value"\n    accept="image/*"\n    [formControl]="control"\n    (reject)="onReject($event)"\n></tui-input-files>\n\n<tui-files class="tui-space_top-1">\n    <tui-file\n        *ngIf="control.valueChanges | async as file"\n        [file]="file"\n        (removed)="removeFile()"\n    ></tui-file>\n\n    <tui-file\n        *ngIf="rejectedFiles$ | async as file"\n        state="error"\n        [file]="file"\n        (removed)="clearRejected()"\n    ></tui-file>\n</tui-files>\n'}}]);