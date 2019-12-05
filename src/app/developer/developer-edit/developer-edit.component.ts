import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DeveloperService} from '../developer.service';
import {DeveloperDetail} from '../developer-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-developer-edit',
    templateUrl: './developer-edit.component.html',
    styleUrls: ['./developer-edit.component.css']
})
export class DeveloperEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param developerService The developers' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private developerService: DeveloperService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The developer id as received from the parent component
    */
    @Input() developer: DeveloperDetail;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an developer
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new developer
    */
    @Output() update = new EventEmitter();

    /**
    * Updates the information of the developer
    */
    editDeveloper(): void {
        this.developerService.updateDeveloper(this.developer)
            .subscribe(() => {
                this.toastrService.success("The developer's information was updated", "Developer edition");
            });
        this.update.emit();
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
        if (this.developer) {
        }
    }

    /**
    * This function will be called when the user chooses another developer to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
