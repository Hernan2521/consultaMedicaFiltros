

 let Radiologia= [
    {
        HORA: "11:00", 
        ESPECIALISTA: "IGNACIO SCHULZ", 
        PACIENTE: "FRANCISCA ROJAS", 
        RUT: "9878782-1", 
        PREVISION: "FONASA"}, 
    {
        HORA: "11:30", 
        ESPECIALISTA: "FEDERICO SUBERCASEAUX", 
        PACIENTE: "PAMELA ESTRADA", 
        RUT: "15345241-3", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "15:00", 
        ESPECIALISTA: "FERNANDO WURTHZ", 
        PACIENTE: "ARMANDO LUNA", 
        RUT: "16445345-9", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "15:30", 
        ESPECIALISTA: "ANA MARIA GODOY", 
        PACIENTE: "MANUEL GODOY", 
        RUT: "17666419-0", 
        PREVISION: "FONASA"}, 
    {
        HORA: "16:00", 
        ESPECIALISTA: "PATRICIA SUAZO", 
        PACIENTE: "RAMON ULLOA", 
        RUT: "14989389-K", 
        PREVISION: "FONASA"}
    ]

let trauma = [
    {
        HORA: "8:00", 
        ESPECIALISTA: "MARIA PAZ ALTUZARRA", 
        PACIENTE: "PAULA SANCHEZ", 
        RUT: "15554774-5", 
        PREVISION: "FONASA"}, 
    {
        HORA: "10:00", 
        ESPECIALISTA: "RAUL ARAYA", 
        PACIENTE: "ANGÉLICA NAVAS", 
        RUT: "15444147-9", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "10:30", 
        ESPECIALISTA: "MARIA ARRIAGADA", 
        PACIENTE: "ANA KLAPP", 
        RUT: "17879423-9", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "11:00", 
        ESPECIALISTA: "ALEJANDRO BADILLA", 
        PACIENTE: "FELIPE MARDONES", 
        RUT: "1547423-6", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "11:30", 
        ESPECIALISTA: "CECILIA BUDNIK", 
        PACIENTE: "DIEGO MARRE", 
        RUT: "16554741-K", 
        PREVISION: "FONASA"}, 
    {
        HORA: "12:00", 
        ESPECIALISTA: "ARTURO CAVAGNARO", 
        PACIENTE: "CECILIA MENDEZ", 
        RUT: "9747535-8", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "12:30", 
        ESPECIALISTA: "ANDRES KANACRI", 
        PACIENTE: "MARCIAL SUAZO", 
        RUT: "11254785-5", 
        PREVISION: "ISAPRE"}
    ]

let dental = [
    {
        HORA: "8:30", 
        ESPECIALISTA: "ANDREA ZUÑIGA", 
        PACIENTE: "MARCELA RETAMAL", 
        RUT: "11123425-6", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "11:00", 
        ESPECIALISTA: "MARIA PIA ZAÑARTU", 
        PACIENTE: "ANGEL MUÑOZ", 
        RUT: "9878789-2", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "11:30", 
        ESPECIALISTA: "SCARLETT WITTING", 
        PACIENTE: "MARIO KAST", 
        RUT: "7998789-5", 
        PREVISION: "FONASA"}, 
    {
        HORA: "13:00", 
        ESPECIALISTA: "FRANCISCO VON TEUBER", 
        PACIENTE: "KARIN FERNANDEZ", 
        RUT: "18887662-K", 
        PREVISION: "FONASA"}, 
    {
        HORA: "13:30", 
        ESPECIALISTA: "EDUARDO VIÑUELA", 
        PACIENTE: "HUGO SANCHEZ", 
        RUT: "17665461-4", 
        PREVISION: "FONASA"}, 
    {
        HORA: "14:00", 
        ESPECIALISTA: "RAQUEL VILLASECA", 
        PACIENTE: "ANA SEPULVEDA", 
        RUT: "14441281-0", 
        PREVISION: "ISAPRE"}
    ]

// 1): Agregar nuevos nombres.

let nuevosPacientes = [
    {
        HORA: "09:00", 
        ESPECIALISTA: "RENÉ POBLETE", 
        PACIENTE: "ANA GELLONA", 
        RUT: "13123329-7", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "09:30", 
        ESPECIALISTA: "MARIA SOLAR", 
        PACIENTE: "RAMIRO ANDRADE", 
        RUT: "12221451-K", 
        PREVISION: "FONASA"}, 
     {
         HORA: "10:00", 
         ESPECIALISTA: "RAUL LOYOLA ", 
         PACIENTE: "CARMEN ISLA", 
         RUT: "10112348-3", 
       PREVISION: "ISAPRE"}, 
     {
        HORA: "10:30", 
        ESPECIALISTA: "ANTONIO LARENAS", 
        PACIENTE: "PABLO LOAYZA", 
        RUT: "13453234-1", 
      PREVISION: "ISAPRE"}, 
      {
        HORA: "12:00", 
        ESPECIALISTA: "MATIAS ARAVENA", 
        PACIENTE: "SUSANA POBLETE", 
        RUT: "14345656-6", 
        PREVISION: "FONASA"}
       
    ]
 
  let nuevoTrauma = trauma.concat(nuevosPacientes);
  
