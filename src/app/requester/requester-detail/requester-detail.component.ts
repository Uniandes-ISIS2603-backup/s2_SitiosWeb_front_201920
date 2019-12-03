import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequesterService } from '../requester.service';
import { RequesterDetail } from '../requester-detail';

@Component({
    selector: 'app-requester-detail',
    templateUrl: './requester-detail.component.html',
    styleUrls: ['./requester-detail.component.css']
})
export class RequesterDetailComponent implements OnInit {

    /**
    * The requester
    */
    @Input() requesterDetail: RequesterDetail;
    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param requesterService The requester's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private requesterService: RequesterService 
    ) { }

    
    

    /**
    * El id del requester que viene en el path get .../requesters/requester_id
    */
    requester_id: number;
    /**
    * The method which obtains the requester whose details we want to show
    */
    getRequesterDetail(): void {
        this.requesterService.getRequesterDetail(this.requester_id)
            .subscribe(requesterDetail => {
                this.requesterDetail = requesterDetail
            });
    }

   
    /**
    * The method which initializes the component.
    * We need to create the requester so it is never considered as undefined
    */
    ngOnInit() {
        this.requester_id = +this.route.snapshot.paramMap.get('id');
        if (this.requester_id){
        this.requesterDetail = new RequesterDetail();
        this.getRequesterDetail();
        }
    }
}
