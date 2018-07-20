import { Routes } from '@angular/router'

import { EventsListComponent } from './events/event-list.component'
import { CreateEventComponent } from './events/create-event.component'
import { CreateSessionComponent } from './events/create-session.component'

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]
