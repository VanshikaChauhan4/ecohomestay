const bookings = require("../data/bookings");
const homestays = require("../data/homestays");

let nextBookingId = 1;

// GET /api/bookings
const getAllBookings = (req, res) => {
  res.status(200).json({
    success: true,
    count: bookings.length,
    data: bookings,
  });
};

// POST /api/bookings
const createBooking = (req, res) => {
  const { homestayId, guestName, email, checkIn, checkOut, guests } = req.body;

  if (!homestayId || !guestName || !email || !checkIn || !checkOut) {
    return res.status(400).json({
      success: false,
      message:
        "homestayId, guestName, email, checkIn, and checkOut are required",
    });
  }

  const homestay = homestays.find((h) => h.id === parseInt(homestayId));
  if (!homestay) {
    return res.status(404).json({
      success: false,
      message: `Homestay with id ${homestayId} not found`,
    });
  }

  const newBooking = {
    id: nextBookingId++,
    homestayId: homestay.id,
    homestayName: homestay.name,
    guestName,
    email,
    checkIn,
    checkOut,
    guests: guests || 1,
    status: "confirmed",
  };

  bookings.push(newBooking);
  res.status(201).json({ success: true, data: newBooking });
};

module.exports = { getAllBookings, createBooking };
