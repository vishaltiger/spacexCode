import { TypeAnimation } from 'react-type-animation';
import { Constants } from '../../constants/constants';
import { useState, useMemo, useEffect } from "react";
function SearchSection({ getSearchString }) {
  const [serachValue, setSearchValue] = useState("");



  const searchValue = (e) => {
    setSearchValue(e.target.value);
    getSearchString(e.target.value);
  }

  return (
    <div className="flex justify-center searchSection flex-col border-t-20 bg-white border-t-2">
      <TypeAnimation
        sequence={Constants.sequence}
        speed={50}
        style={{ fontSize: '2em', alignSelf: 'center', color: 'gray', marginBottom: 20 }}
        wrapper="span"
        repeat={Infinity}
      />

      <div className="self-center">
        <input
          class="rounded-l-lg p-4 border-t mr-0 border-b border-l border-r w-56 h-10 text-gray-800 border-gray-200 bg-white"
          placeholder="Search your capsule"
          value={serachValue}
          onChange={(e) => searchValue(e)}

        />
      

      </div>

    </div>
  )

}

export default SearchSection
