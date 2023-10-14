import { Component } from '@angular/core';

export class Expense {
  constructor(public name: string, public amount: number) {}
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  expenses:Expense[] = []
  expenseName:string =''
  amount:number = 0
  totalAmount:number=0

  ngOnInit() {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      this.expenses = JSON.parse(storedExpenses);
      this.calculateTotalAmount();
    }
  }addExpense() {
    if (this.expenseName && this.amount > 0) {
      const newExpense: Expense = { name: this.expenseName, amount: this.amount };
      this.expenses.push(newExpense);
      this.calculateTotalAmount();

      localStorage.setItem('expenses', JSON.stringify(this.expenses));

      this.expenseName = '';
      this.amount = 0;
    }
  }

  calculateTotalAmount() {
    this.totalAmount = this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  editExpense(){

  }
  deleteExpense(){

  }
}
