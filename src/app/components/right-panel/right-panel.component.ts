import { CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { playbookTypes } from 'src/app/interfaces/playbookTypes';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() imagesLists: {url:string}[];
  @Input() playBoookLists: playbookTypes[];
  @Output() droupEvent = new EventEmitter();

  drop(event: CdkDragDrop<string[]>) {
    this.droupEvent.emit(event);
  }

  imagesConnectedTo() {
     return  this.playBoookLists.map(res=>`${res.id}`);
  }

}
