const router = require("express").Router();
const { Bookmark } = require("../models");
router.get("/", async (req, res) => {
  try {
    const dbFreqData = await Bookmark.findAll({
      where: {
        group: "regulars",
      },
    });
    const dbSchoolData = await Bookmark.findAll({
      where: {
        group: "school",
      },
    });
    const dbmoneyData = await Bookmark.findAll({
      where: {
        group: "money",
      },
    });
    const dbWebDevData = await Bookmark.findAll({
      where: {
        group: "webdev",
      },
    });
    const dbRandData = await Bookmark.findAll({
      where: {
        group: "random",
      },
    });
    const dbLifeData = await Bookmark.findAll({
      where: {
        group: "lifestuff",
      },
    });

    const freqData = dbFreqData.map((url) => url.get({ plain: true }));
    const schoolData = dbSchoolData.map((url) => url.get({ plain: true }));
    const moneyData = dbmoneyData.map((url) => url.get({ plain: true }));
    const webdevData = dbWebDevData.map((url) => url.get({ plain: true }));
    const randData = dbRandData.map((url) => url.get({ plain: true }));
    const lifeData = dbLifeData.map((url) => url.get({ plain: true }));
    res.render("home", {
      freqData,
      schoolData,
      moneyData,
      webdevData,
      randData,
      lifeData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/add", async (req, res) => {
  res.render("add");
});
router.get("/rand", async (req, res) => {
  res.render("rand");
});

router.post("/add", async (req, res) => {
  try {
    const addUrl = await Bookmark.create({
      group: req.body.grpEl,
      title: req.body.titleEl,
      url: req.body.urlEl,
    });
    res.status(200).json(addUrl);
  } catch (err) {
    console.log(err);
    res.status(501).json(err);
  }
});
module.exports = router;
