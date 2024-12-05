import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateTime: string;

  @Column()
  author: string;

  @Column('decimal')
  sum: number;

  @Column()
  category: string;

  @Column()
  comment: string;
}
