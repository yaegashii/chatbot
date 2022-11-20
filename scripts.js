var messages = [],
  //lastUserMessage = "",
  botMessage = "",
  botName = 'Akasha',
  talking = true;


var user = prompt("Ingresa el nombre con el que te gustaría que te llame a lo largo de la consulta: ");
var cod, txts;
var userdata;
var greeting = RegExp("(HOLA|BUENOS|BUENAS|HI)");
var logicsArc = RegExp("(AKASHA)");
var espacios = RegExp ("(\s)");
var initialConst = RegExp("(QUE|QUÉ)");
var initialConstComp = RegExp("(AYUDA|OFRECEN|TIENE|TENEIS|USAN|POSEEN)");
var startToBuy = RegExp("(INTERESA|QUIERO|DESEAR|COMPRAR)");
var menu = RegExp("(PREGUNTAS|OPCIONES|OPERACIONES)");
var validationApp = RegExp("(SI$|POR|FAVOR|ESO|SÍ|VER|INVENTARIO)");
var revalidationApp = RegExp("(CORRECTO)");
var revalidationNotApp = RegExp("(NO*)");
var validationNotApp = RegExp("(NO|INCORRECTO|CORREGIR)");
var totalInventory = RegExp ("(PERSIANA|PAPEL DE COLGADURA|PISO LAMINADO|TOLDO|PISOS LAMINADOS)");
var address, name1, name2;

function logics(){
  lastUserMessage = document.getElementById("chatbox").value;
  lastUserMessage = lastUserMessage.toUpperCase();

  document.getElementById("chatbox").innerHTML = greeting.test(lastUserMessage.toUpperCase());

  if(greeting.test(lastUserMessage) == true){
    cod = 1;
    greet();
  }else{
    botMessage = "Los modales hacen al hombre";
  }
  if(cod == 1){
    //addText();
    //addText1();
    greet();
  }
}


function greet(){
  removeText();

  lastUserMessage = document.getElementById("chatbox").value;
  lastUserMessage = lastUserMessage.toUpperCase();

  document.getElementById("chatbox").innerHTML = logicsArc.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = initialConstComp.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = startToBuy.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = menu.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = validationApp.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = revalidationApp.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = revalidationApp.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = totalInventory.test(lastUserMessage.toUpperCase());

if(greeting.test(lastUserMessage) == true){
  botMessage = "Bienvenido 👋, me llamo <b>"+botName+" </b> y seré tu asistente virtual 🤖, ¿en que te puedo ayudar?<br></br> <b>"+botName+" </b> Aquí te muestro algunas de las opciones más frecuentes 👀: <br></br> <b>🤖 Akasha: </b> <p onclick = 'newFill1()' id = 'initialoptions'>1. ¿Qué servicio ofrecemos? 🤔</p><p onclick = 'newFill2()' id = 'initialoptions1' >2. ¿Dónde estamos ubicados? 🌎 </p></p><p onclick = 'newFill3()' id = 'initialoptions2' >3. ¿Quienes somos? 👤</p>" ;
  }else{
    if(logicsArc.test(lastUserMessage) == true){
    logicsArcs();
      }else{

        if(initialConstComp.test(lastUserMessage) == true){
        whatToOff();
        }else{

          if(validationApp.test(lastUserMessage) == true){
            whatToBuy();
              }else{
                if(startToBuy.test(lastUserMessage) == true && totalInventory.test(lastUserMessage) == true){
                  confirmWannaBuy();
                  }else{
                    if(startToBuy.test(lastUserMessage) == true){
                      whatToBuy();
                    }else{
                      if(totalInventory.test(lastUserMessage) == true){
                        confirmWannaBuy();
                      }else{
                        if(revalidationApp.test(lastUserMessage) == true){
                          confirmationData();
                        }else{
                          if(revalidationNotApp.test(lastUserMessage) == true){
                            confirmationData();
                          }else{
                            botMessage = "Disculpa, no te he entendido 😥.";
                          }
                        }
                      }
                    }
                }
        }
      }
    }
  }
}


