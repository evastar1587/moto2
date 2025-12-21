import { useState, useCallback, useEffect } from 'react';
import Header from './components/layout/Header';
import FeedPage from './pages/FeedPage';
import PeoplePage from './pages/PeoplePage';
import GuidesPage from './pages/GuidesPage';
import InventoryPage from './pages/InventoryPage';

const App = () => {
  const [activeTab, setActiveTab] = useState('feed');

  useEffect(() => {
    const savedTab = localStorage.getItem('moto2-active-tab');
    if (savedTab) setActiveTab(savedTab);
  }, []);

  useEffect(() => {
    localStorage.setItem('moto2-active-tab', activeTab);
  }, [activeTab]);

  const handleTabChange = useCallback((tab) => setActiveTab(tab), []);

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="max-w-5xl mx-auto px-4 py-6">
        {activeTab === 'feed' && <FeedPage />}
        {activeTab === 'people' && <PeoplePage />}
        {activeTab === 'inventory' && <InventoryPage />}
        {activeTab === 'guides' && <GuidesPage />}
      </main>

      <footer className="border-t border-zinc-800 mt-12 py-6">
        <div className="max-w-5xl mx-auto px-4 text-center text-zinc-500 text-sm">
          <p className="font-bold text-moto-red mb-1">RIGHT TO REPAIR</p>
          <p>You own it, you can fix it. Knowledge should be free.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
