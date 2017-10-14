import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit, OnDestroy {
  
  errorMessage: string;
  subscription: Subscription;
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data['message'];
    this.subscription = this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
