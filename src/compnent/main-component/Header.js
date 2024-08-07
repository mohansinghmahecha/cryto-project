import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import GraphDashBoardMain from "../graph-dashboard/GraphDashBoardMain";
import { useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("bitcoin"); //from input
  const [searching, setSearching] = useState([]); //araay list of search
  const searchInputRef = useRef(null);
  const valueofsearch = useSelector((s) => s.exchangeFunction);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target)
    ) {
      setShowSearchOverlay(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showSearchOverlay, search, searching]);

  const selectCurrencyfunction = (e) => {
    var i = e.target.value;
    dispatch({ type: "NAME", payload: i });
  };

  const crytosearchFunction = (e) => {
    const searchTerm = e.target.value; // Trim whitespace
    console.log(e.target.value);
    setSearch(searchTerm);
    setShowSearchOverlay(true);

    if (valueofsearch && valueofsearch.length > 0) {
      const filteredSearchResults = valueofsearch.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearching(filteredSearchResults);
    } else {
      setSearching([]);
    }
  };

  // Function to handle item selection from search results
  const handleSearchResultSelect = (itemId) => {
    //setSearchResult(itemId); // Set the selected item ID
    setShowSearchOverlay(false); // Close the search overlay

    setSearch(itemId);
  };

  return (
    <div>
      <div className="w-full flex ">
        <div className="px-2 rounded-t-lg">
          <select defaultValue="inr" onChange={selectCurrencyfunction}>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
          </select>
        </div>

        <div className="mx-6 rounded-lg  flex items-center mx-0.5">
          <label htmlFor="search">Search Here</label>
          <input
            className="px-2"
            type="text"
            id="search"
            placeholder=" search Cryto"
            onChange={crytosearchFunction}
            value={search}
            autoFocus
            ref={searchInputRef}
          />

          {showSearchOverlay && (
            <div className="overflow-scroll absolute top-20 left-0 right-0 bottom-10 opacity-95 bg-white w-80 h-30 border border-green-600 z-10">
              {search.length > 0 ? (
                searching.length > 0 ? (
                  <ul>
                    {searching.map((item) => (
                      <li
                        className="p-2"
                        key={item.id}
                        onClick={() => handleSearchResultSelect(item.id)}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No results found.</p>
                )
              ) : (
                <p>Please enter a search term.</p>
              )}
            </div>
          )}
          <FaSearch className="mx-3" />
        </div>
      </div>

      <div className="border-4 border-black-600 m-8 ">
        <GraphDashBoardMain searchingData={search} />
      </div>
    </div>
  );
}
