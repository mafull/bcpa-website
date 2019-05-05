import React from "react";

import Container    from "react-bootstrap/Container";

import Footer from "ui/components/Footer";
import Header from "ui/components/Header";


const App: React.FC<{}> = ({ children: pages }) => (
    <div>
        <Header />
        <Container id="main-content">
            {pages}
        </Container>
        <Footer />
    </div>
);

export default App;
