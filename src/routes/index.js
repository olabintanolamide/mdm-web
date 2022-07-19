import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "../modules/admin/routes";
import AuthRoutes from "../modules/auths/routes";

const RouterWrapper = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Suspense
            fallback={
              <div
                style={{
                  height: "100vh",

                  width: "100%",

                  background: "#e3e3e3",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",
                }}
              >
                <h1>Loading...</h1>
              </div>
            }
          >
            <AuthRoutes />
          </Suspense>
        }
      />
      <Route
        path="admin/*"
        element={
          <Suspense
            fallback={
              <div
                style={{
                  height: "100vh",

                  width: "100%",

                  background: "#e3e3e3",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",
                }}
              >
                <h1>Loading...</h1>
              </div>
            }
          >
            <AdminRoutes />
          </Suspense>
        }
      />
      <Route path="*" element={<>does not exist</>} />
    </Routes>
  );
};

export default RouterWrapper;
