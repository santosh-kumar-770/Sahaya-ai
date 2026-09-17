import React from 'react';
import { 
  X, 
  Layers, 
  ShieldCheck, 
  FileCheck2, 
  Database, 
  Sparkles, 
  Mic, 
  CheckCircle2, 
  ArrowRight,
  Cpu,
  Globe2
} from 'lucide-react';

interface RagArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RagArchitectureModal: React.FC<RagArchitectureModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-100 bg-white sticky top-0 z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Civic Knowledge Engine & RAG Pipeline
              </h3>
              <p className="text-xs text-slate-500">
                How Sahaya converts complex gazettes into trusted Telugu voice explanations
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Headline capability */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-800 mb-1">
              Core Architecture Capability
            </div>
            <p className="text-sm font-semibold text-slate-900 leading-relaxed">
              Standard generic chatbots often fabricate government rules or quote outdated deadlines. Sahaya uses a verified Retrieval-Augmented Generation (RAG) pipeline to ground every voice answer in verified official notifications.
            </p>
          </div>

          {/* 4-Step Visual Flow Diagram */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">
              The 4-Step Intelligence Pipeline
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                  1
                </div>
                <h5 className="font-bold text-slate-900 text-sm">
                  1. Official Government Sources
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Scrapers & feeds monitor state gazettes, National Scholarship Portal (NSP), PM Kisan, MNRE, and Ministry guidelines.
                </p>
                <div className="text-[11px] text-slate-500 font-mono bg-white p-2 rounded-lg border border-slate-200">
                  scholarships.gov.in • pmkisan.gov.in • pmvishwakarma.gov.in
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <h5 className="font-bold text-slate-900 text-sm">
                  2. Structured Scheme Knowledge Base
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Raw PDF notifications are parsed into normalized schemas: eligibility criteria, financial benefits, mandatory documents, and active deadlines.
                </p>
                <div className="text-[11px] text-slate-500 font-mono bg-white p-2 rounded-lg border border-slate-200">
                  JSON Scheme Schema • Strict Typing • State Mapping
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                  3
                </div>
                <h5 className="font-bold text-slate-900 text-sm">
                  3. Multilingual RAG Retrieval
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When a citizen speaks in conversational Telugu or Tenglish, semantic embeddings retrieve the exact relevant scheme clauses with exact citations.
                </p>
                <div className="text-[11px] text-slate-500 font-mono bg-white p-2 rounded-lg border border-slate-200">
                  Query Matching • Context Injection • Hallucination Filter
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-300 space-y-2 relative">
                <div className="w-7 h-7 rounded-lg bg-emerald-200 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  4
                </div>
                <h5 className="font-bold text-emerald-950 text-sm">
                  4. Simple Telugu Voice Output
                </h5>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  The model speaks back in plain, jargon-free Telugu structure: “Simple ga cheppalante”, “Evariki?”, “Benefits”, and “Eligibility”.
                </p>
                <div className="text-[11px] text-emerald-800 font-mono bg-white p-2 rounded-lg border border-emerald-200">
                  Web Speech Synthesis • Audio Waveforms • Telugu Text
                </div>
              </div>

            </div>
          </div>

          {/* Prototype Readiness Note */}
          <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Prototype Schema Ready: </strong>
              The current web prototype utilizes typed modular JSON objects (`/src/data/schemesData.ts`) structured identically to production vector-store payloads, allowing seamless plug-in to live Vector DBs and real Speech-to-Text models.
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
