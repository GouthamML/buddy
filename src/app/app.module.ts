import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChartsModule } from 'ng2-charts';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { risk } from '../pages/risk/risk';
import { year } from '../pages/year/year';
import { charts } from '../pages/charts/charts';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    risk,
    year,
    charts
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    risk,
    year,
    charts
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
