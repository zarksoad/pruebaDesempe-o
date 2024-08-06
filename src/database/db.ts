import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import User from "../models/user.model";
import { Role } from "../models/role.model";
import { Cart } from "../models/cart.model";
import { Product } from "../models/product.model";
import { ProductCart } from "../models/productCart";
import { Order } from "../models/order.model";


dotenv.config();

const sequelize: Sequelize = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "mysql",
    models: [User, Role, Product, Cart, ProductCart,Order],
});

export default sequelize; 
