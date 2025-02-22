import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import fetchingData from "../../api/property.js";

const AllProperties = () => {
  const { handleSubmit, register, setValue, watch } = useForm();
  const [filtered, setFiltered] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Watch selected types to conditionally render Bedroom and Parking
  const selectedTypes = watch("type", []);

  // Ensure selectedTypes is always an array
  const typesArray = Array.isArray(selectedTypes)
    ? selectedTypes
    : [selectedTypes];

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const type = urlParams.getAll("type");
    const purpose = urlParams.get("purpose");
    const sortByPrice = urlParams.get("sortByPrice");
    const locationFilter = urlParams.get("location");
    const bedroom = urlParams.get("bedroom");
    const parking = urlParams.get("parking");

    // Pre-fill the form with the URL parameters (if any)
    if (purpose) {
      setValue("purpose", purpose);
    }
    if (type.length) {
      setValue("type", type); // Set the "type" field as an array
    }
    if (locationFilter) {
      setValue("location", locationFilter);
    }
    if (sortByPrice) {
      setValue("sortByPrice", sortByPrice); // Pre-select the sort option
    }
    if (bedroom) {
      setValue("bedroom", bedroom); // Set the bedroom filter
    }
    if (parking) {
      setValue("parking", parking); // Set parking filter
    }

    const fetchData = async () => {
      try {
        const response = await fetchingData(urlParams.toString());
        let filteredData = response;

        // Apply filters
        if (type.length) {
          filteredData = filteredData.filter((p) => type.includes(p.type));
        }
        if (purpose) {
          filteredData = filteredData.filter((p) => p.purpose === purpose);
        }
        if (locationFilter) {
          filteredData = filteredData.filter((p) =>
            p.location.toLowerCase().includes(locationFilter.toLowerCase())
          );
        }
        if (bedroom) {
          filteredData = filteredData.filter((p) => p.bedroom >= bedroom);
        }
        if (parking) {
          filteredData = filteredData.filter((p) => p.parking === parking);
        }

        // Sort by price if the option is selected
        if (sortByPrice) {
          if (sortByPrice === "low-to-high") {
            filteredData = filteredData.sort((a, b) => a.price - b.price);
          } else if (sortByPrice === "high-to-low") {
            filteredData = filteredData.sort((a, b) => b.price - a.price);
          }
        }

        setFiltered(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [location.search]);

  const onSubmit = (data) => {
    const newParams = new URLSearchParams();
    if (data.purpose) {
      newParams.set("purpose", data.purpose);
    }
    if (data.type) {
      const types = Array.isArray(data.type) ? data.type : [data.type];
      types.forEach((t) => newParams.append("type", t));
    }
    if (data.sortByPrice) {
      newParams.set("sortByPrice", data.sortByPrice);
    }
    if (data.location) {
      newParams.set("location", data.location);
    }
    if (data.bedroom) {
      newParams.set("bedroom", data.bedroom);
    }
    if (data.parking) {
      newParams.set("parking", data.parking);
    }

    // Update URL with new query params
    navigate(`/?${newParams.toString()}`);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        {/* Search Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Purpose Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Purpose
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      {...register("purpose")}
                      value="buy"
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm">Buy</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      {...register("purpose")}
                      value="rent"
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm">Rent</span>
                  </label>
                </div>
              </div>

              {/* Property Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("type")}
                      value="land"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm">Land</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("type")}
                      value="house"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm">House</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("type")}
                      value="appartment"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm">Apartment</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sort by Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort by Price
                </label>
                <select
                  {...register("sortByPrice")}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="low-to-high">Low to High</option>
                  <option value="high-to-low">High to Low</option>
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  {...register("location")}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter city or neighborhood"
                />
              </div>
            </div>

            {/* Bedroom Filter - Conditional Rendering */}
            {(typesArray.includes("house") ||
              typesArray.includes("appartment")) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bedrooms
                  </label>
                  <select
                    {...register("bedroom")}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5">5+ Bedrooms</option>
                  </select>
                </div>

                {/* Parking Filter - Conditional Rendering */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parking
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("parking")}
                        value="yes"
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("parking")}
                        value="no"
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm">No</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Apply Filters
            </button>
          </form>
        </div>

        {/* Property List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length ? (
            filtered.map((property, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={property.image || "https://via.placeholder.com/300"}
                  alt={property.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{property.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {property.type} · {property.purpose}
                </p>
                <p className="text-lg font-semibold mb-2">${property.price}</p>
                <p className="text-sm text-gray-600 mb-2">
                  {property.location}
                </p>
                <div className="flex space-x-4 text-sm text-gray-600">
                  <span>{property.bedroom} Bedrooms</span>
                  <span>{property.parking} Parking</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No properties found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
