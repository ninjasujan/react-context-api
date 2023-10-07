import React from "react";

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
        <PageItem title="Page Item 1" />
      </RenderOnViewPortEntry>
      <RenderOnViewPortEntry
        threshold={0.25}
        className="box"
        style={{ minHeight: "300px" }}
      >
        <PageItem title="Page Item 2" />
      </RenderOnViewPortEntry>
      <RenderOnViewPortEntry
        threshold={0.25}
        className="box"
        style={{ minHeight: "300px" }}
      >
        <PageItem title="Page Item 3" />
      </RenderOnViewPortEntry>
      <RenderOnViewPortEntry
        threshold={0.25}
        className="box"
        style={{ minHeight: "300px" }}
      >
        <PageItem title="Page Item 4" />
      </RenderOnViewPortEntry>
      <RenderOnViewPortEntry
        threshold={0.25}
        className="box"
        style={{ minHeight: "300px" }}
      >
        <PageItem title="Page Item 5" />
      </RenderOnViewPortEntry>
    </>
  );
};

export default App;
