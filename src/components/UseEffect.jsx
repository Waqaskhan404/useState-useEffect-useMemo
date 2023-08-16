import React, { useEffect } from 'react'

const UseEffect = () => {
  useEffect(function(){
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data)
      }
      catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    }
    fetchData();
    return ()=>{
      console.log("Component Unmount");
    }
  },[])


  return (
    <div>UseEffect</div>
  )
}

export default UseEffect