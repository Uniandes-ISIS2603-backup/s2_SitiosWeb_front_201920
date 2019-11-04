import { Component, OnInit } from '@angular/core';
import {Iteration} from "../iteration";
import {IterationService} from "../iteration.service";



@Component({
  selector: 'app-iteration-list',
  templateUrl: './iteration-list.component.html',
  styleUrls: ['./iteration-list.component.css']
})

export class IterationListComponent implements OnInit {

  constructor(private iterationService: IterationService) { }
  /**
     * The list of Iterations in the project
 */ 

iterations: Iteration[];

getIterations(){
  this.iterationService.getIterations().subscribe(iterations =>this.iterations = iterations);
}
  ngOnInit() {
    this.getIterations();
  }

}