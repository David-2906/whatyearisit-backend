var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    const actualYear = new Date().getFullYear();
    res.json( {year : actualYear})
})

module.exports = router;