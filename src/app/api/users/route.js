// src/app/api/users/route.js
let users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

export async function GET(req) {
    // Завжди повертаємо актуальний список
    return new Response(JSON.stringify(users), {
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(req) {
    const body = await req.json();

    // Генеруємо ID для нового користувача
    const newUser = { id: users.length + 1, ...body };
    users.push(newUser); // Додаємо до масиву
    console.log(users);
    // Повертаємо підтвердження з новим користувачем
    return new Response(JSON.stringify(newUser), {
        headers: { "Content-Type": "application/json" },
    });
}
