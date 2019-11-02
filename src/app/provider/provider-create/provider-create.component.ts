import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: 'app-provider-create',
  templateUrl: './provider-create.component.html',
  styleUrls: ['./provider-create.component.css']
})
export class ProviderCreateComponent implements OnInit {

  providerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 

      this.providerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      address: ["", Validators.required]
    });

  }

  ngOnInit() {
  }

}