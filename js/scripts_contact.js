function SendContactFrom(){
  $.ajax({
    method: 'POST',
    url: 'https://formsubmit.co/ajax/f1aa8b04c973b5f015f60fb3e5245d09',
    dataType: 'json',
    accepts: 'application/json',
    data: {
      name: document.getElementById('contact-name'),
      email: document.getElementById('contact-email'),
      message: document.getElementById('contact-message'),
      attachment: document.getElementById('contact-file'),
      // next: '#about',
      captcha: 'false',
      autoresponse: 'Thank you for reaching out to me through the contact form on my portfolio website. I appreciate your interest and I will get back to you as soon as possible with a response.\nBest regards, Lluis.',
      template: 'table',
    },
    success: (data) => console.log(data),
    error: (err) => console.log(err)
  });
  console.log('hey')
}
