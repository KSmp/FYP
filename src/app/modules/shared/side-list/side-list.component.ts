import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Group } from '../../../interfaces/group.interface';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss']
})
export class SideListComponent implements OnInit {
  @Input() items: Group[]

  environment = environment

  constructor() { }

  ngOnInit(): void {}

}
