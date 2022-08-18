import React from "react";
import Header from "./Header";


function Layout({ children }) {
    return(
        <section>
            <Header />
            {children}
        </section>
    );
}

export default Layout;