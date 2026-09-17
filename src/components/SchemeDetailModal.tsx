import React from 'react';
import { 
  X, 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Users, 
  Gift, 
  FileText, 
  Building2, 
  ExternalLink, 
  Mic, 
  ShieldCheck, 
  Sparkles,
  Info
} from 'lucide-react';
import { Scheme } from '../types/scheme';

interface SchemeDetailModalProps {
  scheme: Scheme | null;
  onClose: () => void;
  onAskAssistant: (scheme: Scheme) => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({
  scheme,
  onClose,
  onAskAssistant,
}) => {
  if (!scheme) return null;

  const isClosed = scheme.status === 'CLOSED';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Sticky Header */}
        <div className="p-6 pb-4 border-b border-slate-100 bg-white sticky top-0 z-10 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                {scheme.schemeType} Government Scheme
              </span>
              {scheme.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-orange-50 text-orange-800 border border-orange-200">
                  {t}
                </span>
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {scheme.name}
            </h2>
            <p className="text-sm font-semibold text-orange-700 mt-0.5 telugu-text">
              {scheme.teluguName}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* Status Indicator & Red Alert Banner */}
          {isClosed ? (
            <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-400 text-rose-900 space-y-1">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />
                <span className="text-base font-extrabold uppercase tracking-wide text-rose-800">
                  RED ALERT — APPLICATION DEADLINE HAS PASSED
                </span>
              </div>
              <p className="text-xs sm:text-sm text-rose-700 pl-8">
                The deadline for this scheme closed on <strong>{scheme.deadline}</strong>. The government portal is not accepting fresh submissions at this time.
              </p>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></span>
                <div>
                  <div className="text-sm font-extrabold uppercase tracking-wider text-emerald-800">
                    🟢 APPLICATIONS OPEN
                  </div>
                  <div className="text-xs text-emerald-700">
                    {scheme.statusText || 'Currently accepting eligible citizen enrolments'}
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1.5 rounded-xl">
                Active Cycle
              </span>
            </div>
          )}

          {/* Quick Voice CTA Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Mic className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Want this explained in simple Telugu voice?</h4>
                <p className="text-xs text-orange-100">Ask eligibility rules, benefits, or documents via voice assistant.</p>
              </div>
            </div>
            <button
              onClick={() => onAskAssistant(scheme)}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white text-orange-900 font-bold text-xs hover:bg-orange-50 transition-colors shrink-0 shadow-sm"
            >
              Ask Voice Assistant
            </button>
          </div>

          {/* 1. What is this scheme? */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>What is this scheme?</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed space-y-2">
              <p>{scheme.shortExplanation}</p>
              <div className="pt-2 border-t border-slate-200/80 text-xs text-orange-900 font-medium telugu-text">
                <strong>తెలుగులో: </strong>{scheme.teluguShortExplanation}
              </div>
            </div>
          </div>

          {/* 2. Who is it for? */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Users className="w-4 h-4 text-orange-600" />
              <span>Who is it for?</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed space-y-2">
              <p>{scheme.whoItsFor}</p>
              <div className="pt-2 border-t border-slate-200/80 text-xs text-orange-900 font-medium telugu-text">
                <strong>అర్హులైన వర్గం: </strong>{scheme.teluguWhoItsFor}
              </div>
            </div>
          </div>

          {/* 3. Benefits */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Gift className="w-4 h-4 text-emerald-600" />
              <span>Benefits</span>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2.5">
              <ul className="space-y-2 text-sm text-slate-800">
                {scheme.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-emerald-200 text-xs text-emerald-900 font-medium telugu-text space-y-1">
                <span className="font-bold">ముఖ్య ప్రయోజనాలు:</span>
                {scheme.teluguBenefits.map((tb, idx) => (
                  <p key={idx} className="pl-2">• {tb}</p>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Eligibility */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
              <span>Eligibility Criteria</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <ul className="space-y-2 text-sm text-slate-700">
                {scheme.eligibility.map((e, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0 mt-2"></span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-slate-200 text-xs text-orange-900 font-medium telugu-text space-y-1">
                <span className="font-bold">అర్హత నిబంధనలు:</span>
                {scheme.teluguEligibility.map((te, idx) => (
                  <p key={idx} className="pl-2">• {te}</p>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Required Documents */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <FileText className="w-4 h-4 text-slate-600" />
              <span>Required Documents</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {scheme.requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6. Where is it available? & Important Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Where available */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Where is it available?</span>
              </div>
              <p className="text-xs text-slate-700 font-medium">
                {scheme.applicableStates.join(', ')}
              </p>
            </div>

            {/* Important Dates */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span>Important Dates</span>
              </div>
              <div className="text-xs text-slate-700">
                <p><strong>Start:</strong> {scheme.startDate || 'Open'}</p>
                <p className={isClosed ? 'text-rose-700 font-bold' : ''}>
                  <strong>Deadline:</strong> {scheme.deadline || 'Rolling / Continuous'}
                </p>
              </div>
            </div>

          </div>

          {/* 7. Government Source Information */}
          <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-slate-500 shrink-0" />
              <div>
                <span className="font-semibold text-slate-800">Verified Govt Source: </span>
                <span>{scheme.sourceName}</span>
                <span className="text-slate-400 block sm:inline sm:ml-2">({scheme.sourceDomain})</span>
              </div>
            </div>

            {scheme.sourceUrl && (
              <a
                href={scheme.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-700 hover:text-orange-900 font-bold underline flex items-center gap-1 shrink-0"
              >
                <span>Visit Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-4">
          <div className="text-[11px] text-slate-500 hidden sm:block">
            * Information summarized for citizen simplicity. Refer to official portal for legal gazettes.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onAskAssistant(scheme)}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-600/20 flex items-center gap-2 transition-colors"
            >
              <Mic className="w-4 h-4" />
              <span>Ask Voice Assistant</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
