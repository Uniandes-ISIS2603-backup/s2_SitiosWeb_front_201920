import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Iteration} from '../iteration';
import {IterationService} from '../iteration.service';

@Component({
  selector: 'app-iteration-list',
  templateUrl: './iteration-list.component.html',
  styleUrls: ['./iteration-list.component.css']
})
export class IterationListComponent implements OnInit {

  constructor(private iterationService: IterationService, private router: Router) {}
  
  iterations: Iteration[];

  getIterations(): void{
    this.iterationService.getIterations().subscribe(iteracion => this.iterations = iteracion);
  }

  ngOnInit() {
    this.getIterations();
  }

}