function logicsArcs(){  

  document.getElementById("chatbox").innerHTML = initialConstComp.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = startToBuy.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = menu.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = validationApp.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = revalidationApp.test(lastUserMessage.toUpperCase());
  
  console.log(lastUserMessage);

  if(logicsArc.test(lastUserMessage) == true){
  removeText();
  botMessage = "Así es, <b>Akasha</b> es mi nombre y seré tu asistente virtual 🤖 el día de hoy <br></br> <b>"+botName+" </b> ¿En que te puedo ayudar? 🤔.";
  }else{
  
    if(initialConstComp.test(lastUserMessage) == true){
      whatToOff();
      }else{

      if(validationApp.test(lastUserMessage) == true ){
          whatToBuy();
        }else{
              botMessage = "Disculpa, no te he entendido 😥.";
            }
      }
    }
  }


function whatToOff(){
  removeText();

  document.getElementById("chatbox").innerHTML = initialConstComp.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = startToBuy.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = menu.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = validationApp.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = revalidationApp.test(lastUserMessage.toUpperCase());

  if(initialConstComp.test(lastUserMessage) == true){
    botMessage = "Se ofrece el servicio de decoración 🎈✨🎑 para todo hogar 🏡<br></br> <b>🤖 Akasha: </b> ¿Deseas ver lo que tenemos para ti?😉.";
    }else{

    if(validationApp.test(lastUserMessage) == true){
        whatToBuy();
      }else{
            botMessage = "Disculpa, no te he entendido 😥.";
          }
    }
  }




function whatToBuy(){

    botMessage = "Por el momento tenemos disposición de: <br></br> 1. Persianas 🪟 <br></br> 2. Papel de Colgadura 🧱 <br></br> 3. Pisos Laminados 🦺 <br></br> 4. Toldos 🏕️ <br></br> 5. <a href = https://decorcasapopayan.com/productos/trabajos-entregados/' target = '_blank'>Trabajos Entregados  </a>👷🏻👷🏼‍♂️👷🏾‍♀️<br></br> 6. <a href = 'https://decorcasapopayan.com/358-2/videos-institucionales/' target = '_blank'>Más Trabajos </a> 🚞";

    document.getElementById("chatbox").innerHTML = initialConstComp.test(lastUserMessage.toUpperCase());
    document.getElementById("chatbox").innerHTML = startToBuy.test(lastUserMessage.toUpperCase());
    document.getElementById("chatbox").innerHTML = menu.test(lastUserMessage.toUpperCase());
    document.getElementById("chatbox").innerHTML = validationApp.test(lastUserMessage.toUpperCase());
    document.getElementById("chatbox").innerHTML = revalidationApp.test(lastUserMessage.toUpperCase());
  


}


function confirmationData(){
  document.getElementById("chatbox").innerHTML = revalidationApp.test(lastUserMessage.toUpperCase());
  document.getElementById("chatbox").innerHTML = revalidationNotApp.test(lastUserMessage.toUpperCase());
  botMessage = "Tu nombre es: "+name1+" "+name2+" y tu dirección es: "+address+" <br></br> <b>🤖 Akasha: </b> ¿Si son correctos estos datos correctos? 🤔";
  if(revalidationApp.test(lastUserMessage) == true){
    botMessage = "EUREKA, tu pedido estará llegando mañana... QUÉDATE AL PENDIENTE 😊";
  }else{
    if(revalidationNotApp.test(lastUserMessage) == true){
      name1 = prompt("PRIMER NOMBRE");
      name2 = prompt("PRIMER APELLIDO");
      address = prompt("Ingresa la dirección a la cual irá el envío");
      botMessage = "Se han registrado o corregido los parámetros requeridos por: Nombre "+name1+" "+name2+" 😶‍🌫️ y dirección "+address+" 🗺️ <br></br> <b>🤖 Akasha: </b> ¿Si son correctos estos datos correctos? 🤔 (Escribe CORRECTOS para confirmar) 👾";
    }
  }

}
function confirmWannaBuy(){
  var confirmation = prompt("¿Estás seguro que deseas realizar una compra?");
  

    if(confirmation.toUpperCase() == "SI"){
      var politics = prompt("ESCRIBE ACEPTO PARA ACEPTAR LOS TÉRMINOS Y CONDICIONES DEL TRATAMIENTO DE DATOS:");
      if(politics.toUpperCase() == "ACEPTO" || politics.toUpperCase() == "ACEPTO " || politics.toUpperCase() == " ACEPTO" || politics.toUpperCase() == " ACEPTO "){
        cod = 1;
        confirmationData();
      }else{
        cod = 1;
      }

    } else{
      botMessage = "HMM";
      var err = 1;
    }
    if(err == 1){
      whatToBuy();
    }else{
      err = 0;
    }

}






