import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {IterationService} from '../iteration.service';
import {Iteration} from '../iteration';


@Component({
  selector: 'app-iteration-create',
  templateUrl: './iteration-create.component.html',
  styleUrls: ['./iteration-create.component.css']
})
export class IterationCreateComponent implements OnInit {

  constructor(private iterationService: IterationService,
  private toastrService:ToastrService) { }

  iteration: Iteration;

  @Output() cancel = new EventEmitter();

  @Output() create = new EventEmitter();

  createIteration(): Iteration{
    this.iterationService.createIteration(this.iteration).subscribe((iteration) => {
      this.iteration = iteration;
      this.create.emit();
      this.toastrService.success("the iteration was created","iteration creation");
    },err =>{
      this.toastrService.error(err,"Error");
    }
    );
    return this.iteration;
  }
  cancelCreation(): void{
    this.cancel.emit();
  }

  ngOnInit() {
    this.iteration = new Iteration();
  }

}