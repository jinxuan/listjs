/**
 * Created by jinxuanw on 8/15/15.
 */
var options = {
    valueNames: [ 'name', 'city' ]
};

var hackerList = new List('hacker-list', options);

$('.list > li').dblclick(function(){
        $('.container').append("av");
});