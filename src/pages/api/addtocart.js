export default async function handler(req, res) {
    if(req.method === 'POST') {

        // {
        //     "userId":"shubham",
        //     "productId":"xyzw",
        //     "brand":"HnM",
        //     "color":"red",
        //     "discount":"70%off",
        //     "price":"200",
        //     "sellingPrice":"1000",
        //     "imageUrl":"xx",
        //     "size":"36",
        //     "title":"Hello from shubham"
        // }
        
        var userId="admin";
        var productId="xyzw";
        var brand="HnM";
        var color="red";
        var discount="70%off";
        var price="200";
        var sellingPrice="1000";
        var imageUrl="xx";
        var size="36";
        var title="Hello from shubham";
        
        const x = req.body
        // console.log(x)
        imageUrl=x.imageUrl || imageUrl;
        userId=x.userId || userId;
        productId=x.id || productId;
        brand=x.brand || brand;
        color=x.color || color;
        discount=x.disscount || discount;
        price=x.price || price;
        sellingPrice=x.selling_price || sellingPrice;
        size=x.size || size;
        title=x.title || title;
        const url="https://api.ecommerce.shubhamiitbhu.in"
        console.log(x)
        try{
            const res1=await fetch(`${url}/api/cart/addtocart`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    userId,
                    productId,
                    brand,
                    color,
                    discount,
                    price,
                    sellingPrice,
                    imageUrl,
                    size,
                    title
                })
            })
            const data=await res1.json()
            console.log(data.status+" 59th line")
            if(data.status=="OK"){
                console.log("hii")
               await res.status(200).json({status:"OK"})
            }
            else{
              await  res.status(500).json({status:"BAD"});
            }
        }
        catch(err){
            console.log(err)
            await res.status(500).json({status:"BAD"});
        }
    } else {
        // res.send('Please use POST request');
        res.status(500).json({status:"BAD"});
    }
}
