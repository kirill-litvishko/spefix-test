export async function fetchUsers() {
    const res = await fetch('/api/users', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Помилка при завантаженні користувачів');
    }

    return await res.json();
}
