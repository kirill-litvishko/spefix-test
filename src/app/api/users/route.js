let users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

export async function GET(req) {
    return new Response(JSON.stringify(users), {
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(req) {
    const body = await req.json();

    const newUser = { id: users.length + 1, ...body };
    users.push(newUser);
    console.log(users);

    return new Response(JSON.stringify(newUser), {
        headers: { "Content-Type": "application/json" },
    });
}
