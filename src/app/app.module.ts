import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/event-list.component';
import { CreateEventComponent } from './events/create-event.component';
import { CreateSessionComponent } from './events/create-session.component';
import { EventService } from './events/event-service';
//import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './route';
import { SessionListComponent } from './events/session-list.component';
import {DurationPipe} from './shared/duration.pipe';
import {HttpClientModule} from '@angular/common/http'
import { UpvoteComponent } from './events/upvote.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent
    //NavbarComponent
  ],
  providers: [ EventService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

