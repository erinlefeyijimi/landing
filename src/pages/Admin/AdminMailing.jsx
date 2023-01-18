import React, {useState, useEffect} from "react";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
// import '../Blog/AdminBlog.css'
import SideNavbar from "../../components/Sidebar/SideNavbar";
import AdminNavbar from "./AdminNavbar";
import MailingList from "./MailingList";

const AdminMailing = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
    {loading ? (
      <CustomLoader loading={loading} />
    ) : (
      <>
        <div className="double__grid--right">
          <SideNavbar />
          <AdminNavbar />
        </div>
        <MailingList />
      </>
    )}
  </>
  );
};

export default AdminMailing;
