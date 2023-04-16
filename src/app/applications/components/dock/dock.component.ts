import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TooltipOptions } from 'primeng/tooltip';
import { LAUNCHPAD } from 'src/app/shared/config/applications';
import { dockItems } from 'src/app/shared/config/dock-items';
import { StoreService } from 'src/app/shared/store/store.service';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DockComponent implements OnInit {

  @Output() launchpadOpened = new EventEmitter();
  dockItems: MenuItem[] = [];

  defaultToolTipOptions: TooltipOptions = {
    tooltipPosition: 'top',
    positionTop: -15,
    positionLeft: 15,
    showDelay: 1000
  };
 
  constructor(private storeService: StoreService){}

  ngOnInit(){
    this.dockItems = this.getDockItems();
  }

  getDockItems() {
    return dockItems.map(dockItem => {
      return {
        label: dockItem,
        icon: dockItem,
        tooltipOptions: {
          tooltipLabel: dockItem,
          ...this.defaultToolTipOptions
        },
        command: () => {
          if(dockItem === LAUNCHPAD){
            this.launchpadOpened.emit();
          }

          this.storeService.setActiveApplication(dockItem);
        }
      }
    });
  }

}
