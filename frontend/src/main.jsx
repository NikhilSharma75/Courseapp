import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51Pgo0LK3VX2gDSK2iO3yW1c0mDDJrLH0Jyh0y1fE4hYl9Ezez0lYDwzTKs075kBL5z9AvXjxwU1n1lYeAGJ6wr1v00pw7W8V9Y"
);

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
