import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string =""
  titleCover:string =""
  descriptionCover:string =""
  private id:string | null ="0"
  constructor(
    private route:ActivatedRoute
  ) 
  { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("Id")
      )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(arcticle => arcticle.Id == id)[0]

      this.titleCover = result.title
      this.descriptionCover = result.description
      this.photoCover = result.photo
    
  }

}
