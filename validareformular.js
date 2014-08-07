
var filtrare_nume = /^[A-Za-z0-9 ]{3,20}$/;
var filtrare_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

function ValidareForm(form)
{
    var nume = form.nume.value;
    var email = form.email.value;
    var mesaj = form.mesaj.value;
    var erori = [];
    if (!filtrare_nume.test(nume))
    	{
        	erori[erori.length] = "Numele invalid";
        }
    if (!filtrare_email.test(email))
    	{
        	erori[erori.length] = "E-mail invalida";
        }    

    if (mesaj == "")
       {
       		erori[erori.length] = "Nu exista mesaj de trimis";
       } 
    if (erori.length > 0)
    	{
        	raportErori(erori);
            return false;
        }
        return true ;   
}
function raportErori(erori)
{
	var atentiune = "Ceva ati gresit ...";
    for(var i = 0; i<erori.length; i++)
    	{
        	var numarErori= i + 1;
            atentiune += "\n" + numarErori + ". " + erori[i];
        }
        alert(atentiune);
}
