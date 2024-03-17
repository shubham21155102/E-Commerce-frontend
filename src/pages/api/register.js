export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, password,fname,lname,email,cpassword,phone} = req.body; 
        console.log("username: ", username);
        console.log("password",password);
        const url="https://api.ecom.shubhamiitbhu.in";
        try {
            const response = await fetch(`${url}/api/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    phone,
                    email,
                    cpassword,
                    username,
                    password
                })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const data = await response.json();
            res.status(200).json(data); // Send the fetched data as a response
        } catch (error) {
            console.error("Error fetching data:", error);
            res.status(500).json({ error: 'Internal Server Error' }); // Send an error response
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' }); // Send an error if the method is not GET
    }
}
