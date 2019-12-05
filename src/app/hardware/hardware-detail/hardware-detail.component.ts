import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HardwareService } from '../hardware.service';
import { Hardware } from '../hardware';

@Component({
  selector: 'app-hardware-detail',
  templateUrl: './hardware-detail.component.html',
  styleUrls: ['./hardware-detail.component.css']
})
export class HardwareDetailComponent implements OnInit {

  constructor(
    private hardwareService: HardwareService,
    private route: ActivatedRoute
  ) { }

  hardwareDetail2: Hardware[];

  hardwareDetail:Hardware

  @Input() hardwareid: number;

  loader: any;

  getHardwareDetail(): void {

    this.hardwareService.getHardwareDetail(this.hardwareid)
      .subscribe(value => {
        this.hardwareDetail2 = value
      });
    
    this.hardwareDetail2.forEach(p => {if(p.id = this.hardwareid){this.hardwareDetail=p}});
  }

  onLoad(params) {

    this.hardwareid = parseInt(params['id']);
    console.log(" en detail " + this.hardwareid);
    this.hardwareDetail = new Hardware();
    this.getHardwareDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}