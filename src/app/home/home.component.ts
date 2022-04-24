import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { transaction } from '../shared/transaction.model';
import { v4 } from 'uuid';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService,private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  createTransaction(){

  }
}
