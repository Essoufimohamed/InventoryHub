export default function SectionsTitle({ title }) {
    return (
        <>
            <h2 className="text-2xl text-[#00496C] font-bold relative  pl-3 pb-3 mb-5 after:content-[''] after:absolute after:left-2 after:bottom-0 after:h-[2px] after:w-70 after:bg-gradient-to-r after:from-[#79ACFf] after:to-[#5FFFCA] before:absolute before:left-0 before:-bottom-2 before:h-4 before:w-4 before:bg-[#79ACFf] before:rounded-full">
                {title} :
            </h2>
        </>
    );
}
