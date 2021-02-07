import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dragTypes } from 'src/app/app.component';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() imagesLists: dragTypes[];
  @Output() droupEvent = new EventEmitter();

  drop(event: CdkDragDrop<string[]>) {
    this.droupEvent.emit(event);
  }

}