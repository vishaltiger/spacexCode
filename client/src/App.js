
import SearchSection from "./components/Sections/searchSection";
import GridSection from "./components/Sections/GridSection";
import BannerSection from "./components/Sections/BannerSection";
import { useEffect, useState } from "react";
import { Constants } from "./constants/constants";
import Filter from "./components/Sections/Filter";
import FullPreview from './components/Sections/fullPreview';
import Header from "./components/Sections/Header";



function App() {
  const [fullPreviewItem, setFullPreviewItem] = useState();
  const [isFullPreviewVisible, setFullPreviewVisibility] = useState(false);
  const [capsules, setCapsules] = useState([]);
  const [filterString, setFilterString] = useState("capsule_serial");
  const [searchString, setSearchString] = useState("");
  const [loadContent, setLoadContent] = useState(false);


  // get capsules form backend
  useEffect(() => {

    fetch(`${Constants.baseUrl}${Constants.allCapsulesEndpoint}`).
      then(res => res.json()).then(data => setCapsules(data));
  }
  , []);

  // set selected filter string  
  const getfilterString = (filterString) => {
    setFilterString(filterString);
  }
  // set Entered Search string 
  const getSearchString = (value) => {
    setSearchString(value);
  }

  // passing data to popup
  const setFullPreview = (item) => {
    setFullPreviewItem(item);
    setFullPreviewVisibility(true);
  }


  const renderContent = () => {
    return (
      <div>
        <Header/>
        <BannerSection />
        <SearchSection getSearchString={getSearchString} />
        <Filter getFilterString={getfilterString} />
        <GridSection capsules={capsules} filterString={filterString} searchString={searchString} setFullPreviewItem={setFullPreview} />
        {
          isFullPreviewVisible &&
          <FullPreview
            closeFullPreview={setFullPreviewVisibility}
            item={fullPreviewItem}
          />
        }
      </div>

    )
  }


  return (
    renderContent()
  );
}

export default App;
