'use client';

import { useState } from 'react';

export default function AddUserForm({ onAddUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
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
                const errorData = await res.json();
                setError(errorData.message || 'Не вдалося додати користувача');
            }
        } catch (err) {
            setError('Мережева помилка. Спробуйте ще раз.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
            <button type="submit" disabled={isSubmitting}>Додати</button>
        </form>
    );
}
