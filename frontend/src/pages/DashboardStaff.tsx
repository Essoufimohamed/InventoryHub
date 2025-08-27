import { useState } from "react";
import SectionsTitle from "../components/SectionsTitle";
import StaffTable from "../components/StaffTable"; // corrected import

export default function DashboardStaff() {
    // Sample staff data
    const [staff, setStaff] = useState([
        {
            name: "John Doe",
            email: "john.doe@example.com",
            role: "Admin",
            status: "Active",
        },
        {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            role: "Editor",
            status: "Active",
        },
        {
            name: "Peter Jones",
            email: "peter.jones@example.com",
            role: "Viewer",
            status: "Inactive",
        },
        {
            name: "Alice Brown",
            email: "alice.brown@example.com",
            role: "Admin",
            status: "Active",
        },
    ]);

    // Handlers
    const handleEdit = (person) => {
        console.log("Edit", person);
        // open edit modal here
    };

    const handleDelete = (person) => {
        setStaff(staff.filter((s) => s.email !== person.email));
    };

    return (
        <>
            <SectionsTitle title="Staff Management" />
            <StaffTable
                staff={staff}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </>
    );
}
