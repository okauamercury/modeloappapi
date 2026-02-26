import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Chart } from 'chart.js/auto';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-dashboardionic',
  templateUrl: './dashboardionic.page.html',
  styleUrls: ['./dashboardionic.page.scss'],
  standalone: false
})
export class DashboardionicPage implements OnInit {

  @ViewChild('pieCanvas', { static: false }) pieCanvas!: ElementRef;
  users: any[] = [];
  loading = true;

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit() {
  //   this.loadUsers();
  // }

  @Component({
    selector: 'app-dashboardionic',
    templateUrl: './dashboardionic.page.html',
    styleUrls: ['./dashboardionic.page.scss'],
  })

  ngAfterViewInit() {
    this.loadChart();
  }

  loadChart() {


    this.userService.getUsers({ requisicao: 'dashboard' }).subscribe(
      (res: any) => {
        if (res.success) {
          this.users = res.data;
        }
      }
    );

    this.userService.operacao({ requisicao: 'dashboard' }).subscribe((res: any) => {
      const labels = res.map((user: any) => user.name);
      const values = res.map((user: any) => user.posts.length);

      new Chart(this.pieCanvas.nativeElement, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: values,
            backgroundColor: [
              '#4CAF50',
              '#F44336',
              '#2196F3',
              '#FFC107'
            ]
          }]
        }
      });

    });
  }

  loadUsers(event?: any) {
    this.loading = true;

    this.userService.operacao({ requisicao: 'dashboard' }).subscribe({
      next: (res: any) => {
        console.log('RESPOSTA:', res);
        this.users = res;
        this.loading = false;
      }
    });
  }
}

function getUsers(params: any, any: any) {
  throw new Error('Function not implemented.');
}

