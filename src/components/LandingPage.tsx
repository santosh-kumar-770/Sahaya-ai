import React from 'react';
import { Mic, ArrowRight, Sparkles, Volume2, ShieldCheck, CheckCircle2, ChevronRight, BookOpen, AlertCircle } from 'lucide-react';
import { SAMPLE_VOICE_PROMPTS } from '../data/assistantResponses';

interface LandingPageProps {
  onGetStarted: () => void;
  onOpenVoiceAssistant: (prompt?: string) => void;
  onOpenRagModal: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onGetStarted,
  onOpenVoiceAssistant,
  onOpenRagModal,
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
        {/* Soft background glow accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-200/40 via-orange-100/30 to-emerald-100/40 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Trust & Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>Telugu-First AI Assistance • 100% Free & Independent</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Government Schemes, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-700 bg-clip-text text-transparent">
              Explained Simply.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Understand schemes, benefits and eligibility in simple language — without dealing with complicated government terminology.
          </p>

          {/* Primary CTA and Secondary Text */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-base sm:text-lg shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onOpenVoiceAssistant('PM scholarship scheme gurinchi cheppu')}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2.5 hover:border-slate-300"
            >
              <Mic className="w-5 h-5 text-orange-600 animate-pulse" />
              <span>Try Telugu Voice Assistant</span>
            </button>
          </div>

          {/* Secondary Small Text */}
          <p className="mt-4 text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
            Voice-first • Simple language • Multilingual
          </p>

          {/* Interactive Voice Assistant Teaser Box */}
          <div className="mt-14 max-w-3xl mx-auto civic-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-orange-100 text-orange-900 text-xs font-bold rounded-bl-2xl border-l border-b border-orange-200">
              🎙️ Interactive Telugu Voice Demo
            </div>

            <div className="flex items-start gap-4">
              <button 
                onClick={() => onOpenVoiceAssistant()}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-transform shrink-0"
              >
                <Mic className="w-7 h-7 sm:w-8 sm:h-8" />
              </button>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    Ask questions in Telugu or English
                  </h3>
                  <span className="text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                    Instant Voice Reply
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  Click any sample question below to see how Sahaya explains complex rules in easy Telugu:
                </p>

                {/* Sample Prompt Chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {SAMPLE_VOICE_PROMPTS.slice(0, 4).map((prompt) => (
                    <button
                      key={prompt.id}
                      onClick={() => onOpenVoiceAssistant(prompt.textTelugu)}
                      className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-orange-50 hover:border-orange-200 border border-slate-200 text-xs font-medium text-slate-700 hover:text-orange-900 transition-colors flex items-center gap-2 group"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-orange-500 group-hover:scale-110 transition-transform" />
                      <span>“{prompt.textTelugu}”</span>
                      <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Simple Steps Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How Sahaya Works for You
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Designed for everyday citizens to discover and understand their rights without legal complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-extrabold text-lg mb-4">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Select Your Category</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Choose if you are a student, farmer, woman, senior citizen, job seeker, or business owner in seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-extrabold text-lg mb-4">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Get Personalized Schemes</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                View clear cards with benefits, direct subsidies, real deadlines, and high-visibility status warnings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-extrabold text-lg mb-4">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Ask via Voice Assistant</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Speak or listen in simple Telugu. Get answers directly grounded in verified government notifications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RAG & Reliability Banner */}
      <section className="py-10 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="civic-card rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  Powered by Verified Scheme Data Architecture (RAG)
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Our assistant is grounded in official gazettes and portals — avoiding hallucinated eligibility rules.
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Govt Sources</span>
                  <span>→</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Structured Data</span>
                  <span>→</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">RAG Pipeline</span>
                  <span>→</span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Simple Telugu Voice</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenRagModal}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shrink-0 transition-colors"
            >
              Explore Architecture
            </button>
          </div>
        </div>
      </section>

      {/* Important Product Boundaries Section */}
      <section className="py-8 bg-slate-900 text-slate-300 text-xs sm:text-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
            <div>
              <div className="text-white font-bold text-base flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Our Civic Mission & Clear Boundaries</span>
              </div>
              <p className="text-slate-400 mt-1">
                Sahaya is strictly an explanatory and discovery companion for citizens.
              </p>
            </div>
            <button
              onClick={onGetStarted}
              className="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold transition-colors shrink-0"
            >
              Find Your Schemes
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2">
              <div className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">What Sahaya Does:</div>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Discovers schemes matching your life stage and profession</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Translates legal government jargon into conversational Telugu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Highlights critical application deadlines and RED ALERT warnings</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-amber-400 uppercase tracking-wider text-[11px]">What Sahaya Does NOT Do:</div>
              <ul className="space-y-1.5 text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Does not submit applications or ask for OTPs / banking passwords</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Does not make legal eligibility certifications or represent govt ministries</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Does not sell user data to third parties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
