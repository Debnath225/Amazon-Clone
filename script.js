
let bord =  document.querySelector("#searchDropdownBox").addEventListener("click", () => {
    searchDropdownBox.style.border="3px solid orange";
    searchDropdownBox.style.borderRight="none";
    searchDropdownBox.style.boxShadow="0px 0px 0.8px 0.8px orange";
  });
  let bord2 = document.querySelector("#twotabsearchtextbox");

  bord2.addEventListener("click", () =>{
    twotabsearchtextbox.style.border="3px solid orange";
    twotabsearchtextbox.style.borderLeft="none";
    twotabsearchtextbox.style.borderRight="none";
    twotabsearchtextbox.style.boxShadow="0px 0px 0.8px 0.8px orange";
  });

  let logo = document.querySelector("#logo").addEventListener("click", () => {
    twotabsearchtextbox.style.border="none";
    searchDropdownBox.style.border="none";
  });
  let searchbtn = document.querySelector("#searchbtn").addEventListener("click", () => {
    searchbtn.style.border="3px solid orange";
    searchbtn.style.borderLeft="none";
    searchbtn.style.boxShadow="0px 0px 0.8px 0.8px orange";
  });
  

let searchSelect =document.getElementsByClassName("searchSelect");
searchSelect.style.
let feed=document.getElementsByClassName("listlang");

  let find =document.getElementsByClassName("me");
  console.log(find);
  let found='Alexa Skills';
  switch(found){
    case 'Alexa Skills' :
     // searchSelect.style.border="2px solid green";
      break;
  }


  function onselect(){


    switch(onselect()){
      case 'me':
        console.log("i got 1");
        break;
        case 'ma':
          console.log("i got 2");
          break;
          case 'mi':
            console.log("i got 3");
            break;
    }
   
  }