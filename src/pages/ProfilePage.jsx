import "../styles/ProfilePage.css";

const ProfilePage = () => {
  return (
    <body className="fondo">
      <div>
        <div className="menu">MENU</div>
        <div>
          <div className="bloqueL container">menu lateral</div>
          <span className=" bloqueD container bg-light">
            <form className="" action="">
              <span className="form-label">First Name</span>
              <span className="form-label inline last">Last Name</span>
              <div></div>
              <span><input className="form-first form-control" /></span>
              <span><input className="form-last form-control" /></span>
              <div></div>
              <label className="form-label">Email</label>
              <input className="form-control" />
              <label className="form-label">Address</label>
              <input className="form-control" />
              <span className="form-label">Aparmaent, suit, etc</span>
              <span className="form-label inline city">City</span>
              <input className="form-first form-control" />
              <input className="form-last form-control" />
              <label className="form-label">Country/Region</label>
              <label className="form-label zip">Postal/zip code</label>
              <div></div>
              <select className="form-first form-select">
                <option>UnitedStates</option>
                <option>Perú</option>
                <option>Colombia</option>
              </select>
              <input className="form-last form-control" />
              <label className="form-label">Phone</label>
              <input className="form-control" />
              <div></div>
              <button className="btn update btn-primary btn-lg">
              Update Info
            </button>
            <span className="cancel">Cancel</span>
            </form>
          </span>
          </div>
      </div>
    </body>
  );
};

export default ProfilePage;
