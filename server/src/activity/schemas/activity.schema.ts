import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class Activity extends Document {
  @Prop({required: true})
  type: string

  @Prop({required: true})
  duration: number

  @Prop({required: true})
  date: Date;

  @Prop({type: Types.ObjectId, ref: 'User', required: true})
  userId: Types.ObjectId
}

export const ActivitySchema = SchemaFactory.createForClass(Activity)