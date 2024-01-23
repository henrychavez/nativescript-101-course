import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "ns-home",
  templateUrl: "home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: RouterExtensions) {}

  ngOnInit() {}

  completeTask(checked: boolean) {
    checked && alert("Tarea completada");
  }

  agregarTodo() {
    this.router.navigate(["/add-todo"]);
  }
}
