import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {
    return [
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
        nome: 'Theodoro ',
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
  }
}
