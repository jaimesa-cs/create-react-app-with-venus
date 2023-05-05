import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

/**
 * All the routes are Lazy loaded.
 * This will ensure the bundle contains only the core code and respective route bundle
 */
const CustomFieldExtension = React.lazy(() => import("./routes/CustomField.js"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Nothing to show here</div>} />
      <Route
        path="/custom-field"
        element={
          <Suspense>
            <CustomFieldExtension />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
