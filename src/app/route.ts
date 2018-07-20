import { Routes } from '@angular/router'

import { EventsListComponent } from './events/event-list.component'
import { CreateEventComponent } from './events/create-event.component'

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]
