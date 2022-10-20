const express = require("express");
const app = express();

const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const users = [
  { id:faker.datatype.uuid(), firstName: faker.name.firstName(),  lastName: faker.name.lastName(), phone:faker.phone.number(), email:faker.internet.email(), password:faker.internet.password() },
  { id:faker.datatype.uuid(),  firstName: faker.name.firstName(), lastName: faker.name.lastName(), phone:faker.phone.number(), email:faker.internet.email(), password:faker.internet.password() },
  { id:faker.datatype.uuid(), firstName: faker.name.firstName(),  lastName: faker.name.lastName(), phone:faker.phone.number(), email:faker.internet.email(), password:faker.internet.password() },
  { id:faker.datatype.uuid(), firstName: faker.name.firstName(), lastName: faker.name.lastName(), phone:faker.phone.number(), email:faker.internet.email(), password:faker.internet.password()  },
  { id:faker.datatype.uuid(), firstName: faker.name.firstName(), lastName: faker.name.lastName(), phone:faker.phone.number(), email:faker.internet.email(), password:faker.internet.password()  }
];


const empresa = [
  { id:faker.datatype.uuid(), companyName: faker.company.name(),  adress: faker.address.direction() },
  { id:faker.datatype.uuid(), companyName: faker.company.name(), adress: faker.address.direction() },
  { id:faker.datatype.uuid(), companyName: faker.company.name(),  adress: faker.address.direction() },
  { id:faker.datatype.uuid(), companyName: faker.company.name(), adress: faker.address.direction() },
  { id:faker.datatype.uuid(), companyName: faker.company.name(), adress: faker.address.direction() }
];


class User {
    constructor() {
      this.id = faker.datatype.uuid();
      this.firstName = faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.phone = faker.phone.number();
      this.email = faker.internet.email();
      this.password = faker.internet.password();

    }
  }


  class Company {
    constructor() {
      this.id = faker.datatype.uuid();
      this.companyName = faker.company.name();
      this.adress = faker.address.direction();
    }
  }





app.get("/api", (req, res) => {
  res.send("Esta es mi Api");
});

app.get("/api/users/new", (req, res) => {
    res.json(new User());
  });


  app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
  });

  app.get("/api/user/company", (req, res) => {
    res.json(new Company(), new User());
  });

















const server = app.listen(3001, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
