import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Provider} from '../provider';
import {ProviderDetail} from '../provider-detail';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css']
})
export class ProviderDetailComponent implements OnInit {

  constructor(private providerService: ProviderService, private route: ActivatedRoute) { }

  providerDetail: ProviderDetail;

  provider_id: number;


  getProviderDetail(): void {
      //  this.providerService.getProviderDetail(this.provider_id).subscribe(providerDetail => {this.providerDetail = providerDetail});

    }

  ngOnInit() {
   this.provider_id = +this.route.snapshot.paramMap.get('id');
   
  //this.providerDetail = new ProviderDetail();
    this.getProviderDetail();
  }

}
