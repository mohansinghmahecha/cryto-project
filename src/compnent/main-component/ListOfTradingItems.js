import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ListOfTradingItems() {
    const currencyvariablevalue = useSelector(state => state.MyCurrencyNames);
    const [listdataloaded, setListDataUpdate] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;  // Number of items you want to display per page

    // Function to handle pagination
    function onNextButtonClick() {
        setCurrentPage(currentPage + 1);
    }


    /*     useEffect(() => {
            async function listOfTradingFunction() {
                // const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyvariablevalue}&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&locale=en`;
                const url = `/api/v3/coins/markets?vs_currency=${currencyvariablevalue}&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&locale=en`;
    
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setListDataUpdate(data);
                } catch (error) {
                    console.error("Failed to fetch data:", error);
                }
            }
            listOfTradingFunction();
        }, [currencyvariablevalue, currentPage]);  */

    useEffect(() => {
        async function fetchTradingData() {
            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyvariablevalue}&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&locale=en`;
            try {
                const response = await fetch(url);
                /* if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } */
                const data = await response.json(); // Attempt to parse JSON
                setListDataUpdate(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }
        fetchTradingData();
    }, [currencyvariablevalue, currentPage]);



    return (
        <>
            <div>
                <h1 className="text-red-500">Cryptocurrency Dashboard</h1>
                <div className="bg-cyan-300 rounded-lg mt-4">
                    <p >{currencyvariablevalue.toUpperCase()}</p>
                </div>

                <div className="main">

                    {listdataloaded.slice(0, itemsPerPage).map((item, key) => (
                        <div className="rounded-lg w-auto border-2 border-black-600 m-2 flex flex-col p-2" key={key}>

                            <div style={
                                {
                                    display: 'grid',
                                    gridTemplateColumns: '80px 1fr'
                                   

                                }
                            } className="	">
                            <div>
                                <img src={item.image} width="50px" alt={item.name} />
                            </div>
                            <div>
                                <p className="mx-1 mt-2 text-left">{item.name}</p>
                                <p className="mt-0 text-left">Price: {item.current_price}</p>

                            </div>

                        </div>
                        </div>
                    ))}

                <button className="p-2 bg-cyan-300 rounded-lg mt-4" onClick={onNextButtonClick}>Next</button>
            </div>
        </div >
        </>
    );
}
