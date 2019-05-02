import React from "react";

import Footer from "ui/components/Footer";
import Header from "ui/components/Header";


const App: React.FC<{}> = ({ children: pages }) => (
    <div>
        <Header />
        {pages}
        <Footer />
    </div>
);

export default App;
