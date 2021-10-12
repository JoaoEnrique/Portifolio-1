window.onload = function(){
    var txtTitulo = 'João Enrique Barbosa Santos Alves';
    var txt1 = document.getElementById("titulo");
    
    var speed = 100;
    var cont = 0;

    function typeWriter () {
      if(cont < txtTitulo.length){
        txt1.innerHTML += "<u>" + txtTitulo.charAt(cont) + "</u>";
        cont++;
        setTimeout(typeWriter, speed);
       }else{
         cont = 0;
       }
      }

     typeWriter();
  };
  

