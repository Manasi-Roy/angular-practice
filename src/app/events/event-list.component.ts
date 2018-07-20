import { Component } from '@angular/core'
import { EventService } from './event-service'

@Component({
  selector: 'events-list',
  templateUrl: './event-list.component.html',
  styles: [`
    th, td { font-size: 16px; padding:5px 10px;}
  `]
})
export class EventsListComponent {
  events:any
  constructor(private eventService:EventService) {

  }
  ngOnInit() {
    this.events = this.eventService.getEvents()
  }


}
