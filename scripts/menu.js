$(document).ready(function(){
    var bntMenu = document.querySelector('.btn-menu');
    var menu = document.querySelector('.menu');

    $(bntMenu).hide();

    $(window).resize(function(){

        var windowWidth = $(window).width();
        if(windowWidth > 566){
            $(bntMenu).hide();
            $(menu).show();
        }

        if(windowWidth < 566){
            $(bntMenu).show();
            $(menu).hide();

            bntMenu.addEventListener('click',()=>{
                $(menu).toggle();
            });

        }

    });

    
});
