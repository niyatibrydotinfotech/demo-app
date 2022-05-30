import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreatePostModalComponent } from 'src/app/shared/components/create-post-modal/create-post-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navItems = [
    {name:'Pricing', path: '/pricing'},
    {name:'Accounts', path: '/accounts'},
    {name:'Dashboard', path: '/dashboard'},
  ];
  isShowDropDown:boolean = false;
  createPostBtnClicked:boolean = false;
  bsModalRef: BsModalRef;

  constructor(private bsModalService: BsModalService) {}

  ngOnInit() {
  }

  postBtnClick(isBtnClick) {
    this.createPostBtnClicked = isBtnClick;
  }

  openPostCreateModal () {
    this.bsModalRef = this.bsModalService.show(CreatePostModalComponent, {
      class: 'modal-dialog modal-sm modal-dialog-centered post-modal',
      backdrop: true,
      ignoreBackdropClick: false
    });

  }

}
