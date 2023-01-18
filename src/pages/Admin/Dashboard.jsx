import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import SideNavbar from "../../components/Sidebar/SideNavbar";
import AdminNavbar from "./AdminNavbar";
import "./Admin.css";
import { collection, getDocs, doc } from "firebase/firestore";
import { BiCabinet } from "react-icons/bi";
import { RiMailSettingsFill } from "react-icons/ri";
import AdminBlog from "../Blog/AdminBlog";
import AdminMailing from "./AdminMailing";
import MailingList from "./MailingList";
import BlogList from "./BlogList";
import CustomLoader from "../../components/CustomLoader/CustomLoader";

const Dashboard = () => {
  const [numberBlog, setNumberBlog] = useState([]);
  const [numberMail, setNumberMail] = useState([]);

  const blogTotalCollectionRef = collection(db, "blogs");
  const mailTotalCollectionRef = collection(db, "mailing");

  useEffect(() => {
    const getBlog = async () => {
      const data = await getDocs(blogTotalCollectionRef);
      setNumberBlog(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBlog();
  }, []);

  useEffect(() => {
    const getMail = async () => {
      const data = await getDocs(mailTotalCollectionRef);
      setNumberMail(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMail();
  }, []);


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
          <div className="double__grid">
            <div className="double__grid--right">
              <SideNavbar />
              <AdminNavbar />
            </div>
            <div className="double__grid--left">
              <div className="number--blog">
                <Link to="/admin/all-blogs">
                  <h2>Total Number of Blog Posts</h2>
                  <div className="total__blog">
                    <BiCabinet className="dashboard__icon" />
                    <p>{numberBlog.length}</p>
                  </div>
                </Link>
              </div>
              <div className="number--blog">
                <Link to="/admin/mailing">
                  <h2>Total Mail Subscribers</h2>
                  <div className="total__mail">
                    <RiMailSettingsFill className="dashboard__icon" />
                    <p>{numberMail.length}</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="dashboard__information">
              <BlogList />
              <MailingList />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
