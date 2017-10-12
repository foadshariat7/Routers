import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IUser } from '../../user';
import { UserService } from '../user.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  

  userId;
  userName;

  userSubscription: Subscription;
  user: IUser = {id: 0, name: ''};

  allowEdit = false;
  saveChanges = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUser(+params['id']);
      });
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      });
    this.userId = this.user.id;
    this.userName = this.user.name;
  }

  onSave() {
    this.user.id = this.userId;
    this.user.name = this.userName;
    this.userService.updateUser(this.userId, this.user);
    this.saveChanges = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
    if(!this.allowEdit){
      return true;
    }
    if((this.userId !== this.user.id || this.userName !== this.user.name) && !this.saveChanges){
      return confirm('Do you want to navigate without saving?');
    }else {
      return true;
    }
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
