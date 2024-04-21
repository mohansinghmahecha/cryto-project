import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function ListOfTradingItems() {
    const currencyvariablevalue = useSelector(state => state.MyCurrencyNames);

    const [listdataloaded, setListDataUpdate] = useState([]);
    console.log(listdataloaded);
    
    useEffect(() => {
        async function listOfTradingFunction() {
            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyvariablevalue}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setListDataUpdate(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }
        listOfTradingFunction();
    }, [currencyvariablevalue]); // Added dependency on currencyvariablevalue

    return (
        <>
            <div>
                <h1>Cryptocurrency by market cap</h1>
                <div>
                    <p>{currencyvariablevalue}</p>
                </div>
                <div className="main">

                    {listdataloaded.map((item, key) => (
                        <div className="rounded-lg border-2 border-orange-600 m-2 flex p-2" key={key}>
                        <img src={item.image} width={'50px'} alt={item.name} />
                        <p className="mx-5 mt-2">{item.name}</p>
                        <div className="block">
                            <p>{item.current_price}</p>
                        </div>
                    </div>
                        
                       
                    ))}


                </div>
            </div>
        </>
    );
}
