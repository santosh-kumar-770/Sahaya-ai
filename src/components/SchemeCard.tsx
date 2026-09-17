import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Users, 
  Gift, 
  ExternalLink, 
  Mic, 
  ArrowRight,
  Info,
  Building2
} from 'lucide-react';
import { Scheme } from '../types/scheme';

interface SchemeCardProps {
  scheme: Scheme;
  onSelectScheme: (scheme: Scheme) => void;
  onAskAssistantAboutScheme: (scheme: Scheme) => void;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({
  scheme,
  onSelectScheme,
  onAskAssistantAboutScheme,
}) => {
  const isClosed = scheme.status === 'CLOSED';

  return (
    <div className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden civic-card ${
      isClosed
        ? 'border-rose-300 hover:border-rose-400 bg-gradient-to-b from-rose-50/30 to-white shadow-rose-500/5'
        : 'border-slate-200/90 hover:border-orange-300 hover:shadow-lg shadow-slate-900/5'
    }`}>
      
      {/* Card Header with Badges & Status */}
      <div className="p-5 sm:p-6 pb-4">
        
        {/* Top bar: Scheme Type + Status Indicator */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
              {scheme.schemeType} Govt Scheme
            </span>
            {scheme.tags.slice(0, 1).map((t) => (
              <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-50 text-orange-800 border border-orange-200">
                {t}
              </span>
            ))}
          </div>

          {/* Status Badge */}
          {isClosed ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200 shrink-0">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              <span>🔴 Closed</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>🟢 Applications Open</span>
            </span>
          )}
        </div>

        {/* Scheme Name & Telugu subtitle */}
        <h3 
          onClick={() => onSelectScheme(scheme)}
          className="text-lg sm:text-xl font-bold text-slate-900 hover:text-orange-600 transition-colors cursor-pointer leading-snug"
        >
          {scheme.name}
        </h3>
        <p className="text-xs font-medium text-orange-700 mt-1 telugu-text">
          {scheme.teluguName}
        </p>

        {/* Short One-line Explanation */}
        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
          {scheme.shortExplanation}
        </p>

        {/* VISUAL RED ALERT BANNER FOR CLOSED SCHEMES */}
        {isClosed && (
          <div className="mt-4 p-3 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-900 flex items-start gap-2.5 shadow-sm">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-extrabold tracking-wide uppercase text-rose-800">
                RED ALERT — Application deadline has passed
              </div>
              <p className="text-[11px] text-rose-700 mt-0.5">
                Expired: <strong>{scheme.deadline}</strong>. Check back for upcoming budget release.
              </p>
            </div>
          </div>
        )}

        {/* Highlight Benefit Box */}
        <div className="mt-4 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5">
          <Gift className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-amber-900">Key Benefit: </span>
            <span className="text-amber-800 font-medium">{scheme.highlightBenefit}</span>
          </div>
        </div>

        {/* Key Info Details Grid */}
        <div className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
          
          {/* Who it's for */}
          <div className="flex items-start gap-2">
            <Users className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-700">Who it's for: </span>
              <span className="line-clamp-1">{scheme.whoItsFor}</span>
            </div>
          </div>

          {/* Applicable States */}
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-700">Applicable in: </span>
              <span className="text-slate-600">
                {scheme.applicableStates.slice(0, 3).join(', ')}
                {scheme.applicableStates.length > 3 ? '...' : ''}
              </span>
            </div>
          </div>

          {/* Deadline / Dates */}
          <div className="flex items-start gap-2">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-700">Deadline: </span>
              <span className={isClosed ? 'text-rose-700 font-semibold' : 'text-slate-600'}>
                {scheme.deadline || 'Ongoing'}
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Card Footer with Source & Actions */}
      <div className="p-4 sm:p-5 pt-3 bg-slate-50/80 border-t border-slate-100 flex flex-col gap-3">
        
        {/* Source Citation */}
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1 truncate max-w-[220px]" title={scheme.sourceName}>
            <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="truncate">{scheme.sourceDomain}</span>
          </span>
          <span className="text-emerald-700 font-medium text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded">
            Verified Source
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onAskAssistantAboutScheme(scheme)}
            className="flex-1 py-2 px-3 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            title="Ask Voice Assistant about this scheme"
          >
            <Mic className="w-3.5 h-3.5 text-orange-600" />
            <span>Ask in Telugu</span>
          </button>

          <button
            onClick={() => onSelectScheme(scheme)}
            className="py-2 px-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 flex items-center justify-center gap-1 transition-colors"
          >
            <span>Details</span>
            <ArrowRight className="w-3 h-3 text-slate-500" />
          </button>
        </div>

      </div>

    </div>
  );
};
