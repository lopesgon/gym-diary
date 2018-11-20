import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { WORKOUTS } from '../../models/workout-list';

@Component({
  selector: 'core-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  @ViewChild('snav') sidenav: MatSidenav;

  mobileQuery: MediaQueryList;
  workouts: Workout[] = WORKOUTS;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    // init
  }

  ngOnDestroy() {
    // destroy
  }

  sidenavToggle() {
    this.sidenav.toggle();
  }

}
