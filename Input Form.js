function sub() {
  var f=0;
  var fname = document.getElementById("b_fname").value;
  var lname = document.getElementById("b_lname").value;
  var age = document.getElementById("b_age").value;
  var email = document.getElementById("b_email").value;
  var password = document.getElementById("b_password").value;
  var cpassword = document.getElementById("b_cpassword").value;
  var faname = document.getElementById("b_faname").value;
  var moname = document.getElementById("b_moname").value;
  var pin = document.getElementById("b_pin").value;
  var dob = document.getElementById("b_dob").value;
 if(email.indexOf('@')==-1){
    document.getElementById("val1").innerHTML ="**Enter valid Email ID";
    f=1;
    }
  if(password.indexOf('@')===-1 || password.indexOf('$')===-1 || password.indexOf('&')===-1)
  {
  }else{
  document.getElementById("val2").innerHTML ="**Enter Special Characters in Password";
  f=1;
  }
  if(password==cpassword )
  {
  }else{
    document.getElementById("val3").innerHTML ="**Enter Same password";
    f=1;
  }
  if(f==1){
    alert("Enter Valid Credentials");
  }else{
  document.getElementById("disp").innerHTML = `
  <center>
  <p>
  Name of the person:${fname} ${lname}
  <br></br>
  Age is:${age}
  <br></br>
  Father Name:${faname} ${lname}
  <br></br>
  Mother Name:${moname} ${lname}
  <br></br>
  Pincode:${pin}
  <br></br>
  Email ID:${email}
  <br></br>
  </p>
  </center>`;
  }
}
function Hide() {
  var x = document.getElementById("box").style.display="none";
  var y = document.getElementById("cl").style.display="none";
  window.print();
}

