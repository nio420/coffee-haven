import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

// coffee names from Unsplash URLs
const coffeeImages = {
  Espresso:
    "https://images.unsplash.com/photo-1596018589855-e9a2a91f687f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fEVzcHJlc3NvfGVufDB8fDB8fHww",
  Cappuccino:
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
  Latte:
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
  Macchiato:
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Mocha:
    "https://images.unsplash.com/photo-1650846710059-c7c19841be84?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Americano:
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
  "Flat White":
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",

  Frappuccino:
    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const MenuCard = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  if (!item) return null;

  const isFav = favorites.includes(item.id);

  const toggleFavorite = () => {
    if (isFav) dispatch(removeFavorite(item.id));
    else dispatch(addFavorite(item.id));
  };

  return (
    <div className="group rounded-2xl p-5 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-[1.02] duration-300">
      {/* Coffee Image */}
      <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
        <img
          src={coffeeImages[item.name]}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Name + Price */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold text-white">{item.name}</h3>
        <p className="text-yellow-400 font-bold">{item.price}</p>
      </div>

      {/* Category */}
      <span className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm mb-4">
        {item.category}
      </span>

      {/* Favorite btn */}
      <button
        onClick={toggleFavorite}
        className={`mt-3 w-full py-2 rounded-xl font-semibold flex items-center justify-center space-x-2 transition cursor-pointer
          ${
            isFav
              ? "bg-red-500 text-white"
              : "bg-white/20 text-white hover:bg-white/30"
          }
        `}
      >
        <span>{isFav ? "Added to Favorites" : "Add to Favorites"}</span>
      </button>
    </div>
  );
};

export default MenuCard;
