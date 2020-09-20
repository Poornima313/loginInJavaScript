function check(form) {
  if (form.userid.value == "odessa" && form.pswrd.value == "odessa") {
    window.open("table.html");
  } else {
    alert("Error Password or Username");
  }
}
