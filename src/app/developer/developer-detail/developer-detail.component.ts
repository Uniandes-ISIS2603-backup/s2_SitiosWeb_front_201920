import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { DeveloperService } from "../developer.service";
import { Developer } from "../developer";
import { DeveloperDetail } from "../developer-detail";

@Component({
  selector: "app-developer-detail",
  templateUrl: "./developer-detail.component.html",
  styleUrls: ["./developer-detail.component.css"]
})
export class DeveloperDetailComponent implements OnInit {
  constructor(
    private developerService: DeveloperService,
    private route: ActivatedRoute
  ) {}

  developerDetail: DeveloperDetail;
  leader: string;

  @Input() developer_id: number;

  loader: any;

  getDeveloperDetail(): void {
    this.developerService.getDeveloperDetail(this.developer_id).subscribe(o => {
      this.developerDetail = o;
    });

    if(this.developerDetail.leader){
      let leader = "Es líder";
    }
    else{
      let leader = "No es líder";
    }
    
  }

  onLoad(params) {
    this.developer_id = parseInt(params["id"]);
    this.developerDetail = new DeveloperDetail();
    this.getDeveloperDetail();
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