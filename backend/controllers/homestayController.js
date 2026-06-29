const homestays = require("../data/homestays");

// Simple counter for new IDs (fine for in-memory data)
let nextId = homestays.length + 1;

// GET /api/homestays
const getAllHomestays = (req, res) => {
  res.status(200).json({
    success: true,
    count: homestays.length,
    data: homestays,
  });
};

// GET /api/homestays/:id
const getHomestayById = (req, res) => {
  const homestay = homestays.find((h) => h.id === parseInt(req.params.id));

  if (!homestay) {
    return res.status(404).json({
      success: false,
      message: `Homestay with id ${req.params.id} not found`,
    });
  }

  res.status(200).json({ success: true, data: homestay });
};

// POST /api/homestays
const createHomestay = (req, res) => {
  const { name, location, type, pricePerNight } = req.body;

  // Basic validation -> 400 if required fields are missing
  if (!name || !location || !type || !pricePerNight) {
    return res.status(400).json({
      success: false,
      message: "name, location, type, and pricePerNight are required",
    });
  }

  const newHomestay = {
    id: nextId++,
    name,
    location,
    type,
    pricePerNight,
    description: req.body.description || "",
    amenities: req.body.amenities || [],
    available: req.body.available !== undefined ? req.body.available : true,
  };

  homestays.push(newHomestay);
  res.status(201).json({ success: true, data: newHomestay });
};

// PUT /api/homestays/:id
const updateHomestay = (req, res) => {
  const homestay = homestays.find((h) => h.id === parseInt(req.params.id));

  if (!homestay) {
    return res.status(404).json({
      success: false,
      message: `Homestay with id ${req.params.id} not found`,
    });
  }

  Object.assign(homestay, req.body);
  res.status(200).json({ success: true, data: homestay });
};

// DELETE /api/homestays/:id
const deleteHomestay = (req, res) => {
  const index = homestays.findIndex((h) => h.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Homestay with id ${req.params.id} not found`,
    });
  }

  homestays.splice(index, 1);
  res.status(204).send(); // 204 = success, no content
};

// GET /api/homestays/search?q=&type=&location=
const searchHomestays = (req, res) => {
  const { q, type, location } = req.query;
  let results = homestays;

  if (q) {
    const term = q.toLowerCase();
    results = results.filter(
      (h) =>
        h.name.toLowerCase().includes(term) ||
        h.description.toLowerCase().includes(term)
    );
  }

  if (type) {
    results = results.filter(
      (h) => h.type.toLowerCase() === type.toLowerCase()
    );
  }

  if (location) {
    results = results.filter((h) =>
      h.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  res.status(200).json({ success: true, count: results.length, data: results });
};

module.exports = {
  getAllHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
};
