import React from 'react';
import { Mic, Sparkles, User, Layers, ShieldCheck, ExternalLink, Globe2 } from 'lucide-react';
import { ProfileCategoryId } from '../types/scheme';
import { PROFILE_CATEGORIES } from '../data/schemesData';

interface HeaderProps {
  currentView: 'landing' | 'profile' | 'dashboard';
  setCurrentView: (view: 'landing' | 'profile' | 'dashboard') => void;
  selectedCategories: ProfileCategoryId[];
  onOpenVoiceAssistant: (prompt?: string) => void;
  onOpenRagModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  selectedCategories,
  onOpenVoiceAssistant,
  onOpenRagModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Civic Tech Independence Notice Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-xs px-4 py-1.5 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span><strong>Independent Civic Platform:</strong> Simplifying public schemes with voice AI. Not affiliated with government portals.</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] opacity-95">
            <span className="hidden sm:inline">Privacy-First • No sensitive data needed</span>
            <button 
              onClick={onOpenRagModal}
              className="underline font-semibold hover:text-amber-100 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" /> How RAG Works
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setCurrentView('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-saffron-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Sahaya<span className="text-orange-600">.ai</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                  Prototype
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Multilingual Voice-First Scheme Assistant
              </p>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => setCurrentView('landing')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                currentView === 'landing'
                  ? 'bg-slate-100 text-slate-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => {
                if (selectedCategories.length === 0) {
                  setCurrentView('profile');
                } else {
                  setCurrentView('dashboard');
                }
              }}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                currentView === 'dashboard'
                  ? 'bg-slate-100 text-slate-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Schemes
              {selectedCategories.length > 0 && (
                <span className="ml-1.5 px-1.5 py-0.2 bg-emerald-100 text-emerald-800 text-[10px] rounded-full font-bold">
                  {selectedCategories.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setCurrentView('profile')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                currentView === 'profile'
                  ? 'bg-slate-100 text-slate-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <User className="w-4 h-4 text-slate-500" />
              My Profile
            </button>

            <button
              onClick={onOpenRagModal}
              className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-orange-500" />
              RAG Flow
            </button>
          </nav>

          {/* Right Action: Language Indicator & Voice Assistant CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Selector Indicator */}
            <div className="relative group">
              <div className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200/80 cursor-pointer transition-colors">
                <Globe2 className="w-3.5 h-3.5 text-orange-600" />
                <span>తెలుగు (Telugu 🇮🇳)</span>
              </div>
              <div className="absolute right-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-200 p-2 hidden group-hover:block z-50 text-xs">
                <div className="font-semibold text-slate-900 px-2 py-1 border-b border-slate-100 flex items-center justify-between">
                  <span>Language Voice Mode</span>
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">Active</span>
                </div>
                <div className="mt-1 space-y-1">
                  <div className="px-2 py-1.5 bg-orange-50 text-orange-900 font-medium rounded-lg flex items-center justify-between">
                    <span>🇮🇳 Telugu (తెలుగు)</span>
                    <span className="text-[10px] font-bold text-orange-700">Supported</span>
                  </div>
                  <div className="px-2 py-1.5 text-slate-400 font-normal rounded-lg flex items-center justify-between">
                    <span>🇮🇳 Hindi (हिंदी)</span>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Coming Soon</span>
                  </div>
                  <div className="px-2 py-1.5 text-slate-400 font-normal rounded-lg flex items-center justify-between">
                    <span>🌐 English (Indian)</span>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Voice Assistant Primary Button */}
            <button
              onClick={() => onOpenVoiceAssistant()}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm shadow-md shadow-orange-600/20 hover:shadow-lg transition-all active:scale-95"
            >
              <Mic className="w-4 h-4 animate-pulse" />
              <span className="hidden sm:inline">Voice Assistant</span>
              <span className="sm:hidden">Voice</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};
