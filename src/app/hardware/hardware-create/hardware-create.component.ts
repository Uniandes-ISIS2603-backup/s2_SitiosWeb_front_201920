import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {HardwareService} from '../hardware.service';

import {Hardware} from '../hardware';

@Component({
    selector: 'app-hardware-create',
    templateUrl: './hardware-create.component.html',
    styleUrls: ['./hardware-create.component.css']
})
export class HardwareCreateComponent implements OnInit {

    constructor(
        private hardwareService: HardwareService,
        private toastrService: ToastrService
    ) {}

    hardware: Hardware;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    createHardware(): Hardware {
        this.hardwareService.createHardware(this.hardware)
            .subscribe((hardware) => {
                this.hardware = hardware;
                this.create.emit();
                this.toastrService.success("The hardware was created", "Hardware creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.hardware;
    }

    cancelCreation(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.hardware = new Hardware();
    }
}
