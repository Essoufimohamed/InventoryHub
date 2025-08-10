import { useState } from "react";
import Button from "../components/Button";
import FilterProduct from "../components/FilterProduct";
import ProductTable from "../components/productTable";
import SectionsTitle from "../components/SectionsTitle";
import AddProductForm from "../components/AddProductForm";

export default function DashboardProducts() {
    const [openFormAdd, setOpenFormAdd] = useState(false);

    function handleFormAdd() {
        !openFormAdd ? setOpenFormAdd(true) : setOpenFormAdd(false);
    }
    return (
        <>
            <SectionsTitle title={"Products Management"} />
            <div className="flex justify-end pr-4 mb-4">
                <Button onClick={handleFormAdd} />
            </div>
            {openFormAdd && <AddProductForm onClose={handleFormAdd} />}
            <FilterProduct />
            <ProductTable />
        </>
    );
}
