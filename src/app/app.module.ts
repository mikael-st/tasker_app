import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRouting } from "./routes/app-routing.module";
import { LoginPage } from "./screens/login-page/login-page.component";
import { Home } from "./screens/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    Home
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}