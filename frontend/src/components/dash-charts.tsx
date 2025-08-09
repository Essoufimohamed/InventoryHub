import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const productsPerCategory = [
    { category: "Electronics", count: 15 },
    { category: "Furniture", count: 8 },
    { category: "Clothing", count: 20 },
    { category: "Food", count: 12 },
];

const stockDistribution = [
    { name: "In Stock", value: 80 },
    { name: "Low Stock", value: 15 },
    { name: "Out of Stock", value: 5 },
];

const COLORS = ["#4ade80", "#facc15", "#f87171"];

export default function DashboardCharts() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Bar Chart Card */}
            <div className="bg-white rounded-xl shadow p-4">
                <h2 className="text-lg font-semibold mb-4">
                    Products per Category
                </h2>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={productsPerCategory}>
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Bar
                                dataKey="count"
                                fill="#A5C7FF"
                                radius={[8, 8, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Pie Chart Card */}
            <div className="bg-white rounded-xl shadow p-4">
                <h2 className="text-lg font-semibold mb-4">
                    Stock Distribution
                </h2>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={stockDistribution}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                                label
                            >
                                {stockDistribution.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
