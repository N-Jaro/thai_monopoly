import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import MusicalChairs from './components/MusicalChairs';
import FactionNetwork from './components/FactionNetwork';
import StagnationIndex from './components/StagnationIndex';
import BudgetMap from './components/BudgetMap';
import VoteLoop from './components/VoteLoop';
import { Database, Network, Map, Activity, ShieldAlert, Languages, Vote } from 'lucide-react';

const T = {
  EN: {
    title: 'THE LOOP',
    timeline: 'TIMELINE',
    network: 'NETWORK',
    indicators: 'FAILURE INDEX',
    map: 'BUDGET MAP',
    vote: 'VOTE 2026',
    footer1: '© 2026 THE LOOP PROJECT. ALL DATA SOURCED FROM ROYAL GAZETTE ARCHIVES.',
    footer2: 'Election Awareness Unit - Thailand'
  },
  TH: {
    title: 'เดอะ ลูป',
    timeline: 'ไทม์ไลน์',
    network: 'เครือข่ายเซฟโซน',
    indicators: 'ดัชนีความล้มเหลว',
    map: 'แผนที่งบประมาณ',
    vote: 'เลือกตั้ง 2569',
    footer1: '© 2026 โครงการ เดอะ ลูป. ข้อมูลทั้งหมดมาจากคลังจดหมายเหตุราชกิจจานุเบกษา',
    footer2: 'หน่วยงานสร้างความตระหนักรู้ด้านการเลือกตั้ง - ประเทศไทย'
  }
};

function AppContent() {
  const [activeTab, setActiveTab] = useState('timeline');
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 p-6 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-3">
          <ShieldAlert className="text-whistle-red animate-pulse" />
          <h1 className="text-2xl font-black tracking-widest uppercase italic">{T[language].title}</h1>
        </div>

        <div className="flex items-center gap-8">
          <nav className="flex gap-8">
            {[
              { id: 'timeline', label: T[language].timeline, icon: Database },
              { id: 'network', label: T[language].network, icon: Network },
              { id: 'indicators', label: T[language].indicators, icon: Activity },
              { id: 'map', label: T[language].map, icon: Map },
              { id: 'vote', label: T[language].vote, icon: Vote },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 text-sm font-bold tracking-widest transition-colors ${activeTab === tab.id ? 'text-whistle-red' : 'text-white/50 hover:text-white'
                  }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded hover:bg-white/10 transition-colors text-xs font-black"
          >
            <Languages size={14} className="text-whistle-orange" />
            {language === 'EN' ? 'TH' : 'EN'}
          </button>
        </div>
      </header>

      <main className={`flex-1 flex flex-col ${activeTab === 'network' ? '' : 'w-full py-12'}`}>
        {activeTab === 'timeline' && <MusicalChairs />}
        {activeTab === 'network' && (
          <FactionNetwork />
        )}
        {activeTab === 'indicators' && (
          <StagnationIndex />
        )}
        {activeTab === 'map' && (
          <BudgetMap />
        )}
        {activeTab === 'vote' && (
          <VoteLoop />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 p-8 text-center text-xs opacity-30 shrink-0">
        <p>{T[language].footer1}</p>
        <p className="mt-2 uppercase tracking-widest">{T[language].footer2}</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
