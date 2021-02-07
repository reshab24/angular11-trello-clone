import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dragTypes } from 'src/app/app.component';

@Component({
  selector: 'app-play-book',
  templateUrl: './play-book.component.html',
  styleUrls: ['./play-book.component.scss']
})
export class PlayBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() playBoookLists: dragTypes[];
  @Output() droupEvent = new EventEmitter();

  drop(event: CdkDragDrop<string[]>) {
    this.droupEvent.emit(event);
  }
}
