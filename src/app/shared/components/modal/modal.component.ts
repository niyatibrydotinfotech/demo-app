import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() dataPostBtnClick: any;
  @Output() createPostBtnClick = new EventEmitter<boolean>();

  bsValue = new Date();

  constructor() { }

  ngOnInit() {
  }

  postBtnClick(value: boolean): void {
    this.createPostBtnClick.emit(value);
  }

}
