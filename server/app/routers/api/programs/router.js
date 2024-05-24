const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse } = require("../../../controllers/programActions");

// Route to get a list of items
router.get("/", browse);

// Complete path is: /api/programs/:id
/* ************************************************************************* */

module.exports = router;
