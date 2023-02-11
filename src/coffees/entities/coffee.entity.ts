import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema() // this maps this class to a mongodb collection of the same name
export class Coffee extends Document{
    @Prop()
    name: string;
    @Prop()
    brand: string;
    @Prop([String]) // the passed arg is to define that this is an array of strings
    flavors: string[];
}

export const CoffeeSchema = SchemaFactory.createForClass(Coffee);
