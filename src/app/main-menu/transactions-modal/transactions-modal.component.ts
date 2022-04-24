import { transaction } from './../../shared/transaction.model';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-modal',
  templateUrl: './transactions-modal.component.html',
  styleUrls: ['./transactions-modal.component.scss']
})
export class TransactionsModalComponent implements OnInit {

  constructor(private userService: UserService) { }

  transactions: transaction[] | null = null;

  ngOnInit(): void {

  }

}
