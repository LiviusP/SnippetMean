'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
  author: String,
  description: String,
  code : String ,
  title : String , 
  active: Boolean,
  updated: Boolean
});

export default mongoose.model('Thing', ThingSchema);
