// app/page.js

import UserList from './components/UserList';

export default async function HomePage() {
  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Помилка при завантаженні користувачів');
  }

  const users = await res.json();

  return (
    <main>
      <h1>Список користувачів</h1>
      <UserList initialUsers={users} />
    </main>
  );
}
