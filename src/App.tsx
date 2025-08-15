import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import ProjectDetail from './pages/project-detail/ProjectDetail';
import NotFound from './pages/not-found/NotFound'
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative z-10 bg-white dark:bg-neutral-950 text-black dark:text-white">
        <Routes>
           <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />   
           </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
