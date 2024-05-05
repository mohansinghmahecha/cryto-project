import { Pie } from 'react-chartjs-2';


import React, { useState, useEffect } from 'react';


function PieChartCreated() {
    const [urldata, setUrlData] = useState();



    useEffect(() => {

        const fetchData = async () => {
            try {
                const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether%2Cethereum%2Cbitcoin&order=market_cap_desc`;
                const res = await fetch(url);
                const datafromurl = await res.json()
                setUrlData(datafromurl)

            } catch (error) {
                console.error(error)

            }

        };
        fetchData();
    }, []);

    if (!urldata) {
        return null; // or loading indicator
    }

    const allname = urldata.map(item => item.name);
    const allcounting = urldata.map(item => item.market_cap);
    const totalvalue = urldata.reduce((acc, item) => acc + item.market_cap, 0); 
    
    const data = {
        labels: allname,
    
        datasets: [{
            data:allcounting,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };
    const options = {
        maintainAspectRatio: false, // This will prevent the default behavior of maintaining the aspect ratio
        responsive: true, // Makes the chart responsive to the container's size
    };



    return (
        <div style={{
            width: '100%',
            height: '80%'
        }}>

            <Pie data={data} options={options} />
            <p>totalValue : {totalvalue}</p>


        </div>
    )
}
export default PieChartCreated;