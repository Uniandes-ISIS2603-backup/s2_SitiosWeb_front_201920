import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { RequesterService } from "../requester.service";
import { Requester } from "../requester";
import { RequesterDetail } from "../requester-detail";

@Component({
  selector: "app-requester-detail",
  templateUrl: "./requester-detail.component.html",
  styleUrls: ["./requester-detail.component.css"]
})
export class RequesterDetailComponent implements OnInit {
  constructor(
    private requesterService: RequesterService,
    private route: ActivatedRoute
  ) {}

  requesterDetail: RequesterDetail;
  leader: string;

  @Input() requester_id: number;

  loader: any;

  getRequesterDetail(): void {
    this.requesterService.getRequesterDetail(this.requester_id).subscribe(o => {
      this.requesterDetail = o;
    });
    
  }

  onLoad(params) {
    this.requester_id = parseInt(params["id"]);
    this.requesterDetail = new RequesterDetail();
    this.getRequesterDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) =>
      this.onLoad(params)
    );
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}