import Blocks from "../components/AdminDashboard/Blocks"
import Navbar from "../components/AdminDashboard/Navbar"
import UserWrapper from "../components/AdminDashboard/UserWrapper"

const Admin = () => {

    return (
        <div className="w-screen flex flex-col">
            <Navbar />
            <Blocks />
            <UserWrapper />
        </div>
    )
}

export default Admin
