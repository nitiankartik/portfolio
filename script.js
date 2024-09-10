// Switch tabs under About Me
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

// Side menu for mobile
  var sidemeu = document.getElementById("sidemenu");
  function openmenu(){
      sidemeu.style.right="0";
  }
  function closemenu(){
      sidemeu.style.right="-200px";
  }

// Handle contact form
  const scriptURL = 'https://script.google.com/macros/s/AKfycby2zCnizCJNqtwpAMSTkarJlG-jq5ZIdcimoQoWqtaeQHJ32U6L79YWwiJrbuaPVLYdsw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Message sent successfully"
          setTimeout(function(){
              msg.innerHTML =""
          },5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })