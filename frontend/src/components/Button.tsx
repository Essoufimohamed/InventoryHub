import { CirclePlus } from "lucide-react";

export default function Button({ className = "", ...props }) {
    return (
        <button
            {...props}
            className={`flex items-center gap-2 w-fit px-4 py-2 text-[#ffffdd] border-2 border-[#79ACFF] rounded-2xl font-semibold 
                  bg-gradient-to-tr from-blue-500 to-teal-500 
                  transition-all duration-300 ease-in-out 
                  hover:from-teal-500 hover:to-blue-500 hover:scale-105 hover:shadow-lg ${className}`}
        >
            <CirclePlus size={18} />
            Add product
        </button>
    );
}
