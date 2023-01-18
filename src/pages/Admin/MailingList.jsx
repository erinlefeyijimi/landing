import React, { useState, useEffect, useMemo } from "react";
import { db } from "../../firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import { auth } from "../../firebase";
import "../Blog/AdminBlog.css";
import SideNavbar from "../../components/Sidebar/SideNavbar";
import AdminNavbar from "./AdminNavbar";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { DataGrid } from "@material-ui/data-grid";

const MailingList = () => {
  const [user, setUser] = useState(null);
  const [mail, setMail] = useState([]);

  const mailCollectionRef = collection(db, "mailing");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    const getMails = async () => {
      const data = await getDocs(mailCollectionRef);
      setMail(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMails();
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const columns = useMemo(
    () => [
      { field: "name", headerName: "Name", minWidth: 200, flex: 1 },
      { field: "id", headerName: "ID", minWidth: 200, flex: 1 },
      { field: "mail", headerName: "Email", minWidth: 200, flex: 1 },
      {
        field: "timestamp",
        headerName: "Subscribed",
        minWidth: 200,
        flex: 1,
      },
      // {
      //   field: "actions",
      //   headerName: "Actions",
      //   minWidth: 200,
      //   flex: 1,
      //   type: "number",
      //   sortable: false,
      //   renderCell: (params) => {
      //     return (
      //       <>
      //         <Link to={`/update-blog/${params.id}`}>
      //           <AiOutlineEdit className="dashboard__home--icon" />
      //         </Link>

      //         <BsTrash
      //           onClick={() => handleDelete(params.id)}
      //           className="dashboard__home--icon"
      //         />
      //       </>
      //     );
      //   },
      // },
    ],
    []
  );
  const rows = [];

  mail &&
    mail.forEach((ma) => {
      rows.push({
        id: ma.id,
        timestamp: ma.timestamp.toDate().toDateString(),
        mail: ma.mail,
        name: ma.name,
      });
    });

  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <div className="dashboard__blog--wrapper">
            <h2>Mailing List</h2>
            <div className="dashboard__blog--child">
              {/* <div className="dashboard__blog--contents">
                <h2>Name</h2>
                {mail?.map((item) => (
                  <p key={item.id}>{item.name}</p>
                ))}
              </div>
              <div className="dashboard__blog--contents">
                <h2>ID</h2>
                {mail?.map((item) => (
                  <p key={item.id}>{item.id}</p>
                ))}
              </div>
              <div className="dashboard__blog--contents">
                <h2>Email</h2>
                {mail?.map((item) => (
                  <p key={item.id}>{item.mail}</p>
                ))}
              </div>
              <div className="dashboard__blog--contents">
                <h2>Subscribed On</h2>
                {mail?.map((item) => (
                  <p key={item.id}>{item.timestamp.toDate().toDateString()}</p>
                ))}
              </div> */}
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                className="productListTable"
                autoHeight
                rowsPerPageOptions={[10]}
                // checkboxSelection
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MailingList;
