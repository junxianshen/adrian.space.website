const express = require('express');

const router = express.Router();

module.exports = () =>{
    router.get('/', (req, res, next) =>{

        return res.send('subroutes');
    });

    return router;

};

