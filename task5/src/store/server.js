const Database = {
  blocks: [
    {
      name: "SPRING BOOT",
      img: "img/boot.svg",
      about:
        "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
    },
    {
      name: "SPRING FRAMEWORK",
      img: "img/framework.svg",
      about:
        "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more."
    },
    {
      name: "SPRING CLOUD DATA FLOW",
      img: "img/data-flow.svg",
      about:
        "An orchestration service for composable data microservice applications on modern runtimes."
    },
    {
      name: "SPRING CLOUD",
      img: "img/cloud.svg",
      about:
        "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices."
    },
    {
      name: "SPRING DATA",
      img: "img/springdata.png",
      about:
        "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond."
    },
    {
      name: "SPRING INTEGRATION",
      img: "img/integration.png",
      about:
        "Supports the well-known Enterprise Integration Patterns via lightweight messaging and declarative adapters."
    }
  ],

  users: [
    {
      login: "admin",
      password: "1234"
    },
    {
      login: "host",
      password: "host"
    },
    {
      login: "user",
      password: "user"
    }
  ]
};

export const doLogIn = (login, password) =>
  new Promise((resolve, reject) => {
    if (Database.users.find(item => item.login === login && item.password === password)) {
      return resolve(true);
    }
    return reject(false);
  });

export const getBlocks = () =>
  new Promise((resolve, reject) => {
    resolve(Database.blocks);
    reject(new Error());
  });