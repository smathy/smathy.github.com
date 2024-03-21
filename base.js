import "/lib.js"

function add_titles() {
  $('img').each( function() {
    var o = $(this);
    if( ! o.attr('title') && o.attr('alt') ) o.attr('title', o.attr('alt') );
  });

  $('#tagcloud span').each( function() {
    var o = $(this);
    var c = o.attr('class').split(' ');
    c[0] = c[0].substr(0,1).toUpperCase() + c[0].substr(1)
    o.attr('title', c[0] + ", " + ( c[1] == "currently" ? "using" : "used" ) + " " + c[1]);
  });
}



$(function() {
  add_titles();
});
