import {Component, OnInit} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  id: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.id = localStorage.getItem('id');
    console.log(this.id);
  }

  logout(): void {
      this.authService.logout()
  }

}
