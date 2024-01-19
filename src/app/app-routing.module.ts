import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/items", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "items", component: ItemsComponent, canActivate: [AuthGuard] },
  { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
