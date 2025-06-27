import React from "react";
import { useState } from "react";
import { getUserById } from "../api/api";

const SearchUser = ({ setUsers }) => {
  const [searchId, setSearchId] = useState("");

  const handleSearch = async () => {
    if (!searchId) return;
    try {
      const response = await getUserById(searchId);
      setUsers([response]); // setting as array for compatibility with table
      
      
    } catch (error) {
      console.error("User not found", error);
      setUsers([]);
    }
  };

  return (
    <div className="flex gap-2 m-5">
      <input
        type="number"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Enter user ID"
        className="px-3 py-2 border rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchUser;
