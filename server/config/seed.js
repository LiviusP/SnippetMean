/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
          title : "First Snippet",
          author : "Jhon Doe", 
          description : "This is a default snippet inserted just for test",
          code : "#include<iostream> ........."
      
      
    });
  });

