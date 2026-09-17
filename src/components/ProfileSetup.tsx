import React from 'react';
import { Check, ArrowRight, ShieldCheck, HelpCircle, Sparkles } from 'lucide-react';
import { ProfileCategoryId } from '../types/scheme';
import { PROFILE_CATEGORIES } from '../data/schemesData';

interface ProfileSetupProps {
  selectedCategories: ProfileCategoryId[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<ProfileCategoryId[]>>;
  onShowSchemes: () => void;
}

export const ProfileSetup: React.FC<ProfileSetupProps> = ({
  selectedCategories,
  setSelectedCategories,
  onShowSchemes,
}) => {
  const toggleCategory = (catId: ProfileCategoryId) => {
    if (selectedCategories.includes(catId)) {
      setSelectedCategories(prev => prev.filter(id => id !== catId));
    } else {
      setSelectedCategories(prev => [...prev, catId]);
    }
  };

  const selectAll = () => {
    setSelectedCategories(PROFILE_CATEGORIES.map(c => c.id));
  };

  const clearAll = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/70 text-orange-900 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          <span>Step 1 of 2 • 100% Anonymous</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Tell us about yourself
        </h1>
        <p className="text-base text-slate-600 mt-2.5">
          Select all categories that apply to you or your family. You can select multiple categories to discover all eligible benefits.
        </p>
      </div>

      {/* Category Multi-Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {PROFILE_CATEGORIES.map((category) => {
          const isSelected = selectedCategories.includes(category.id);
          return (
            <div
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`relative cursor-pointer rounded-2xl p-5 border-2 transition-all duration-200 select-none ${
                isSelected
                  ? 'bg-orange-50/70 border-orange-500 shadow-md shadow-orange-500/10 -translate-y-0.5'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              {/* Top Row: Icon + Selection Indicator */}
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl sm:text-4xl p-2 rounded-xl bg-slate-50 border border-slate-100">
                  {category.icon}
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
                    isSelected
                      ? 'bg-orange-600 border-orange-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>

              {/* Label */}
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                {category.label}
              </h3>
              <p className="text-xs font-semibold text-orange-700/80 mb-2">
                {category.teluguLabel}
              </p>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed">
                {category.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Helper quick selections */}
      <div className="mt-6 flex items-center justify-between text-xs text-slate-500 px-1">
        <div className="flex items-center gap-3">
          <button
            onClick={selectAll}
            className="text-slate-600 hover:text-orange-600 font-medium underline"
          >
            Select All Categories
          </button>
          <span>•</span>
          <button
            onClick={clearAll}
            className="text-slate-600 hover:text-orange-600 font-medium underline"
          >
            Clear Selections
          </button>
        </div>
        <span className="font-semibold text-slate-700">
          {selectedCategories.length} selected
        </span>
      </div>

      {/* Bottom Actions & Privacy Notice */}
      <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Privacy Note */}
        <div className="flex items-center gap-3 text-xs text-slate-500 max-w-md">
          <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
          <p>
            <strong>Privacy Guarantee:</strong> We do not ask for your name, phone, Aadhaar, or location. Your profile is kept locally in your browser session.
          </p>
        </div>

        {/* Show My Schemes CTA */}
        <button
          onClick={onShowSchemes}
          disabled={selectedCategories.length === 0}
          className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 ${
            selectedCategories.length > 0
              ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-orange-500/25 hover:shadow-orange-500/35 hover:-translate-y-0.5 active:scale-95'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <span>Show My Schemes</span>
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};
