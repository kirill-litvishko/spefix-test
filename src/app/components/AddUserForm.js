// app/components/AddUserForm.js

'use client';

import { useState } from 'react';

export default function AddUserForm({ onAddUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });

        if (res.ok) {
            const newUser = await res.json();
            onAddUser(newUser);
            setName('');
            setEmail('');
        } else {
            console.error('Помилка при додаванні користувача');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ім'я:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Додати</button>
        </form>
    );
}
