import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

/**
 * The component for the list of developers in the SitiosWeb
 */
@Component({
    selector: 'app-developer-list',
    templateUrl: './developer-list.component.html', 
    styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param developerService The author's services provider
     */
    constructor(private developerService: DeveloperService) { }
    
    /**
     * The list of developers which belong to the BookStore
     */
    developers: Developer[];

    /**
     * Asks the service to update the list of developers
     */
    getDevelopers(): void {
        this.developerService.getDevelopers().subscribe(developers => this.developers = developers);
    }

    /**
     * This will initialize the component by retrieving the list of developers from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getDevelopers();
    }
}