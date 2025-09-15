import {
  BrowserRouter,
  HashRouter,
  NavLink,
  Route,
  Routes,
} from "react-router";
import DefaultLayout from "../../layouts/DefaultLayout";
import AuthLayout from "../../layouts/AuthLayout";
import AdminLayout from "../../layouts/AdminLayout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Contact from "../../pages/Contact";
import Privacy from "../../pages/Privacy";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Users from "../../pages/Users";
import Settings from "../../pages/Settings";
import ScrollToTop from "../ScrollToTop";
import Loading from "../../pages/Loading";

function AppRoutes() {
  return (
    <HashRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="posts" element={<Posts />}></Route>
          <Route path="posts/:id" element={<PostDetail />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="privacy" element={<Privacy />}></Route>
          <Route path="loading" element={<Loading />}></Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<Users />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
