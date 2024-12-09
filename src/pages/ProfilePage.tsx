import React, { useEffect, useState } from "react";
import { decodeToken } from "../util/auth";


interface UserInfo {
  user: string;
}
export default function ProfilePage() {

const [userInfo, setUserInfo] = useState<UserInfo>({ user: "" }); 

useEffect(() => {
  const token = sessionStorage.getItem("token") || "";

  const decoded = decodeToken(token);
  if (decoded) {
    setUserInfo(decoded); 
  }
}, []);

if (!userInfo) {
  return <p>Loading user information...</p>;
}

console.log(" userInfo", userInfo);


  const [formData, setFormData] = useState({
    firstname: "mor_2314",
    lastname: "Doe",
    email: "user@gmail.com",
    address: "123 Main Street, United State",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data for API request
    const patchData = {
      email: formData.email,
      username: "johnd",
      password: formData.newPassword || "m38rmF$",
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    };

    try {
      const response = await fetch("https://fakestoreapi.com/users/7", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patchData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Profile updated successfully!");
        console.log("Updated user data:", result);
      } else {
        setMessage("Failed to update profile. Please try again.");
        console.error("Error updating profile:", result);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="pb-32 px-32">
      <div className="flex justify-between py-16">
        <div className="text-sm text-gray-600 mb-4">
          Home / <span className="font-semibold">My Account</span>
        </div>

        <div className="text-right mb-6">
          <span className="text-gray-700">Welcome!</span>{" "}
          <span className="text-red-500 font-semibold">{userInfo.user}</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <aside className="w-full lg:w-1/4 bg-white ">
          <h2 className="text-lg font-semibold mb-6">Manage My Account</h2>
          <nav>
            <ul className="space-y-4 ml-8">
              <li>
                <a href="#" className="text-red-500 font-medium">
                  My Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700">
                  Address Book
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700">
                  My Payment Options
                </a>
              </li>
            </ul>
          </nav>

          <h2 className="text-lg font-semibold mt-8 mb-6">My Orders</h2>
          <nav>
            <ul className="space-y-4 ml-8">
              <li>
                <a href="#" className="text-gray-700">
                  My Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700">
                  My Cancellations
                </a>
              </li>
            </ul>
          </nav>

          <h2 className="text-lg font-semibold mt-8 mb-6">My Wishlist</h2>
        </aside>

        <main className="w-full lg:w-3/4 bg-white shadow p-16 lg:ml-8">
          <h1 className="text-2xl font-semibold mb-6 text-red-500">
            Edit Your Profile
          </h1>
          {message && (
            <p
              className={`mb-4 text-sm ${
                message.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full lg:w-1/2 px-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 focus:ring-0 focus:outline-none rounded px-4 p-3"
                />
              </div>
              <div className="w-full lg:w-1/2 px-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 focus:ring-0 focus:outline-none rounded px-4 p-3"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full lg:w-1/2 px-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 focus:ring-0 focus:outline-none rounded px-4 p-3"
                />
              </div>
              <div className="w-full lg:w-1/2 px-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 focus:ring-0 focus:outline-none rounded px-4 p-3"
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-4">Password Changes</h2>
              <div className="space-y-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Current Password"
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 focus:ring-0 focus:outline-none rounded px-4 p-3"
                />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 focus:ring-0 focus:outline-none rounded px-4 p-3"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 focus:ring-0 focus:outline-none rounded px-4 p-3"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
