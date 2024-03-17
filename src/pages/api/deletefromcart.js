export default async function handler(req, res) {
    if(req.method === 'DELETE') {
        const {userId,id}=req.body;
        const url="https://api.ecommerce.shubhamiitbhu.in";
        try{
            const res1=await fetch(`${url}/api/cart`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id:id,
                    userId:userId
                })
            })
            if(res1.status===200){
                const response=await res1.json();
                res.status(200).json(response);
            }else{
                res.status(res1.status).json({message:"Error fetching data"});
            }
        }catch(err){
            res.status(500).json({message:"Internal server error"});
        }
    }else{
        res.status(405).json({message:"Only POST requests are allowed"});
    }
}