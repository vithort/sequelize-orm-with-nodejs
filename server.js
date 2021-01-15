const express = require('express');
const path = require('path');

const { Center, Season, Course } = require('./models');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, './views'));

app.get('/batchcode', async (req, res) => {
  try {
    const centers = await Center.findAll();
    const seasons = await Season.findAll();
    const courses = await Course.findAll();
    const years = [2016, 2017, 2018, 2019, 2020, 2021];
    res.render('batchcode', { centers, seasons, courses, years });
  } catch (error) {
    console.log(error);
  }
});
module.exports = {
  app,
};
