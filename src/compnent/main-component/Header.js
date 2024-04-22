
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { MyCurrencyNames } from "./../../Redux/State/reducer"
import GraphDashBoardMain from "../graph-dashboard/GraphDashBoardMain";


export default function Header() {
    const [currencyName, setCurrencyName] = useState("")
    const dispatch = useDispatch()


    useEffect(
        () => {

        }, [setCurrencyName]
    )

    const selectCurrencyfunction = (e) => {
        var i = e.target.value;
        setCurrencyName(i);
        console.log("data local updated", i);
        dispatch({ type: "NAME", payload: i }); // Dispatch action directly with payload
        
       
    };


    return (
        <div >
          <div className="w-full flex ">
          <div className="px-2 rounded-t-lg">
                <select defaultValue="inr" onChange={selectCurrencyfunction} >
                    <option value="usd">USD</option>
                    <option value="inr" >INR</option>
                    <option value="eur">EUR</option>
                    <option value="jpy">JPY</option>
                </select>

            </div>

            <div className="mx-6 rounded-lg  flex items-center mx-0.5">
                <input className="px-2" placeholder=" search new Cryto" />
                <FaSearch className="mx-3" />
            </div>
          </div>

          <div className="border-4 border-black-600 m-8 ">
            <GraphDashBoardMain />
          </div>
           
           
         

        </div>
       
    )
}