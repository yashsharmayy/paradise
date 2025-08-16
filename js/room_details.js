// room_details.js
window.addEventListener("DOMContentLoaded", () => {
  const roomId = parseInt(localStorage.getItem("selectedRoomId"));
  const allRooms = JSON.parse(localStorage.getItem("rooms")) || [];
  const room = allRooms.find(r => r.id === roomId);

  const container = document.getElementById("room-detail");
  if (!room) {
    container.innerHTML = "<p class='not-found'>Room not found.</p>";
    return;
  }

   container.innerHTML = `
    <div class="back-link">
      <a href="./rooms.html">← Back to All Rooms</a>
    </div>

    <div class="room-wrapper">
      <div class="room-image">
        <img src="${room.image}" alt="${room.name}">
      </div>

      <div class="room-info">
        <h1 class="room-name">${room.name}</h1>
        <div class="price">
            <p class="room-meta">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-5 w-5 mr-2 text-resort"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              ${room.people} guests</span>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize h-5 w-5 mr-2 text-resort"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
              ${room.area || room.size} sq ft</span>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bed-double h-5 w-5 mr-2 text-resort"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>
              King Bed</span>
            </p>
            <p class="room-price">₹${(room.price).toFixed(2)} <span>/ night</span></p>
        </div>
        <h2>Room Amenities</h2>
        <ul class="amenities">
          ${
            Array.isArray(room.amenities) && room.amenities.length > 0
              ? room.amenities.map(a => `<li>${a}</li>`).join("")
              : "<li>No amenities listed</li>"
          }
        </ul>




        <div class="booking-box">
          <h3>Contact for Booking</h3>
          <p><a href="tel:+9111 2345 6789">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone text-resort w-5 h-5 shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          +91 11 2345 6789</a></p>
          <p><a href="mailto:info@paradiseresortdelhi.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail text-resort w-5 h-5 shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          info@paradiseresortdelhi.com</a></p>
        </div>
      </div>
    </div>
    `;
    console.log("Room object:", room);
    console.log("Amenities:", room.amenities);
  });
