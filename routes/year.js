var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    const actualYear = new Date().getFullYear().toString();
    res.json( {year : actualYear})
})

module.exports = router;