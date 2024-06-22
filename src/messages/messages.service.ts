import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages = [
    {
      id: 1,
      nome: 'Davi ',
    },
    {
      id: 2,
      nome: 'Bruna',
    },
    {
      id: 3,
      nome: 'Betoven',
    },
    {
      id: 4,
      nome: 'Theodoro',
    },
    {
      id: 5,
      nome: 'Ariel',
    },
    {
      id: 6,
      nome: 'Kiwi',
    },
    {
      id: 7,
      nome: 'Jasmão',
    },
  ];

  findAll() {
    return this.messages;
  }
}
