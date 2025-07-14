import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // ou HomeComponent, dependendo do seu setup
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

