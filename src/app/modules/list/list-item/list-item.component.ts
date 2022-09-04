import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Record} from '../../../interfaces/record';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {

  @Input() record!: Record;

  constructor() { }

  ngOnInit(): void {
  }

}
