const { School } = require("../models");

const schoolData = [
  {
    id: "1",
    title: "Upenn Bootcamp",
    url: "https://idp.bootcampspot.com/ui/?requestId=8387fbcd-e820-43f4-ac80-f97511fc65ae",
  },
];
const seedschool = () => School.bulkCreate(schoolData);

module.exports = seedschool;