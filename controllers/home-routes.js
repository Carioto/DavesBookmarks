const router = require("express").Router();
const { Frequent, School, Money, WebDev } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbFreqData = await Frequent.findAll({});
    const dbSchoolData = await School.findAll({});
    const dbmoneyData = await Money.findAll({});
    const dbWebDevData = await WebDev.findAll({});

    const freqData = dbFreqData.map((url) => url.get({ plain: true }));
    const schoolData = dbSchoolData.map((url) => url.get({ plain: true }));
    const moneyData = dbmoneyData.map((url) => url.get({ plain: true }));
    const webdevData = dbWebDevData.map((url) => url.get({ plain: true }));
    res.render("home", {
      freqData, schoolData, moneyData, webdevData
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
