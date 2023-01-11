
import { useState, useMemo, useEffect } from "react";
import { Constants } from '../../constants/constants';
import Pagination from "../Pagination/Pagination";
import AnimatedLoader from "../animatedLoader/animated";


let PageSize = Constants.pageSize;
function GridSection({ capsules, filterString, searchString, setFullPreviewItem }) {
    const [currentPage, setCurrentPage] = useState(1);


    // data to show per page
    const currentTableData = (filteredcapsules) => {
        if (filteredcapsules.length) {
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            console.log(filteredcapsules.slice(firstPageIndex, lastPageIndex));
            return filteredcapsules.slice(firstPageIndex, lastPageIndex);
        } else {
            return [];
        }

    };

    // filter data based on filter string
    const filterData = (capsules) => {
        let filteredCapsules = [];
        if (filterString.length && searchString.length) {
            filteredCapsules = capsules.filter(item => {
                return item[filterString] && item[filterString].toLowerCase().indexOf(searchString.toLowerCase()) != -1;
            })
        } else {
            filteredCapsules = capsules;
        }
        return filteredCapsules;
    }

    // generate random colors
    const generateRandomColor = useMemo(() => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    }, [currentPage]);

    // Grid Section
    function renderGrid() {

        const filteredData = filterData(capsules);
        const data = currentTableData(filteredData);
        return capsules.length ?
            <div class="grid lg:grid-cols-4 gap-6 py-4 px-4 bg-gray-100 mr-8 rounded-md w-half">
                {

                    data.length && data.map((item, index) => {
                        return <div class="card bg-white rounded  relative overflow-hidden hover:scale-110 group transition-all delay-100 h-52 group-hover:opacity-25">
                            <div className={`h-24 group-hover:opacity-25 p-2`} style={{ backgroundColor: `#${generateRandomColor}` }}>
                                {
                                    item.status && item.status == "active" ?
                                        <span class="bg-green-100 text-green-800 text-xs font-medium  ml-1 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                            {item.status}</span>
                                        :
                                        <span class="bg-red-100 text-red-800 text-xs font-medium  ml-1 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                            {item.status}</span>
                                }

                            </div>
                            <div class=" p-3 rounded-lg negative bg-white group-hover:opacity-25">
                                <span class="font-bold">{item.capsule_serial}</span>
                                <span class="block text-gray-500 text-sm mt-4">{item.details ? item.details : "N/A"}</span>

                            </div>
                            <div class="shadow  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 fd-sh group-hover:opacity-100 transition-all delay-150 rounded-lg overflow-hidden ">
                                <button class="text-center p-2 bg-white  text-gray-700 font-bold text-sm hover:bg-slate-100"  onClick={() => setFullPreviewItem(item)}>Learn more</button>
                            </div>
                        </div>
                    })
                }
            </div> : <AnimatedLoader />
    }

    return (

        <div>
            {
                renderGrid(capsules)

            }

            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={filterData(capsules).length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>

    )
}
export default GridSection;