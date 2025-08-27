import AddCategoryForm from "../components/AddCategoryForm";
import CategoriesList from "../components/CategoriesList";
import SectionsTitle from "../components/SectionsTitle";

export default function DashboardCategory() {
    return (
        <>
            <SectionsTitle title={"Product Categories"} />
            <div className=" flex flex-col lg:flex-row gap-6 mt-4">
                <div className="basis-1/3 ">
                    <AddCategoryForm />
                </div>
                <div className="basis-2/3">
                    <CategoriesList />
                </div>
            </div>
        </>
    );
}
