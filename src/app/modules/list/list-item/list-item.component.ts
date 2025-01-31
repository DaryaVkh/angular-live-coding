import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClientRecord } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {

  @Input({required: true}) record!: ClientRecord;

}
