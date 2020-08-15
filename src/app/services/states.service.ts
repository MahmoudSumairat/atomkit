import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  constructor() {}
  switchToExperience: Subject<string> = new Subject();
  currentOption: Subject<number> = new Subject();
  private experienceState: 'cities' | 'continents' = 'continents';
  private currentOptionIndex: number = 0;

  updateExperienceState = (state: 'cities' | 'continents') => {
    this.switchToExperience.next(state);
    this.experienceState = state;
  };

  set expState(state: 'cities' | 'continents') {
    console.log('state : ', state);
    this.experienceState = state;
    this.switchToExperience.next(state);
  }

  get expState() {
    return this.experienceState;
  }

  set currentOptIndex(index: number) {
    this.currentOptionIndex = index;
    this.currentOption.next(index);
  }

  get currentOptIndex() {
    return this.currentOptionIndex;
  }
}
