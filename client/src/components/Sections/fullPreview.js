import './modal.scss';
function FullPreview(props) {
    const { item } = props;
    return <div class="w-half h-full customModal">
        <div class="max-w-xxl z-50 bg-white rounded overflow-hidden shadow-lg ">
            <button onClick={() => props.closeFullPreview(false)} type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center float-right text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="m-4 group-hover:opacity-25">
                <span class="font-bold text-xl text-center flex justify-center">Capsule Description</span>
            </div>
            <div class="flex flex-col my-8 mx-32 px-20 py-10">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-center">
                                <thead class="border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                            Property
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b">
                                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                            {"Capsule serial"}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.capsule_serial}
                                        </td>
                                    </tr>
                                    <tr class="border-b bg-blue-100 border-blue-200">
                                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                            {"Id"}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.capsule_id}
                                        </td>
                                    </tr>
                                    <tr class="border-b bg-purple-100 border-purple-200">
                                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                            {"Status"}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.status}
                                        </td>
                                    </tr>
                                    <tr class="border-b bg-green-100 border-green-200">
                                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                           {"Details"}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.details}
                                        </td>
                                    </tr>
                                    <tr class="border-b bg-red-100 border-red-200">
                                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                            {"Type"}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.type}
                                        </td>
                                    </tr>
                                    <tr class="border-b bg-yellow-100 border-yellow-200">
                                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                           {"landings"}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                           {item.landings}
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default FullPreview;