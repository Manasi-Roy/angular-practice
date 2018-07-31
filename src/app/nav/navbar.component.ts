import { Component,Input } from '@angular/core'
import {EventService} from '../events/event-service'
import {FormControl,FormGroup,Validators} from '@angular/forms'


@Component({
  selector:'nav-bar',
  templateUrl:'./navbar.component.html'
})

export class NavbarComponent {
  searchTerm:string=""
  foundSession:any
constructor(private eventService: EventService){

}
  searchSession(searchTerm){

//this.eventService.searchSession()
  }

}
