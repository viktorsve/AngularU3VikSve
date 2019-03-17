import { Component, OnInit, Input } from '@angular/core';

/**
* Component used for displaying error messages in a dialog window.
*/
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() errorModal: object;

  constructor() { }

  ngOnInit() {
  }
}
