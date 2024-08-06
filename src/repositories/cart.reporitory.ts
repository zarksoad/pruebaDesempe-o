import { Cart } from "../models/cart.model";
import { injectable } from "tsyringe";
import Icart from "../interfaces/cart";

@injectable()
export class CartReppository {
    async create({ userId }: Icart): Promise<Cart> {
        return Cart.create({ userId });
    }
    
}