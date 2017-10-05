import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from '../user';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  users: IUser[] = [
    {id: 1, name: 'foad'},
    {id: 2, name: 'ali'},
    {id: 3, name: 'john'}
  ];

  selectedAccount: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(id: number) {
    this.router.navigate(['/accounts', id, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'paragraph1'});
  }
}
