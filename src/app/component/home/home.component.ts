import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
declare var $
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  submitted = false;
  colors = [];
  genders = [];
  count = 3;
  count1 = 2;
  downloadJsonHref: any;
  constructor(private formBuilder: FormBuilder, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.firstForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(500)]],
      colors: [''],
      info: ['', Validators.required],
      gender: ['']
    }),
      this.secondForm = this.formBuilder.group({
        name: ['', [Validators.required]],
      }),
      this.thirdForm = this.formBuilder.group({
        name: ['', [Validators.required]],
      });

    this.colors = this.getOrders();
    this.genders = this.getGenders();

  }

  get f() { return this.firstForm.controls; }
  get s() { return this.secondForm.controls; }
  get t() { return this.secondForm.controls; }
  getOrders() {
    return [
      { id: '1', name: 'Red' },
      { id: '2', name: 'Green' },
      { id: '3', name: 'Yellow' },
    ];
  }
  getGenders() {
    return [
      { id: '1', name: 'Male' },
      { id: '2', name: 'Female' },
    ];
  }
  onSubmit() {
    this.submitted = true;
    if (this.firstForm.valid) {
      alert("record Added Successfully");
      let data = this.firstForm.value;
      this.generateDownloadJsonUri(data);
      this.firstForm.reset();

    }
  }
  onSubmitColor() {
    if (this.secondForm.valid) {
      this.count++;
      let createObj;
      createObj = { id: this.count, name: this.secondForm.value.name };

      this.colors.push(createObj);
      alert("Color Addeded Successfully");
      $('#addColorModal').modal('hide');
      this.secondForm.reset();
    }
  }
  onSubmitGender() {
    if (this.thirdForm.valid) {
      this.count1++;
      let createObj;
      createObj = { id: this.count, name: this.thirdForm.value.name };

      this.genders.push(createObj);
      alert("Gender Addeded Successfully");
      $('#addGenderModal').modal('hide');
      this.thirdForm.reset();
    }
  }

  generateDownloadJsonUri(data) {
    var theJSON = JSON.stringify(data);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }
}