// 2): Eliminar el primer y último elemento en radio
      
 
 let nuevaRadio = Radiologia.slice(1, -1);

 
const mensaje = document.getElementById("titulo")
const atencion = document.getElementById("resumen")



function consulta1(){
   
    var texto ="<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
    var u = nuevaRadio.length - 1;

for (var i = 0; i < nuevaRadio.length; i++) {
    texto += `<tr>
    <td>${nuevaRadio[i].HORA}</td>
    <td>${nuevaRadio[i].ESPECIALISTA}</td>
    <td>${nuevaRadio[i].PACIENTE}</td>
    <td>${nuevaRadio[i].RUT}</td>
    <td>${nuevaRadio[i].PREVISION}</td>
    </tr>`;
    }
    document.getElementById("cuerpo").innerHTML = texto;
   mensaje.innerHTML= " RADIOLOGIA"; 
   atencion.innerHTML= "  Primera atención: "+ nuevaRadio[0].PACIENTE+" "+nuevaRadio[0].PREVISION  +" | Última atención:"+nuevaRadio[u].PACIENTE+" "+nuevaRadio[u].PREVISION;
}



function consulta2(){
    
     var texto ="<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
     var u = nuevoTrauma.length - 1;

 for (var i = 0; i < nuevoTrauma.length; i++) {
     texto += `<tr>
     <td>${nuevoTrauma[i].HORA}</td>
     <td>${nuevoTrauma[i].ESPECIALISTA}</td>
     <td>${nuevoTrauma[i].PACIENTE}</td>
     <td>${nuevoTrauma[i].RUT}</td>
     <td>${nuevoTrauma[i].PREVISION}</td>
     </tr>`;
     }
     document.getElementById("cuerpo").innerHTML = texto;
     mensaje.innerHTML= " TRAUMATOLOGIA";
     atencion.innerHTML= "  Primera atención: "+ nuevoTrauma[0].PACIENTE+" "+nuevoTrauma[0].PREVISION  +" | Última atención:"+nuevoTrauma[u].PACIENTE+" "+nuevoTrauma[u].PREVISION;
 }

 

 function consulta3(){
    
     var texto ="<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
     var u = dental.length - 1;

 for (var i = 0; i < dental.length; i++) {
     texto += `<tr>
     <td>${dental[i].HORA}</td>
     <td>${dental[i].ESPECIALISTA}</td>
     <td>${dental[i].PACIENTE}</td>
     <td>${dental[i].RUT}</td>
     <td>${dental[i].PREVISION}</td>
     </tr>`;
     }
     document.getElementById("cuerpo").innerHTML = texto;
     mensaje.innerHTML= " DENTAL";
     atencion.innerHTML= "  Primera atención: "+ dental[0].PACIENTE+" "+dental[0].PREVISION  +" | Última atención:"+dental[u].PACIENTE+" "+dental[u].PREVISION;
    

    }
 
  // 3) listado en un document.write


function pregunta3() {
    for (var i = 0; i < dental.length; i++){
        document.write(dental[i].HORA +"-"+ dental[i].ESPECIALISTA +"-"+dental[i].PACIENTE+"-"+dental[i].RUT+"-"+dental[i].PREVISION+"<br><br><br>")
        }
        
    }
    

    // 4) lista total de la consulta
    let maxArray =  dental.concat(nuevaRadio,nuevoTrauma)
    
    function consulta4() {
      
     document.getElementById("cuerpo").innerHTML = "nombre de pacientes";
     mensaje.innerHTML= "<br>";
     var cont = "";

        for (var t = 0; t < maxArray.length; t++){
        
       var cont = cont + maxArray[t].PACIENTE + "<br>";
       atencion.innerHTML= cont ;

      }
    }


    // 5) Isapre en Dental
    
    const filtroIsapre = dental.filter( x => x.PREVISION == "ISAPRE");
    
    function consulta5() {
      
     document.getElementById("cuerpo").innerHTML = "Pacientes con Isapre en Dental";
     mensaje.innerHTML= "<br>";
     var cont = "";
     


     for (var y = 0; y < filtroIsapre.length; y++){
     

       var cont = cont + filtroIsapre[y].PACIENTE + " - "+ filtroIsapre[y].PREVISION + "<br>";
       atencion.innerHTML= cont ;

      }
    }

       // 6) trauma en fonasa
    
       const filtroFonasa = nuevoTrauma.filter( x => x.PREVISION == "FONASA");
    
       function consulta6() {
         
        document.getElementById("cuerpo").innerHTML = "Pacientes con Fonasa en Traumatologia";
        mensaje.innerHTML= "<br>";
        var con = "";
        
   
   
        for (var j = 0; j < filtroFonasa.length; j++){
        
   
          var con = con + filtroFonasa[j].PACIENTE + " - "+ filtroFonasa[j].PREVISION + "<br>";
          atencion.innerHTML= con ;
   
         }
       }