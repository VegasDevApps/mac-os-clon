import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  menuItems = [
    {
      label: 'Finder',
      className: 'menubar-root'
    },
    {
      label: 'File'
    },
    {
      label: 'Edit'
    },
    {
      label: 'View'
    },
    {
      label: 'Go'
    },
    {
      label: 'Finder'
    },
    {
      label: 'Window'
    },
    {
      label: 'Help'
    },
  ];

}
