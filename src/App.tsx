import React from "react";
const SectionItem = React.lazy(
  () => import("./Component/StateComp/SectionItem")
);
const PageItem = React.lazy(() => import("./Component/StateComp/PageItem"));
import RenderOnViewPortEntry from "./Component/RenderOnViewPortEntry";

const App = () => {
  return (
    <>
      <RenderOnViewPortEntry
        threshold={0.25}
        className="box"
        style={{ minHeight: "900px" }}
      >
        <SectionItem />
      </RenderOnViewPortEntry>
      <RenderOnViewPortEntry
        threshold={0.25}
        className="box"
        style={{ minHeight: "900px" }}
      >
        <PageItem />
      </RenderOnViewPortEntry>
    </>
  );
};

export default App;
