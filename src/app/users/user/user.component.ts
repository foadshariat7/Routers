import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
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
              private router: Router,
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

    // this.userSubscription = this.route.params.subscribe(
    //   (params: Params) => {
    //     this.user = this.userService.getUser(+params['id']);
    //   });

    // this.user = this.userService.getUser(+this.route.snapshot.params['id']);
    this.userSubscription = this.route.data.subscribe(
      (data: Data) => {
        this.user = data['loadedUser'];
      }
    );
  }

  editUser() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
