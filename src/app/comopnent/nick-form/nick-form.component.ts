import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Nick } from '../../models/nick.module'; // Correct the path to 'nick.module'
@Component({
  selector: 'app-nick-form', // Updated selector
  templateUrl: './nick-form.component.html', // Updated template URL
  styleUrls: ['./nick-form.component.css'] // Updated style URL
})
export class NickFormComponent {

  @Input() user: any; /// chenge kel

  @Input() nick: Nick | null = null; // Use Nick model instead of User
  @Output() submitNick = new EventEmitter<Nick>(); // Emit Nick instead of User
  @Output() cancel = new EventEmitter<void>(); // Emit when canceled

  // Add the dropdown list array for "Assigned To"
  users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 7', 'User 8', 'User 9', 'User 10'];

  onSubmit(form: any) {
    if (this.nick) {
      this.submitNick.emit({ ...this.nick, ...form.value }); // Emit updated Nick
    } else {
      this.submitNick.emit(form.value); // Emit new Nick
    }
  }

  cancelForm() {
    this.cancel.emit(); // Emit cancel event
  }

}
