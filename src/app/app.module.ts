import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/event-list.component';
import { CreateEventComponent } from './events/create-event.component';
import { CreateSessionComponent } from './events/create-session.component';
import { EventService } from './events/event-service';
import { appRoutes } from './route'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    CreateEventComponent,
    CreateSessionComponent
  ],
  providers: [ EventService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

