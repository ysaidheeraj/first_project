import { Component } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  book = {
    name: '',
    author: '',
    date: '',
    comments: ''
  };
  onSubmit() {
    console.log('Form Submitted!', this.book);
  }
}
