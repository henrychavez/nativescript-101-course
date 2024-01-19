import { Component, OnInit } from "@angular/core";
import {
  ApplicationSettings,
} from "@nativescript/core";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const authToken = ApplicationSettings.getString("authToken");
    console.log("Cargamos el auth token", authToken);
  }
}
