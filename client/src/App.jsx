// import io from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import ChatRoom from "./pages/ChatRoom";
import ChatList from "./components/ChatList";
import "./App.css";

// =============================================================

// const socket = io.connect("http://localhost:3001");

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chatroom">
          <Route index element={<ChatRoom />} />
          <Route path="chat" element={<ChatList />} />
        </Route>
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
