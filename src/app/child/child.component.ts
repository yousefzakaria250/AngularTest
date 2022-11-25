import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() parentData: any;
  @Input('parentData') DataFromParent: any;
  @Output()DataParentChanged =  new EventEmitter() ;
  constructor() {
    

   }

  ngOnInit(): void {
  }

  DataFomChildToParent()
  {
    // this.DataParentChanged.emit("This data from child to parent") ;

    this.DataParentChanged.emit() ;

  }

  printMsg()
  {
    console.log("Hello Fromchild");
    
  }

}
