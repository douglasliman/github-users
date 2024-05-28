import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login, AuthWrapper, Error, PrivateRoute } from "./pages";

function App() {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;
