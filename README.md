# Sahaya (సహాయ) — Multilingual Voice-First Scheme Assistant

> **Government Schemes, Explained Simply.**  
> Understand schemes, benefits and eligibility in simple language — without dealing with complicated government terminology.

Sahaya is an independent civic-tech web prototype built to make Indian central and state welfare programs accessible to all citizens through a **Telugu-first, voice-powered assistant**.

---

## 🌟 Key Features

1. **Independent Civic Landing Page**:
   - Modern startup interface clearly distinguished from official government portals.
   - Transparent boundaries detailing what the platform does and does NOT do.

2. **Privacy-Conscious Profile Setup**:
   - Multi-category support (Student, Farmer, Job Seeker, Senior Citizen, Woman, Business Owner, General Citizen).
   - Zero sensitive information collected (no Aadhaar, phone numbers, or OTPs).

3. **Personalized Dashboard**:
   - Realistic scheme cards with structured benefits, criteria, and verified source citations.
   - High-visibility status indicators: `🟢 Applications Open` and prominent `🔴 RED ALERT — Application deadline has passed` banners.

4. **Telugu Voice Assistant (Visual Centerpiece)**:
   - Large microphone interface with ripple waves and audio waveform visualizer.
   - Native Telugu script (*తెలుగు*), Romanized conversational Telugu (*Tenglish*), and English script tabs.
   - Structured responses:
     - 🌟 **Simple ga cheppalante**
     - 👥 **Evariki?**
     - 🎁 **Benefits**
     - 📋 **Eligibility**
     - 📍 **Available in**
   - Real-time speech synthesis audio readout and Web Speech API recognition.
   - Grounded knowledge base label: *"Powered by verified scheme information"*.

5. **Civic RAG Concept Architecture**:
   - Interactive representation of the official information pipeline: **Govt Portals → Structured Schema → RAG Engine → Plain Telugu Voice**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open `http://localhost:5173` in your browser.
