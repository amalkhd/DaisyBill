import { BillingDialogComponent } from "./home/billing/dialog/dialog.component";
import { MaterialModule } from "./home/material.module";
import { BillingComponent } from "./home/billing/billing.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./home/header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
const appRoutes: Routes = [
  {
    path: "billing",
    component: BillingComponent
  },
  {
    path: "",
    redirectTo: "billing",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    HeaderComponent,
    BillingDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  entryComponents: [BillingDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
