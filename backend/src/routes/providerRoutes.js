const express = require("express");
const router = express.Router();
const providerController = require("../controllers/providerController");

router.get("/provider", providerController.getAllProviders);
router.post("/provider", providerController.createProvider);
router.put("/provider/:id", providerController.updateProvider);
router.delete("/provider/:id", providerController.deleteProvider);

module.exports = router;
