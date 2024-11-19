
function handlesubmit() {

  var name=document.getElementById("name").value;
  var password = parseInt(document.getElementById("password").value, 10);

  if(name === "" ){
    alert("Enter Name");
  }else if (isNaN(password) || !Number.isInteger(Number(password))) {
    alert("Enter Password & Password Must be Intgers");
  }
  else {
    alert("data submited");
  }
  }