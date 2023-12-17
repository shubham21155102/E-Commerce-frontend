import React, { useEffect } from 'react'
import Card from './Card'
import Navigation from '../comonents/Navigation'
const Products = () => {
  const [isLogged, setIsLogged] = React.useState(false);
  useEffect(()=>{
    try{
      const username=localStorage.getItem('username');
      if(username){
        setIsLogged(true);
      }
      else{
        setIsLogged(false);
      }
    }
    catch(err){
      console.log(err);
    }
  },[isLogged])
  return (

    <>


<Card isLogged={isLogged}/>
    </>
  )
}

export default Products