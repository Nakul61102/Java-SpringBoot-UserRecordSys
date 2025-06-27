import React from "react";

const UserForm = ({ isOpen, mode, user, onChange, onSave, onCancel }) => {
  if (!isOpen) return null;

  const isEdit = mode === "edit";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl font-semibold mb-4">
          {mode === "add" ? "Add User" : "Edit User"}
        </h2>

        {/* <input
          type="file"
          accept="image/*"
          name="faceImage"
          onChange={onImageChange}
          className="w-full mb-3 px-4 py-2 border rounded"
        /> */}

        <input
          type="text"
          name="name"
          value={user.name}
          onChange={onChange}
          placeholder="Name"
          className="w-full mb-3 px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={onChange}
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {isEdit ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
