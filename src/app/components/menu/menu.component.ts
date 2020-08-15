import { Component, OnInit } from '@angular/core';
import { StatesService } from '../../services/states.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private statesService: StatesService) {}

  options = [
    {
      title: 'africa',
    },
    {
      title: 'asia',
    },
    {
      title: 'europe',
    },
    {
      title: 'north america',
    },
  ];

  currentOptionIndex = 0;

  ngOnInit(): void {
    this.statesService.switchToExperience.subscribe((data) => {
      if (data === 'continents') {
        this.options = [
          {
            title: 'africa',
          },
          {
            title: 'asia',
          },
          {
            title: 'europe',
          },
          {
            title: 'north america',
          },
        ];
      } else {
        this.options = [
          {
            title: 'amsterdam',
          },
          {
            title: 'belgrade',
          },
          {
            title: 'tokyo',
          },
          {
            title: 'stockholm',
          },
        ];
      }
    });
  }

  updateCurrentOptionIndex = (index) => {
    this.currentOptionIndex = index;
    this.statesService.currentOptIndex = index;
  };
}
