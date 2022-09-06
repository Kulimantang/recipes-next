import { Ingredient } from "./Ingredient";

export interface Recipe{
    name: string;
    id: string;
    author: string;
    authorId?: string;
    imageUrl?: string;
    minutes?: number;
    instructions?: string;
    ingredients?: Ingredient[];
}