import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeveloperService } from '../developer.service';
import { DeveloperDetail } from '../developer-detail';

@Component({
    selector: 'app-developer-detail',
    templateUrl: './developer-detail.component.html',
    styleUrls: ['./developer-detail.component.css']
})
export class DeveloperDetailComponent implements OnInit {

    /**
    * The developer
    */
    @Input() developerDetail: DeveloperDetail;
    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param developerService The developer's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private developerService: DeveloperService 
    ) { }

    
    

    /**
    * El id del developer que viene en el path get .../developers/developer_id
    */
    developer_id: number;
    /**
    * The method which obtains the developer whose details we want to show
    */
    getDeveloperDetail(): void {
        this.developerService.getDeveloperDetail(this.developer_id)
            .subscribe(developerDetail => {
                this.developerDetail = developerDetail
            });
    }

   
    /**
    * The method which initializes the component.
    * We need to create the developer so it is never considered as undefined
    */
    ngOnInit() {
        this.developer_id = +this.route.snapshot.paramMap.get('id');
        if (this.developer_id){
        this.developerDetail = new DeveloperDetail();
        this.getDeveloperDetail();
        }
    }
}
