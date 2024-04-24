import FooterComponent from "./FooterComponent";
import Header from "./Header";
import ListOfTradingItems from "./ListOfTradingItems";

export default function MainComponent() {
    return (
        <div>

            <div className="wrapper" style={{ width: '100%', display: 'flex', marginTop: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 70%' ,height : 'auto'}}> {/* s Use flex-grow, flex-shrink, and flex-basis */}
                    <Header />
                </div>

                <div style={{ flex: '1 1 25%' ,height : 'auto' }}>
                    <ListOfTradingItems />
                </div>


                <div className="" style={{
                    display :'block',
                    width: "70%",
                    marginTop:'-400px'

                }}>
                    <FooterComponent />

                </div>
            </div>




        </div>);
}
