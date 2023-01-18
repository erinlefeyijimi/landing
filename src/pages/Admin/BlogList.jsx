import React, { useState, useEffect, useMemo } from "react";
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
// import './AdminBlog.css'
import "../Blog/AdminBlog.css";
// import { DataGrid} from "@mui/x-data-grid";
import { DataGrid } from "@material-ui/data-grid";

const BlogList = () => {
  const [user, setUser] = useState(null);
  const [blog, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const blogsCollectionRef = collection(db, "blogs");

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
    const getBlogs = async () => {
      const data = await getDocs(blogsCollectionRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Blog deleted successfully");
        setLoading(false);
        navigate("/admin");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const userId = user?.uid;

  const columns = useMemo(
    () => [
      { field: "title", headerName: "Title", minWidth: 250, flex: 1 },
      { field: "id", headerName: "ID", minWidth: 200, flex: 1 },
      { field: "writtenBy", headerName: "Author", minWidth: 200, flex: 1 },
      {
        field: "timestamp",
        headerName: "Published On",
        minWidth: 200,
        flex: 1,
      },
      {
        field: "actions",
        headerName: "Actions",
        minWidth: 200,
        flex: 1,
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/update-blog/${params.id}`}>
                <AiOutlineEdit className="dashboard__home--icon" />
              </Link>

              <BsTrash
                onClick={() => handleDelete(params.id)}
                className="dashboard__home--icon"
              />
            </>
          );
        },
      },
    ],
    []
  );

  const rows = [];

  blog &&
    blog.forEach((blog) => {
      rows.push({
        id: blog.id,
        timestamp: blog.timestamp.toDate().toDateString(),
        writtenBy: blog.writtenBy,
        title: blog.title,
      });
    });

  return (
    <>
      <div className="dashboard__blog--wrapper">
        <h2>All Blogs</h2>
        <div className="dashboard__blog--child">
          {/* <div className="dashboard__blog--contents">
            <h2>Title</h2>
            {blog?.map((item) => (
              <p key={item.id}>{item.title}</p>
            ))}
          </div>
          <div className="dashboard__blog--contents">
            <h2>ID</h2>
            {blog?.map((item) => (
              <p key={item.id}>{item.id}</p>
            ))}
          </div>
          <div className="dashboard__blog--contents">
            <h2>Author</h2>
            {blog?.map((item) => (
              <p key={item.id}>{item.writtenBy}</p>
            ))}
          </div>
          <div className="dashboard__blog--contents">
            <h2>Written On</h2>
            {blog?.map((item) => (
              <p key={item.id}>{item.timestamp.toDate().toDateString()}</p>
            ))}
          </div>
          <div className="dashboard__blog--contents">
            <h2>Actions</h2>
            {userId &&
              blog?.map(
                (item) =>
                  item.userId === userId && (
                    <div className="dashboard__blog--icon">
                      <BsTrash
                        onClick={() => handleDelete(item.id)}
                        className="dashboard__home--icon"
                      />
                      <Link to={`/update-blog/${item.id}`}>
                        <AiOutlineEdit className="dashboard__home--icon" />
                      </Link>
                    </div>
                  )
              )}
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
  );
};

export default BlogList;
