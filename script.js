function putImages(){
    if (xmlhttp.readyState==4){
        if(xmlhttp.responseText){
            var resp = xmlhttp.responseText.replace("\r\n", "");
            var files = resp.split(";");
             
            var j = 0;
            for(i=0; i<files.length; i++){
                if(files[i] != ""){
                    document.getElementById("container").innerHTML += '<a href="img/'+files[i]+'"><img src="thumb/'+files[i]+'" /></a>';
                     
                    j++;                    
                    if(j == 3 || j == 6)
                        document.getElementById("container").innerHTML += '';
                    else if(j == 9){
                        document.getElementById("container").innerHTML += '<p>'+(n-1)+" Images Displayed | <a href='#header'>top</a></p><hr />";
                        j = 0;
                    }
                }
            }
        }
    }
}