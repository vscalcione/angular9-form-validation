import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  userModal = new User();

  constructor() { }

  onSubmit() {
    alert('Form submitted successfully!!!\n CHeck the values on your browser console');
    console.table(this.userModal);
  }

}
