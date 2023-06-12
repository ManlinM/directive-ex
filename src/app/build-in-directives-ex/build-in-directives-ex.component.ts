import { Component } from '@angular/core';

@Component({
  selector: 'app-build-in-directives-ex',
  templateUrl: './build-in-directives-ex.component.html',
  styleUrls: ['./build-in-directives-ex.component.css']
})
export class BuildInDirectivesExComponent {
//create properties
msg3='Msg3';
addBorder = true;
showContent = true;
msgs =['Message1','Message2']

// for the ngIf condition to show the message
onShowContent(){
  
  this.showContent= false;
  this.msgs.push(this.msg3);
 
  console.log(this.msgs);
}



}
