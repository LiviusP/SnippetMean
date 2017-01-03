var express = require("express");
var bodyParser = require('body-parser');
var application = express();

application.use(bodyParser());

var comments = [
            {
                'user' : 'John',
                'text' : 'This is rude comment'
            },
            {
                'user' : 'James',
                'text' : 'This is nice comment'
            }
        ];


application.use(express.static("client"));
application.listen(process.env.PORT);

application.get('/comments', function(request , response){
  
   
   var content = JSON.stringify(comments);
   response.send(content);
  
  
  
});

application.post('/addComment' , function(request , response){
  
    var comment = {} ; 
    comment.text = request.body['text'];
    comment.user = request.body['user'];
    
    comments.push(comment);
  
});