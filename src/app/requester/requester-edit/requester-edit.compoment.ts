import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {RequesterService} from '../requester.service';
import {RequesterDetail} from '../requester-detail';
import {ToastrService} from 'ngx-toastr';
import { UnitService } from 'src/app/unit/unit.service';
import { Unit } from 'src/app/unit/unit';

@Component({
    selector: 'app-requester-edit',
    templateUrl: './requester-edit.component.html',
    styleUrls: ['./requester-edit.component.css']
})
export class RequesterEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param requesterService The requesters' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private requesterService: RequesterService,
        private toastrService: ToastrService,
        private unitService: UnitService,
    ) {}

  /**
   * Gets the units
   */
  getUnits(): void {
    this.unitService.getUnits()
      .subscribe(u => {
        this.units = u;

      });
  }

    /**
    * The requester id as received from the parent component
    */
    @Input() requester: RequesterDetail;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an requester
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new requester
    */
    @Output() update = new EventEmitter();

    /**
     * Units
     */
    units: Unit[];

    /**
    * Updates the information of the requester
    */
    editRequester(): void {
        this.requesterService.updateRequester(this.requester)
            .subscribe(() => {
                this.toastrService.success("The requester's information was updated", "Requester edition");
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
        if (this.requester) {
        }
    }

    /**
    * This function will be called when the user chooses another requester to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
