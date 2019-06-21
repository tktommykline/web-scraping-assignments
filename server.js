const express = require("express");
const axios = require("axios");
const cheerio= require("cheerio");
const app = express();
const port = 3000;

app.get('/' ,(req,res) => res.send("hello"))

app.listen(port, () => console.log(`listening on ${port}`))

axios.get("http://digg.com/").then((res) => {
    const $ = cheerio.load(res.data)
    const stories = [];
    const tales = $(".digg-story");
    var story = {};
    $(tales).each(function(i,elem){
        story.title = $(this).find(".digg_story__title").text();
        story.description = $(this).find(".digg-story__description").text();
        story.imgSrc = $(this).find(".digg-story__image-img").attr("src");
        stories.push(story);
        story = {};
        console.log(stories);
    });
}).catch((err) =>{
    console.log(err)
});

var mainDiv = $("#mainDiv"); //this is already in the index.html
for(var i = 0; i < objectsArray; i++){
 var div = $("<div>");
 var h2 = $("<h2>");
 var object = objectsArray[i];
 $(h2).text(object.title)
 $(div).append($(h2));
 $(mainDiv).append($(div));
}
