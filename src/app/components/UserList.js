'use client';

import { useState } from 'react';
import AddUserForm from './AddUserForm';

export default function UserList({ initialUsers }) {
    const [users, setUsers] = useState(initialUsers);

    const addUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    return (
        <div>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} ({user.email})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Користувачі не знайдені</p>
            )}
            <AddUserForm onAddUser={addUser} />
        </div>
    );
}
