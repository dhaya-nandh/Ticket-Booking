// JavaScript file: alter.js

function onLoaderFunc() {
  document.getElementById("seatsBlock").style.display = "none";
}

function takeData() {
  const username = document.getElementById("Username").value;
  const numSeats = parseInt(document.getElementById("NumSeat").value);

  if (username && numSeats) {
      document.getElementById("seatsBlock").style.display = "block";
      document.getElementById("notification").innerText = `${username}, please select ${numSeats} seat(s)`; // Log additional info for demonstration
      notification.style.color="red"
      notification.style.backgroundColor="yellow"
      notification.style.display="inline"
      notification.style.marginLeft="10%"
  } 
  else {
      alert("Please fill in both fields");
  }
}

const selectedSeats = new Set();

document.addEventListener('change', function(e) {
  if (e.target.type === 'checkbox' && e.target.classList.contains('seats')) {
      if (selectedSeats.size < document.getElementById("NumSeat").value || e.target.checked === false) {
          if (e.target.checked) {
              selectedSeats.add(e.target.value);
          } else {
              selectedSeats.delete(e.target.value);
          }
      } else {
          e.target.checked = false;
          alert("You can only select the number of seats specified.");
      }
  }
});

function confirmSelection() {
  const username = document.getElementById("Username").value;
  const numSeats = document.getElementById("NumSeat").value;
  const seats = Array.from(selectedSeats).join(', ');

  if (selectedSeats.size == numSeats) {
      alert(`Seats confirmed: ${seats}`);
      document.getElementById("nameDisplay").value = username;
      document.getElementById("NumberDisplay").value = numSeats;
      document.getElementById("seatsDisplay").value = seats;
  } else {
      alert(`Please select exactly ${numSeats} seats.`);
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  const orderButton = document.createElement("button");
  orderButton.innerText = "Confirm Selection";
  orderButton.className = "order";
  orderButton.style.color="lightblue";
  orderButton.style.backgroundColor="darkblue";
  orderButton.style.width="20%";
  orderButton.style.borderRadius="20px";
  orderButton.style.height="40px";
  orderButton.style.marginLeft="40%";
  orderButton.style.marginTop="30px";


  orderButton.onclick = confirmSelection;
  document.body.appendChild(orderButton);
});
