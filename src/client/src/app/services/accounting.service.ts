import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs";

import {Account} from '../models/Account';

@Injectable( )
export class AccountingService {
  domain: string = "http://localhost:3000/api";

  constructor(private http: HttpClient) {  }

  getAccounts(){
    return  this.http.get<Account[]>(`${this.domain}/accounts` )
              .map(res => res)
  }

  addAccount<Account>(newAccount:Account){
    return  this.http.post(`${this.domain}/accounts`,newAccount)
              .map(res=>res);
  }

  /* updateAccount(newAccount: Account){
    return this.http.put(`${this.domain}/accounts/${newAccount.id}`,newAccount)
              .map(res=>res);
  } */

  deleteAccount(id){
    return  this.http.delete(`${this.domain}/accounts/${id}`)
              .map(res=>res);
  }
}
