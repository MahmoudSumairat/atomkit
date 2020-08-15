import { Component, OnInit } from '@angular/core';
import { StatesService } from '../../services/states.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private statesService: StatesService) {}

  options = ['africa', 'asia', 'europe', 'north america'];

  currentOptionIndex = 0;

  ngOnInit(): void {
    this.statesService.switchToExperience.subscribe((data) => {
      if (data === 'continents') {
        this.options = ['africa', 'asia', 'europe', 'north america'];
      } else {
        this.options = ['amsterdam', 'belgrade', 'tokyo', 'stockholm'];
      }
    });
  }

  updateCurrentOptionIndex = (index) => {
    this.currentOptionIndex = index;
    this.statesService.currentOptIndex = index;
  };
}
