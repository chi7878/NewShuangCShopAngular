import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeApiService } from './../../home-api.service';


@Component({
  selector: 'app-check-order-second',
  templateUrl: './check-order-second.component.html',
  styleUrls: ['./check-order-second.component.scss']
})
export class CheckOrderSecondComponent implements OnInit {
  formData = new FormGroup({
    cardNumber: new FormControl('', [Validators.maxLength(19)]),
    cardCVC: new FormControl('', [Validators.maxLength(3)]),
    cardDate: new FormControl('', [Validators.maxLength(5)]),
    cardName: new FormControl('', [Validators.maxLength(50)]),
    name: new FormControl('', [Validators.maxLength(50)]),
    phone: new FormControl('', [Validators.maxLength(10)]),
    mail: new FormControl('', [Validators.maxLength(200)]),
    address: new FormControl('', [Validators.maxLength(200)]),
    message: new FormControl(''),
  });
  isLoaded:boolean = false;

  @Output() nextStep = new EventEmitter();
  @Output() prevStep = new EventEmitter();
  constructor(private homeApi: HomeApiService) { }

  ngOnInit(): void {
  }

  next() {
    const data = {
      message: this.formData.controls.message.value,
      user: {
        address: this.formData.controls.address.value,
        email: this.formData.controls.mail.value,
        name: this.formData.controls.name.value,
        tel: this.formData.controls.phone.value,
      }
    }
    this.isLoaded = true;
    this.homeApi.postAddOrder(data).subscribe(data => {
      if (data['success']) {
        this.nextStep.emit();
        this.isLoaded = false;
      }
    },error => {
      this.isLoaded = false;
    })
  }

  prev() {
    this.prevStep.emit();
  } 

  showFinish() {
    return this.formData.status !== 'VALID';
  }
}
