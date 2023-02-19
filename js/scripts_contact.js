const submit_btn = document.getElementById('btn-contact-submit');

submit_btn.addEventListener('submit', (e)=>{
  e.preventDefault();
  submit_btn.innerHTML = 'Message sent.<br>To send another refresh the page.'
  submit_btn.classList.remove("btn-dark");
  submit_btn.classList.add("btn-success");
  submit_btn.setAttribute('disabled', true);  
})
