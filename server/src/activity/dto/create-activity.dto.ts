import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateActivityDto {
  @IsString()
  type: string;

  @IsNumber()
  duration: number;

  @IsDate()
  date: Date;

  @IsString()
  userId: string;
}