import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="text-center py-3">Memory game</h1>
        <div className="d-flex justify-content-around align-items-center">
          <div className="col-6">
            <h2>Règle : </h2>
            <p>
              Trouve  les images identiques et c'est gagné!
            </p>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-warning"
              style={{ height: 40 }}
            >
              Reset
            </button>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
