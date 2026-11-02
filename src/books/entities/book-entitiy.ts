import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('books')
export class BookEntity {
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column({type: 'varchar', length: 64})
    name: String;

    @Column({type: 'varchar', length: 64})
    author: String;

    @Column({type: 'varchar'})
    isbn: String;

    @Column({type: 'int'})
    publishedYear: Number;

    @Column({type: 'boolean', default: true})
    isAvailable: String;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name:'deleted_at'})
    deletedAt: Date;
}



