const sequelize = require("../config/connection");
const seedFrequent = require("./frequent");
const seedSchool = require("./school");
const seedWebDev = require('./webdev');
const seedMoney = require('./money')
const seedBookmark = require('./bookmark')
require("dotenv").config();

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedFrequent();
  await seedSchool();
  await seedWebDev();
  await seedMoney();
  await seedBookmark();
};

seedAll();
