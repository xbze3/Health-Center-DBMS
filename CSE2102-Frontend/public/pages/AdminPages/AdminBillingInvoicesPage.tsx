import BillingInvoicesPage from "../../../src/components/BillingInvoicesPageComponent";

function AdminBillingInvoicesPage() {
    return (
        <BillingInvoicesPage
            initialFetchUrl="http://localhost:8081/admin-billing-invoices"
            searchBaseUrl="http://localhost:8081/admin-billing-invoices"
        />
    );
}

export default AdminBillingInvoicesPage;
