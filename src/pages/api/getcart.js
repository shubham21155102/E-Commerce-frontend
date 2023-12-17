export default async function handler(req, res) {
    if(req.method==="POST"){
        const {username}=req.body;
        try{
            const data=await fetch(`http://localhost:3000/api/cart/getcart`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    userId:username
                })
            })
            console.log(data.status)
            console.log(data.message)
            // const t=JSON.stringify(data, null, 2);
            // console.log(t);
            const response=await data.message.json();
            console.log(response);
            res.status(200).json(response);
        }
        catch(err){
            console.log(err);
        }
    }
    else{
        res.status(405).json({message:"Only POST requests are allowed"});
    }
}