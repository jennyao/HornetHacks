

function landPage()
{
  window.location.href = "/"
}

function sendTheEmail(n,e,s,m)
{
  var link = 'mailto:jlhorstman@ucdavis.edu?subject='+s+
             +'&body='+m+'\nfrom'+n+' at '+e;
    window.location.href = link;
}

function submitIt()
{
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var subject = document.getElementById('subject').value
  var message = document.getElementById('message').value
  alert(name+" your email has been sent.\nThank you!")
  sendTheEmail(name,email,subject,message)
  document.getElementById('name').value = ""
  document.getElementById('email').value = ""
  document.getElementById('subject').value = ""
  document.getElementById('message').value = ""
}
