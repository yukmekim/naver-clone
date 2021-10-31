function setCookie( name, value, expiredays ) {

    let todayDate = new Date();

    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
}

function getCookie(name) { 
    let obj = name + "="; 
    let x = 0; 
    while ( x <= document.cookie.length ) { 

        let y = (x+obj.length); 

        if ( document.cookie.substring( x, y ) == obj ) { 
            if ((endOfCookie=document.cookie.indexOf( ";", y )) == -1 ) 
                endOfCookie = document.cookie.length;

            return unescape( document.cookie.substring( y, endOfCookie ) ); 
        } 

        x = document.cookie.indexOf( " ", x ) + 1; 
            
        if ( x == 0 ) break; 
    }

    return ""; 
}

function closeBanner(key) {

    setCookie('top-banner'+key, 'Y' , 3 );

    $("#top-banner"+key+"").hide();
}
  
$(function() {    
    if(getCookie("top-banner") !="Y"){
        $("#top-banner").show();
    }
});