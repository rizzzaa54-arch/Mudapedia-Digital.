'use client';

import React from 'react';
import { useLanguage } from '../TranslationContext';

export default function AboutTeamSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      <div className="container max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2">{t.about.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg rounded-3xl overflow-hidden border border-neutral-800 bg-black p-6 relative group">
              
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">{t.about.perfBadge}</span>
                  <h4 className="text-lg font-bold text-white">{t.about.perfTitle}</h4>
                </div>
              </div>

              <div className="relative h-56 w-full flex items-end pt-6">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                  <div className="border-b border-gray-600 w-full"></div>
                  <div className="border-b border-gray-600 w-full"></div>
                  <div className="border-b border-gray-600 w-full"></div>
                </div>

                <svg className="w-full h-full overflow-visible z-10" viewBox="0 0 400 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  <path 
                    d="M 0,150 Q 100,100 200,80 T 400,20 L 400,180 L 0,180 Z" 
                    fill="url(#chartGradient)" 
                  />

                  <path 
                    d="M 0,150 Q 100,100 200,80 T 400,20" 
                    fill="none" 
                    stroke="#22d3ee" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                  />

                  <circle cx="400" cy="20" r="6" fill="#38bdf8" className="animate-pulse" />
                  <circle cx="400" cy="20" r="12" fill="#06b6d4" opacity="0.4" className="animate-ping" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-neutral-800">
                <div className="bg-black p-3 rounded-2xl border border-neutral-800">
                  <span className="text-gray-400 text-xs block">{t.about.clientInc}</span>
                  <span className="text-cyan-400 font-bold text-base">{t.about.clientIncVal}</span>
                </div>
                <div className="bg-black p-3 rounded-2xl border border-neutral-800">
                  <span className="text-gray-400 text-xs block">{t.about.digitalSol}</span>
                  <span className="text-blue-400 font-bold text-base">{t.about.digitalSolVal}</span>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2">{t.about.visionTitle}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {t.about.visionDesc}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2">{t.about.missionTitle}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {t.about.missionDesc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}