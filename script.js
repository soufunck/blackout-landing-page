const navbar = document.getElementById("navbar"); // get navbar id
const ad = document.getElementById("ad"); // get ad id

// listen scroll event on website
window.onscroll = function() {

  // if scroll is more than 100 
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.style.top = "-30px"; // set navbar on total top
    ad.style.opacity = "0"; // hide ad

  // if scroll is less than 100 
  } else {
    navbar.style.top = "0"; // set navbar on the started local
    ad.style.opacity = "1"; // show ad
  }
}


function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
}

/*
  ~ Code made by @soufunck
*/