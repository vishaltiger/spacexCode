import { useEffect, useState } from "react";
import { Constants } from "../../constants/constants";


// get the selected filter section
function Filter({ getFilterString }) {
    const [selectedFilter, setSelectedFilter] = useState({ "capsule_serial": true });
    const [FilterValue, setFilterValue] = useState("capsule_serial");
    const setFilter = (e) => {
        let filterString = {};
        filterString[e.target.value] = true;
        setSelectedFilter(filterString);
        setFilterValue(e.target.value);
        getFilterString(e.target.value);
    }
    // render the Filter section
    function renderFilterSection() {
        return (
            <div className=" bg-white w-52 float-left border-t-2">
                <label className=" text-slate-400 italic font-semibold justify-center flex">Filter By</label>
                <div className="flex flex-col flex-1 text-slate-400 mt-4 ">
                    {
                        Constants.filter.map(filter => {
                            return (
                                <form class="flex items-center mt-2 mb-4 pl-4">
                                    <input id={filter.toLowerCase()}
                                        type="radio"
                                        name={filter.toLowerCase()}
                                        value={filter.toLowerCase()}
                                        onChange={(e) => setFilter(e)}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-30"
                                        checked={selectedFilter[filter.toLowerCase()] ? true : false}
                                    />
                                    <label for={filter.toLowerCase()}
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        {filter}
                                    </label>
                                </form>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        renderFilterSection()
    )
}

export default Filter;