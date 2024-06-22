import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { IMessage } from './IMessage';
import { IMessageDTO } from './IMessageDTO';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(+params.id).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }

  @Post()
  create(@Body() messageDTO: IMessageDTO) {
    return this.messagesService.create(messageDTO);
  }

  @Put(':id')
  update(@Param() params, @Body() message: IMessage) {
    return this.messagesService.update(+params.id, message);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.messagesService.delete(+params.id);
  }
}
