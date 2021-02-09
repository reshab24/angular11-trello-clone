import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';


export interface dragTypes {
  color?: string,
  url?: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sliderListColors: any[] = [
    {
      id: 1,
      color: "red",
      items: [

      ]
    },
    {
      id: 2,
      color: "green",
      items: [

      ]
    },
    {
      id: 3,
      color: "blue",
      items: [

      ]
    },
    {
      id: 4,
      color: "orange",
      items: [

      ]
    },

  ];

  playBookList: any[] = [
    {
      id: 5,
      color: "yellow",
      items: [

      ]
    },
  ];

  images: dragTypes[] = [
    { url: "https://picsum.photos/id/27/200/200" },
    { url: "https://picsum.photos/id/28/200/200" },
    { url: "https://picsum.photos/id/29/200/200" },
    { url: "https://picsum.photos/id/39/200/200" },
  ]

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  dropGroup(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dragged(event) {
    console.log(event, "events");
  }

  noReturnPredicate() {
    return false;
  }

}
