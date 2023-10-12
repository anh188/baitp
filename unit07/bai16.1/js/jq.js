$(document).ready(function()
{
    $("#images img").click(function()
    {
        var x=$(this).attr('src');
        $("#light-img").attr('src',x);
        $("#lightbox").fadeIn('fast');
    });
    $(window).keyup(function(e)
    {
        if(e.which==27)
        {
            $("#lightbox").fadeOut('fast');
        };
    });
});