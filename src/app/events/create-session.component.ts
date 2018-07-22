import { Component,OnInit,Output } from '@angular/core'
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { EventEmitter } from 'events';

@Component({
  selector:'create-session',
  templateUrl: './create-session.component.html'

})
export class CreateSessionComponent implements OnInit{
  @Output() saveNewSession=new EventEmitter()
  newSessionForm:FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract:FormControl
ngOnInit(){
  this.name=new FormControl('',Validators.required)
  this.presenter=new FormControl('',Validators.required)
  this.duration=new FormControl('',Validators.required)
  this.level=new FormControl('',Validators.required)
  this.abstract=new FormControl('',[Validators.required, Validators.maxLength(400),this.restrictedWords])
  this.newSessionForm=new FormGroup({name:this.name,
  presenter:this.presenter,
   duration:this.duration,
level:this.level,
abstract:this.abstract })
}
saveSession(formValues){
  let session:any
  console.log(formValues)
  this.saveNewSession.emit(session)
}
private restrictedWords(control:FormControl):{[key: string]:any}{
  return control.value.includes('foo')?{'restrictedWords':'foo'}
  :null

}
}
