import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public userName: string | null = '';

  contacts = [
    {
      name: 'Darlene Robertson',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 3,
      active: false,
      status: 'Active',
    },
    {
      name: 'Jane Cooper',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 1,
      active: false,
      status: 'Active',

    },
    {
      name: 'Cameron Williamson',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 0,
      active: false,
      status: '',

    },
    {
      name: 'Cameron Williamson',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 0,
      active: false
    },
    {
      name: 'Cameron Williamson',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 0,
      active: false
    },
    {
      name: 'Cameron Williamson',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 0,
      active: false
    },
    {
      name: 'Cameron Williamson',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 0,
      active: false
    },
    {
      name: 'Cameron Williamson',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 0,
      active: false
    },
    {
      name: 'Cameron Williamson',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 0,
      active: false
    },
    {
      name: 'Cameron Williamson',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 0,
      active: false
    },
    {
      name: 'Cameron Williamson',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 0,
      active: false
    },
    {
      name: 'Cameron Williamson',
      role: 'Head of Development',
      avatar: 'https://via.placeholder.com/40',
      unread: 0,
      active: false
    },
  ];
  selectedContact: any = null;
  messages: { text: String, sender: String, time: String }[] = [];
  newMessage = '';

  constructor(private authService: AuthService){}

  ngOnInit() {
    // Select the first contact by default
    if (this.contacts.length > 0) {
      this.selectContact(this.contacts[0])
    }
    this.userName = this.authService.getUserName()
  }

  selectContact(contact: any) {
    this.contacts.forEach(c => c.active = false);
    contact.active = true;
    this.selectedContact = contact;

    // Dummy data for messages
    this.messages = [
      { text: 'Hi there!', sender: 'them', time: '35 mins ago' },
      { text: 'Hello! How are you?', sender: 'you', time: '30 mins ago' }
    ];
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        sender: 'you',
        time: 'Just now'
      });
      this.newMessage = '';
    }
  }
}
