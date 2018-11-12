const express = require('express');

const router = express.Router();

const subRoute = require('./subroutes');

const fs = require('fs');

const dir_client_images = "./public/images/clients";
const base64imageFile = "./public/images/images.json";

module.exports = () =>{
    router.get('/', (req, res, next) =>{

       
        const imageBase64Dict = JSON.parse(fs.readFileSync(base64imageFile));

        // console.log(imageBase64Dict);

        const files_in_logo_dir = fs.readdirSync(dir_client_images);

        var logos = [];
        // 
        files_in_logo_dir.forEach(function(entry) {
            var ext = entry.substr(entry.lastIndexOf('.') + 1).toLowerCase();
            if(ext == 'jpg' || ext == 'png'){
                logos.push(entry);
            }
        });

        logos.sort();

        const logoRows = genClientLogoRows(logos);


        return res.render('index', {
            title: 'Adrian Space',
            clientlogoRows: logoRows,
            imageBase64Dict: imageBase64Dict,
            // layout: 'layouts/layout'
          });

    });

    router.use('/sub', subRoute());

    return router;

};

function genClientLogoRows(logos){
    const rowLimit = 6;
    var rows = []

    for(var i = 0; i < logos.length; i = i + rowLimit){
        var end = i + rowLimit;
        if(end > logos.length){
            end = logos.length;
        }
        rows.push(logos.slice(i, end));
    }

    return rows;
}

