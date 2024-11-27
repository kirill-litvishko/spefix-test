export async function fetchUsers() {
    const res = await fetch(`${process.env.API_BASE_URL}/users`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Помилка при завантаженні користувачів');
    }

    return await res.json();
}
