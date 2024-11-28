import Layout from "./components/ui/Layout";
import AllBlogPosts from "./pages/AllBlogPosts";
import FavouriteBlogPosts from "./pages/FavouriteBlogPosts";
import NewBlogPost from "./pages/NewBlogPost";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllBlogPosts />} />
        <Route path="/new" element={<NewBlogPost />} />
        <Route path="/favourite" element={<FavouriteBlogPosts />} />
      </Routes>
    </Layout>
  );
}

export default App;
