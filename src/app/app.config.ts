import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {

  providers: [
 
  provideRouter(routes),
 
  provideHttpClient(),
 
  provideAuth0({
 
  domain: 'SEU_DOMINIO.auth0.com',
 
  clientId: 'SEU_CLIENT_ID',
 
  authorizationParams: {
 
  redirect_uri: window.location.origin,
 
  },
 
  }),
 
  ],
 
 };
 
import { provideAuth0 } from '@auth0/auth0-angular';

import { provideHttpClient } from '@angular/common/http';

