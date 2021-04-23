import { FullName } from './interfaces/FullName';
import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modalRef: BsModalRef | any;
  formObject: FullName = {
    firstName: '',
    lastName: ''
  };
  correctOrderText: string = '';
  reverseOrderText: string = '';
  selectedText: string = '';

  constructor(private modalService: BsModalService) {}
 
  openModal(modal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modal);
  }

  onSubmit() {
    this.selectedText = '';

    this.correctOrderText = this.formObject.firstName + ' ' + this.formObject.lastName;
    this.reverseOrderText = this.correctOrderText.split("").reverse().join("");
    this.formObject = {
      firstName: '',
      lastName: ''
    }

    this.modalRef.hide();
  }

  correctOrderTextSelected() {
    this.selectedText = this.correctOrderText;
  }

  reverseOrderTextSelected() {
    this.selectedText = this.reverseOrderText;
  }
}
