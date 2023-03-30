import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Home/home/home.component';
import { ServicesComponent } from './Services/services/services.component';
import { FigurinesComponent } from './Figurines/figurines/figurines.component';
import { MangasComponent } from './Mangas/mangas/mangas.component';
import { ContactComponent } from './Contact/contact/contact.component';
import { HelpComponent } from './Help/help/help.component';
import { HeaderComponent } from './Header/header/header.component';
import { FormViewComponent } from './FormView/form-view/form-view.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule} from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userService } from './servicios/userServices';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    FigurinesComponent,
    MangasComponent,
    ContactComponent,
    HelpComponent,
    HeaderComponent,
    FormViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
