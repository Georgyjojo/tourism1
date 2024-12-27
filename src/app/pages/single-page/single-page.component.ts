import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavComponent } from "../../ui/nav/nav.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-single-page',
  imports: [],
  templateUrl: './single-page.component.html',
  styleUrl: './single-page.component.scss'
})
export class SinglePageComponent {
  constructor(public activated:ActivatedRoute,public api:ApiService){}

   data:any;
  ngOnInit()
  {
      let id= this.activated.snapshot.paramMap.get('id');
      this.data=this.api.getstatebyID(id);
  }

}
