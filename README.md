# ExpenseTracker

*An exercise for practice react* 

This application has the purpose of registering expenses and being able to visualize them according to the year selected as a filter. 

### Visualization takes place in two ways:

- **1st: From the graph**
> Which demonstrates which month the highest amount of spending is concentrated in the year, it basically adds up the money spent on all expenses for that year, in that month, and shows a visual representation of this, in which the month with the highest spending would have the bar completely filled, and the others filled in according to their percentage on that. The formula for this calculation is basically the following:

					`CurrentMonthExpenditure / MonthExpenditureWithHighestExpenditure`

- **2nd: From the list**

>It shows all expenses for the year, as well as the name of the object that was purchased, such as Rice, its price - "spent" - and the date it was created. The first expense created appears in 1st place in the list and the subsequent expenses below it.

![ET Visualization](https://github.com/Arthur-Gab/ExpenseTracker/assets/89430618/049428de-d88d-40e9-a570-1075066eb5cf)


### Creating Expenses

- Expenses are created using a simple form, which appears when you click on the "Add New Expense" button.

- With the form being displayed, all that remains is to fill in the data, the title, price and date and click on "Add Expense".

![ET Form](https://github.com/Arthur-Gab/ExpenseTracker/assets/89430618/a4aaeee5-d9c8-4eda-86dd-c50630745cd9)

