window.addEventListener("DOMContentLoaded", () => {
  const roomContainer = document.getElementById("room-container");

  if (!roomContainer) {
    console.error("Element with id 'room-container' not found.");
    return;
  }

  const rooms = JSON.parse(localStorage.getItem("rooms"));

  if (!rooms || !Array.isArray(rooms)) {
    roomContainer.innerHTML = "<p>No rooms available to display.</p>";
    return;
  }

  rooms.forEach(room => {
    const card = document.createElement("div");
    card.className = "room-card";
    card.innerHTML = `
      <img src="${room.image}" alt="${room.name}">
      <div class="room-about">
        <div class="rate-name">
          <h3 style="font-family: 'Playfair Display', serif; font-size: 18px; font-weight: bold; color: #0a2342;">${room.name.toUpperCase()}</h3>
          <div class="room-rating">${Number(room.rating)}</div>
        </div>
        <div class="room-details">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-4 w-4 mr-1"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        ${room.people} people &nbsp;•&nbsp; ${room.area|| room.size} sqft</div>
        <div class="room-time">
          Check-in: <strong>${room.checkIn || "11:00 AM"}</strong> &nbsp;|&nbsp; 
          Check-out: <strong>${room.checkOut || "10:00 AM"}</strong>
        </div>
        <div class="room-footer">
          <div class="room-price">₹${Number(room.price).toFixed(2)}</div>
          <button class="view-btn" data-id="${room.id}">
            View Details&nbsp;<span style="font-weight:bold;">➝</span>
          </button>
        </div>
      </div>
    `;
    roomContainer.appendChild(card);
  });

  roomContainer.addEventListener("click", e => {
    if (e.target.closest(".view-btn")) {
      const id = e.target.closest(".view-btn").getAttribute("data-id");
      localStorage.setItem("selectedRoomId", id);
      window.location.href = "one_room.html";
    }
  });
});
