import "./App.css";
import Comments from "./components/Comments/Comments";
import Posts from "./components/Posts/Posts";
import PhotoGallery from "./components/Photos/PhotoGallery";
import Users from "./components/Users/Users";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";

import { Routes, Route } from "react-router-dom";

function App({ posts, comments, photos, users }) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route path="/comments" element={<Comments comments={comments} />} />
        <Route path="/photos" element={<PhotoGallery photos={photos} />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
