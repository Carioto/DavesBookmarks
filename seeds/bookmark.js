const { Bookmark } = require("../models");

const bookmarkData = [
  {
    id: "1",
    group: "regulars",
    title: "Amazon",
    url: "https://www.amazon.com/ref=nav_logo",
  },
];
const seedBookmark = () => Bookmark.bulkCreate(bookmarkData);

module.exports = seedBookmark;
