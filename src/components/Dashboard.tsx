import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Mic, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  SlidersHorizontal, 
  RefreshCw, 
  UserCheck, 
  AlertCircle,
  HelpCircle,
  MapPin,
  Check
} from 'lucide-react';
import { ProfileCategoryId, Scheme } from '../types/scheme';
import { PROFILE_CATEGORIES, SCHEMES_DATABASE } from '../data/schemesData';
import { SchemeCard } from './SchemeCard';

interface DashboardProps {
  selectedCategories: ProfileCategoryId[];
  onEditProfile: () => void;
  onSelectScheme: (scheme: Scheme) => void;
  onOpenVoiceAssistant: (prompt?: string, scopedScheme?: Scheme) => void;
  onOpenRagModal: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  selectedCategories,
  onEditProfile,
  onSelectScheme,
  onOpenVoiceAssistant,
  onOpenRagModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'OPEN' | 'CLOSED'>('all');
  const [selectedStateFilter, setSelectedStateFilter] = useState<string>('all');

  // Filter schemes matching profile and search terms
  const filteredSchemes = useMemo(() => {
    return SCHEMES_DATABASE.filter((scheme) => {
      // 1. Profile Category Match: If user has categories, prioritize or filter
      const matchesProfile = selectedCategories.length === 0 || 
        scheme.targetCategories.some(cat => selectedCategories.includes(cat));

      // 2. Tab Filter
      const matchesTab = activeCategoryFilter === 'all' || 
        scheme.targetCategories.includes(activeCategoryFilter as ProfileCategoryId);

      // 3. Status Filter
      const matchesStatus = statusFilter === 'all' || scheme.status === statusFilter;

      // 4. State Filter
      const matchesState = selectedStateFilter === 'all' || 
        scheme.applicableStates.includes('All India') ||
        scheme.applicableStates.includes(selectedStateFilter);

      // 5. Search Text Filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        scheme.name.toLowerCase().includes(query) ||
        scheme.teluguName.toLowerCase().includes(query) ||
        scheme.shortExplanation.toLowerCase().includes(query) ||
        scheme.highlightBenefit.toLowerCase().includes(query) ||
        scheme.tags.some(t => t.toLowerCase().includes(query));

      return (activeCategoryFilter !== 'all' ? matchesTab : matchesProfile) && 
             matchesStatus && 
             matchesState && 
             matchesSearch;
    });
  }, [selectedCategories, activeCategoryFilter, statusFilter, selectedStateFilter, searchQuery]);

  const activeCategoriesLabels = PROFILE_CATEGORIES.filter(c => selectedCategories.includes(c.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
      
      {/* Top Banner: Greeting & Profile Summary */}
      <div className="civic-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden bg-gradient-to-r from-orange-50/40 via-white to-amber-50/30">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Personalized Recommendations Active</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Schemes that may be relevant to you
            </h1>

            {/* Selected Profile Categories Tags */}
            <div className="mt-3 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-slate-500 font-medium">Your Profile:</span>
              {activeCategoriesLabels.length > 0 ? (
                activeCategoriesLabels.map(cat => (
                  <span
                    key={cat.id}
                    className="px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold shadow-xs flex items-center gap-1.5"
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </span>
                ))
              ) : (
                <span className="text-slate-500 italic">No specific filters (Showing All Citizen Schemes)</span>
              )}

              <button
                onClick={onEditProfile}
                className="ml-1 text-orange-600 hover:text-orange-800 font-bold underline transition-colors"
              >
                Edit Categories
              </button>
            </div>
          </div>

          {/* Quick Voice Assistant Trigger Box */}
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-orange-200/80 shadow-sm shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
              <Mic className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">
                Have questions about these?
              </div>
              <p className="text-[11px] text-slate-500">
                Ask in simple Telugu voice anytime
              </p>
              <button
                onClick={() => onOpenVoiceAssistant()}
                className="mt-1.5 px-3 py-1 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
              >
                Open Voice Assistant
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* RAG Information Flow Banner (Product Capability Highlight) */}
      <div 
        onClick={onOpenRagModal}
        className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 cursor-pointer hover:bg-slate-850 transition-colors shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Reliable Civic Intelligence (RAG Concept)
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5 flex items-center gap-2 flex-wrap">
              <span>Official Portals & Gazettes</span>
              <span className="text-slate-500">→</span>
              <span>Structured Scheme Data</span>
              <span className="text-slate-500">→</span>
              <span>RAG Engine</span>
              <span className="text-slate-500">→</span>
              <span className="text-emerald-400 font-bold">Simple Telugu Voice</span>
            </div>
          </div>
        </div>

        <span className="text-xs font-bold text-slate-300 underline shrink-0 hover:text-white">
          Learn How It Works ↗
        </span>
      </div>

      {/* Search & Filter Controls Bar */}
      <div className="space-y-4">
        
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search schemes by name, keyword (e.g. 'loan', 'scholarship', 'solar', 'tractor')..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Status and State Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            
            {/* Status Filter */}
            <div className="flex items-center bg-white p-1 rounded-2xl border border-slate-200 text-xs shadow-xs">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                  statusFilter === 'all'
                    ? 'bg-slate-900 text-white font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Status
              </button>
              <button
                onClick={() => setStatusFilter('OPEN')}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1 ${
                  statusFilter === 'OPEN'
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'text-emerald-700 hover:text-emerald-900'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Open</span>
              </button>
              <button
                onClick={() => setStatusFilter('CLOSED')}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1 ${
                  statusFilter === 'CLOSED'
                    ? 'bg-rose-600 text-white font-bold'
                    : 'text-rose-700 hover:text-rose-900'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                <span>Closed</span>
              </button>
            </div>

            {/* State Filter Dropdown */}
            <select
              value={selectedStateFilter}
              onChange={(e) => setSelectedStateFilter(e.target.value)}
              className="bg-white px-3 py-2 text-xs rounded-2xl border border-slate-200 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-xs"
            >
              <option value="all">📍 All India & States</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>

          </div>

        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveCategoryFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeCategoryFilter === 'all'
                ? 'bg-orange-600 text-white shadow-sm shadow-orange-600/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            All Relevant ({filteredSchemes.length})
          </button>

          {PROFILE_CATEGORIES.map((cat) => {
            const isCategorySelected = selectedCategories.includes(cat.id);
            const isActiveTab = activeCategoryFilter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActiveTab
                    ? 'bg-orange-600 text-white shadow-sm shadow-orange-600/20 font-bold'
                    : isCategorySelected
                    ? 'bg-orange-50 text-orange-900 border border-orange-200'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {isCategorySelected && !isActiveTab && (
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* Schemes Grid */}
      {filteredSchemes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              onSelectScheme={onSelectScheme}
              onAskAssistantAboutScheme={(s) => onOpenVoiceAssistant(undefined, s)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-3xl bg-white border border-slate-200 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">No schemes matched your search</h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Try adjusting your search query or reset category filters to view all available welfare programs.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategoryFilter('all');
              setStatusFilter('all');
              setSelectedStateFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Floating Voice Assistant Action Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => onOpenVoiceAssistant()}
          className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 hover:from-orange-700 hover:to-amber-600 text-white font-bold text-sm shadow-2xl shadow-orange-600/40 hover:scale-105 active:scale-95 transition-all group"
          aria-label="Open Voice Assistant"
        >
          <div className="relative">
            <Mic className="w-5 h-5 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white"></span>
          </div>
          <span className="tracking-wide">Ask in Telugu</span>
        </button>
      </div>

    </div>
  );
};
