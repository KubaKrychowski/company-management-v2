import { transaction } from './../shared/transaction.model';
import { Injectable } from '@angular/core';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  transactions: transaction[] = [
    {
      type: 'spending',
      value: -40365,
      id: v4()
    },

    {
      type: 'income',
      value: 608564,
      id: v4()
    },];

  constructor() { }

  calculateTotalBalance(): number {
    let balance: number = 0;

    this.transactions.forEach(transaction => {
      balance += transaction.value;
    });

    return balance;
  }

  calculateTotalIncome(): number {
    let totalIncome = 0;

    for(let transactionIndex = 0; transactionIndex < this.transactions.length; transactionIndex++){
      const transaction = this.transactions[transactionIndex];
      if(transaction.type === 'income'){
        totalIncome += transaction.value;
      }
    }
    return totalIncome;
  }
}