//-----------STA CHA
function newEntry() {
  if (document.getElementById("chatbox").value != "") {

    lastUserMessage = document.getElementById("chatbox").value;
    messages.push("👤 <b>"+user+" :</b> "+lastUserMessage);

    logics();


    messages.push("🤖 <b>" + botName + ":</b> " + botMessage);

    //log del chat
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}



//----------OPT 1
function initialOptions(){
  if (document.getElementById("initialoptions").value != "") {

    lastUserMessage = document.getElementById("chatbox").value;
    messages.push("👤 <b>"+user+": </b>¿Qué servicio ofrecemos? 🤔");

    messages.push("🤖 <b>" + botName + ":</b> " + botMessage);

    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }

}


//----------OPT 2
function initialOptions1(){
  if (document.getElementById("initialoptions1").value != "") {

    lastUserMessage = document.getElementById("chatbox").value;
    messages.push( "👤 <b>"+user+": </b>¿Dónde estamos ubicados? 🌎");

    messages.push("🤖 <b>" + botName + ":</b> " + botMessage);

    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }

}

//----------OPT 3
function initialOptions2(){
  if (document.getElementById("initialoptions2").value != "") {

    lastUserMessage = document.getElementById("chatbox").value;
    messages.push( "👤 <b>"+user+": </b>¿Quienes somos? 👤");

    messages.push("🤖 <b>" + botName + ":</b> " + botMessage);

    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }

}


document.onkeypress = keyPress;

function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
    document.getElementById("chatbox").value = '';
  }
  if (key == 38) {
    //console.log('hi')
  }
}

function placeHolder() {
  //document.getElementById("chatbox").placeholder = "";
}



function newFill1(){

  botMessage = "Ofrecemos un servicio de decoración 🎈✨🎑 de habitaciones para tipo de hogares da clic aquí 👆 <a href = 'https://decorcasapopayan.com/' target = '_blank'>para más información</a> ";
  initialOptions();
  //console.log(botMessage);
  document.getElementById("introduction").innerHTML = "";
}

function newFill2(){

  botMessage = "Estamos ubicados en la <a href = 'https://www.google.com/maps/place/Cl.+8+Nte.+%2310-17,+Comuna+1,+Popay%C3%A1n,+Cauca/@2.4525617,-76.607497,17z/data=!3m1!4b1!4m5!3m4!1s0x8e300372957b6037:0x9e82b05027fbc5e7!8m2!3d2.4525563!4d-76.6053083' target = '_blank'>Calle 8 Norte #10 - 17 en el Barrio Santa Clara 🗺️</a>";
  initialOptions1();
  //console.log(botMessage);
  document.getElementById("introduction").innerHTML = "";
}
function newFill3(){

  botMessage = "Somos una empresa Caucana 👷‍♂️👷‍♀️👷 dedicada a la comercialización de persianas y artículos para la decoración 🎈✨🎑, cuyo objetivo principal es la transformación de espacios, con altos niveles ⚡ de calidad en sus servicios y productos, la cual innova con el buen servicio 🏋🏻, ofreciendo a nuestros clientes asesoría y el buen gusto en la ciudad de Popayán 🗺️, en donde podrá encontrar diseño 🔮, y elegancia. 💍";
  initialOptions2();
  //console.log(botMessage);
  document.getElementById("introduction").innerHTML = "";
}



function removeText(){
  document.getElementById("chats").innerHTML = "";
}