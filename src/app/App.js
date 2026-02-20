import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import { createContext, useState } from "react";

import HeaderF from "../layout/HeaderF";
import RoutersF from "./RoutesF";
import FooterF from "../layout/FooterF";

export const loginData = createContext();

function App() {
  const [login, setlogin] = useState(false);

  return (
    <loginData.Provider value={[login, setlogin]}>
      <main className="container-fluid p-0">
        <HeaderF />
        <RoutersF />
        <FooterF />
      </main>
    </loginData.Provider>
  );
}

export default App;








// npx json-server fitzen.json -p 5000










































