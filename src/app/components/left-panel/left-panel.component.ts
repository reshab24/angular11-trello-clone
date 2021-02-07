import { CdkDragDrop} from '@angular/cdk/drag-drop';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { dragTypes } from 'src/app/app.component';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() sliderLists: dragTypes[];
  @Output() droupEvent = new EventEmitter();

  sliderListColors: dragTypes[] = [
    { color: "red" },
    { color: "green" },
    { color: "blue" },
    { color: "orange" },
  ];

  drop(event: CdkDragDrop<string[]>) {
    this.droupEvent.emit(event);
  }


}
