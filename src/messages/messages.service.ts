import { Injectable } from '@nestjs/common';
import { IMessage } from './IMessage';

@Injectable()
export class MessagesService {
  private messages: IMessage[] = [
    {
      id: 1,
      nome: 'Betoven',
    },
    {
      id: 2,
      nome: 'Theodoro',
    },
    {
      id: 3,
      nome: 'Ariel',
    },
    {
      id: 4,
      nome: 'Kiwi',
    },
    {
      id: 5,
      nome: 'Jasmão',
    },
  ];

  findAll() {
    return this.messages;
  }

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }

  create(message: IMessage) {
    return this.messages.push(message);
  }

  update(id: number, message: IMessage) {
    const index = this.messages.findIndex((message: IMessage) => message.id === id);
    this.messages[index] = message;
    return message;
  }

  delete(id: number) {
    const index = this.messages.findIndex((message: IMessage) => message.id === id);
    delete this.messages[index];
    return "Name deleted with success";
  }
}
