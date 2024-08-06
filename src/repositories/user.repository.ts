import { injectable } from "tsyringe";
import Iuser from "../interfaces/user"
import User from "../models/user.model";
import { Order } from "../models/order.model";

@injectable()
export class UserReppository {
    async getAll(): Promise<User[]> {
        return User.findAll()
    }

    async getUserById(id: number): Promise<User | null> {
        return User.findByPk(id);
    }

    async createUser({ email, password,roleId }: Iuser): Promise<User> {
        return User.create({ email, password,roleId });
    }
    async deleteUser(id: number): Promise<void> {
        await User.destroy({ where: { id } });
    }

    async updateUser(id: number, user: Iuser): Promise<void> {
        await User.update(user, { where: { id } });
    }
    async getUserByEmail(email: string): Promise<User | null> {
        return User.findOne({ where: { email } });
    }

}