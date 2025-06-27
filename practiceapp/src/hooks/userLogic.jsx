import { getUser, deleteUser, updateUser, addUser } from "../api/api";
import { useState, useEffect } from "react";

const UsersLogic = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [formMode, setFormMode] = useState("add"); // or "edit"
  const [formUser, setFormUser] = useState({ id: "", name: "", email: "" });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const fetchUser = async (pageNumber) => {
    try {
      const response = await getUser(pageNumber);
      setUsers(response.content);
      setPage(response.pageable.pageNumber);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser(page);
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handlePrevious = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleEdit = (user, mode = "edit") => {
    setFormUser(user);
    setFormMode(mode);
    setIsPopupOpen(true);
  };

  const handleAdd = () => {
    setFormUser({ name: "", email: "" });
    setFormMode("add");
    setIsPopupOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      if (formMode === "edit") {
        await updateUser(formUser.id, formUser);
      } else {
        await addUser(formUser); // pass name, email, id (if needed)
      }

      fetchUser(page); // refresh
      setIsPopupOpen(false);
    } catch (err) {
      console.error("Save failed", err);
    }
  };

  const handleCancel = () => setIsPopupOpen(false);

  return {
    users,
    totalPages,
    page,
    isPopupOpen,
    formMode,
    formUser,
    setUsers,
    setIsPopupOpen,
    handleDelete,
    handleEdit,
    handleChange,
    handleSave,
    handleCancel,
    setPage,
    handleNext,
    handlePrevious,
    handlePageClick,
    handleAdd,
  };
};

export default UsersLogic;
