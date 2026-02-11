import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.page.html',
  styleUrls: ['./produtos-list.page.scss'],
  standalone: false,
})
export class ProdutosPage implements OnInit {
  produtos:any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
