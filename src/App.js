import './App.css';
import React, { useState } from 'react';
import faker from 'faker';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const handleAddUsers = () => {
    const newRandomUser = {
      name: faker.name.findName(),
      uid: faker.random.uuid(),
    };
    setUsers([...users, newRandomUser]);
  };

  const handleRemoveUsers = (uid) => {
    const newUsers = users.filter((user) => user.uid !== uid);
    setUsers(newUsers);
  };

  const handleUpdateUsers = (uid) => {
    const newUsers = users.map((user) => {
      if (user.uid === uid) {
        return { ...user, name: faker.name.findName() };
      }
      return user;
    });
    setUsers(newUsers);
  };

  return (
    <>
      <ul style={{ listStyleType: 'none' }}>
        {users.map((user) => (
          <li key={user.uid}>
            {user.name}
            <button type="button" onClick={() => handleUpdateUsers(user.uid)}>
              Update Name
            </button>
            <button type="button" onClick={() => handleRemoveUsers(user.uid)}>
              Delete Name
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAddUsers}>
        Agregar random name
      </button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Actualizar arrays con useState (CRUD)</div>
        <UserList />
      </header>
    </div>
  );
}

export default App;
