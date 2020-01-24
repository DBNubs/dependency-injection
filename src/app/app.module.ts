import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserDemoInjectorComponent } from './user-demo/user-demo.injector.component';

import { UserService } from './services/user.service';
import { AnalyticsService } from './services/analytics.service';
import { AnalyticsImplementation } from './analytics-demo/analystics-demo.interface';

import { Metric } from './analytics-demo/analystics-demo.interface';

@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    UserDemoInjectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
      provide: AnalyticsService,
      useFactory() {
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is: ', metric);
          }
        };
        return new AnalyticsService(loggingImplementation);
      }
    },
    UserService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
