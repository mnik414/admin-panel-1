import { DriveFolderUploadOutlined } from "@mui/icons-material";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://i.pravatar.cc" alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image <DriveFolderUploadOutlined className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="jafar_jafari" />
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder="Jafar Jafari" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="jafar@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="number" placeholder="+989171234567" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Shiraz" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Iran" />
              </div>
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
