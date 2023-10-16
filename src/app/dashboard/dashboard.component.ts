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
  selectedExpense: Expense | null = null



  ngOnInit() {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      this.expenses = JSON.parse(storedExpenses);
      this.calculateTotalAmount();
    }
  }addExpense() {
    if (this.expenseName && this.amount > 0) {
      if(this.selectedExpense){
        this.selectedExpense.name = this.expenseName
        this.selectedExpense.amount = this.amount
        this.selectedExpense = null;
      }
      else{
      const newExpense: Expense = { name: this.expenseName, amount: this.amount };
      this.expenses.push(newExpense);}
      this.calculateTotalAmount();

      localStorage.setItem('expenses', JSON.stringify(this.expenses));

      this.expenseName = '';
      this.amount = 0;
    }
  }

  calculateTotalAmount() {
    this.totalAmount = this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  
editExpense(expense: Expense) {
  this.selectedExpense = expense;
  this.expenseName = expense.name;
  this.amount = expense.amount;
}
cancelEdit() {
  this.selectedExpense = null;
  this.expenseName = '';
  this.amount = 0;
}

  deleteExpense(){

  }
}
