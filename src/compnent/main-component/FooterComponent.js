import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { exchangeFn } from "../../Redux/State/action";

import PieChartCreated from "./PieChartCreated";


export default function FooterComponent() {

    const dispetch = useDispatch();
    const exchangedataforselect = useSelector(state => state.exchangeFunction); // Make sure the path matches where your data is in the Redux store

    const [buy, setBuy] = useState('');
    const [sell, setSell] = useState('');
    const [value, setValue] = useState('');
    const [qnty, setQuantity] = useState(1);


    function btnExchange() {
        const buyNumber = parseFloat(buy); // Ensure conversion to number
        const sellNumber = parseFloat(sell); // Ensure conversion to number
        const quantityNumber = parseFloat(qnty); // Ensure conversion to number

        const result = (sellNumber / buyNumber) * quantityNumber;
        setValue(result.toFixed(3));

    }


    function onBuy(e) {
        setBuy(e.target.value);
    }
    function onSell(e) {
        setSell(e.target.value);
    }
    function quantity(e) {
        setQuantity(e.target.value);

    }
    useEffect(
        () => {
            async function dataload() {
                try {
                    //var url = 'https://api.coingecko.com/api/v3/exchange_rates';
                    var url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
                    var resp = await fetch(url)
                    var newresp = await resp.json()

                    dispetch(exchangeFn(newresp))
                } catch (error) {
                    console.log('while loading found error ', error);
                }

            }
            dataload()

        }, [dispetch]
    )
    return (
        <div className="flex flex-row w-full h-auto  rounded  bg-gray-200">
            
            <div className="w-2/4 h-auto mr-2 bg-white rounded m-1">Porfolio
            
                <PieChartCreated/>

            
            </div>
            
            <div className="w-2/4 h-auto m-1 bg-white rounded">

                <h1 className="text-left font-medium text-[18px] ml-2 mt-2 mb-2" >Exchange Coin</h1>
                <div className="flex">
                    <spam className="ml-1 text-red">Sell</spam>
                    <select onChange={onSell} className="ml-1">
                        {Object.entries(exchangedataforselect).map(([key, value]) => (

                            <option value={value.current_price}>{value.name}</option>
                        ))}
                    </select>
                    <p>{sell}</p>
                    <input type="number" placeholder="Quantity" onChange={quantity} className="ml-4 w-1/5"></input>

                </div>
                <div className="flex mt-6 ">
                    <spam className="ml-1 text-green">Buy</spam>
                    <select onChange={onBuy} className="ml-1">
                        {
                            Object.entries(exchangedataforselect).map(([key, value]) => {
                                return <option value={value.current_price}>{value.name}</option>
                            }

                            )
                        }
                    </select>
                    <p>{buy}</p>
                    <p className="ml-4">Value: {value}</p>

                </div>
                <button className="mt-4 bg-blue-500 rounded-lg p-2 text-[16px]" onClick={btnExchange}>Exchange</button>



            </div>


        </div>
    )

}
