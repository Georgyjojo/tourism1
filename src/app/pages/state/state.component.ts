import { Component } from '@angular/core';
import { NavComponent } from "../../ui/nav/nav.component";
import { CardComponent } from "../../ui/card/card.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-state',
  imports: [CardComponent],
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss'
})
export class StateComponent {

  constructor(public api:ApiService){}
  
  
}
