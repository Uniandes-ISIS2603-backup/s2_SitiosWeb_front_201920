import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';

import { RequesterService } from '../../requester/requester.service';
import { RequesterDetail } from '../../requester/requester-detail';
import { DeveloperService } from '../../developer/developer.service';
import { DeveloperDetail } from '../../developer/developer-detail';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private requesterService: RequesterService,
        private developerService: DeveloperService
    ) { }

    user: User;

    roles: String[];

    dev: DeveloperDetail;
    req: RequesterDetail;

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        var id:number;
        if(this.user.role == 'Developer'){
        this.developerService.getDeveloperDetail(this.user.login)
            .subscribe(developerDetail => {
                this.dev = developerDetail
            });
            console.log(this.dev.login);
            id = this.dev.id;
        }
        else if(this.user.role == 'Requester'){
        this.requesterService.getRequesterDetail(this.user.login)
            .subscribe(requesterDetail => {
                this.req = requesterDetail
            });
            console.log(this.req.login);   
            id = this.req.id;
        }
        
        if( (this.user.role == 'Developer' && this.dev == null) || 
            (this.user.role == 'Requester' && this.req == null)  ){
            this.toastrService.error("El usuario no existe", "Error no encontrado");
        }
        else {
            var unit: String = null;
            if(this.req != null)
                unit = this.req.unit.name;
            this.authService.login(this.user.role, this.user.login, unit, id);
            this.toastrService.success('Logged in');
        }
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrator', 'Developer', 'Requester'];
    }

}
