// Components/AddUserButton.jsx
import React from "react";

const AddUserButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 gap-2 m-5"
    >
      Add User
    </button>
  );
};

export default AddUserButton;
