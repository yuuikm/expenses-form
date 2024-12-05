import { Controller, Post, Get, Body } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from './expense.entity';

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  async createExpense(@Body() expenseData: Partial<Expense>): Promise<Expense> {
    return this.expenseService.createExpense(expenseData);
  }

  @Get()
  async getAllExpenses(): Promise<Expense[]> {
    return this.expenseService.findAll();
  }
}
