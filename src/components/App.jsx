import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from './Button/Button';
import { fetchUsers } from '../redux/usersOperations';
import { UsersGallery } from './UsersGallery/UsersGallery';
import { useSelector } from 'react-redux';
import { getUsers } from 'redux/userSelectors';
import { AddUserForm } from './AddUserForm/AddUserForm';
function App() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const [isShowForm, setIsShowForm] = useState(false);

  const getArrayOfUsers = () => {
    dispatch(fetchUsers());
  };

  const addUser = () => {
    setIsShowForm(true);
  };

  const hideForm = () => {
    setIsShowForm(false);
  };

  return (
    <>
      {users.length === 0 && (
        <>
          <Button
            type="button"
            handleClick={getArrayOfUsers}
            content="Fetch users"
          />
        </>
      )}
      <UsersGallery />
      {users.length !== 0 && !isShowForm && (
        <>
          <Button type="button" handleClick={addUser} content="Add user" />
        </>
      )}
      {isShowForm && <AddUserForm closeForm={hideForm} />}
    </>
  );
}

export default App;
