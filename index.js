var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var qr = {
  EventName: "CodElementary 2",
  Eventposter: "1X5MR3uQlR0BDMCurSgwCsj1jqrv5yncB",
  Eventday: ["13", "13"],
  Eventmonth: ["OCT", "OCT"],
  Eventyear: ["2021", "2021"],
  Starttime: "16:00",
  Endtime: "18:00",
  Duration: "2hrs",
  Rating: "Unrated",
  Contestlink: "https://www.codechef.com/CELM2021",
  EventNamepc1: "OCT Long Challenge",
  Eventposterpc1: "1_r5WAJ2_4rQOeZMFiaweOHGOvDYautxT",
  Eventdaypc1: ["1", "11"],
  Eventmonthpc1: ["OCT", "OCT"],
  Eventyearpc1: ["2021", "2021"],
  Starttimepc1: "15:00",
  Endtimepc1: "15:00",
  Durationpc1: "10 days",
  Ratingpc1: "Rated for DIV 3",
  Contestlinkpc1:
    "https://www.codechef.com/OCT21?itm_medium=hpbanner&itm_campaign=OctLC",
  DIV1pc1:
    "https://www.codechef.com/rankings/OCT21A?filterBy=Institution%3DInstitute%20of%20Aeronautical%20Engineering%2C%20Hyderabad&order=asc&sortBy=rank",
  DIV2pc1:
    "https://www.codechef.com/rankings/OCT21B?filterBy=Institution%3DInstitute%20of%20Aeronautical%20Engineering%2C%20Hyderabad&order=asc&sortBy=rank",
  DIV3pc1:
    "https://www.codechef.com/rankings/OCT21C?filterBy=Institution%3DInstitute%20of%20Aeronautical%20Engineering%2C%20Hyderabad&order=asc&sortBy=rank",
  EventNamepc2: "Starters 14",
  Eventposterpc2: "1ckBjBSLrJmV0VquTkIJQ-sb9pz3lZK3_",
  Eventdaypc2: ["29", "29"],
  Eventmonthpc2: ["SEPT", "SEPT"],
  Eventyearpc2: ["2021", "2021"],
  Starttimepc2: "20:00",
  Endtimepc2: "23:00",
  Durationpc2: "3hrs",
  Ratingpc2: "Rated for DIV 3 only",
  Contestlinkpc2: "https://www.codechef.com/START14?itm_campaign=navmenu",
  DIV1pc2:
    "https://www.codechef.com/rankings/START14B?filterBy=Institution%3DInstitute%20of%20Aeronautical%20Engineering%2C%20Hyderabad&order=asc&sortBy=rank",
  DIV2pc2:
    "https://www.codechef.com/rankings/START14B?filterBy=Institution%3DInstitute%20of%20Aeronautical%20Engineering%2C%20Hyderabad&order=asc&sortBy=rank",
  DIV3pc2:
    "https://www.codechef.com/rankings/START14C?filterBy=Institution%3DInstitute%20of%20Aeronautical%20Engineering%2C%20Hyderabad&order=asc&sortBy=rank",
  EventNamepc3: "Starters 13",
  Eventposterpc3: "1ckBjBSLrJmV0VquTkIJQ-sb9pz3lZK3_",
  Eventdaypc3: ["26", "26"],
  Eventmonthpc3: ["SEPT", "SEPT"],
  Eventyearpc3: ["2021", "2021"],
  Starttimepc3: "16:00",
  Endtimepc3: "19:00",
  Durationpc3: "3hrs",
  Ratingpc3: "Rated for DIV 2 and DIV 3 only",
  Contestlinkpc3:
    "https://www.codechef.com/START13?itm_campaign=contest_listing",
  DIV1pc3:
    "https://www.codechef.com/rankings/START13B?filterBy=Institution%3DInstitute%20of%20Aeronautical%20Engineering%2C%20Hyderabad&order=asc&sortBy=rank",
  DIV2pc3:
    "https://www.codechef.com/rankings/START13B?filterBy=Institution%3DInstitute%20of%20Aeronautical%20Engineering%2C%20Hyderabad&order=asc&sortBy=rank",
  DIV3pc3:
    "https://www.codechef.com/rankings/START13C?filterBy=Institution%3DInstitute%20of%20Aeronautical%20Engineering%2C%20Hyderabad&order=asc&sortBy=rank",
};
app.set("view engine", "ejs");
app.use("/scss", express.static("scss"));
app.use("/images", express.static("images"));
app.get("/", function (req, res) {
  res.render("codechef-chapter", { qr });
});
app.post("/update", urlencodedParser, function (req, res) {
  qr = req.body;
  res.render("codechef-chapter", { qr: req.body });
});
app.get("/update", function (req, res) {
  res.render("form", { qr: req.query });
});
app.listen(3002);
