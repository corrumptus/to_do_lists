This is a [Java](https://www.java.com) [Spring-Boot](https://spring.io), [vite](https://vitejs.dev) [React.js](https://react.dev) and [MySQL database](https://www.mysql.com) application for todo lists.

## Getting Started

First run your MySQL SGBD with a `todolist` database created.

If you don't have a `todolist` database created, please use the `src\main\resources\db\creatingDB.sql` file to create the database and the tables.

If you have a `todolist` database created, make sure that the tables in the database are equals to the structure of the tables in the `src\main\resources\db\creatingDB.sql` file. If they aren't, use the `src\main\resources\db\creatingDB.sql` file to recreate the tables.

By default, the database are required to be running on `localhost:3306` with username as `root` and blank password. To change this configurations, go to `src\main\resources\application.properties` file.

Second run the Java Spring-Boot back-end with the command `mvn spring-boot:run` the `to_do_lists` root.

Third run the vite React.js front-end with the following command `cd front; npm run dev` and go to the specified `local` created by vite(by default is `http://localhost:5173/`) with your browser.