import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Hardware} from '../hardware';
import {HardwareService} from '../hardware.service';

@Component({
  selector: 'app-hardware-list',
  templateUrl: './hardware-list.component.html',
  styleUrls: ['./hardware-list.component.css']
})
export class HardwareListComponent implements OnInit {

  constructor(private hardwareService: HardwareService, private router: Router) { }

hardwares: Hardware[];

getHardwares(): void {
        this.hardwareService.getHardwares().subscribe(hardwaresN => this.hardwares = hardwaresN);
}

ngOnInit() {
        this.getHardwares();
}


}