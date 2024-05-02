import FooterComponent from "./FooterComponent";
import Header from "./Header";
import ListOfTradingItems from "./ListOfTradingItems";
import '../main-component/topcss.css';

export default function MainComponent() {
    return (
        <div className="wrapper" style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
            {/* Main content area with horizontal flexbox */}
            <div style={{ display: 'flex', width: '100%', minHeight: '650px' }}>
                {/* Header section, taking 75% of the width */}
                <div style={{ flex: '3', minHeight: '650px' }}>
                    <Header />
                </div>

                {/* List of Trading Items section, taking 25% of the width */}
                <div style={{ flex: '1', minHeight: '650px' }}> {/* Using flex: '1' to take one part of space */}
                    <ListOfTradingItems />
                </div>
            </div>

            {/* Footer component */}
            <div className="hello">

                 < FooterComponent /> 
            </div>
        </div>
    );
}
