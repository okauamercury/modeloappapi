import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboardionic',
  templateUrl: './dashboardionic.page.html',
  styleUrls: ['./dashboardionic.page.scss'],
  standalone: false
})
export class DashboardionicPage implements OnInit {

  users: any[] = [];
  loading = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(event?: any) {
    this.userService.getUsers().subscribe({
      next: (data: any[]) => {
        this.users = data;
        this.loading = false;

        if (event) {
          event.target.complete(); // finaliza o refresher
        }
      },
      error: (err: any) => {
        console.error(err);
        this.loading = false;

        if (event) {
          event.target.complete(); // finaliza mesmo se der erro
        }
      }
    });
  }
}