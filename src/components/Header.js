import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center my-3">Memory game</h1>
        <div className="d-flex container-fluid">
          <div className="px-5 col-6 ">
            <h2>Règle : </h2>
            <p>
              Le but du jeu est de reconnaître les cartes par paire. Vous
              disposez de 12 cartes que vous devez retourner 2 par 2. si vous
              trouvez les paires, les cartes restent retournées. vous devez
              mémoriser l’emplacement de chaque carte et cliquer sur 2 autres
              cartes. Quand il n’y a plus de carte à retourner, la partie est
              gagnée!
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-warning "
              style={{ height: 40 }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
