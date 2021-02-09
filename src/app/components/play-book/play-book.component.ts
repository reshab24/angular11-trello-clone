import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-play-book',
  templateUrl: './play-book.component.html',
  styleUrls: ['./play-book.component.scss']
})
export class PlayBookComponent implements OnInit {

  @Input() playBoookLists: any[];
  @Output() droupEvent = new EventEmitter();
  @Output() droupEventGroup = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  dropItem(event: CdkDragDrop<string[]>) {
    this.droupEvent.emit(event);
  }

  dropGroup(event: CdkDragDrop<string[]>) {
    this.droupEvent.emit(event);
  }

  evenPredicate(item: CdkDrag<any>, current: CdkDrag<any>) {
    return current.data.length >= 1 ? false : true;
  }
}
