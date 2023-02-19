
function ContactSended(){
  const btn = document.getElementById('btn-contact-submit');
  
  btn.innerHTML = 'Message sent.\nTo send another refresh the page.'
  btn.classList.remove("btn-dark");
  btn.classList.add("btn-success");
  btn.setAttribute('disabled', true);
}
