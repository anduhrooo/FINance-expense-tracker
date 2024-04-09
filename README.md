# FINance Expense Tracker

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)




https://finance-expense-tracker.onrender.com

## Description

This application aims to provide the user with a simple, streamlined way to visualize and track their finances. Users can log into their accounts securely and access data that is separated into several different categories and view their spending habits and where their money is going.

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[Collaborators](#collaborators)

[Questions](#questions)

[License](#license)

## Installation

1. clone the repository onto your local machine 
2. run postgresql to create a database (in the terminal, type the command 'psql -U postgres'. then run '\i db/schema.sql'. then '\q' to quit)
3. (optional) seed the database, by typing in 'npm run seed'
4. run 'node server.js' to start the server.

## Usage

Users can log in/create an account from the login page. 

![Expense Tracker](/assets/Screenshot%202024-04-08%20at%209.05.22 PM.png)

Upon successfully logging in, users will be taken to their expenses page. 

![Expense Tracker](/assets/Screenshot%202024-04-08%20at%209.06.02 PM.png)

On the right side of the page, users can add expense data that will populate the chart and create a list of all items. 

![Expense Tracker](/assets/Screenshot%202024-04-08%20at%209.06.37 PM.png)

## Collaborators

This project has been lovingly created and maintained by [Brian Cordova](https://github.com/BrianHCordova), [Keanu Ford](https://github.com/KeanuFord), [Bradley Wallace](https://github.com/brad-wall01) and [Andrew Yang](https://github.com/anduhrooo).

## License

N/A