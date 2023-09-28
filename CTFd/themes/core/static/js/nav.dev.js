window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").classList.add("fade-out");
    document.getElementById("navbar").classList.remove("fade-in");
  }  
  else {
    document.getElementById("navbar").classList.remove("fade-out");
    document.getElementById("navbar").classList.add("fade-in");
  }
};