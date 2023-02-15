import React from "react";
import { Button } from "reactstrap";

// function Searchbar() {
//   return (
//     <div className="row col-md-4">
//       <div className="form-group col">
//         <input
//           className="col-md-12 form-control border border-dark"
//           type="text"
//           placeholder="Szukaj..."
//         />
//       </div>
//       <div className="form-group col">
//         <button className="col-md-12 btn btn-primary"> Szukaj </button>
//       </div>
//     </div>
//   );
// }

// export default Header;

//Powyżej stylujemy komponent samodzielnie przy bootstrap'ów.

function Searchbar() {
  return (
    <div className="d-flex">
      <input
        className="form-control me-1 border border-dark"
        // ms (skrót od margin-start) me (skrót od margin-end) zastępuje left i right
        // marginesy np. ml czy mr (lewo, prawo) tu nie chcą się nadpisać, być może trzeba
        // nadpisać w css ręcznie bo ustalone klassy są ważniejsze
        type="text"
        placeholder="Szukaj..."
      />
      <Button color="primary"> Szukaj! </Button>
    </div>
  );
}

export default Searchbar;

//Powyżej stylujemy komponent za pomocą pobranej bibliteki (Tutaj używamy bootstrapowej
// biblioteki dla React -- Reactstrap)
