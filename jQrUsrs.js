


$(document).ready(function(){
   $('button').click(function(){
        
        var rawText=$('form').serialize();
        console.log(rawText);
        
        var fName=rawText.slice(rawText.indexOf("=")+1,rawText.indexOf("&"));
        fName= fName.replace("%20"," ");
        rawText= rawText.slice(rawText.indexOf("&")+1,rawText.length);
        console.log(fName);
        var lName=rawText.slice(rawText.indexOf("=")+1,rawText.indexOf("&"));
        lName= lName.replace("%20"," ");
        rawText= rawText.slice(rawText.indexOf("&")+1,rawText.length);
        console.log(lName);
        var eMail=rawText.slice(rawText.indexOf("=")+1,rawText.indexOf("&"));
        eMail= eMail.replace("%20"," ");
        eMail=eMail.replace("%40",'@');
        rawText= rawText.slice(rawText.indexOf("&")+1,rawText.length);
        console.log(eMail);
        var contact=rawText.slice(rawText.indexOf("=")+1,rawText.indexOf("%"));
        console.log(contact);
        $('#myTable').append('<tr><td>'+ fName+'</td><td>'+lName+'</td><td>'+eMail+'</td><td>'+contact+'</td></tr>');

    });
    $('input').click(function(){
        $(this).attr('value',"");
    });             
               
});
