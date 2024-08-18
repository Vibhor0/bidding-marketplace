// Sample data for demonstration
let bidData = [
    { vendor: "Vendor 1", initialQuote: 1000, currentBid: 1000 },
    { vendor: "Vendor 2", initialQuote: 950, currentBid: 950 },
    { vendor: "Vendor 3", initialQuote: 1200, currentBid: 1200 },
  ];
  
  // Countdown Timer
  let timeLeft = 20 * 60; // 20 minutes in seconds
  let timerInterval = setInterval(updateCountdown, 1000);
  
  function updateCountdown() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("countdown").textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    timeLeft--;
  
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      document.getElementById("countdown").textContent = "Bidding Ended";
    }
  }
  
  // File Upload Handler
  function uploadFile() {
    let fileInput = document.getElementById("fileUpload");
    let file = fileInput.files[0];
    if (file) {
      // Process the file (implement your logic here)
      console.log("File uploaded:", file.name);
      alert("File uploaded successfully!");
    } else {
      alert("Please select a file to upload.");
    }
  }
  
  // Display Bid Data
  function displayBids() {
    let bidTable = document
      .getElementById("bidTable")
      .getElementsByTagName("tbody")[0];
    bidTable.innerHTML = "";
    bidData.forEach((bid) => {
      let row = bidTable.insertRow();
      row.insertCell(0).textContent = bid.vendor;
      row.insertCell(1).textContent = `$${bid.initialQuote}`;
      row.insertCell(2).textContent = `$${bid.currentBid}`;
    });
  }
  
  // Submit Bid
  function submitBid() {
    let newBid = parseInt(document.getElementById("bidAmount").value);
    console.log("submitbit");
    if (isNaN(newBid)) {
      alert("Please enter a valid bid amount.");
      return;
    }
    
    // For demonstration, update Vendor 1's bid (implement your logic to handle real bids)
    if (newBid < bidData[0].currentBid) {
      bidData[0].currentBid = newBid;
      displayBids();
      document.getElementById("notifications").textContent =
        "Vendor 1 has placed a new bid!";
    } else {
      alert("Bid must be lower than the current bid.");
    }
  }
  
  // Initialize the bid table with sample data
  displayBids();
  