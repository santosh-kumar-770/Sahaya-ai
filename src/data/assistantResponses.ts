import { AssistantStructuredResponse, SampleVoicePrompt } from '../types/scheme';
import { SCHEMES_DATABASE } from './schemesData';

export const SAMPLE_VOICE_PROMPTS: SampleVoicePrompt[] = [
  {
    id: 'p1',
    textTelugu: 'PM scholarship scheme gurinchi cheppu',
    textEnglish: 'Tell me about the PM Scholarship Scheme',
    categoryTag: '🎓 Scholarships',
    schemeId: 'pm-scholarship',
  },
  {
    id: 'p2',
    textTelugu: 'Naaku scholarships em unnayi?',
    textEnglish: 'What scholarships are available for me?',
    categoryTag: '🎓 Students',
    schemeId: 'pm-scholarship',
  },
  {
    id: 'p3',
    textTelugu: 'PM Kisan scheme lo benefits enti?',
    textEnglish: 'What are the benefits in PM-Kisan scheme?',
    categoryTag: '🌾 Farmers',
    schemeId: 'pm-kisan',
  },
  {
    id: 'p4',
    textTelugu: 'Ee scheme ki evaru eligible?',
    textEnglish: 'Who is eligible for this scheme?',
    categoryTag: '📋 Eligibility',
    schemeId: 'pm-vishwakarma',
  },
  {
    id: 'p5',
    textTelugu: 'Ayushman Bharat card evariki istharu?',
    textEnglish: 'Who gets the Ayushman Bharat free health card?',
    categoryTag: '🏥 Health',
    schemeId: 'ayushman-bharat-pmjay',
  },
  {
    id: 'p6',
    textTelugu: 'Business loan kosam Mudra scheme enti?',
    textEnglish: 'What is Mudra scheme for business loans?',
    categoryTag: '🏪 Business',
    schemeId: 'pm-mudra-shishu',
  },
  {
    id: 'p7',
    textTelugu: 'PM Surya Ghar solar subsidy entha?',
    textEnglish: 'How much is the PM Surya Ghar solar rooftop subsidy?',
    categoryTag: '☀️ Solar Subsidy',
    schemeId: 'pm-surya-ghar',
  },
  {
    id: 'p8',
    textTelugu: 'Senior citizens ki 60 years taruvatha pension schemes em unnayi?',
    textEnglish: 'What pension schemes exist for senior citizens after age 60?',
    categoryTag: '👴 Senior Pension',
    schemeId: 'atal-pension-yojana',
  }
];

