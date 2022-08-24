import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { LoginGridComponent } from './login-grid/login-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginGridComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
