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
  const availability = () => {
    const quote1Window = window.open('./availability.htm', 'Availability', params);
    setTimeout(() => quote1Window, 1000);
    /*window.open('https://javascript.info');
    setTimeout(() => quote1Window.close(), 10000);*/
  }