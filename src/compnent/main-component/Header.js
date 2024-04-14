
import { FaSearch  } from "react-icons/fa";

export default function Header() {
    return (
        <div className="w-full flex">
           
            <div className="px-2 rounded-t-lg">
                <select name="inr" >
                    <option value="usd">USD</option>
                    <option value="inr" selected>INR</option>
                    <option value="eur">EUR</option>
                    <option value="">JPY</option>
                </select>

            </div>

            <div className="mx-6 rounded-lg  flex items-center mx-0.5">
                <input className="px-2"  placeholder=" search new Cryto" />
                 <FaSearch className="mx-3"/>
            </div>

        </div>
    )
}