import React, { useEffect, useState } from "react";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
// import './AdminBlog.css'
import SideNavbar from "../../components/Sidebar/SideNavbar";
import AdminNavbar from "../Admin/AdminNavbar";
import BlogList from "../Admin/BlogList";

const AdminBlog = () => {
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
          <BlogList />
        </>
      )}
    </>
  );
};

export default AdminBlog;
