import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ProfileCategoryId, Scheme } from './types/scheme';
import { SCHEMES_DATABASE, PROFILE_CATEGORIES } from './data/schemesData';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { ProfileSetup } from './components/ProfileSetup';
import { Dashboard } from './components/Dashboard';
import { SchemeDetailModal } from './components/SchemeDetailModal';
import { VoiceAssistantModal } from './components/VoiceAssistantModal';
import { RagArchitectureModal } from './components/RagArchitectureModal';
import { Footer } from './components/Footer';

export function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'profile' | 'dashboard'>('landing');
  const [selectedCategories, setSelectedCategories] = useState<ProfileCategoryId[]>(['student', 'farmer']);
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [isVoiceAssistantOpen, setIsVoiceAssistantOpen] = useState(false);
  const [voiceAssistantQuery, setVoiceAssistantQuery] = useState<string | undefined>(undefined);
  const [voiceAssistantScopedScheme, setVoiceAssistantScopedScheme] = useState<Scheme | null>(null);
  const [isRagModalOpen, setIsRagModalOpen] = useState(false);

  const handleGetStarted = () => {
    setCurrentView('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowSchemes = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#f57f07', '#22c55e', '#3b82f6']
      });
    } catch (e) {}

    setCurrentView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVoiceAssistant = (prompt?: string, scopedScheme?: Scheme) => {
    setVoiceAssistantQuery(prompt);
    setVoiceAssistantScopedScheme(scopedScheme || null);
    setIsVoiceAssistantOpen(true);
  };

  const handleSelectSchemeById = (schemeId: string) => {
    const found = SCHEMES_DATABASE.find(s => s.id === schemeId);
    if (found) {
      setSelectedScheme(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-sans text-slate-800 antialiased selection:bg-orange-200 selection:text-orange-950">
      
      {/* Top Fixed Header */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedCategories={selectedCategories}
        onOpenVoiceAssistant={() => handleOpenVoiceAssistant()}
        onOpenRagModal={() => setIsRagModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'landing' && (
          <LandingPage
            onGetStarted={handleGetStarted}
            onOpenVoiceAssistant={(p) => handleOpenVoiceAssistant(p)}
            onOpenRagModal={() => setIsRagModalOpen(true)}
          />
        )}

        {currentView === 'profile' && (
          <ProfileSetup
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            onShowSchemes={handleShowSchemes}
          />
        )}

        {currentView === 'dashboard' && (
          <Dashboard
            selectedCategories={selectedCategories}
            onEditProfile={() => {
              setCurrentView('profile');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectScheme={(scheme) => setSelectedScheme(scheme)}
            onOpenVoiceAssistant={(p, s) => handleOpenVoiceAssistant(p, s)}
            onOpenRagModal={() => setIsRagModalOpen(true)}
          />
        )}
      </main>

      {/* Scheme Detail Modal View */}
      <SchemeDetailModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
        onAskAssistant={(scheme) => {
          setSelectedScheme(null);
          handleOpenVoiceAssistant(undefined, scheme);
        }}
      />

      {/* THE MAIN FEATURE: Voice Assistant Modal */}
      <VoiceAssistantModal
        isOpen={isVoiceAssistantOpen}
        onClose={() => {
          setIsVoiceAssistantOpen(false);
          setVoiceAssistantScopedScheme(null);
          setVoiceAssistantQuery(undefined);
        }}
        initialQuery={voiceAssistantQuery}
        scopedScheme={voiceAssistantScopedScheme}
        onSelectSchemeById={handleSelectSchemeById}
      />

      {/* RAG Information Architecture Modal */}
      <RagArchitectureModal
        isOpen={isRagModalOpen}
        onClose={() => setIsRagModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenRagModal={() => setIsRagModalOpen(true)}
        onOpenVoiceAssistant={() => handleOpenVoiceAssistant()}
      />

    </div>
  );
}

export default App;
