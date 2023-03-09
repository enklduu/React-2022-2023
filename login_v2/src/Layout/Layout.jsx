import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {

  const [log, setLog] = useState(false);
  return (
    <>
      <main className="container">
        <Outlet context={[log, setLog]}/>
      </main>
    </>
  );
};

export default Layout;
