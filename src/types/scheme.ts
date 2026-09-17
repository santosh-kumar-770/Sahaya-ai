export type ProfileCategoryId = 
  | 'student'
  | 'farmer'
  | 'job_seeker'
  | 'senior_citizen'
  | 'woman'
  | 'business_owner'
  | 'general_citizen';

export interface ProfileCategory {
  id: ProfileCategoryId;
  label: string;
  teluguLabel: string;
  icon: string; // emoji or icon name
  description: string;
}

export type ApplicationStatus = 'OPEN' | 'CLOSED';

export interface Scheme {
  id: string;
  name: string;
  teluguName: string;
  shortExplanation: string;
  teluguShortExplanation: string;
  targetCategories: ProfileCategoryId[];
  whoItsFor: string;
  teluguWhoItsFor: string;
  benefits: string[];
  teluguBenefits: string[];
  eligibility: string[];
  teluguEligibility: string[];
  requiredDocuments: string[];
  applicableStates: string[];
  status: ApplicationStatus;
  statusText?: string;
  deadline?: string;
  startDate?: string;
  sourceName: string;
  sourceDomain: string;
  sourceUrl?: string;
  schemeType: 'Central' | 'State' | 'Joint';
  tags: string[];
  highlightBenefit: string;
}

export interface AssistantStructuredResponse {
  query: string;
  teluguQuery?: string;
  simpleExplanation: string;
  teluguSimpleExplanation: string;
  whoItsFor: string;
  teluguWhoItsFor: string;
  benefits: string;
  teluguBenefits: string;
  eligibility: string;
  teluguEligibility: string;
  availableIn: string;
  teluguAvailableIn: string;
  statusNote: string;
  schemeId?: string;
  sourceName: string;
  sourceDomain: string;
  confidenceScore: number;
}

export interface SampleVoicePrompt {
  id: string;
  textTelugu: string;
  textEnglish: string;
  categoryTag: string;
  schemeId?: string;
  audioKey?: string;
}

export type LanguageCode = 'te' | 'en' | 'hi';
