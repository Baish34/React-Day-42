import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const StayDetails = () => {
  const stayId = useParams();

  const stays = [
    {
      id: 1,
      title: "Cozy Cottage Retreat",
      type: "Cottage",
      location: "Mountain View, CA",
      rating: 4.8,
      description: "Escape to a charming cottage nestled in the mountains.",
      amenities: ["Kitchen", "WiFi", "Parking"],
      price: "$150/night",
    },
    {
      id: 2,
      title: "Beachfront Paradise Villa",
      type: "Villa",
      location: "Maui, Hawaii",
      rating: 4.9,
      description: "Experience luxury living in a stunning beachfront villa.",
      amenities: ["Private Pool", "Ocean View", "Fitness Center"],
      price: "$500/night",
    },
    {
      id: 3,
      title: "Urban Loft in the City",
      type: "Apartment",
      location: "New York City, Ny",
      rating: 4.8,
      description:
        "Live in style in a modern loft apartment in the head of the city.",
      amenities: ["Downtown Location", "Gym Access", "24/7 Security"],
      price: "$250/night",
    },
    {
      id: 4,
      title: "Rustic Cabin in the Woods",
      type: "Villa",
      location: "New York City, Ny",
      rating: 4.4,
      description: "Escape to nature with this cozy mountain rustic cabin.",
      amenities: ["Wifi", "Private Pool", "24/7 Security"],
      price: "$250/night",
    },
  ];

  const stayData = stays.find((stay) => stay.id == stayId.stayId);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>{stayData.title}</h1>
        <p>Type: {stayData.type}</p>
        <p>Location: {stayData.location}</p>
        <p>Rating: {stayData.rating}</p>
        <p>{stayData.description}</p>
        <hr />
        <h3>Amenities</h3>
        <ul>
          {stayData.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        <p>Price: {stayData.price}</p>
      </main>
      <Footer />
    </>
  );
};

export default StayDetails;
