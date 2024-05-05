import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ListOfTradingItems() {
    const currencyvariablevalue = useSelector(state => state.MyCurrencyNames);
    const [listdataloaded, setListDataUpdate] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;  // Number of items you want to display per page

    // Function to handle pagination
    function onNextButtonClick() {
        setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
        async function fetchTradingData() {
            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyvariablevalue}&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&locale=en`;
            try {
                const response = await fetch(url);
                const data = await response.json(); // Attempt to parse JSON
                setListDataUpdate(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }
        fetchTradingData();
    }, [currencyvariablevalue, currentPage]);

    return (
        <div className="xl:block lg:block 2xl:block hidden sm:block md:block h-[200px]">
            <h1 className="text-red-500">Cryptocurrency Dashboard</h1>
            <div className="bg-cyan-300 rounded-lg mt-4">
                <p >{currencyvariablevalue.toUpperCase()}</p>
            </div>
            <div className="main">
                {listdataloaded.slice(0, itemsPerPage).map((item, key) => (
                    <div className="rounded-lg w-full border-2 border-black-600 m-2 flex flex-col p-2" key={key}>
                        <div className="flex items-center">
                            <img src={item.image} width="50px" alt={item.name} />
                            <p className="mx-1 mt-2">{item.name}</p>
                            <p className="mx-1 mt-2 text-green-600 ">Rank:{item.market_cap_rank}</p>
                        </div>
                        <p className="mt-0 text-left">Price: {item.current_price}</p>
                        <p className="mt-0 text-left">Total cap.: {item.market_cap}</p>
                    </div>
                ))}
                <button className="p-2 bg-cyan-300 rounded-lg mt-4" onClick={onNextButtonClick}>Next</button>
            </div>
        </div>
    );
}
