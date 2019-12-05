import { Component, OnInit, Input, } from '@angular/core';
import { Hardware } from '../hardware';

@Component({
  selector: 'app-project-hardware',
  templateUrl: './project-hardware.component.html'
  })
export class ProjectHardwareComponent implements OnInit {
    @Input() projectHardware : Hardware;
    
    public isCollapsed = false;
    
    /**
     * The function called when a iteration is posted to update the iterations
     */
    updateHardware(hard:Hardware): void {
        this.projectHardware = hard;
    }
    
    ngOnInit(){
    }
}