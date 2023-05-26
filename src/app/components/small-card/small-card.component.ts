import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  smallPhotor:string =""
  @Input()
  smallTitle:string =""
  @Input()
  Id:string ="0"


  constructor() { }

  ngOnInit(): void {
  }

}
