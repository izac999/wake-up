console.log('ready');

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

function validate()
{
  var urlin = document.getElementById("input_url").value;
  
  console.log(urlin);
  
  if (!validURL(urlin))
  {
    console.log("Invalid Step #1");
    alert("Invalid URL");
   return false; 
  } else {
   if (urlin.length >= 9)
   {
     if ((urlin.substring(0, 7) == "http://") || (urlin.substring(0, 8) == "https://"))
     {
       return true;
     } else {
       console.log(urlin.substring(0, 9))
       console.log("Invalid URL Step #3");
       alert("Invalid URL! Make sure to add http:// or https:// infront of your URL");
      return false;
     }
   } else {
     console.log("Invalid Step #2");
     alert("Invalid URL");
    return false;
   }
  }
}
