import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ChatRoom from "./Pages/ChatRoom";
import Login from "./Pages/Login";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoutes>
              <ChatRoom />
            </PrivateRoutes>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
