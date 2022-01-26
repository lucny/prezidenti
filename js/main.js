$(function(){
    $('#ustava p').hide();
    $('#ustava h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#38a'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h4').toggle(500);
    });

    var kviz = $('#kviz div.row');
    prezidenti.forEach(function(obj, idx){
        console.log(obj.photo);
        /*kviz.append('<div class="col-sm-4"><figure><img src="img/'
        +obj.photo+'" alt="'+obj.name+'"><figcaption>'
        +obj.name+'</figcaption></figure></div>');*/
        kviz.append('<div class="col-sm-4"><figure id="'+idx+'"><img src="img/prezident0.jpg" alt="Prezident"><figcaption>'
        +obj.name+'</figcaption></figure></div>');
    });

    /* Po kliknutí na img se náhodně mění fotky */
    var photo = $('#kviz img');
    photo.on('click',function(){
        var index = Math.floor(Math.random()*prezidenti.length);
        $(this).attr('src','img/'+prezidenti[index].photo)
               .attr('alt',prezidenti[index].name);
    });

    /* Po kliknutí na tlačítko Ověřit ohraničí červeně špatné 
       a zeleně správné odpovědi  */
    var check = $('#kviz .btn-success');
    check.on('click', function(){
        $('#kviz figure').each(function(idx,obj){
            var figcaption = $(obj).find('figcaption').text();
            var alt = $(obj).find('img').attr('alt');
            if (figcaption == alt) {
                $(obj).find('img').css({'border':'2px solid green'}); 
            } else {
                $(obj).find('img').css({'border':'2px solid red'});
            }
        });        
    });

    var odkazy = $('#odkazy ul');
    prezidenti.forEach(function(obj, idx){
        odkazy.append('<li><a href="'+obj.link+'" target="_blank">'
        +obj.name+'</a></li>');
    });

})