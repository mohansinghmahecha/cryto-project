import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useSelector } from 'react-redux';


Chart.register(...registerables);

export default function GraphDashBoardMain() {
    const [listofdata, setlistofdata] = useState([]);
    const [variablenameshown, setVariableName] = useState('bitcoin');
    const [graphdata, setGraphData] = useState(null);
    const [dayscount, setDaysCount] = useState('7')

    const currencyvariablevalue = useSelector((s) => s.MyCurrencyNames);

    function datachanged(e) {
        setVariableName(e.target.value);
    }
    function onDaysFunction(event) {
        return () => {
            setDaysCount(event.toString())
        }
    }

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchData() {
            try {
                const urlList = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyvariablevalue}`;
                const responseList = await fetch(urlList, { signal: abortController.signal });
                const dataList = await responseList.json();
                setlistofdata(dataList);

                const urlGraph = `https://api.coingecko.com/api/v3/coins/${variablenameshown}/market_chart?vs_currency=${currencyvariablevalue}&days=${dayscount}`;
                const responseGraph = await fetch(urlGraph, { signal: abortController.signal });
                const dataGraph = await responseGraph.json();
                setGraphData(dataGraph);
            } catch (e) {
                if (!abortController.signal.aborted) {
                    console.log('Fetching error:', e);
                    alert(e)
                }
            }
        }

        fetchData();

        return () => {
            abortController.abort();
        };
    }, [currencyvariablevalue, variablenameshown, dayscount]);

    const data = {

        labels: graphdata ? graphdata.prices.map(price => {
            const date = new Date(price[0]);
            return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        }) : [],

        datasets: [
            {
                label: 'Crypto Prices:',
                data: graphdata ? graphdata.prices.map(price => price[1]) : [],
                backgroundColor: 'rgb(75,192,189)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                display: true,
                position: 'left',
                // Dynamically adjust min and max based on the dataset
                min: graphdata ? Math.min(...graphdata.prices.map(price => price[1])) * 0.95 : undefined,
                max: graphdata ? Math.max(...graphdata.prices.map(price => price[1])) * 1.05 : undefined,

            },
            x: {
                position: 'bottom',

            }
        }
    };

    return (
        <div>
            <div className='flex '>
                <select className='border-2 border-yellow-600 rounded-lg mx-2' onChange={datachanged}>
                    {listofdata.map((item, index) => (
                        <option key={index} value={item.id}>{item.id}</option>
                    ))}
                </select>
                <div className='flex'>
                    <button onClick={onDaysFunction(2)} className='rounded m-1 bg-cyan-200 p-1' >2D </button>
                    <button onClick={onDaysFunction(5)} className='rounded m-1 bg-cyan-200 p-1'>5D </button>
                    <button onClick={onDaysFunction(7)} className='rounded m-1 bg-cyan-200 p-1' >7D </button>
                    <button onClick={onDaysFunction(30)} className='rounded m-1 bg-cyan-200 p-1' >1M </button>
                    <button onClick={onDaysFunction(90)} className='rounded m-1 bg-cyan-200 p-1' >3M </button>
                    <button onClick={onDaysFunction(365)} className='rounded m-1 bg-cyan-200 p-1' >1Y </button>
                </div>

            </div>
            <div style={{
                width: '100%',
                height: '500px',

                padding: '20px'
            }}>
                <span> {variablenameshown} </span>
                <span>Language in </span>
                <span className='text-red-600'>{currencyvariablevalue.toUpperCase()}</span>
                {graphdata ? <Line data={data} options={options} /> : <p>Loading graph...</p>}
            </div>
        </div>
    );
}
