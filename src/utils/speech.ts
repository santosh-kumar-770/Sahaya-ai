// Speech utilities for Web Speech Recognition and Web Speech Synthesis

export interface SpeechRecognitionHook {
  isSupported: boolean;
  isListening: boolean;
  transcript: string;
  startListening: (onResult: (text: string) => void, onError: (err: any) => void) => void;
  stopListening: () => void;
}

export function speakText(text: string, lang: 'te-IN' | 'en-IN' | 'hi-IN' = 'te-IN', onEnd?: () => void): () => void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    if (onEnd) setTimeout(onEnd, 1500);
    return () => {};
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95; // slightly slower for maximum clarity
  utterance.pitch = 1.0;
  utterance.lang = lang;

  // Attempt to select an Indian regional / Telugu voice if available
  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find(v => v.lang === lang || v.lang.startsWith(lang.split('-')[0])) ||
                       voices.find(v => v.lang.includes('IN') || v.name.includes('India'));
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  utterance.onerror = (e) => {
    console.error('Speech synthesis error:', e);
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);

  return () => {
    window.speechSynthesis.cancel();
  };
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
