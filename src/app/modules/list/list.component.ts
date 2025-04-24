import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ListComponent implements OnInit {

  constructor(private readonly clientService: ClientService) { }

  ngOnInit(): void {
  }

}
