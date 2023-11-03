function submitLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "evelyn" && password == "12345") {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid username or password.");
        return false;
    }
  }
  
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");
  
  menuToggle.addEventListener("click", function() {
  menuList.parentNode.classList.toggle("open");
  });