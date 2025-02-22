import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlameFile from './pages/blamefile';
import Home from './pages/home';
import PageNotFound from './pages/pagenotfound';
import RepoStats from './pages/repostats';

function App() {
  return (
      <Routes>
        <Route path='/GitHubGo/' element={<Home />} />
        <Route path='/GitHubGo/repostats' element={<RepoStats />} />
        <Route path='/GitHubGo/blamefile' element={<BlameFile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
}

export default App;
