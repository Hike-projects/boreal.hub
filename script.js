function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector('.overlay').style.width = "100%";
  document.querySelector('.closebtn').style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector('.overlay').style.width = "0";
  document.querySelector('.closebtn').style.display = "none";
}

function openSearch() {
  // Add functionality for opening search here if needed
}

function buttonClick(buttonNumber) {
  alert("Button " + buttonNumber + " clicked!");
}

function addToCart(productNumber) {
  alert("Product " + productNumber + " added to cart!");
}

function buyNow(productNumber) {
  alert("Product " + productNumber + " - Buy Now!");
}