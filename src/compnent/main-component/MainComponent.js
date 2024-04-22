import Header from "./Header";
import ListOfTradingItems from "./ListOfTradingItems";

export default function MainComponent() {
    return (
        <div style={{ width: '100%', display: 'flex', marginTop: '5rem' }}>
            {/* Chat component */}
            <div style={{ width: '75%' }}>
                <Header />
            </div>

            {/* List chart component */}
            <div style={{ width: '25%' }}>
                <ListOfTradingItems />
            </div>
        </div>
    );
}
