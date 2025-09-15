import { Outlet } from "react-router";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";

export default function AdminLayout() {
    return <>
        <AdminSidebar />
        <div className="container">
            <h1>Admin</h1>
            <Outlet />
        </div>
        <AdminFooter />
    </>
}