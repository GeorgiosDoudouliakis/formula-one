/* Place angular imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Place component imports */
import { AppComponent } from './app.component';

/* Place any other imports here */
import { HeaderModule } from "./modules/header/header.module";
import { BackForthButtonsModule } from "./modules/back-forth-buttons/back-forth-buttons.module";
import { FooterModule } from "./modules/footer/footer.module";

/* Place angular material imports */
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    BackForthButtonsModule,
    FooterModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
