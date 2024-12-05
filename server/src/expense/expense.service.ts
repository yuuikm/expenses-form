import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './expense.entity';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
  ) {}

  async createExpense(data: Partial<Expense>): Promise<Expense> {
    const expense = this.expenseRepository.create(data);
    return this.expenseRepository.save(expense);
  }

  async findAll(): Promise<Expense[]> {
    return this.expenseRepository.find();
  }
}
