import React from "react";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  userData: { userType: string; name: string } | null;
}

const Product: React.FC<ProductProps> = ({
  userData,
  imageUrl,
  name,
  description,
  price,
  ...rest
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 transition duration-300 hover:scale-105">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">₹{price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Add to Cart
        </button>
      </div>
      {userData && (
        <p>
          Welcome, {userData.name} ({userData.userType})
        </p>
      )}
    </div>
  );
};

export default Product;
