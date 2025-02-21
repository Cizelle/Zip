import React from "react";
import { useState } from "react";
import { User, LogIn, UserPlus, Droplet, Heart, Users } from "lucide-react";

const HomePage = () => {
  const [stats] = useState({
    donorsHelped: 1500,
    recipientsHelped: 1200,
    successfulDonations: 1800,
  });

  const [healthFacts] = useState([
    "One blood donation can save up to three lives",
    "Blood cannot be manufactured; it can only come from generous donors",
    "Red blood cells can be stored for up to 42 days",
    "Type O-negative blood is known as the universal donor type",
    "Someone needs blood every two seconds",
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Droplet className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                BloodLife
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </button>
              <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                <UserPlus className="h-5 w-5 mr-2" />
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {}
      <div className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Save Lives Through Blood Donation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with donors and recipients in your area
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                Donate Blood
              </button>
              <button className="px-6 py-3 bg-white text-red-500 border border-red-500 rounded-md hover:bg-red-50">
                Request Blood
              </button>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">
                {stats.donorsHelped}
              </h3>
              <p className="text-gray-600">Donors Helped</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">
                {stats.recipientsHelped}
              </h3>
              <p className="text-gray-600">Recipients Helped</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <Droplet className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">
                {stats.successfulDonations}
              </h3>
              <p className="text-gray-600">Successful Donations</p>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Blood Donation Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthFacts.map((fact, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
