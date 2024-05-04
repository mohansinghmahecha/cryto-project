import FooterComponent from "./FooterComponent";
import Header from "./Header";
import ListOfTradingItems from "./ListOfTradingItems";
import '../main-component/topcss.css';

export default function MainComponent() {
    return (
      
        <div className="parent">
            <div>
            <Header />

            < FooterComponent /> 
            </div>
            <div>
            <ListOfTradingItems />
            </div>

        </div>
    );
}
