import { Component,Input } from '@angular/core'
import {DurationPipe} from '../shared/duration.pipe'

@Component({
    selector:'session-list',
    templateUrl:'./session-list.component.html'
})

export class SessionListComponent {
@Input() sessions:any
}
