import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptModule,
  registerElement,
} from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { PreviousNextView } from "@nativescript/iqkeyboardmanager";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import {
  RadioButtonComponent,
  RadioButtonTextDirective,
} from "./components/radio-button/radio-button.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";

registerElement("PreviousNextView", () => PreviousNextView);

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RadioButtonComponent,
    RadioButtonTextDirective,
    AddTodoComponent,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    // ItemsComponent,
    // ItemDetailComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
