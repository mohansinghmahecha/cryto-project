import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { exchangeFn } from "../../Redux/State/action";
import { exchangeFunction } from "../../Redux/State/reducer";

export default function FooterComponent() {
    const [exchangeRates, setexchangeRates] = useState();
    const dispetch = useDispatch();
    const exchangedataforselect = useSelector(state => state.exchangeFunction); // Make sure the path matches where your data is in the Redux store

    useEffect(
        () => {
            async function dataload() {
                try {
                    // var url = 'https://api.coingecko.com/api/v3/search/trending';
                    var url = 'https://api.coingecko.com/api/v3/exchange_rates';
                    var resp = await fetch(url)
                    var newresp = await resp.json()

                    console.log('api is ', newresp.rates);

                    dispetch(exchangeFn(newresp.rates))
                } catch (error) {
                    console.log('while loading found error ', error);
                }

            }
            dataload()

        }, [dispetch]
    )
    return (
        <div className="border-4 border-sky-600 flex flex-row w-full h-1/5">
            {console.log(exchangedataforselect)}
            <div className="w-2/4 h-full bg-amber-300">Porfolio
            </div>
            <div className="w-2/4 h-full bg-amber-700">

                <h1>Exchange</h1>
                <div>
                    <spam>Sell</spam>
                    <select>
                        {exchangedataforselect && Object.entries(exchangedataforselect).map(([key, value]) => (
                            // Added return statement here
                            <option key={key} value={key}>{key} - {value.name}</option>
                        ))}
                    </select>

                </div>
                <div>
                    <spam>Buy</spam>
                </div>



            </div>


        </div>
    )

}
