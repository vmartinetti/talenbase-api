const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const postulantesController = require("../controllers/postulantes");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});
router.post("/login", authController.login);
/* TO DO: move this route to auth.js */
router.post('/register', authController.register);
/* TO DO: move this route to auth.js */
router.put('/activate/:id([0-9a-fA-F]{24})?', postulantesController.activate);

router.use(function(req, res, next) {
  console.log('error 404');
  res.status(404).send({success: false, message: 'No encontrado'});
});
//   router.post("/logout", controller.signout);

module.exports = router;
