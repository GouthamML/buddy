import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { requestIonicCallback } from '../../../node_modules/ionic-angular/umd/util/util';

@Component({
    selector: 'doughnut-chart-demo',
    templateUrl: 'charts.html'
  })
  export class charts {
      // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
    constructor(public navCtrl: NavController) {
      //this.navCtrl.push(risk);
    }
}