export const getUser = async (pageNumber) => {
  const response = await fetch(`http://localhost:8080/user?page=${pageNumber}&size=10`, {
    method: "GET",
  });
  return await response.json();
};

export const getUserById = async (id) => {
  const response = await fetch(`http://localhost:8080/user/${id}`, {
    method: "GET",
  });
  return await response.json();
};

export const deleteUser = async (id) => {
  const response = await fetch(`http://localhost:8080/user/${id}`, {
    method: "DELETE",
  });
  return await response.text();
}

export const updateUser = async (id, userData) => {
  const response = await fetch(`http://localhost:8080/user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return await response.json();
};

// export const addUser = async (userData) => {
//   const response = await fetch("http://localhost:8080/user", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(userData)
//   });

//   if (!response.ok) throw new Error("Failed to create user");
//   return await response.json();
// };

export const addUser = async (userData) => {
  const response = await fetch(`http://localhost:8080/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return await response.json();
};