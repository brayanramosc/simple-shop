import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, HomePageComponent],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent]
})

export class AppModule { }
