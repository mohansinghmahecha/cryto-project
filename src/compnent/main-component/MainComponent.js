import Header from "./Header";
import ListOfTradingItems from "./ListOfTradingItems";
export default function MainComponent() {
    return (
        <>
            <div className="w-full flex h-auto mt-5">
                {/* chat component */}
                <div className="w-3/4 h-screen  ">
                    <Header/>
                </div>

                {/* list chart component */}
                <div className="w-auto ">
                    <ListOfTradingItems />


                </div>

            </div>

        </>
    )
}