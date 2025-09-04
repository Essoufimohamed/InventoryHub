export default function StatCard({ icon, title, statNumber }) {
    return (
        <>
            <div className="bg-[#ffffff] px-6 py-5 rounded-[20px] shadow-[0px_4px_6px_0px_#3B82F645] hover:shadow-[0px_4px_6px_0px_#3B82F689] hover:scale-102 w-full transition-all duration-300 ease-in-out ">
                <div className="flex items-center gap-3 mb-2">
                    <img className="w-9" src={icon} alt="" />
                    <h3 className="text-xl">{title}</h3>
                </div>
                <div className="text-center text-4xl font-bold">
                    {statNumber}
                </div>
            </div>
        </>
    );
}
