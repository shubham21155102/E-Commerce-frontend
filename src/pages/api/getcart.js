export default async function handler(req, res) {
    if(req.method==="POST"){
        const {username}=req.body;
        console.log("username serverless", username);
        try {
            const data = await fetch(`https://api.ecommerce.shubhamiitbhu.in/api/cart/getcart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: username
                })
            });

            console.log(data.status);

            if (data.status === 200) {
                const response = await data.json();
                // console.log(response);
                res.status(200).json(response);
            } else {
                // console.log("Error fetching data:", data.statusText);
                res.status(data.status).json({ message: "Error fetching data" });
            }
        } catch (err) {
            // console.log(err);
            res.status(500).json({ message: "Internal server error" });
        }
    } else {
        res.status(405).json({ message: "Only POST requests are allowed" });
    }
}
