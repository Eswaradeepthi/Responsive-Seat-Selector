document.addEventListener("DOMContentLoaded", () => {
    const reserveButton = document.getElementById("reserve");
    const groupSelect = document.getElementById("groupSelect");
    const clientCountInput = document.getElementById("clientCount");
    const seatsContainer = document.getElementById("seatsContainer");

    // Create a seating arrangement for 300 seats (15 rows of 20 seats each)
    const rows = 15;
    const seatsPerRow = 20;
    for (let i = 1; i <= rows; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.dataset.row = i;
        for (let j = 1; j <= seatsPerRow; j++) {
            const seat = document.createElement("div");
            seat.className = "seat";
            row.appendChild(seat);
        }
        seatsContainer.appendChild(row);
    }

    const colors = ["#6c7ae0", "#e06c7a", "#7ae06c", "#f39c12", "#8e44ad", "#e74c3c", "#3498db"];
    let colorIndex = 0;

    reserveButton.addEventListener("click", () => {
        const clientCount = parseInt(clientCountInput.value);
        
        if (isNaN(clientCount) || clientCount <= 0) {
            alert("Please enter a valid number of clients.");
            return;
        }

        const allSeats = document.querySelectorAll(".seat");
        let seatsReserved = 0;
        const selectedColor = colors[colorIndex % colors.length];
        colorIndex++;

        for (const seat of allSeats) {
            if (seatsReserved >= clientCount) break;

            if (!seat.style.backgroundColor) {
                seat.style.backgroundColor = selectedColor;
                seatsReserved++;
            }
        }

        if (seatsReserved < clientCount) {
            alert(`Only ${seatsReserved} seats were available for reservation.`);
        } else {
            alert(`Successfully reserved ${clientCount} seats.`);
        }
    });
});
