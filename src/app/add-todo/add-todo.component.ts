import { Component, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

@Component({
  selector: "ns-add-todo",
  templateUrl: "add-todo.component.html",
  styleUrls: ["./add-todo.component.css"],
  standalone: true,
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AddTodoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
