/*

button.onclick = () => {
    window.open('https://javascript.info');
  };
*/

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;
/*
  const quote1 = () => {
    const quote1Window = setTimeout(() => window.open('https://www.tutorhunt.com/members/view-feedback.asp?feedback=113959', 'Feedback 1', params), 1000);
    /*window.open('https://javascript.info');*//*
    setTimeout(() => quote1Window.close(), 5000);

  }
*/
  //open('/', 'test', params);
/*
  const quote1 = () => {
    const quote1Window = window.open('https://www.tutorhunt.com/members/view-feedback.asp?feedback=113959#location', 'Feedback 1', params);
    setTimeout(() => quote1Window, 1000);
    /*window.open('https://javascript.info');*//*
    setTimeout(() => quote1Window.close(), 5000);

  }
*/

let quote1Window;

  const availability = () => {
     quote1Window = window.open('./availability.htm', 'Availability', params);
    setTimeout(() => quote1Window, 1000);
    
      
  }

  //const popup = window.open('http://example.com/success')
  window.addEventListener('message', event => {
    // Only accept messages from http://example.com.
    if (event.origin === 'https://www.nowchemistry.com') {
      if (event.data === 'close') quote1Window.close()
    }
  })


/*
  var receiveMessage = function (event) {
    if (event.data.indexOf("SUCCESS") !== -1 && event.origin.indexOf('https://www.nowchemistry.com') !== -1) {
        quote1Window.close();
        quote1Window.style.backgroundColor = 'red';
    }
};

window.removeEventListener("message", receiveMessage);
*/
/*
  //const popup = window.open('http://example.com/success')
quote1Window.addEventListener('message', event => {
  // Only accept messages from http://example.com.
  if (event.origin === 'https://www.nowchemistry.com/availability.html') {
    if (event.data === 'close') quote1Window.close()
  }
})


  const windowClose = () => {
    /*const button = document.getElementById('desktop');
    //getElementsById('desktop');
    button.onclick = function(){
      button.style.backgroundColor = 'red';
      
    };*//*
    quote1Window.close();
  }
  */