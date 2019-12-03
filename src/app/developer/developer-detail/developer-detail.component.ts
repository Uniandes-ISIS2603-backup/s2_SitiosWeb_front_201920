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

  /**
   * Constructor of this DeveloperDetailComponent
   * @param developerService DeveloperService class that handles HTTP methods post, put, delete, get
   * @param route route of the URL
   */
  constructor(
    private developerService: DeveloperService,
    private route: ActivatedRoute
  ) { }

  /**
   * DeveloperDetail attribute of this component
   */
  developerDetail: DeveloperDetail;

  /**
   * id of the developer as an input from html view
   */
  developerid: number;

  /**
   * Message that says if developer is a leader
   */
  leader: string;

  /**
   * Class loader
   */
  loader: any;

  /**
   * Method that gets the detail of a developer from its id
   */
  getDeveloperDetail(): void {

    this.developerService.getDeveloperDetail(this.developerid).subscribe
    (value => { this.developerDetail = value } );

    if (this.developerDetail.leader == true)
      this.leader = "Es líder";
    if (this.developerDetail.leader == false)
      this.leader = "No es líder";
    
  }

  /**
   * Method to be executed once this component is loads
   * @param params default parameter of method
   */
  onLoad(params) {

    this.developerid = parseInt(params['id']);
    console.log(" en detail " + this.developerid);
    this.developerDetail = new DeveloperDetail();
    this.getDeveloperDetail();
  }
  
  /**
   * Method to be executed automatically once this component is initialized.
   */
  ngOnInit() {

    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  /**
   * Method to be execuuted automatically once this component is destroyed.
   */
  ngOnDestroy() {
    this.loader.unsubscribe();
  }
  
} 
    