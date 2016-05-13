
$(document).ready(function () {



   var name = $('#pseudo');

    name.change(function () {
        var $name = $('#pseudo').val().length;

        if ($name > 3) {
            name.addClass('green');
           
        } else {

            name.css({'background-color': 'red'});

        }
    });
    var mdp = $('#mdp');
    var mdpConfirm = $('#mdp-confirm');
    mdpConfirm.change(function () {
        var p = $('#mdp').val();
        var pC = $('#mdp-confirm').val();

        if (p === pC) {

            mdp.css({'background-color': 'green'});
            mdpConfirm.css({'background-color': 'green'});
        } else {
            
          
           
           alert("Passwords doesn't match");
                      
          
           // mdp.css({'background-color': 'red'});
            // mdpConfirm.css({'background-color': 'red'});
        }

    });
    var mail = $('#email');

    mail.change(function () {
        var mailV = $('#email').val();
        var match = mailV.search('@');
       var match2 = mailV.match(/@/g);
      


        if ((mailV == '') || (match <= 0)) {
            mail.addClass('red');
        } else if(match2.length > 1){
        mail.addClass('yallow');
}  else {
            mail.addClass('green');
        }

    }); 
   

});



$('#send').click(function(){
  var name =  $('#pseudo').val().length;
if(name > 3){
    alert ('done');
}else{
    alert('faild');
}
  
});
    
 $('#reset').click(function(){
     $('#form1').removeData();
    
 })  ; 
