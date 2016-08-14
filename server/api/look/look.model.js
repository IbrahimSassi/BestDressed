'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema({
    image:String,
    linkUrl:String,
    title:String,
    description:String,
    tags:[{
        type:String
    }],
    _creator: {
        type:Schema.ObjectId,
        ref:'User'
    },
    email:String,
    createTime:{
        type:Date,
        'default':Data.now
    },
    views:{
        type:'number',
        'default':0
    },
    upVotes:{
        type:'number',
        'default':0
    }
});

module.exports = mongoose.model('Look',LookSchema);