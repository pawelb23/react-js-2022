import React, { useState } from "react";
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
  const [term, setTerm] = useState("");

  const search = () => {
    console.log(term);
    setTerm("");
  };

  const updateTerm = (e) => {
    setTerm(e.target.value);
    console.log(term); //poprzednia wartość
    console.log(e.target.value); //aktualna wartość
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      search();
    }
    console.log(e.key);
  };

  return (
    <div className="d-flex">
      <input
        value={term}
        onKeyDown={onKeyDownHandler}
        // onKeyDown={(e) => e.key === "Enter" && search()} //To to samo co powyżej tylko zapisane krócej,
        // chociaż może trochę mniej czytelnie, taki zapis >> e.key === "Enter" && search() << sprawi, że
        // funkcja search() zostanie wykonana tylko pod warunkiem, że pierwsza część zapisu będzie prawdziwa
        onChange={updateTerm} //w tym miejscu możemy także wpisać całą funkcję (zwłaszcza jeżeli jest to krótka
        // funkcja jak w naszym przypadku)
        className="form-control me-1 border border-dark"
        // ms (skrót od margin-start) me (skrót od margin-end) zastępuje left i right
        // marginesy np. ml czy mr (lewo, prawo) tu nie chcą się nadpisać, być może trzeba
        // nadpisać w css ręcznie bo ustalone klassy są ważniejsze
        type="text"
        placeholder="Szukaj..."
      />
      <Button onClick={search} color="primary">
        Szukaj!
      </Button>
    </div>
  );
}

export default Searchbar;

//Powyżej stylujemy komponent za pomocą pobranej bibliteki (Tutaj używamy bootstrapowej
// biblioteki dla React -- Reactstrap)
