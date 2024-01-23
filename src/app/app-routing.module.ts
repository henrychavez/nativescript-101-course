import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "add-todo", component: AddTodoComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
