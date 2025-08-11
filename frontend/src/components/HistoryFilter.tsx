export default function HistoryFilter() {
    return (
        <div className="flex items-center  gap-6 mb-4 px-4 py-2 shadow-[0px_1px_3px_0px_#cccccc] rounded-xl bg-gradient-to-r from-[#93DDFF] to-[#BFC1FF]">
            {/* Category Filter */}
            <div className="flex items-center gap-3">
                <label htmlFor="category" className="font-medium text-gray-700">
                    Date Range
                </label>
                <input
                    type="date"
                    className="bg-gray-50 p-2 rounded-md border border-gray-300"
                />
            </div>
            <div className="flex items-center gap-3">
                <label htmlFor="products" className="font-medium text-gray-700">
                    Products{" "}
                </label>
                <select
                    className="text-gray-600 bg-gray-50 p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none "
                    name="products"
                    id="products"
                >
                    <option value="/">Search product</option>
                    <option value="category1">product 1</option>
                    <option value="category2">product 2</option>
                </select>
            </div>
            <div className="flex items-center gap-3">
                <label htmlFor="User" className="font-medium text-gray-700">
                    User
                </label>
                <select
                    className="text-gray-600 bg-gray-50 p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none "
                    name="products"
                    id="products"
                >
                    <option value="/">Search by User</option>
                    <option value="category1">user 1</option>
                    <option value="category2">user 2</option>
                </select>
            </div>
        </div>
    );
}

// bg-gradient-to-r from-[#93DDFF] to-[#BFC1FF]
