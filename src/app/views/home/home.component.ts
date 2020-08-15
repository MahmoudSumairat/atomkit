import { StatesService } from './../../services/states.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private statesService: StatesService) {}

  ngOnInit(): void {}

  switchToExperience = () => {
    if (this.statesService.expState === 'continents') {
      this.statesService.expState = 'cities';
    } else {
      this.statesService.expState = 'continents';
    }
  };
}
