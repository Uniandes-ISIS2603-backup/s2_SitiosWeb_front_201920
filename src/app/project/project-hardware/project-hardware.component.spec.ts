import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {ProjectHardwareComponent} from './project-hardware.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ProjectService} from '../project.service';
import {Project} from '../project';
import {Hardware} from '../hardware';

describe('BookReviewsComponent', () => {
    let component: ProjectHardwareComponent;
    let fixture: ComponentFixture<ProjectHardwareComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, ProjectService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectHardwareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});