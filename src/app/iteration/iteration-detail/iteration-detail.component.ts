import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

import {IterationService} from '../iteration.service';
import {Iteration} from '../iteration';

@Component({
  selector: 'app-iteration-detail',
  templateUrl: './iteration-detail.component.html',
  styleUrls: ['./iteration-detail.component.css']
})
export class IterationDetailComponent implements OnInit {

  constructor(private iterationService:IterationService,
    private route: ActivatedRoute
  ) { }

  iterationDetail: Iteration;

  @Input() iterationId: number;

  loader: any;

  getIterationDetail(): void{
    this.iterationService.getIterationDetail(this.iterationId).subscribe(value => {this.iterationDetail = value});
  }

  onLoad(params){
    this.iterationId = parseInt(params['id']);
    console.log(" en el detail" + this.iterationId);
    this.iterationDetail = new Iteration();
    this.getIterationDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}