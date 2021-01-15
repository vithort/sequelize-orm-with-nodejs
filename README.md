# DATABASES: Sequelize Basics

## Setup Database

Open MySQL Shell

```shell
$ mysql -u root
```

Inside MySQL Shell, create database, user and grant rights

```mysql-sql
show databases;
create database sampledb;
create user sampleuser1 identified by 'samplepass1';
grant all privileges on sampledb1.* to sampleuser1;
```

Install Sequelize and Connector

```npm
npm i sequelize mysql2 --save
```

Testar

```npm
node connect.js
```

### Operator Aliases

[Link](https://sequelize.org/v5/manual/querying.html)

Instalar

```npm
npm i express hbs --save
```

Executar Querys

```npm
node seed.js
```

Executar API

```npm
node run.js
```
