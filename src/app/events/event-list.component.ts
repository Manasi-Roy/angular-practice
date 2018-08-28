import { Component } from '@angular/core'
import { EventService } from './event-service'

@Component({
  selector: 'events-list',
  templateUrl: `./event-list.component.html`,
  styles: [`
    th, td { font-size: 16px; padding:5px 10px;}
    a {cursor:pointer}
  `]
})
export class EventsListComponent {
  events:any
  addMode:boolean
  constructor(private eventService:EventService) {

  }
  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
  addSession()
  {
    this.addMode=true
  }
  saveNewSession(session:any){
    const nextId=Math.max .apply(null,this.events.session.map(s=>s.id))
    session.id=nextId+1
    this.events.session.push(session)
    this.eventService.updateSession(this.events)
    this.addMode=false
  }


}
