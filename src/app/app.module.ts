import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRouting } from "./routes/app-routing.module";
import { LoginPage } from "./pages/login-page/login-page.component";
import { Workspace } from "./pages/workspace/workspace.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    Workspace
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}