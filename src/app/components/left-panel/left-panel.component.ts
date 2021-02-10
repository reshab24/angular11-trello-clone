import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { playbookTypes } from 'src/app/interfaces/playbookTypes';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() sliderLists: playbookTypes[];
  @Output() droupEvent = new EventEmitter();

  drop(event: CdkDragDrop<string[]>) {
    this.droupEvent.emit(event);
  }


}
