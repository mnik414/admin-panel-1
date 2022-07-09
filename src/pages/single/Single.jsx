import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://i.pravatar.cc"
                alt="Avatar"
                className="itemImage"
              />
              <div className="details">
                <h1 className="itemTitle">Elon Mask</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">elonmask@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+989171234569</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Shiraz</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Cuntry:</span>
                  <span className="itemValue">Iran</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={"User Spending (Last 6 Months)"} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Elon Mask</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
