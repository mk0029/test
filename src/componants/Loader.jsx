import React, { useEffect, useState } from "react";
function Loader(props) {
  const [loder, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 2000);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "initial";
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <>
      {" "}
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className=" bg-black top-0 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center">
          {" "}
          <div id="loader-1">
            <div className="loader-content"></div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Loader;