export const STRUCTURED_RESPONSES: Record<string, AssistantStructuredResponse> = {
  'pm-scholarship': {
    query: 'PM scholarship scheme gurinchi cheppu.',
    teluguQuery: 'పీఎం స్కాలర్‌షిప్ పథకం గురించి వివరించు.',
    simpleExplanation: 'Ee scheme eligible students ki technical and higher education pursuit lo financial support provide chestundi.',
    teluguSimpleExplanation: 'ఈ పథకం ఇంజనీరింగ్, మెడికల్ మరియు ఇతర ప్రొఫెషనల్ కోర్సులు చదివే విద్యార్థులకు నెలవారీ ఆర్థిక చేయూతను అందిస్తుంది.',
    whoItsFor: 'Wards and widows of retired armed forces, paramilitary, and police personnel enrolled in 1st year professional degrees.',
    teluguWhoItsFor: 'గుర్తింపు పొందిన కాలేజీలలో డిగ్రీ/బీటెక్/ఎంబీబీఎస్ మొదటి సంవత్సరంలో చేరిన అర్హులైన విద్యార్థులకు.',
    benefits: 'Girl students ki ₹3,000/month (₹36,000/yr), Boy students ki ₹2,500/month (₹30,000/yr) direct bank account lo vestaru.',
    teluguBenefits: 'అమ్మాయిలకు నెలకు ₹3,000 (ఏడాదికి ₹36,000), అబ్బాయిలకు నెలకు ₹2,500 (ఏడాదికి ₹30,000) నేరుగా బ్యాంక్ ఖాతాలో జమ.',
    eligibility: 'Class 12 / Diploma lo minimum 60% marks undali. 1st year professional degree lo join ayyi undali.',
    teluguEligibility: 'ఇంటర్ లేదా డిప్లొమాలో కనీసం 60% మార్కులు సాధించి, రెగ్యులర్ ప్రొఫెషనల్ కోర్సులో చేరి ఉండాలి.',
    availableIn: 'Andhra Pradesh, Telangana, Karnataka, and all States across India.',
    teluguAvailableIn: 'ఆంధ్రప్రదేశ్, తెలంగాణ సహా భారతదేశంలోని అన్ని రాష్ట్రాల్లో అందుబాటులో ఉంది.',
    statusNote: '🟢 Applications Open on National Scholarship Portal (scholarships.gov.in)',
    schemeId: 'pm-scholarship',
    sourceName: 'Kendriya Sainik Board / NSP Portal',
    sourceDomain: 'scholarships.gov.in',
    confidenceScore: 0.98,
  },
  'pm-kisan': {
    query: 'PM Kisan scheme lo benefits enti?',
    teluguQuery: 'పీఎం కిసాన్ పథకంలో ప్రయోజనాలు ఏమిటి?',
    simpleExplanation: 'Ee scheme dwara raithulaku saagu karchula kosam direct cash support dorukuthundi.',
    teluguSimpleExplanation: 'రైతులకు సాగు ఖర్చులు, విత్తనాలు మరియు ఎరువుల పెట్టుబడి కోసం ప్రభుత్వం నేరుగా నగదు బదిలీ చేస్తుంది.',
    whoItsFor: 'Own agriculture land unna small and marginal farmer families ki.',
    teluguWhoItsFor: 'సొంత పట్టాదారు పాస్ పుస్తకం లేదా భూమి రికార్డులు ఉన్న రైతు కుటుంబాలకు.',
    benefits: 'Yearly ₹6,000 direct bank transfer — prathi 4 months ki ₹2,000 installment chappuna 3 vithallalo vestaru.',
    teluguBenefits: 'ఏడాదికి ₹6,000 డైరెక్ట్ బ్యాంక్ బదిలీ — ప్రతి 4 నెలలకు ఒకసారి ₹2,000 చొప్పున 3 విడతల్లో జమ.',
    eligibility: 'Pattadar passbook/land records undali, Aadhaar linked bank account tho e-KYC complete chesi undali. Govt employees & IT payers excluded.',
    teluguEligibility: 'రైతు పేరిట వ్యవసాయ భూమి రికార్డు ఉండాలి, ఆధార్ eKYC పూర్తి కావాలి. ప్రభుత్వ ఉద్యోగులు, పన్ను చెల్లింపుదారులకు వర్తించదు.',
    availableIn: 'Andhra Pradesh, Telangana and all Indian States.',
    teluguAvailableIn: 'ఆంధ్రప్రదేశ్, తెలంగాణ సహా దేశవ్యాప్తంగా అన్ని రాష్ట్రాల్లో లభిస్తుంది.',
    statusNote: '🟢 Continuous e-KYC & New Beneficiary Registrations Active',
    schemeId: 'pm-kisan',
    sourceName: 'Ministry of Agriculture & Farmers Welfare',
    sourceDomain: 'pmkisan.gov.in',
    confidenceScore: 0.99,
  },
  'pm-vishwakarma': {
    query: 'PM Vishwakarma scheme ki evaru eligible mariyu benefits enti?',
    teluguQuery: 'పీఎం విశ్వకర్మ పథకానికి ఎవరు అర్హులు మరియు లాభాలు ఏమిటి?',
    simpleExplanation: 'Chetivruthula vaaru and traditional artisans kosam tools, training mariyu low interest loans iche scheme.',
    teluguSimpleExplanation: 'సాంప్రదాయ చేతివృత్తులు, కళాకారులకు నైపుణ్య శిక్షణ, ఉచిత టూల్‌కిట్ గ్రాంట్ మరియు అతి తక్కువ వడ్డీకే రుణాలు అందించే పథకం.',
    whoItsFor: 'Carpenters, Blacksmiths, Goldsmiths, Potters, Tailors, Weavers and 18 traditional crafts lo panichese artisans ki.',
    teluguWhoItsFor: 'వడ్రంగి, కమ్మరి, కుమ్మరి, దర్జీ, శిల్పి మొదలైన 18 రకాల చేతివృత్తులు చేసే కళాకారులకు.',
    benefits: 'PM Vishwakarma Digital ID, ₹15,000 free toolkit grant, daily ₹500 stipend during training, and up to ₹3 Lakh loan at 5% interest without collateral.',
    teluguBenefits: 'విశ్వకర్మ ఐడీ కార్డు, ₹15,000 ఉచిత టూల్‌కిట్ గ్రాంట్, శిక్షణలో రోజుకు ₹500 స్టైపెండ్, మరియు పూచీకత్తు లేకుండా 5% వడ్డీకే ₹3 లక్షల వరకు రుణం.',
    eligibility: '18 eligible trades lo okati chestu undali, minimum 18 years age undali. One member per family.',
    teluguEligibility: 'గుర్తించిన 18 వృత్తులలో పనిచేస్తుండాలి, కనీసం 18 సంవత్సరాలు నిండి ఉండాలి. కుటుంబానికి ఒకరికి మాత్రమే.',
    availableIn: 'All States and Union Territories (Apply via Gram Panchayat / CSC centers).',
    teluguAvailableIn: 'దేశంలోని అన్ని రాష్ట్రాలలో అందుబాటులో ఉంది (గ్రామ పంచాయతీ / CSC సెంటర్ ద్వారా దరఖాస్తు).',
    statusNote: '🟢 Registrations & Verifications Active',
    schemeId: 'pm-vishwakarma',
    sourceName: 'Ministry of Micro, Small & Medium Enterprises (MSME)',
    sourceDomain: 'pmvishwakarma.gov.in',
    confidenceScore: 0.97,
  },
  'ayushman-bharat-pmjay': {
    query: 'Ayushman Bharat card evariki istharu?',
    teluguQuery: 'ఆయుష్మాన్ భారత్ కార్డు ఎవరికి ఇస్తారు?',
    simpleExplanation: 'Family mothaniki pedda rogalu and operation karchula nundi kaapade free cashless health insurance card.',
    teluguSimpleExplanation: 'ఆసుపత్రిలో శస్త్రచికిత్సలు, పెద్ద చికిత్సల కోసం కుటుంబానికి ఏడాదికి ₹5 లక్షల వరకు ఉచిత నగదు రహిత ఆరోగ్య బీమా.',
    whoItsFor: 'Ration card unna eligible families ki mariyu 70+ years unna senior citizens andariki.',
    teluguWhoItsFor: 'రేషన్ కార్డు కలిగిన కుటుంబాలు మరియు 70 ఏళ్లు పైబడిన సీనియర్ సిటిజన్లు అందరికీ.',
    benefits: 'Yearly ₹5 Lakhs varaku cashless free hospital treatment at 29,000+ empanelled govt & private hospitals.',
    teluguBenefits: 'ఏటా ₹5 లక్షల వరకు దేశవ్యాప్తంగా ఉన్న 29,000+ ప్రైవేట్ మరియు ప్రభుత్వ ఆసుపత్రులలో ఉచిత నగదు రహిత చికిత్స.',
    eligibility: 'Food security ration card undali. 70+ age unte income limit lekunda direct ga Vaya Vandana card istharu.',
    teluguEligibility: 'ఆహార భద్రత రేషన్ కార్డు ఉండాలి. 70 ఏళ్లు పైబడిన వారికి ఆదాయ పరిమితి లేకుండా ప్రత్యేక కార్డు లభిస్తుంది.',
    availableIn: 'All India (Integrated with Aarogyasri in AP/Telangana).',
    teluguAvailableIn: 'ఆంధ్రప్రదేశ్ (ఆరోగ్యశ్రీతో అనుసంధానం), తెలంగాణ మరియు అన్ని రాష్ట్రాల్లో చెల్లుతుంది.',
    statusNote: '🟢 Continuous Ayushman Card Generation Open',
    schemeId: 'ayushman-bharat-pmjay',
    sourceName: 'National Health Authority (NHA)',
    sourceDomain: 'beneficiary.nha.gov.in',
    confidenceScore: 0.99,
  },
  'pm-mudra-shishu': {
    query: 'Business loan kosam Mudra scheme enti?',
    teluguQuery: 'వ్యాపార రుణం కోసం ముద్ర పథకం ఏమిటి?',
    simpleExplanation: 'Small business owners and shopkeepers ki guarantee lekunda loan iche government scheme.',
    teluguSimpleExplanation: 'చిన్న వ్యాపారులు, దుకాణదారులకు ఆస్తి పూచీకత్తు (Collateral) లేకుండా వ్యాపార రుణాలు ఇచ్చే కేంద్ర పథకం.',
    whoItsFor: 'Shops, retail units, traders, artisan units and small enterprise entrepreneurs ki.',
    teluguWhoItsFor: 'చిన్న దుకాణాలు, స్వయం ఉపాధి లేదా సర్వీస్ యూనిట్లు నడిపే చిన్న వ్యాపారులకు.',
    benefits: 'Shishu (up to ₹50k), Kishore (₹50k to ₹5L), and Tarun (up to ₹10L) loan facilities without collateral.',
    teluguBenefits: 'శిశు (₹50,000 వరకు), కిశోర్ (₹5 లక్షల వరకు), తరుణ్ (₹10 లక్షల వరకు) పూచీకత్తు లేని వ్యాపార రుణాలు.',
    eligibility: 'Viable business plan undali, no bank loan defaults, valid KYC and bank account.',
    teluguEligibility: 'సరైన వ్యాపార ప్రణాళిక ఉండాలి, గతంలో బ్యాంక్ డిఫాల్ట్లు ఉండకూడదు, కేవైసీ పత్రాలు ఉండాలి.',
    availableIn: 'All commercial banks, Regional Rural Banks (RRB) and cooperative banks in India.',
    teluguAvailableIn: 'భారతదేశంలోని అన్ని బ్యాంకులు, గ్రామీణ బ్యాంకులు మరియు జన్‌సమర్థ్ పోర్టల్ ద్వారా.',
    statusNote: '🟢 Applications open at all bank branches & jansamarth.in',
    schemeId: 'pm-mudra-shishu',
    sourceName: 'Department of Financial Services',
    sourceDomain: 'mudra.org.in / jansamarth.in',
    confidenceScore: 0.96,
  },
  'pm-surya-ghar': {
    query: 'PM Surya Ghar solar subsidy entha?',
    teluguQuery: 'పీఎం సూర్య ఘర్ సోలార్ సబ్సిడీ ఎంత లభిస్తుంది?',
    simpleExplanation: 'Inti meda solar panels pettukunte govt direct ga ₹78,000 varaku subsidy isthundi, zero power bill avthundi.',
    teluguSimpleExplanation: 'ఇంటి పైకప్పుపై సోలార్ ప్యానెల్స్ అమర్చుకుంటే ప్రభుత్వం ₹78,000 వరకు నేరుగా సబ్సిడీ ఇస్తుంది మరియు కరెంట్ బిల్లు ఆదా అవుతుంది.',
    whoItsFor: 'Residential homeowners having an active electricity meter connection with adequate roof space.',
    teluguWhoItsFor: 'సొంత ఇల్లు మరియు విద్యుత్ మీటర్ కనెక్షన్ ఉన్న గృహ యజమానులకు.',
    benefits: '1kW ki ₹30,000, 2kW ki ₹60,000, 3kW+ ki ₹78,000 direct bank subsidy + 300 units free monthly solar power.',
    teluguBenefits: '1 కిలోవాట్‌కు ₹30,000, 2 కిలోవాట్లకు ₹60,000, 3 కిలోవాట్లకు ₹78,000 డైరెక్ట్ సబ్సిడీ + నెలకు 300 యూనిట్ల ఉచిత విద్యుత్.',
    eligibility: 'Applicant peru meeda electricity bill undali, suitable roof undali.',
    teluguEligibility: 'గృహ వినియోగదారుడి పేరిట విద్యుత్ బిల్లు ఉండాలి, సోలార్ అమర్చేందుకు అనువైన పైకప్పు స్థలం ఉండాలి.',
    availableIn: 'All DISCOM electricity service areas across AP, Telangana and all states.',
    teluguAvailableIn: 'తెలంగాణ (TGSPDCL/TGNPDCL), ఏపీ (APEPDCL/APCPDCL) మరియు అన్ని రాష్ట్రాల డిస్కంలలో.',
    statusNote: '🟢 Registrations Open on pmsuryaghar.gov.in',
    schemeId: 'pm-surya-ghar',
    sourceName: 'Ministry of New and Renewable Energy',
    sourceDomain: 'pmsuryaghar.gov.in',
    confidenceScore: 0.98,
  },
  'post-matric-scholarship-scst': {
    query: 'Post matric special scholarship status enti?',
    teluguQuery: 'పోస్ట్ మెట్రిక్ స్కాలర్‌షిప్ స్థితి ఏమిటి?',
    simpleExplanation: 'Ee cycle lo applications close ayyayi. Kothaga apply cheyadaniki deadline aypoyindi.',
    teluguSimpleExplanation: 'ఈ విద్యా సంవత్సరపు దరఖాస్తు గడువు ముగిసింది. ప్రస్తుత విడతకు కొత్త దరఖాస్తులు నిలిపివేయబడ్డాయి.',
    whoItsFor: 'Higher degree & postgraduate students requiring tuition fee waiver.',
    teluguWhoItsFor: 'ఉన్నత పీజీ మరియు పరిశోధన విద్యార్థులకు.',
    benefits: 'Full fee reimbursement + monthly maintenance allowance (when open).',
    teluguBenefits: '100% కాలేజీ ఫీజు రీయింబర్స్‌మెంట్ మరియు మెయింటెనెన్స్ అలవెన్స్.',
    eligibility: 'Family income < ₹2.5L per annum & passed degree with 55%+ marks.',
    teluguEligibility: 'వార్షిక ఆదాయం ₹2.5 లక్షల లోపు ఉండి, డిగ్రీలో 55% మార్కులు సాధించిన విద్యార్థులు.',
    availableIn: 'All India',
    teluguAvailableIn: 'అన్ని రాష్ట్రాలు',
    statusNote: '🔴 RED ALERT: Application deadline has passed (15 August 2026). Check back for next academic cycle.',
    schemeId: 'post-matric-scholarship-scst',
    sourceName: 'Ministry of Social Justice and Empowerment',
    sourceDomain: 'scholarships.gov.in',
    confidenceScore: 0.99,
  }
};

