import {
  Comments,
  Posts,
  PhotoGallery,
  Users,
  UserDetails,
  ErrorPage,
  Home,
  PhotoDetails,
  PostDetails,
  CommentDetails,
} from "./components/ImportFile";

import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetails />} />
        <Route path="comments" element={<Comments />} />
        <Route path="comments/:id" element={<CommentDetails />} />
        <Route path="photos" element={<PhotoGallery />} />
        <Route path="photos/:id" element={<PhotoDetails />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
