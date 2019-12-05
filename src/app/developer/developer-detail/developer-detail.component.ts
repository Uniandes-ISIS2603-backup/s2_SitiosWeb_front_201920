import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DeveloperService } from '../developer.service';
import { DeveloperDetail } from '../developer-detail';
import { Project } from '../../project/project';
import { ProjectService } from '../../project/project.service';

@Component({
    selector: 'app-developer-detail',
    templateUrl: './developer-detail.component.html',
    styleUrls: ['./developer-detail.component.css']
})
export class DeveloperDetailComponent implements OnInit {

    /**
    * The developer
    */
    developerDetail: DeveloperDetail;

    /**
    * Class loader
    */
    loader: any;

    /**
     * Projects lead by thi developer
     */
    leadProjects: Project[]=[];

    /**
     * Projects in the app
     */
    projects:Project[];
    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param developerService The developer's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private developerService: DeveloperService,
        private projectService: ProjectService
    ) { }

    /**
    * El id del developer que viene en el path get .../developers/developer_id
    */
    developer_id: number;

    /**
     * Boolean si es la info. usuario
     */
    info: boolean;

    /**
    * The method which obtains the developer whose details we want to show
    */
    getDeveloperDetail(): void {
        this.developerService.getDeveloperDetail(this.developer_id)
            .subscribe(developerDetail => {
                this.developerDetail = developerDetail
            });
        if(localStorage.getItem('role') == 'Developer' && this.developerDetail.login == localStorage.getItem('login')){
            this.info = true;
        }
        console.log(this.info);
    }

    /**
     * Method to be executed once this component is loads
     * @param params default parameter of method
     */
    onLoad(params) {
        this.developer_id = parseInt(params['id']);
        this.developerDetail = new DeveloperDetail();
        this.leadProjects=[];
        this.getProjects();
        this.getDeveloperDetail();
    }


    getProjects():void{
        this.projectService.getProjects().subscribe(
             pro =>{this.projects = pro
            this.filterProjects(pro)
        });
    }

    
    /**
     * Filters projects according if they have leader
     */
    filterProjects(projects: Project[]):void{
        /*
        for(let i=0;i<projects.length;i++){
            if(projects[i].leader === this.developerDetail){
                this.leadProjects.push(d);
            }
        }
        */
       console.log("tamano projects " +this.projects.length);
       let i=0;
       let j=0;
        for(let d of this.projects){
            j++;
            if(d.leader.id==this.developer_id){
               
                console.log("lead antes: " +this.leadProjects.length);
                this.leadProjects.push(d);
                console.log("lead despues: " +this.leadProjects.length);

                i++;
               console.log("Tam i: " + i);
            }
        }
        console.log("tam j: " + j);
        console.log("tamano lead: " + this.leadProjects.length);
    }


    /**
     * Method to be executed automatically once this component is initialized.
     */
    ngOnInit() {
        this.info = false;
       // this.getProjects();
        this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    }

    /**
     * Method to be execuuted automatically once this component is destroyed.
     */
    ngOnDestroy() {
        this.loader.unsubscribe();
    }
}
