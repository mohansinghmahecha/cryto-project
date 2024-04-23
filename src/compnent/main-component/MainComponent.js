import Header from "./Header";
import ListOfTradingItems from "./ListOfTradingItems";

export default function MainComponent() {
    return (
        <div className="wrapper" style={{ width: '100%', display: 'flex', marginTop: '5rem', flexWrap: 'wrap'}}>
        <div style={{ flex: '1 1 70%' }}> {/* s Use flex-grow, flex-shrink, and flex-basis */}
            <Header />
        </div>
        <div style={{ flex: '1 1 25%' }}>
            <ListOfTradingItems />
        </div>
    </div>
    
    );
}
