import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';
import { RequesterService } from '../../requester/requester.service';
import { Requester } from '../../requester/requester';
import { DeveloperService } from '../../developer/developer.service';
import { Developer } from '../../developer/developer';

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

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        if( (this.user.role === 'Developer' && this.developerService.getDeveloperDetail(this.user.login) == null )
        ||  (this.user.role === 'Requester' && this.requesterService.getRequesterDetail(this.user.login) == null ) ){
            this.toastrService.error("El usuario no existe", "Error no encontrado")
        }
        else{
            this.authService.login(this.user.role, this.user.login);
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
