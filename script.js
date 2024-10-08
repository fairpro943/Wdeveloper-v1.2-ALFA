
function run(){
  try{
    var ht = document.getElementById("code-ht").value;
    var cs = document.getElementById("code-cs").value;
    var js = document.getElementById("code-js").value;
    var out = document.getElementById("out");
    var out2 = document.getElementById("out2");
    var er = document.getElementById("er");
      out.contentDocument.body.innerHTML = ht + "<style>" + cs + "</style>";
      out.contentWindow.eval(js);
      out2.contentDocument.body.innerHTML = ht + "<style>" + cs + "</style>";
      out2.contentWindow.eval(js);
  }catch(error){
      console.log(error);
      er.innerHTML = "<h3 id='er'>" + error + "</h3>";
  }
  
  }
  
function cls(){
    var er = document.getElementById("er");
    er.innerHTML = "<h3 id='ner'>errors</h3>";
    out.contentDocument.body.innerHTML = "";
}
functionfull(){
    var com = ocument.getElementById("full");
}