import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  ref;
  task;
  uploadProgress;
  downloadURL;

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }

  upload(event) {
    this.afStorage.upload('/upload/to/this-path', event.target.files[0]);  
    // const randomId = Math.random().toString(36).substring(2);
    // this.ref = this.afStorage.ref(randomId);
    // this.task = this.ref.put(event.target.files[0]);
    // this.uploadProgress = this.task.percentageChanges();
    // this.downloadURL = this.task.downloadURL();
  }
}
