
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nick-log', // Updated selector to match the new file name
  templateUrl: './nick-log.component.html', // Updated template URL to match the new file name
  styleUrls: ['./nick-log.component.css'] // Updated style URL to match the new file name
})
export class NickLogComponent { // Updated class name to match the new file name
  @Output() confirm = new EventEmitter<boolean>();
  
  onConfirm() {
    this.confirm.emit(true);
  }

  onCancel() {
    this.confirm.emit(false);
  }
}
