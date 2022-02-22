const phone=document.getElementById("signupPhone");
  const pwd=document.getElementById("signupPwd");
document.getElementById("signupform").addEventListener("submit", (e)=>{
  e.preventDefault();
  if(phone.value==="" || pwd.value===""){
   alert("Enter all the fields")
  }
  else{
    let stmt="phone="+phone.value+"&pwd="+pwd.value;
    let xhr=new XMLHttpRequest();
    xhr.open("POST", "conn.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload=function(){
     document.getElementById("body").innerHTML=this.responseText;
    }
    xhr.send(stmt);
  }
 
  
})
  phone.value="";
  pwd.value="";

