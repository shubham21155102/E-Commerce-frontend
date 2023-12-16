export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;
        console.log("username: ", username);
        console.log("password", password);
        try {
            const response = await fetch(`https://cec0-103-194-71-218.ngrok-free.app/api/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            res.status(500).json({ error: 'Internal Server Error' }); 
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' }); 
    }
}
