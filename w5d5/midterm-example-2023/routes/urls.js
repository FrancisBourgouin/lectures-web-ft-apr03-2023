/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const urlsRouter = express.Router();

urlsRouter.get("/", (req, res) => {
  res.render("urls");
});
urlsRouter.get("/new", (req, res) => {
  res.render("urls_new");
});
urlsRouter.get("/:short_url", (req, res) => {
  // const url = {
  //   id:1,
  //   shortUrl:"wkodkwd",
  //   longUrl:"http://bob.com",
  //   userId:1
  // }

  getUrlById(req.params.short_url).then((url) => {
    const templateVars = { url };

    res.render("url", templateVars);
  });
});

module.exports = router;
