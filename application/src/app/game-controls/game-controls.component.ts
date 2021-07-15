import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styles: [
  ]
})
export class GameControlsComponent implements OnInit {
   @Output() onFireInterval = new EventEmitter<number>();
   interval: any;
   lastNumber: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  StartGame(){
   this.interval = setInterval(() => { 
    this.onFireInterval.emit(this.lastNumber);
    this.lastNumber++;
   }, 1000)
  
  }

  PauseGame(){
    clearInterval(this.interval);
  }

}
