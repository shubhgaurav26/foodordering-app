import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu =()=> {

    const[resInfo,setResInfo]=useState(null);

    useEffect(()=> {
        fetchMenu();

    },[]);
    const fetchMenu = async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    };
    const {name , cuisines, costForTwoMessage} = resInfo?.cards[2].card?.card?.info;

 
    
    return resInfo==null?(
        <Shimmer/>
    ):(
        <div className ="menu">
            <h1>{name}</h1>
            <h1>{cuisines.join(",")}</h1>
            <h1>{costForTwoMessage}</h1>
            
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Roti</li>
                <li>Cold Drink</li>
                <li>Tea</li>

            </ul>

        </div>
    );
};
    

export default RestaurantMenu;