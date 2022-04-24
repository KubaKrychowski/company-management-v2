import { TransactionsModalComponent } from './transactions-modal/transactions-modal.component';
import { FirebaseService } from './../services/firebase.service';
import { transaction } from './../shared/transaction.model';
import { ProfileCreatorModalComponent } from './../home/profile-creator-modal/profile-creator-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FinanceService } from '../services/finance.service';
import { v4 } from 'uuid';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {
  balance: number = 0;

  transaction: transaction = {
    type: 'income',
    value: 10000,
    id: v4()
  }

  constructor(
    private financeService: FinanceService,
    public userService: UserService,
    private modalService: NgbModal,
    private firebaseService: FirebaseService) {
    this.balance = this.financeService.calculateTotalBalance();
  }


  ngOnInit(): void {

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx2 = document.getElementById('myChart2') as HTMLCanvasElement;
    const ctx3 = document.getElementById('myChart3') as HTMLCanvasElement;

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'],

        datasets: [{
          label: 'Income in USD',
          data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],

          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],

          borderWidth: 1
        },

        {
          label: 'Spending in USD',
          data: [15, 12, 2, 56, 22, 13, 12, 19, 7, 5, 1, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],

          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],

          borderWidth: 1
        }]
      },

      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // const myChart2 = new Chart(ctx2, {
    //   type: 'line',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],

    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });

    // const myChart3 = new Chart(ctx3, {
    //   type: 'line',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],

    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });
  }

  openProfileCreatorModal() {
    const modalRef = this.modalService.open(ProfileCreatorModalComponent, { size: 'xl' });
  }

  createTransaction() {
    this.firebaseService.createTransaction(this.transaction).subscribe(
      () => {
        if (this.userService.userProfile && this.transaction.id && this.userService.userProfile.id) {
          this.userService.userProfile.transactions.push(this.transaction.id);
          this.firebaseService.updateUserProfile(this.userService.userProfile, this.userService.userProfile.id);
        }
      }
    )
  }

  getTransaction() {
    if (this.userService.userProfile && this.transaction.id && this.userService.userProfile.id) {
      this.firebaseService.getTransaction(this.userService.userProfile?.transactions[0]).subscribe(res => console.log(res));
    }
  }

  openTransactionsModal() {
    this.modalService.open(TransactionsModalComponent, { size: 'xl' });
  }
}
