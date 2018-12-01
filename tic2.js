$(document).ready(function (){
    var $submit = $('.submit');
    $submit.on('click', function(){

        var $text1 = $('#text1').val();
        var $text2 = $('#text2').val(); 

        //Set it so it can be used in another JS page
        window.localStorage.setItem('text1', $text1);
        window.localStorage.setItem('text2', $text2);
        
    });

})
