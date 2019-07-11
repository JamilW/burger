# burger

Burger MySQL Logger

* Deployment Link: https://eat-da-burger-logger.herokuapp.com/

### Initial Page

![INITIALPAGE.PNG](/public/assets/image/initialpage.png)

### Burger Types

![BURGERTYPE.PNG](/public/assets/image/burgertype.png)

### Devoured Burgers

![DEVOUREDBURGERS.PNG](/public/assets/image/devourburgers.png)

### App Setup


Created a GitHub repo called burger and cloned it to my computer.
Made a package.json file by running yarn init from the command line.
Installed the Express npm package: npm install express.
Created a server.js file.
Installed the Handlebars npm package: npm install express-handlebars.
Installed MySQL npm package: npm install mysql.

Required the following npm packages inside of the server.js file:


* express





#DB Setup


Inside my burger directory, created a folder named db.
In the db folder, created a file named schema.sql. Write SQL queries this file that do the following:



Created the burgers_db.
Switched to or used the burgers_db.
Created a burgers table with these fields:



* id: an auto incrementing int that serves as the primary key.

* burger_name: a string.

* devoured: a boolean.





Still in the db folder, created a seeds.sql file. In this file, wrote insert queries to populate the burgers table with at least three entries.
Ran the schema.sql and seeds.sql files into the mysql server from the command line
Then ran these SQL files.



Made sure I was in the db folder of your app.
Started MySQL command line tool and login: mysql -u root -p.
With the mysql> command line tool running, entered the command source schema.sql. This will run my schema file and all of the queries in it -- in other words, I created my database.
Now I inserted the entries I defined in seeds.sql by running the file: source seeds.sql.
Closed out of the MySQL command line tool: exit.



### Config Setup


Inside my burger directory, created a folder named config.
Created a connection.js file inside config directory.



Inside the connection.js file, setup the code to connect Node to MySQL.
Exported the connection.



Created an orm.js file inside config directory.



Imported (require) connection.js into orm.js

In the orm.js file, created the methods that will execute the necessary MySQL commands in the controllers. These are the methods I needed to use in order to retrieve and store data in my database.


selectAll()
insertOne()
updateOne()


Exported the ORM object in module.exports.



### Model setup



Inside your burger directory, created a folder named models.


In models, made a burger.js file.
Inside burger.js, import orm.js into burger.js

Also inside burger.js, created the code that will call the ORM functions using burger specific input for the ORM.
Exported at the end of the burger.js file.





### Controller setup


Inside my burger directory, created a folder named controllers.
In controllers, created the burgers_controller.js file.
Inside the burgers_controller.js file, imported the following:



Express
burger.js



Created the router for the app, and exported the router at the end of your file.



### View setup


Inside my burger directory, created a folder named views.



Created the index.handlebars file inside views directory.

Created the layouts directory inside views directory.


Created the main.handlebars file inside layouts directory.
Setup the main.handlebars file so it's able to be used by Handlebars.
Setup the index.handlebars to have the template that Handlebars can render onto.
Created a button in index.handlebars that will submit the user input into the database.
