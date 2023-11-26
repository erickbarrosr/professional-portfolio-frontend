import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  @Input() sendButton!: string;

  contactForm!: FormGroup;

  constructor(
    private messagesService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.contactForm.get('name')!;
  }

  get lastName() {
    return this.contactForm.get('lastName')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get message() {
    return this.contactForm.get('message')!;
  }

  submit() {
    if (this.contactForm.invalid) {
      return;
    }
    console.log(this.contactForm);

    this.messagesService.add('Mensagem enviada com sucesso.');

    this.router.navigate(['/']);
  }
}
