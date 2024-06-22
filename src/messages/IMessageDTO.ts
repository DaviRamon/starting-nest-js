import { IsNotEmpty, IsString } from "class-validator";

export class IMessageDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
