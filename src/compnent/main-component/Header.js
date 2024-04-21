
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { MyCurrencyNames } from "./../../Redux/State/reducer"


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
          <div className="w-full flex">
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

          <div>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </div>
           
           
         

        </div>
       
    )
}