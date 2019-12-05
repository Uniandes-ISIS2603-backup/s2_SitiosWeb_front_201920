import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { ProjectAddHardwareComponent } from './project-add-hardware.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ProjectService} from '../project.service';
import {Project} from '../project';

describe('ProjectAddHardwareComponent', () => {
  let component: ProjectAddHardwareComponent;
    let fixture: ComponentFixture<ProjectAddHardwareComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                ProjectService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectAddHardwareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});