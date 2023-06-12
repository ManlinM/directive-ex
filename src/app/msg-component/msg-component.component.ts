import { Component } from '@angular/core';

@Component({
  selector: 'app-msg-component',
  templateUrl: './msg-component.component.html',
  styles: [`
  .activated{
    background-color: white;
  }
  `]
})
export class MsgComponentComponent {
msgStatus: string = 'Activated';
msg ='';
getMsgStatus(){
  return this.msgStatus;
}
//constructor
constructor(){
  this.msgStatus=Math.random()>.5?'Activated':'Deactivated';
}

getColor(){
  return this.msgStatus === 'Activated'?'green':'red'
}

}
