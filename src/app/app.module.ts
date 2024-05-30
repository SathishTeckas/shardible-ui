import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SnackbarModule } from 'ngx-snackbar';
import { AppConfig } from './app.config';

//Add this function as initiating load method first
function initConfig(config: AppConfig) {
  return () => config.load();
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    SnackbarModule.forRoot(),
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initConfig,
      deps: [AppConfig],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
