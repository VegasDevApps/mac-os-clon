import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, filter, mergeMap, takeUntil } from 'rxjs';
import { StoreService } from './../../../shared/store/store.service';
import { WindowService } from './../../../shared/services/window.service';
import { DESKTOP } from 'src/app/shared/config/applications';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit, OnDestroy {
  
  onDestroy$ = new Subject();
  launchPadOpened = false;

  constructor(
    private storeService: StoreService,
    private windowService: WindowService
    ) {}

  ngOnInit(): void {
    this.storeService.activeApplication$.pipe(
      takeUntil(this.onDestroy$),
      filter(app => app !== DESKTOP),
      mergeMap(app => this.windowService.open(app))
    )
    .subscribe(_ => this.storeService.setActiveApplication());
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
