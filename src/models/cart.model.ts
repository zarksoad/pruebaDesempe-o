import {
    AutoIncrement,
    Column,
    DataType,
    PrimaryKey,
    Table,
    Model,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";
import User from "./user.model";

@Table({
    tableName: "carts",
    timestamps: false,
})
export class Cart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId!: number;
    @BelongsTo(() => User)
    users!: User;

}