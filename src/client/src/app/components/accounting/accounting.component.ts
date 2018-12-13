import { Component, OnInit } from '@angular/core';

//service 

import {AccountingService} from '../../services/accounting.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {
  accounts:Account[];
  name:string;
  amount:number;
  constructor(private accountService : AccountingService ) {

    this.accountService.getAccounts()
      .subscribe(accounts =>{
        console.log(accounts);
      })

   }

   addAccount(event){
    event.preventDefault();
    const newAccount: Account = {
      name: this.name,
      amount: this.amount
    };

    this.accountService.addAccount(newAccount).subscribe(accounts =>{
      this.accounts.push(accounts)
    });
   }

  ngOnInit() {
  }

}
