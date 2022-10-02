import "../styles/InfluencersPage.css";

const InfluencersPage = () => {
  return (
    <body className="fondo">
        <div className="menu">MENU</div>
        <h1 className="head1">Submit a Request</h1>
        <div className=" bloqueT bg-light">
              <label className="form-label">Email</label>
              <input className="form-control" />
              <label className="form-label">Name</label>
              <input className="form-control" />
              <label className="form-label">Phone</label>
              <input className="form-control" />
              <label className="form-label">Subject</label>
              <input className="form-control" />
              <label calssName="form-label">Description</label>
              <textarea className="form-control"rows="8"></textarea>
              <button className="btn submit btn-primary btn-lg">
              Submit
            </button>
          </div>
    </body>
  );
};

export default InfluencersPage;
