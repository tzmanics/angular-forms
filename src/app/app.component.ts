import {IdleMonitorService} from '@scullyio/ng-lib'; 
 import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-forms";

  constructor(private idle: IdleMonitorService) {}
  ngOnInit() {}
}
