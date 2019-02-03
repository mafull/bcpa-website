import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";


const App: React.StatelessComponent<{}> = ({ children: pages }) => (
    <div>
        <Header />
        {pages}
        <Footer />
    </div>
);

export default App;
