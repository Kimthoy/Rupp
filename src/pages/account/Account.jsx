import React, { useState } from "react";

const Account = () => {
  const [tab, setTab] = useState("profile");

  // Fake user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main Street, City, Country",
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-[#006699]">My Account</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b">
        <button
          className={`pb-2 text-[#006699] border-b-2 ${
            tab === "profile"
              ? "border-[#006699] font-semibold"
              : "border-transparent"
          }`}
          onClick={() => setTab("profile")}
        >
          Profile Info
        </button>
        <button
          className={`pb-2 text-[#006699] border-b-2 ${
            tab === "password"
              ? "border-[#006699] font-semibold"
              : "border-transparent"
          }`}
          onClick={() => setTab("password")}
        >
          Change Password
        </button>
        <button
          className={`pb-2 border-b-2 text-[#006699] ${
            tab === "orders"
              ? "border-[#006699] font-semibold"
              : "border-transparent"
          }`}
          onClick={() => setTab("orders")}
        >
          My Orders
        </button>
      </div>

      {/* Content */}
      <div className="bg-white p-6 rounded shadow">
        {tab === "profile" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#006699]">
                Full Name
              </label>
              <input
                type="text"
                defaultValue={user.name}
                className="mt-1 block w-full border px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#006699]">
                Email
              </label>
              <input
                type="email"
                defaultValue={user.email}
                className="mt-1 block w-full border px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#006699]">
                Phone
              </label>
              <input
                type="text"
                defaultValue={user.phone}
                className="mt-1 block w-full border px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#006699]">
                Address
              </label>
              <textarea
                defaultValue={user.address}
                className="mt-1 block w-full border px-4 py-2 rounded"
              ></textarea>
            </div>
            <button className="bg-[#006699] text-white px-4 py-2 rounded hover:bg-gray-800">
              Save Changes
            </button>
          </div>
        )}

        {tab === "password" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#006699]">
                Current Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full border px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#006699]">
                New Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full border px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#006699]">
                Confirm New Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full border px-4 py-2 rounded"
              />
            </div>
            <button className="bg-[#006699] text-white px-4 py-2 rounded hover:bg-gray-800">
              Update Password
            </button>
          </div>
        )}

        {tab === "orders" && (
          <div className="space-y-4">
            <p className="text-gray-600">You haven’t placed any orders yet.</p>
            {/* Later: List past orders with dates, status, amount */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
