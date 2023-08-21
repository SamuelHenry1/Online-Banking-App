import {AfterViewInit, Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'online-banking-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountsComponent implements OnInit {


  loanAccounts: any;

  savingsAccounts: any;

  shareAccounts: any;


  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.data.subscribe((data: { accounts: any }) => {
      this.loanAccounts = data.accounts.loanAccounts;
      this.savingsAccounts = data.accounts.savingsAccounts;
      this.shareAccounts = data.accounts.shareAccounts;
    });
  }

  ngOnInit(): void {

  }
}
