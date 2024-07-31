import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { LoginPage } from "../pages/login-page/login-page.component";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "./app.routes";

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}