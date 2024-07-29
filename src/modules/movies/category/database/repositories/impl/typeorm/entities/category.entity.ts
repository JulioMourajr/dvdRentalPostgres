import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    categoryId: number;

    @Column()
    name: string;
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    lastUpdate: Date;
}