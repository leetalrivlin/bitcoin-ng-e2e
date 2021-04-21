import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() moves: object[];
  @Input() isShowContact: boolean;

  ngOnInit(): void {
  }

}
