import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './common/interceptor/interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import MyPreset from './myPreset';
import { MessageService } from 'primeng/api';
import { ToastService } from './common/services/toast';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAnimationsAsync(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([AuthInterceptor])),
     providePrimeNG({
      ripple: true,
      theme: { preset: MyPreset,

       options: {
            darkModeSelector: false || 'none'
        }
      }
    }),
    MessageService,
    ToastService

  ]
};
