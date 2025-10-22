import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { posts, comments, photos , users} from './Db/Db.js'

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App posts={posts} comments={comments} photos={photos} users={users}  />
  </BrowserRouter>
);
