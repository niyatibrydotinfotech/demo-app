import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.component.html',
  styleUrls: ['./create-post-modal.component.css']
})
export class CreatePostModalComponent implements OnInit {

  selectedNetwork = {
    'twitter' : false,
    'facebook' : false,
    'tiktok' : false,
    'instagram' : false
  }
  public postMessage = "";
  isEmojiPickerVisible: boolean;
  tmppostMessage = "";

  constructor(
    private modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalRef.hide();
  }

  selectSocialNetwork (ntwType: string) {
    this.selectedNetwork[ntwType] = !this.selectedNetwork[ntwType];
  }

  addEmoji(event) {
    this.isEmojiPickerVisible = false;
    let postEditor = document.querySelector('#postEditor');
    this.insertAtCursor(postEditor, event.emoji.native);
  }

  setEditorVal(msgString) {
    this.postMessage = msgString;
  }

  addHashtag() {
    this.tmppostMessage = this.postMessage;
    let postEditor = document.querySelector('#postEditor');
    this.insertAtCursor(postEditor, '#');
  }

  insertAtCursor(myField, myValue) {
    //IE support
    // if (document.selection) {
    //     myField.focus();
    //     var sel = document.selection.createRange();
    //     sel.text = myValue;
    // }
    // Microsoft Edge
    if(window.navigator.userAgent.indexOf("Edge") > -1) {
      var startPos = myField.selectionStart; 
      var endPos = myField.selectionEnd; 

      myField.value = myField.value.substring(0, startPos)+ myValue 
            + myField.value.substring(endPos, myField.value.length); 

      var pos = startPos + myValue.length;
      myField.focus();
      myField.setSelectionRange(pos, pos);
    }
    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
    } else {
        myField.value += myValue;
    }
  }
}
