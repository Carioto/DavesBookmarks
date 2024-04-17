const sequelize = require("../config/connection");
const seedBookmark = require("./bookmark");
require("dotenv").config();

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedBookmark();
};

seedAll();