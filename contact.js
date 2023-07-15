    // JavaScript validation and pop-up message
    function validateForm() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      if (name === "" || email === "" || message === "") {
        showAlertMessage("Please fill in all fields.");
        return false;
      }

      showSuccessMessage();
      return false; // Prevent form submission for demo purposes
    }

    function showSuccessMessage() {
      var successMessage = document.getElementById("success-message");
      successMessage.style.display = "block";
      setTimeout(function() {
        successMessage.style.display = "none";
      }, 3000);
    }

    function showAlertMessage(message) {
      var alertMessage = document.getElementById("alert-message");
      alertMessage.innerHTML = "<strong>Error:</strong> " + message;
      alertMessage.style.display = "block";
      setTimeout(function() {
        alertMessage.style.display = "none";
      }, 3000);
    }


        // Animate the pop-up and alert messages on page load
        window.onload = function() {
          var successMessage = document.getElementById("success-message");
          var alertMessage = document.getElementById("alert-message");
          successMessage.style.display = "block";
          alertMessage.style.display = "block";
          setTimeout(function() {
            successMessage.style.display = "none";
            alertMessage.style.display = "none";
          }, 3000);
        }