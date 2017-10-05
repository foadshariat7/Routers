import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IUser } from '../../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
 
  userSubscription: Subscription;
  user: IUser;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    // console.log(this.route);
    // this.user.id = this.route.snapshot.params['id'];
    // this.user.name = this.route.snapshot.params['name'];
    // this.userSubscription = this.route.params.subscribe(
    //   (params: Params) => {
    //     this.user.id = params['id'];
    //     this.user.name = params['name'];
    //   }
    // );
    this.user = this.userService.getUser(+this.route.snapshot.params['id']);
  }

  ngOnDestroy(): void {
    // this.userSubscription.unsubscribe();
  }

}
