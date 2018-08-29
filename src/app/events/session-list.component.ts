import { Component,Input } from '@angular/core'
import {DurationPipe} from '../shared/duration.pipe'

@Component({
    selector:'session-list',
    templateUrl:'./session-list.component.html'
})

export class SessionListComponent {
@Input() sessions:any
  //@Input()sortby:any

  toggleVote(session:any)
  {
    /*if(this.userHasVoted(session)){
      this.voterService.deleteVoter(sessioon,"bradgreen")
    }
    else
    {
      this.voterService.addVoter(sessioon,"bradgreen")
    }*/

  }
  userHasVoted(session:any)
  {

  }
}
