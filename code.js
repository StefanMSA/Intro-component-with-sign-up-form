function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
console.log(mailfomat);
}
else
{
document.getElementById('parEm').innerHTML = "Please provide a valid email";
document.getElementById('mailInput').style.borderColor = 'red';
document.getElementById('parEm').style.color = 'red';
document.getElementById('erIcon3').innerHTML = "<img src='images/icon-error.svg' >";
}
}

function ValidateFn(inputText) {
  let x = document.getElementById('FnInput').value;

  if (x == '')
  {
    document.getElementById('parFn').innerHTML = "First Name cannot be empty";
    document.getElementById('FnInput').style.borderColor = 'red';
    document.getElementById('parFn').style.color = 'red';
    document.getElementById('erIcon1').innerHTML = "<img src='images/icon-error.svg'>";
  }
}

function ValidateLn(inputText) {
  let y = document.getElementById('LnInput').value;

  if (y == '')
  {
    document.getElementById('parLn').innerHTML = "Last Name cannot be empty";
    document.getElementById('LnInput').style.borderColor = 'red';
    document.getElementById('parLn').style.color = 'red';
    document.getElementById('erIcon2').innerHTML = "<img src='images/icon-error.svg'>";
  }
}

function ValidatePs(inputText) {
  let z = document.getElementById('PsInput').value;

  if (z == '')
  {
    document.getElementById('parPs').innerHTML = "Password cannot be empty";
    document.getElementById('PsInput').style.borderColor = 'red';
    document.getElementById('parPs').style.color = 'red';
    document.getElementById('erIcon4').innerHTML = "<img src='images/icon-error.svg'>";
  }
}

  function Validate() {

    ValidateEmail(document.form1.text3);
    ValidateFn(document.form1.text1);
    ValidateLn(document.form1.text2);
    ValidatePs(document.form1.text4);

  }



  var form = document.getElementById("myForm");
  function handleForm(event) { event.preventDefault(); }
  form.addEventListener('submit', handleForm);
