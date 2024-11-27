import { fetchUsers } from './utils/api';
import UserList from './components/UserList';

export default async function HomePage() {
  try {
    const users = await fetchUsers();

    return (
      <main>
        <h1>Список користувачів</h1>
        <UserList initialUsers={users} />
      </main>
    );
  } catch (error) {
    return (
      <main>
        <p>Не вдалося завантажити дані: {error.message}</p>
      </main>
    );
  }
}
