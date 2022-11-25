import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  Msg:string ="Hello From Parent" ;
  prop:string ="";
  constructor() { }
  @ViewChild(ChildComponent) childData:ChildComponent =new ChildComponent() ;
   ngOnInit(): void {
  }
  ngAfterViewInit()
  {
    this.childData.printMsg() ;
  }
  func()
  {
    // this.prop = event;
    alert("This is is alert to you") ;
  }

}
