import searchIcon from "../assets/icons/search.png";

export default function FilterProduct() {
    return (
        <div className="flex items-center justify-between gap-4 mb-4 px-4 py-2 shadow-[0px_1px_3px_0px_#cccccc] rounded-xl bg-[#f4fafd]">
            {/* Category Filter */}
            <div className="flex items-center gap-3">
                <label htmlFor="category" className="font-medium text-gray-700">
                    Category
                </label>
                <select
                    className="bg-gray-50 p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                    name="category"
                    id="category"
                >
                    <option value="">All</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                </select>
            </div>

            {/* Search Box */}
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-[#fffffd]">
                <input
                    className="px-3 py-1 outline-none w-48 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    type="text"
                    placeholder="Search product"
                />
                <button className="bg-transparent cursor-pointer transition p-2">
                    <img className="w-5 " src={searchIcon} alt="Search" />
                </button>
            </div>
        </div>
    );
}

// bg-gradient-to-r from-[#93DDFF] to-[#BFC1FF]
