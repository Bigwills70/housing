function Dashboard() {
  const name = localStorage.getItem("username");

  const logoutUser = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };
  return (
    <div>
      Welcome {name}
      <button className="btn btn-danger" onClick={logoutUser}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
