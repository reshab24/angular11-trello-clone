import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { boardData } from './interfaces/boardTypes';
import { MorkService } from './services/mork.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  $boardData:Observable<boardData[]>;
  addBoardClick: boolean=false;
  constructor(private mkService:MorkService){

  }

  ngOnInit(){
     this.$boardData=this.mkService.getBoardsData();
  }

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }

  }

  addNewBoard(){
    this.addBoardClick=true
  }

  closeForm(){
    this.addBoardClick=false;
  }

  getBoardData({newData}){
    this.mkService.addNewBoard(newData.title);
    this.closeForm();
  }

}
