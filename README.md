# SQLite database

- SQLite is an open source embedded database i.e. it doesn't require any server to communicate wit that database.
  You can directly create the database on your file system of your computer and directly communicate with it without the need of any server.
- We can create a react native application and store the data locally on our android device

# Installation

- https://www.sqlite.org/download.html
- download the precompiled binaries for windows (A bundle of command-line tools for managing SQLite database files, including the command-line shell program, the sqldiff.exe program, and the sqlite3_analyzer.exe program. 64-bit)
- Extract the downloaded zipped file, rename it to sqlite3, copy this folder into your C drive and paste the
  location (C:\sqlite3) in system environment variables path
- to test it, open the cmd and execute the command "sqlite3"

# SQLite commands

- .help (to get list of all the commands available in SQLite )
- .quit (to quit it in cmd)
- create a folder (let say db) in your system (let say in desktop) and open cmd here
  - sqlite3 ashishdb
- to view all the available databases in the current directory, execute ".databases"
- create table employees(id INT PRIMARY KEY); // to create a table in ashishdb
- to view all the available tables in ashishdb, execute ".tables"
- to view the schema of all the tables in ashishdb, execute ".schema"
- to view the schema of a particular tables in ashishdb, execute ".schema employees"

# Important queries:

- select \* from employees;
- select name,age from employees;
- select name from employees where empid=102;
- select name from employees order by name asc/desc;
- ALTER TABLE employees ADD COLUMN age INTEGER DEFAULT 0;

  - If your table is named employees and you want to add a new column named age of type INTEGER, the command would be above. When you add a new column to an existing table, SQLite will populate it with NULL values for existing rows unless a DEFAULT value is specified.

- UPDATE employees
  SET age = 32
  WHERE empid = 102; - To update the age of the employee with empid 102 to 32 in the employees table, above query

- select all the employees whose age is between 20 and 35

  - SELECT \* FROM employees WHERE age BETWEEN 20 AND 35;

- DELETE FROM employees WHERE empid=104; // deleting a row

# Ref:

- https://www.youtube.com/watch?v=BomCx0jbwPY&list=PLS1QulWo1RIa0-Cs2Qx6GFyiIVVVS9lCS&index=11 (setup)
- https://www.sqlitetutorial.net/
-
