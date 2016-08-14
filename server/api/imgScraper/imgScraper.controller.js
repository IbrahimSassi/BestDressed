'use strict';

var scrapers = {};

scrapers['imgur'] = require('./scrapers/pinterest.js');

exports.scrape = function (req,res) {
    var url = req.body.url;
    var scraperToUse;

    if(url.indexOf('imgur')>-1){
        scraperToUse = 'imgur';
    }
    else{
        console.log('cannot locate scraper');
    }

    scrapers[scraperToUse].list(url,function(data){
        console.log('data from scraper', data);
        res.json(data);
        })
}