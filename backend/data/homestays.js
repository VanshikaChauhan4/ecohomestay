// In-memory "database" for homestay listings.
// Week 5 will replace this with a real database.

let homestays = [
  {
    id: 1,
    name: "Pine Valley Homestay",
    location: "Manali, Himachal Pradesh",
    type: "homestay",
    pricePerNight: 1800,
    description:
      "A cozy mountain homestay run by a local family, surrounded by pine forests.",
    amenities: ["Home-cooked meals", "Bonfire", "Mountain view"],
    available: true,
    emoji: "🏡",
    tag: "Homestay",
    tagColor: "green",
    rating: "4.9",
  },
  {
    id: 2,
    name: "Green Acres Agri-Stay",
    location: "Coorg, Karnataka",
    type: "agri-tourism",
    pricePerNight: 2200,
    description:
      "Stay on a working coffee plantation and join the harvest season.",
    amenities: ["Plantation tour", "Organic meals", "Coffee tasting"],
    available: true,
    emoji: "🌾",
    tag: "Agri-Stay",
    tagColor: "amber",
    rating: "4.8",
  },
  {
    id: 3,
    name: "Riverside Bamboo Cottage",
    location: "Wayanad, Kerala",
    type: "eco-tourism",
    pricePerNight: 1500,
    description:
      "Bamboo cottage on the riverbank with guided nature walks.",
    amenities: ["Nature walks", "River access", "Bicycle rental"],
    available: false,
    emoji: "🌿",
    tag: "Eco-Tour",
    tagColor: "soil",
    rating: "4.7",
  },
];

module.exports = homestays;