import { Injectable } from '@nestjs/common';
import { IMessage } from './IMessage';
import { IMessageDTO } from './IMessageDTO';

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
    return this.messages.filter(Boolean);
  }

  async findById(id: number) {
    const message = this.messages.find((message) => message?.id === id);
    if (!message) {
      throw Error(`Nome com o ID: '${id}' não foi encontrado!`);
    }
    return message;
  }

  create(messageDTO: IMessageDTO) {
    const id = this.messages.length + 1;
    const message: IMessage = {
      id,
      ...messageDTO,
    };

    this.messages.push(message);
    return message;
  }

  async update(id: number, messageDTO: IMessageDTO) {
    const index = this.messages.findIndex((message: IMessage) => message?.id === id);
    if (index < 0) {
      throw Error(`Nome com o ID: '${id}' não foi encontrado!`);
    }
    const message: IMessage = {
      id,
      ...messageDTO,
    };
    this.messages[index] = message;
    return message;
  }

  async delete(id: number) {
    const index = this.messages.findIndex((message: IMessage) => message?.id === id);
    console.log({ index });
    if (index < 0) {
      throw Error(`Nome com o ID: '${id}' não foi encontrado!`);
    }
    delete this.messages[index];
    return 'Name deleted with success';
  }
}
