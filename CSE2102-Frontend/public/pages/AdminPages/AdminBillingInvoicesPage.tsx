import BillingInvoicesPage from "../../../src/components/PageComponents/BillingInvoicesPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";

function AdminBillingInvoicesPage() {
    return (
        <>
            <AdminNavBar />

            <BillingInvoicesPage
                initialFetchUrl="http://localhost:8081/admin-billing-invoices"
                searchBaseUrl="http://localhost:8081/admin-billing-invoices"
            />
        </>
    );
}

export default AdminBillingInvoicesPage;
