import HistoryFilter from "../components/HistoryFilter";
import HistoryTable from "../components/HistoryTable";
import SectionsTitle from "../components/SectionsTitle";

export default function DashboardStock() {
    return (
        <>
            <SectionsTitle title={"Stock History"} />
            <HistoryFilter />
            <HistoryTable />
        </>
    );
}
