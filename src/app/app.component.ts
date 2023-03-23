import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'contador';
    public numero:number =10;
    public base:number=5;
      public sumar():void{
        this.numero+=1;
      }
      public restar():void{
        this.numero-=1;
      }
      public contador(valor:number):void{
        this.numero+=valor;
      }
      public contador2(base:number):void{
        this.numero+=base;
      }
    }
