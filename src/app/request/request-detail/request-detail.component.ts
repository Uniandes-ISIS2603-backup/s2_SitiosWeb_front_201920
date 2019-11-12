import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Request} from '../request';
import {RequestDetail} from '../request-detail';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-detail'
 // templateUrl: './request-detail.component.html'
  //styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  constructor(private requestService: RequestService, private route: ActivatedRoute) { }

  requestDetail: RequestDetail;

  request_id: number;

  loader: any;

  getProviderDetail(): void {
      this.requestService.getRequest(this.request_id).subscribe(requestDetail => {this.requestDetail = requestDetail});
    }
/*
  ngOnInit() {
    this.provider_id = +this.route.snapshot.paramMap.get('id');
    this.providerDetail = new ProviderDetail();
    this.getProviderDetail();
  }
*/

onLoad(params) {
  this.request_id = parseInt(params['id']);
  this.requestDetail = new RequestDetail();
  this.getProviderDetail();
}
ngOnInit() {
  this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
}

ngOnDestroy() {
  this.loader.unsubscribe();
}

}
