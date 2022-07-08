export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "Username",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 150 },
  { field: "age", headerName: "Age", width: 50 },
  {
    field: "status",
    headerName: "Status",
    width: 80,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "active",
    email: "fgu453@gmail.com",
    age: 34,
  },
  {
    id: 2,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "pending",
    email: "fgu453@gmail.com",
    age: 34,
  },
  {
    id: 3,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "active",
    email: "fgu453@gmail.com",
    age: 34,
  },
  {
    id: 4,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "passive",
    email: "fgu453@gmail.com",
    age: 34,
  },
  {
    id: 5,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "active",
    email: "fgu453@gmail.com",
    age: 34,
  },
  {
    id: 6,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "pending",
    email: "fgu453@gmail.com",
    age: 34,
  },
  {
    id: 7,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "passive",
    email: "fgu453@gmail.com",
    age: 34,
  },
  {
    id: 8,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "active",
    email: "fgu453@gmail.com",
    age: 34,
  },
  {
    id: 9,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "pending",
    email: "fgu453@gmail.com",
    age: 34,
  },
  {
    id: 10,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "passive",
    email: "fgu453@gmail.com",
    age: 34,
  },
  {
    id: 11,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "active",
    email: "fgu453@gmail.com",
    age: 34,
  },
  {
    id: 12,
    username: "Amir",
    img: "https://i.pravatar.cc",
    status: "pending",
    email: "fgu453@gmail.com",
    age: 34,
  },
];
