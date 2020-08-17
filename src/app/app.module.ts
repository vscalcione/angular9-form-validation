import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchPasswordDirective } from './directives/match-password/match-password.directive';
import { PasswordPatternDirective } from './directives/password-pattern/password-pattern.directive';
import { ValidateUserDirective } from './directives/validate-user/validate-user.directive';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchPasswordDirective,
    PasswordPatternDirective,
    ValidateUserDirective,
    HomeComponent,
    NavBarComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'reactive-form', component: ReactiveFormComponent },
      { path: 'template-form', component: TemplateDrivenFormComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
