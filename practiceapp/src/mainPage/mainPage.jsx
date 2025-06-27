import UserTable from "../Components/table";
import Pagination from "../Components/pagination";
import SearchUser from "../Components/search";
import useUserHooks from "../hooks/userLogic";
import UserForm from "../Components/editForm";
import AddUserButton from "../Components/addUserButton";

const MainPage = () => {
  const {
    setUsers,
    users,
    totalPages,
    page,

    isPopupOpen,
    handleDelete,
    handleEdit,
    handleChange,
    handleSave,
    handleAdd,
    handleCancel,
    formMode,
    formUser,
    handleNext,
    handlePrevious,
    handlePageClick,
  } = useUserHooks();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gray-700 m-5">
      <div className="mb-8 flex items-center justify-between gap-8">  
      <SearchUser setUsers={setUsers} />
      <AddUserButton onClick={handleAdd} />
      </div>
      <UserTable users={users} onDelete={handleDelete} onEdit={handleEdit} />
      <UserForm
        isOpen={isPopupOpen}
        mode={formMode}
        user={formUser}
        onChange={handleChange}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <Pagination
        page={page}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePageClick={handlePageClick}
        handlePrevious={handlePrevious}
      />
    </div>
  );
};

export default MainPage;
