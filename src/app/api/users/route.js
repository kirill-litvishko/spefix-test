import { v4 as uuidv4 } from "uuid";

let users = [
    { id: uuidv4(), name: "John Doe", email: "john.doe@example.com" },
    { id: uuidv4(), name: "Jane Smith", email: "jane.smith@example.com" },
];


export async function GET(req) {
    return new Response(JSON.stringify(users), {
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(req) {
    const body = await req.json();

    const emailExists = users.some((user) => user.email === body.email);
    if (emailExists) {
        return new Response(JSON.stringify({ message: "Email вже існує." }), {
            status: 409,
            headers: { "Content-Type": "application/json" },
        });
    }

    const newUser = { id: uuidv4(), ...body };
    users.push(newUser);
    console.log(users);

    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}
