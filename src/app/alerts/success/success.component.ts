import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-success',
    templateUrl:'./success.component.html',
    styles:[`
        .successdiv{
            color: #3c763d;
            background-color: #dff0d8;
            border-color: #d6e9c6;
        }
        .container{
            margin-top: 3%;
        }
    `]
})
export class SuccessComponent implements OnInit{
    constructor() { }

  ngOnInit() {
  }
}