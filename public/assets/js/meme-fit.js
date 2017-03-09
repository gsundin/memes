function set_body_height() {
    var wh = $(window).height();
    wh = (wh - (wh / 10)); // Make it 90% of window
    $('body').attr('style', 'height:' + wh + 'px;');
}

$(document).ready(function() {
    set_body_height();
    $(window).bind('resize', function() { set_body_height(); });
});
