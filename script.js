document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('#booking form');
    const contactForm = document.querySelector('#contact form');
  
    // Room pricing
    const roomPrices = {
      'Single': 50,
      'Double': 90,
      'Deluxe': 150
    };
  
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const checkIn = new Date(document.getElementById('checkin').value);
      const checkOut = new Date(document.getElementById('checkout').value);
      const guests = parseInt(document.getElementById('guests').value);
      const roomType = document.getElementById('roomType').value;
  
      if (!checkIn || !checkOut || !guests || !roomType) {
        alert("Please fill all fields correctly.");
        return;
      }
  
      if (checkOut <= checkIn) {
        alert("Check-out date must be after check-in date.");
        return;
      }
  
      const timeDiff = checkOut - checkIn;
      const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      const pricePerNight = roomPrices[roomType];
      const totalPrice = days * pricePerNight;
  
      alert(`✅ Booking Successful!\n\nRoom: ${roomType}\nGuests: ${guests}\nDuration: ${days} night(s)\nTotal Price: $${totalPrice}`);
      bookingForm.reset();
    });
  
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email || !message) {
        alert("Please complete all contact form fields.");
        return;
      }
  
      alert(`📩 Thank you, ${name}! We received your message and will contact you soon.`);
      contactForm.reset();
    });
});
