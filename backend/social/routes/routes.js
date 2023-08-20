const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

const tenantProfileController = require("../controllers/tenant_profile.controller");
const userProfileController = require("../controllers/user_profile.controller");

app.use(bodyParser.json());

const tenantProfileRoutes = [
  {
    path: '/tenant_profile',
    route: tenantProfileController,
  },
];

const userProfileRoutes = [
  {
    path: '/user_profile',
    route: userProfileController,
  },
];

tenantProfileRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

userProfileRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;