import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { StatesService } from '../../services/states.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private statesService: StatesService
  ) {}

  currentSlideIndex: number = 0;
  firstOfSlide: number = 0;
  lastOfSlide: number = 3;
  postsBySlide: number = 3;
  staticIndicator: number = 0;

  slideItems: any[] = [];

  ngOnInit(): void {
    this.dataService
      .getContinentsData()
      .pipe(
        map((data: []) => {
          return data.splice(0, 9);
        })
      )
      .subscribe((data) => {
        this.slideItems = data;
      });

    this.statesService.switchToExperience.subscribe(this.getSlidesData);

    this.statesService.currentOption.subscribe(this.getSlidesData);
  }

  updateCurrentSlideIndex = (index) => {
    this.currentSlideIndex = index;
    this.firstOfSlide = this.staticIndicator + index * this.postsBySlide;
    this.lastOfSlide = this.postsBySlide + index * this.postsBySlide;
  };

  getSlidesData = () => {
    const currentOptionIndex = this.statesService.currentOptIndex;
    const state = this.statesService.expState;
    console.log(state);
    if (state === 'cities') {
      this.dataService
        .getCitiesData()
        .pipe(
          map((data: []) => {
            return data.splice(currentOptionIndex, currentOptionIndex + 1 * 9);
          })
        )
        .subscribe((data) => {
          this.slideItems = data;
        });
    } else {
      this.dataService
        .getContinentsData()
        .pipe(
          map((data: []) => {
            return data.splice(currentOptionIndex, currentOptionIndex + 1 * 9);
          })
        )
        .subscribe((data) => {
          this.slideItems = data;
        });
    }
  };
}
