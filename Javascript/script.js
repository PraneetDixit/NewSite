window.addEventListener("load", pageLoad);

function pageLoad() {
    var myVar;
    if (!sessionStorage.viewed){
    myVar = setTimeout(showPage, 6000);
    sessionStorage.viewed = 1;
    }else{
        showPage();
    }
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("container").style.display = "block";
}

window.onscroll = function() {buttonAppear()};

function buttonAppear(){
    var topButton = document.getElementById("topButton");
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        topButton.style.display = "flex";
    }else{
        topButton.style.display = "none";
    }
}

function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openTab(tabName, e) {
  
  var tabs = document.getElementsByClassName("tabcontent");
  for(var i = 0;i<tabs.length;i++){
      tabs[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  
  var tabButtons = document.getElementsByClassName("tablinks");
  for(var i = 0;i<tabs.length;i++){
      tabButtons[i].style = "";
  } 
  
  tablinks = document.getElementsByClassName("tablinks");
  for (var j = 0; j < tablinks.length; j++) {
       tablinks[j].className = tablinks[j].className.replace(" active", "");
       tablinks[j].className = tablinks[j].className.replace(" activi", "");
       tablinks[j].className = tablinks[j].className.replace(" activo", "");
   }
  
    var curTarget = e.currentTarget
    if (curTarget.id == "red"){
        e.currentTarget.className += " active";
    }else if (curTarget.id == "blue"){
        e.currentTarget.className += " activi";
    }else{
        e.currentTarget.className += " activo";
    }
}

function validate(e) {
    let arr = [];
    let err = false;
    arr[0] = form.name ;
    arr[1] = form.mobNumber ;
    arr[2] = form.email ;
    arr[3] = form.query ;
    let hasName;
    let hasNumber;
    let hasEmail;
    let hasQuery;

    if (arr[0].value == ""){
        arr[0].placeholder = "Name is mandatory";
        arr[0].classList.add('redPlaceholder');
        arr[0].style.backgroundColor = "rgba(0, 0, 255, 0.1)";
        e.preventDefault();
    }else{
        arr[0].style.backgroundColor = "transparent";
        hasName = true;
    }
    
    if(arr[1].value == ""){
        arr[1].placeholder = "Contact number is mandatory";
        arr[1].classList.add('redPlaceholder');
        arr[1].style.backgroundColor = "rgba(0, 0, 255, 0.1)";
        e.preventDefault();
    }else if (arr[1].value.length < 10 || arr[1].value.length > 10){
        arr[1].value = "";
        arr[1].placeholder = "Enter a valid 10-digit Mobile number";
        e.preventDefault();
    }else{
        arr[1].style.backgroundColor = "transparent";
        hasNumber = true;
    }
    
    if (arr[2].value == ""){
        arr[2].placeholder = "Email is mandatory";
        arr[2].style.backgroundColor = "rgba(0, 0, 255, 0.1)";
        arr[2].classList.add('redPlaceholder');
        e.preventDefault();
    }else{
        arr[2].style.backgroundColor = "transparent";
        hasEmail = true;
    }
    
    if (arr[3].value == ""){
        arr[3].placeholder = "Please fill this field";
        arr[3].style.backgroundColor = "rgba(0, 0, 255, 0.1)";
        arr[3].classList.add('redPlaceholder');
        e.preventDefault();
    }else{
        arr[3].style.backgroundColor = "transparent";
        hasQuery = true;
    }
    
    if(hasName ==true && hasNumber == true && hasEmail == true && hasQuery == true){
        return true
    }
}

function drop(){
    let bars = document.querySelector("div.bar");
    let cross = document.querySelector("div.cross");
    let sideNav = document.getElementById("sideNav")
    if (window.getComputedStyle(cross).display == "none"){
        bars.style.display = "none";
        cross.style.display = "flex";
        sideNav.style.left = "0px";
    }else{
        bars.style.display = "flex";
        cross.style.display = "none";
        sideNav.style.left = "-110%";
    }
}
