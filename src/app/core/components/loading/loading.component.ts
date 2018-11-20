import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  private mode = 'indeterminate';
  private color = "pink";

  private show: boolean = false;
  private loading: Subscription;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loading = this.loadingService.loaderState.subscribe(
      (state: any) => {
        this.show = state.show;
      }
    )
  }

  ngOnDestroy() {
    this.loading.unsubscribe();
  }

}
