export default async function handler(req, res) {
    if (req.method == "POST") {
        const name = req.body.name;
        const email = req.body.email;
        const subject = req.body.subject;
        const message = req.body.message;
        const url = "https://api.ecom.shubhamiitbhu.in";
        // console.log(name, email, subject, message)
        // res.status(200).json({ message: "Email sent successfully" })
        try {
            const res = fetch(`${url}/api/email/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                })
            })
            const data = await res.json()
            console.log(data)
            res.status(200).json({ message: "Email sent successfully" })
        } catch (err) {
            res.status(500).json({ message: "Internal server error" })
        }

    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}