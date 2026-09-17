import React from 'react';
import { Mic, ShieldCheck, Heart, ExternalLink, AlertTriangle, Layers } from 'lucide-react';

interface FooterProps {
  onOpenRagModal: () => void;
  onOpenVoiceAssistant: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRagModal,
  onOpenVoiceAssistant,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs mt-16">
      
      {/* Boundaries Warning Box */}
      <div className="border-b border-slate-800/80 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-white font-bold text-xs uppercase tracking-wider">
                  Important Public Disclaimer & Privacy Commitment
                </h5>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                  Sahaya is an independent civic information tool designed to simplify public scheme guidelines. This platform does not process official government applications, collect sensitive banking details, or issue approvals.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenRagModal}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold shrink-0 transition-colors"
            >
              View RAG Architecture
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Branding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold">
                <Mic className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Sahaya<span className="text-orange-500">.ai</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Democratizing access to Indian welfare programs through conversational Telugu voice AI. Transforming dense legal notifications into actionable civic awareness.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span>🇮🇳 Built for Indian Citizens</span>
              <span>•</span>
              <span>Voice-First Experience</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <div className="text-white font-bold text-xs uppercase tracking-wider">
              Supported Portals
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://scholarships.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>National Scholarship Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>PM-Kisan Samman Nidhi</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://pmvishwakarma.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>PM Vishwakarma Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://beneficiary.nha.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Ayushman Bharat PM-JAY</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Assistant Info */}
          <div className="space-y-2.5">
            <div className="text-white font-bold text-xs uppercase tracking-wider">
              Voice Assistant
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available now in Telugu with real-time Speech-to-Text and audio synthesis.
            </p>
            <button
              onClick={onOpenVoiceAssistant}
              className="mt-2 px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Launch Voice Demo</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Sahaya Prototype. An Independent Civic-Tech Innovation.
          </div>
          <div className="flex items-center gap-4">
            <span>Telugu • English • Hindi</span>
            <span>Zero-tracking policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