/**
 * Intelligent helper that finds the best matching scheme and generated structured response
 * from query text or scheme ID
 */
export function getAssistantResponseForQuery(
  rawQuery: string,
  scopedSchemeId?: string
): AssistantStructuredResponse {
  const queryLower = rawQuery.toLowerCase().trim();

  // If scoped to a specific scheme directly
  if (scopedSchemeId && STRUCTURED_RESPONSES[scopedSchemeId]) {
    return STRUCTURED_RESPONSES[scopedSchemeId];
  }

  // Check if scoped scheme exists in database directly
  if (scopedSchemeId) {
    const matchedScheme = SCHEMES_DATABASE.find(s => s.id === scopedSchemeId);
    if (matchedScheme) {
      return generateResponseFromScheme(matchedScheme, rawQuery);
    }
  }

  // Match predefined query keys
  if (queryLower.includes('scholarship') || queryLower.includes('student') || queryLower.includes('chaduvu') || queryLower.includes('chaduvukune')) {
    return STRUCTURED_RESPONSES['pm-scholarship'];
  }
  if (queryLower.includes('kisan') || queryLower.includes('farmer') || queryLower.includes('raithu') || queryLower.includes('rythu') || queryLower.includes('panta')) {
    return STRUCTURED_RESPONSES['pm-kisan'];
  }
  if (queryLower.includes('vishwakarma') || queryLower.includes('artisan') || queryLower.includes('carpenter') || queryLower.includes('tailor') || queryLower.includes('chetivruthi')) {
    return STRUCTURED_RESPONSES['pm-vishwakarma'];
  }
  if (queryLower.includes('ayushman') || queryLower.includes('health') || queryLower.includes('hospital') || queryLower.includes('arogya') || queryLower.includes('aarogyasri')) {
    return STRUCTURED_RESPONSES['ayushman-bharat-pmjay'];
  }
  if (queryLower.includes('mudra') || queryLower.includes('business') || queryLower.includes('loan') || queryLower.includes('dukanam') || queryLower.includes('vyaparam')) {
    return STRUCTURED_RESPONSES['pm-mudra-shishu'];
  }
  if (queryLower.includes('surya') || queryLower.includes('solar') || queryLower.includes('bijli') || queryLower.includes('current') || queryLower.includes('electricity') || queryLower.includes('power')) {
    return STRUCTURED_RESPONSES['pm-surya-ghar'];
  }
  if (queryLower.includes('pension') || queryLower.includes('atal') || queryLower.includes('senior') || queryLower.includes('vruddhulu') || queryLower.includes('60')) {
    const s = SCHEMES_DATABASE.find(x => x.id === 'atal-pension-yojana')!;
    return generateResponseFromScheme(s, rawQuery);
  }
  if (queryLower.includes('sukanya') || queryLower.includes('girl') || queryLower.includes('aadapaapa') || queryLower.includes('ammai')) {
    const s = SCHEMES_DATABASE.find(x => x.id === 'sukanya-samriddhi')!;
    return generateResponseFromScheme(s, rawQuery);
  }

  // Fallback to first scheme or dynamic synthesis
  const defaultScheme = SCHEMES_DATABASE[0];
  return generateResponseFromScheme(defaultScheme, rawQuery);
}

function generateResponseFromScheme(scheme: import('../types/scheme').Scheme, query: string): AssistantStructuredResponse {
  return {
    query: query || `About ${scheme.name}`,
    teluguQuery: `${scheme.teluguName} గురించి వివరణ`,
    simpleExplanation: scheme.shortExplanation,
    teluguSimpleExplanation: scheme.teluguShortExplanation,
    whoItsFor: scheme.whoItsFor,
    teluguWhoItsFor: scheme.teluguWhoItsFor,
    benefits: scheme.benefits.join(' • '),
    teluguBenefits: scheme.teluguBenefits.join(' • '),
    eligibility: scheme.eligibility.join(' • '),
    teluguEligibility: scheme.teluguEligibility.join(' • '),
    availableIn: scheme.applicableStates.join(', '),
    teluguAvailableIn: scheme.applicableStates.join(', '),
    statusNote: scheme.status === 'OPEN' 
      ? `🟢 Applications Open (${scheme.statusText || 'Active'})`
      : `🔴 RED ALERT: Application deadline has passed (${scheme.deadline || 'Closed'})`,
    schemeId: scheme.id,
    sourceName: scheme.sourceName,
    sourceDomain: scheme.sourceDomain,
    confidenceScore: 0.95,
  };
}
