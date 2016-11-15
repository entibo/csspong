// Simulates a subreddit environment

require("style!css!sass!./scss/pong.scss");
var $ = require("jquery")

var marked = require("marked");
var text = require("raw!./structure.md");
var md = marked(text);

$(document).ready(function(){
	$(".side .md").append(md);
});