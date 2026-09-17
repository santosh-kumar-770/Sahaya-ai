import { ProfileCategory, Scheme } from '../types/scheme';

export const PROFILE_CATEGORIES: ProfileCategory[] = [
  {
    id: 'student',
    label: 'Student',
    teluguLabel: 'విద్యార్థి (Student)',
    icon: '🎓',
    description: 'School, college, higher education scholarships and skill programs',
  },
  {
    id: 'farmer',
    label: 'Farmer',
    teluguLabel: 'రైతు (Farmer)',
    icon: '🌾',
    description: 'Direct income support, crop insurance, solar pumps & farm tools',
  },
  {
    id: 'job_seeker',
    label: 'Job Seeker',
    teluguLabel: 'ఉద్యోగార్థి (Job Seeker)',
    icon: '💼',
    description: 'Skill development, apprenticeship stipends, and employment support',
  },
  {
    id: 'senior_citizen',
    label: 'Senior Citizen',
    teluguLabel: 'సీనియర్ సిటిజన్ (Senior Citizen)',
    icon: '👴',
    description: 'Guaranteed pension schemes, healthcare cards and savings benefits',
  },
  {
    id: 'woman',
    label: 'Woman',
    teluguLabel: 'మహిళ (Woman)',
    icon: '👩',
    description: 'Self-help loans, girl child savings, maternity aid and entrepreneurship',
  },
  {
    id: 'business_owner',
    label: 'Business Owner / MSME',
    teluguLabel: 'వ్యాపారి / MSME (Business Owner)',
    icon: '🏪',
    description: 'Collateral-free business loans, artisan toolkits and subsidies',
  },
  {
    id: 'general_citizen',
    label: 'General Citizen',
    teluguLabel: 'సాధారణ పౌరుడు (General Citizen)',
    icon: '👤',
    description: 'Universal health cover, solar rooftop subsidies, food security',
  },
];

export const SCHEMES_DATABASE: Scheme[] = [
  {
    id: 'pm-scholarship',
    name: 'Prime Minister Scholarship Scheme (PMSS)',
    teluguName: 'ప్రధాన మంత్రి స్కాలర్‌షిప్ పథకం (PMSS)',
    shortExplanation: 'Financial monthly scholarship for dependent wards & widows of ex-servicemen pursuing higher technical/professional degrees.',
    teluguShortExplanation: 'ఉన్నత సాంకేతిక మరియు ప్రొఫెషనల్ కోర్సులు చదివే అర్హులైన విద్యార్థులకు నెలవారీ స్కాలర్‌షిప్ మద్దతు.',
    targetCategories: ['student'],
    whoItsFor: 'Wards and widows of retired armed forces, paramilitary personnel & police personnel taking admission in recognized technical/medical colleges.',
    teluguWhoItsFor: 'గుర్తింపు పొందిన ఇంజనీరింగ్, మెడికల్ లేదా ప్రొఫెషనల్ డిగ్రీలలో చేరిన అర్హులైన విద్యార్థులు.',
    highlightBenefit: '₹3,000 / month (Girls) & ₹2,500 / month (Boys)',
    benefits: [
      '₹3,000 per month for female students (Paid annually ₹36,000).',
      '₹2,500 per month for male students (Paid annually ₹30,000).',
      'Direct Bank Transfer (DBT) into student’s Aadhaar-linked savings account.',
      'Covers duration of entire professional degree course (e.g. 4-5 years).'
    ],
    teluguBenefits: [
      'అమ్మాయిలకు నెలకు ₹3,000 (ఏడాదికి ₹36,000).',
      'అబ్బాయిలకు నెలకు ₹2,500 (ఏడాదికి ₹30,000).',
      'డైరెక్ట్ బ్యాంక్ బదిలీ (DBT) ద్వారా నేరుగా బ్యాంక్ ఖాతాలో జమ.',
      'కోర్సు పూర్తయ్యే వరకు ప్రతీ సంవత్సరం అందుతుంది.'
    ],
    eligibility: [
      'Minimum 60% marks in Class 12th / Diploma / Graduation.',
      'Must be enrolled in 1st year of recognized professional degree course (B.Tech, MBBS, B.Pharm, MBA, MCA, etc.).',
      'Wards of Ex-servicemen / Ex-Coast Guard personnel or State Police personnel martyred in terror/naxal attacks.'
    ],
    teluguEligibility: [
      'ఇంటర్మీడియట్ / 12వ తరగతి లేదా డిప్లొమాలో కనీసం 60% మార్కులు ఉండాలి.',
      'గుర్తింపు పొందిన ప్రొఫెషనల్ డిగ్రీ (B.Tech, MBBS, MCA, మొదలైనవి) మొదటి సంవత్సరంలో చేరి ఉండాలి.',
      'మాజీ సైనికులు, కోస్ట్ గార్డ్ లేదా అమరులైన పోలీస్ సిబ్బంది పిల్లలు.'
    ],
    requiredDocuments: [
      'Aadhaar Card of student and parent',
      'Ex-Servicemen Discharge Book / Serving Certificate',
      'Class 12 / Diploma Marksheet (showing >=60%)',
      'College Bonafide Certificate / Admission confirmation',
      'Aadhaar seeded bank account passbook copy'
    ],
    applicableStates: ['All India', 'Andhra Pradesh', 'Telangana', 'Karnataka', 'Tamil Nadu', 'Maharashtra', 'All States & UTs'],
    status: 'OPEN',
    statusText: 'Applications Open for Academic Session',
    startDate: '01 July 2026',
    deadline: '31 October 2026',
    sourceName: 'Kendriya Sainik Board / National Scholarship Portal (NSP)',
    sourceDomain: 'scholarships.gov.in',
    sourceUrl: 'https://scholarships.gov.in',
    schemeType: 'Central',
    tags: ['Education', 'Scholarship', 'Armed Forces', 'Degree', 'Technical Education']
  },
  {
    id: 'pm-kisan',
    name: 'PM-Kisan Samman Nidhi',
    teluguName: 'పీఎం-కిసాన్ సమ్మాన్ నిధి (PM-KISAN)',
    shortExplanation: '₹6,000 per year direct financial benefit provided in 3 equal installments to small and marginal landholding farmer families.',
    teluguShortExplanation: 'రైతు కుటుంబాలకు పంట ఖర్చులు మరియు పెట్టుబడి కోసం ఏడాదికి ₹6,000 డైరెక్ట్ నగదు సాయం.',
    targetCategories: ['farmer'],
    whoItsFor: 'Landholding farmer families with cultivable land record in their names across all rural and urban areas.',
    teluguWhoItsFor: 'సొంత పట్టాదారు పాస్ పుస్తకం కలిగిన చిన్న మరియు సన్నకారు రైతు కుటుంబాలు.',
    highlightBenefit: '₹6,000 / year (₹2,000 every 4 months via DBT)',
    benefits: [
      'Guaranteed ₹6,000 per year directly transferred to bank account.',
      'Disbursed in 3 equal installments of ₹2,000 every 4 months.',
      'Assists in buying seeds, fertilizers, tractor rentals and farm essentials.',
      'No middleman; 100% Aadhaar-based DBT payment.'
    ],
    teluguBenefits: [
      'ఏడాదికి ₹6,000 నేరుగా బ్యాంక్ ఖాతాలో జమ అవుతుంది.',
      'ప్రతి 4 నెలలకు ఒకసారి ₹2,000 చొప్పున 3 విడతల్లో అందుతుంది.',
      'విత్తనాలు, ఎరువులు మరియు వ్యవసాయ అవసరాల కొనుగోలుకు ఉపయోగపడుతుంది.',
      'ఎటువంటి దళారులు లేకుండా 100% ఆధార్ లింక్డ్ DBT చెల్లింపు.'
    ],
    eligibility: [
      'Farmer family owning cultivable agricultural land as per state revenue records (e.g. RoR-1B / Pattadar Passbook).',
      'Aadhaar card must be verified and eKYC completed on PM Kisan portal/app.',
      'Exclusions: Institutional landholders, active/retired government employees, income-tax payers, doctors, lawyers, engineers.'
    ],
    teluguEligibility: [
      'రాష్ట్ర రెవెన్యూ రికార్డుల్లో (పట్టాదారు పాస్ పుస్తకం) వ్యవసాయ భూమి నమోదై ఉండాలి.',
      'ఆధార్ కార్డు లింక్ అయి ఉండాలి మరియు eKYC పూర్తి చేసి ఉండాలి.',
      'ఆదాయపు పన్ను (Income Tax) చెల్లించేవారు లేదా ప్రభుత్వ ఉద్యోగులు అర్హులు కారు.'
    ],
    requiredDocuments: [
      'Aadhaar Card (linked with mobile number)',
      'Land Ownership document (Pattadar Passbook / 1B / Khatiyan)',
      'Bank Account Passbook (NPCI / Aadhaar seeded)',
      'e-KYC biometric/OTP verification'
    ],
    applicableStates: ['All India', 'Andhra Pradesh', 'Telangana', 'Karnataka', 'Odisha', 'All States & UTs'],
    status: 'OPEN',
    statusText: 'Continuous e-KYC & New Registrations Open',
    startDate: 'Active Scheme',
    deadline: 'Rolling (Continuous Enrolment)',
    sourceName: 'Ministry of Agriculture & Farmers Welfare',
    sourceDomain: 'pmkisan.gov.in',
    sourceUrl: 'https://pmkisan.gov.in',
    schemeType: 'Central',
    tags: ['Agriculture', 'Direct Benefit Transfer', 'Farmers', 'Income Support']
  },
  {
    id: 'pm-vishwakarma',
    name: 'PM Vishwakarma Yojana',
    teluguName: 'పీఎం విశ్వకర్మ యోజన (PM Vishwakarma)',
    shortExplanation: 'End-to-end holistic support for traditional artisans and craftspeople: certificate, ₹15,000 tool kit grant & collateral-free loans @ 5% interest.',
    teluguShortExplanation: 'చేతివృత్తుల వారు, కళాకారులకు గుర్తింపు కార్డు, ₹15,000 టూల్‌కిట్ గ్రాంట్ మరియు 5% వడ్డీకే ₹3 లక్షల వరకు పూచీకత్తు లేని రుణం.',
    targetCategories: ['business_owner', 'job_seeker'],
    whoItsFor: 'Traditional artisans and craftsmen working with hands and tools in 18 identified trades (Carpenters, Blacksmiths, Goldsmiths, Potters, Tailors, Cobblers, Weavers, etc.).',
    teluguWhoItsFor: 'చేతులతో, పనిముట్లతో సాంప్రదాయ వృత్తులు చేసే 18 రకాల చేతివృత్తి కళాకారులు (వడ్రంగి, కమ్మరి, కుమ్మరి, దర్జీ, శిల్పి మొదలైనవారు).',
    highlightBenefit: '₹15,000 Free Toolkit Grant + Up to ₹3 Lakh Collateral-free Loan at 5%',
    benefits: [
      'Recognition: PM Vishwakarma Certificate and ID Card.',
      'Skill Upgradation: 5-7 days basic training with ₹500/day stipend.',
      'Toolkit Incentive: ₹15,000 digital voucher for buying modern tools.',
      'Credit Support: ₹1,00,000 (Tranche 1) and ₹2,00,000 (Tranche 2) loan at concessional 5% interest rate without collateral.'
    ],
    teluguBenefits: [
      'పీఎం విశ్వకర్మ డిజిటల్ ఐడీ కార్డ్ మరియు ధ్రువీకరణ పత్రం.',
      'శిక్షణ సమయంలో రోజుకు ₹500 స్టైపెండ్.',
      'కొత్త పనిముట్ల కొనుగోలుకు ₹15,000 ఉచిత టూల్‌కిట్ గ్రాంట్.',
      'ఎటువంటి గ్యారంటీ లేకుండా 5% తక్కువ వడ్డీకే మొదటి విడత ₹1 లక్ష, రెండో విడత ₹2 లక్షల రుణం.'
    ],
    eligibility: [
      'Artisan or craftsperson working in one of the 18 eligible family trades.',
      'Minimum age: 18 years on the date of registration.',
      'Should not have availed loans under PMEGP, PM SVANidhi or Mudra in past 5 years.',
      'Registration limited to 1 member per family.'
    ],
    teluguEligibility: [
      'గుర్తించిన 18 చేతివృత్తులలో ఏదో ఒక వృత్తి చేస్తూ ఉండాలి.',
      'దరఖాస్తు తేదీ నాటికి కనీసం 18 సంవత్సరాలు నిండి ఉండాలి.',
      'కుటుంబంలో ఒకరికి మాత్రమే వర్తిస్తుంది.',
      'గత 5 ఏళ్లలో PMEGP లేదా ముద్ర రుణాలు తీసుకోని వారై ఉండాలి.'
    ],
    requiredDocuments: [
      'Aadhaar Card and Mobile linked OTP',
      'Ration Card / Family Member details',
      'Bank Account details (Account No & IFSC)',
      'Skill trade declaration certificate'
    ],
    applicableStates: ['All India', 'Andhra Pradesh', 'Telangana', 'Tamil Nadu', 'Karnataka', 'All States & UTs'],
    status: 'OPEN',
    statusText: 'CSC Center & Gram Panchayat Verifications Ongoing',
    startDate: '17 September 2023',
    deadline: 'Rolling (Continuous)',
    sourceName: 'Ministry of Micro, Small & Medium Enterprises (MSME)',
    sourceDomain: 'pmvishwakarma.gov.in',
    sourceUrl: 'https://pmvishwakarma.gov.in',
    schemeType: 'Central',
    tags: ['Artisans', 'MSME', 'Loans', 'Skill Training', 'Toolkit']
  },
  {
    id: 'sukanya-samriddhi',
    name: 'Sukanya Samriddhi Yojana (SSY)',
    teluguName: 'సుకున్య సమృద్ధి యోజన (SSY)',
    shortExplanation: 'High-interest (8.2%) government-backed savings scheme for girl children with full tax exemption under Section 80C.',
    teluguShortExplanation: 'ఆడపిల్లల భవిష్యత్తు, చదువు, పెళ్లి కోసం ప్రభుత్వం ఇచ్చే 8.2% అత్యధిక వడ్డీతో కూడిన సురక్షిత పొదుపు పథకం.',
    targetCategories: ['woman', 'general_citizen'],
    whoItsFor: 'Parents or legal guardians of a girl child below 10 years of age.',
    teluguWhoItsFor: '10 సంవత్సరాల లోపు వయసున్న ఆడపిల్లల తల్లిదండ్రులు లేదా సంరక్షకులు.',
    highlightBenefit: '8.2% Compound Interest + Triple Tax Exemption (EEE)',
    benefits: [
      'High interest rate of 8.2% compounded annually (among highest govt savings).',
      'Minimum deposit of just ₹250 per year (Maximum ₹1.5 Lakh/year).',
      'Exempt-Exempt-Exempt (EEE) tax status on deposit, interest, and maturity amount.',
      'Partial withdrawal (up to 50%) permitted for higher education after girl turns 18.'
    ],
    teluguBenefits: [
      'ఏటా 8.2% చక్రవడ్డీ లభిస్తుంది (ప్రభుత్వ పథకాలన్నింటిలో అత్యధికం).',
      'సంవత్సరానికి కనీసం ₹250 మాత్రమే కట్టవచ్చు (గరిష్టంగా ₹1.5 లక్ష వరకు).',
      'డిపాజిట్, వడ్డీ మరియు మెచ్యూరిటీ మొత్తం మీద పూర్తి పన్ను మినహాయింపు.',
      'అమ్మాయికి 18 ఏళ్లు నిండిన తర్వాత ఉన్నత చదువుల కోసం 50% డబ్బులు విత్ డ్రా చేసుకోవచ్చు.'
    ],
    eligibility: [
      'Account can be opened in the name of a girl child from birth until she turns 10 years old.',
      'Only 1 account per girl child; maximum 2 accounts allowed per family (exceptions for twins/triplets).',
      'Account can be opened at any Post Office or authorized commercial bank branch.'
    ],
    teluguEligibility: [
      'పుట్టినప్పటి నుండి 10 సంవత్సరాల వయస్సు లోపు ఆడపిల్లల పేరిట తెరవవచ్చు.',
      'ఒక కుటుంబంలో గరిష్టంగా ఇద్దరు ఆడపిల్లల కోసం మాత్రమే ఖాతా తెరవగలరు.',
      'ఏదైనా పోస్ట్ ఆఫీస్ లేదా అధీకృత బ్యాంకులో ఖాతా తెరవవచ్చు.'
    ],
    requiredDocuments: [
      'Birth Certificate of the girl child',
      'Identity proof of Parent/Guardian (Aadhaar / Voter ID / PAN)',
      'Address proof of Guardian',
      'Passport size photos of child and parent'
    ],
    applicableStates: ['All India', 'All Post Offices and Commercial Banks across India'],
    status: 'OPEN',
    statusText: 'Always Open at all Post Offices and Banks',
    startDate: 'Active',
    deadline: 'Before girl child turns 10 years',
    sourceName: 'Department of Posts & Ministry of Finance',
    sourceDomain: 'indiapost.gov.in',
    sourceUrl: 'https://www.indiapost.gov.in',
    schemeType: 'Central',
    tags: ['Girl Child', 'Savings', 'Tax Free', 'Education', 'Women Empowerment']
  },
  {
    id: 'pm-mudra-shishu',
    name: 'Pradhan Mantri MUDRA Yojana (PMMY) - Shishu & Kishore',
    teluguName: 'ప్రధాన మంత్రి ముద్రా యోజన (MUDRA)',
    shortExplanation: 'Collateral-free micro loans up to ₹10 Lakhs for micro-enterprises, shops, self-employed individuals and small businesses.',
    teluguShortExplanation: 'చిన్న వ్యాపారులు, దుకాణదారులు మరియు స్వయం ఉపాధి పొందేవారికి ఎటువంటి ఆస్తి పూచీకత్తు లేకుండా ₹10 లక్షల వరకు వ్యాపార రుణం.',
    targetCategories: ['business_owner', 'job_seeker', 'woman'],
    whoItsFor: 'Non-corporate, non-farm small/micro enterprises including retail shops, vendors, food service units, repair shops and beauty parlours.',
    teluguWhoItsFor: 'చిన్న దుకాణాలు, వర్క్‌షాప్‌లు, వ్యాపారాలు లేదా స్వయం ఉపాధి యూనిట్లను నిర్వహించే చిన్న వ్యాపారులు.',
    highlightBenefit: 'Up to ₹10 Lakh Collateral-free Business Loan (Shishu up to ₹50,000)',
    benefits: [
      'Shishu category: Loans up to ₹50,000 for new starters.',
      'Kishore category: Loans from ₹50,000 to ₹5,00,000 for expansion.',
      'Tarun category: Loans up to ₹10,00,000 (expanded up to ₹20 Lakhs for eligible repeat borrowers).',
      'Zero collateral or third-party guarantee needed; nominal processing charges.'
    ],
    teluguBenefits: [
      'శిశు (Shishu) లోన్: వ్యాపారం ప్రారంభించడానికి ₹50,000 వరకు రుణం.',
      'కిశోర్ (Kishore) లోన్: వ్యాపార విస్తరణకు ₹50,000 నుండి ₹5 లక్షల వరకు రుణం.',
      'తరుణ్ (Tarun) లోన్: ₹5 లక్షల నుండి ₹10 లక్షల వరకు రుణం.',
      'ఎలాంటి తనఖా లేదా సెక్యూరిటీ అవసరం లేదు.'
    ],
    eligibility: [
      'Any Indian citizen with a viable non-farm revenue-generating business plan.',
      'No past banking default / healthy CIBIL score.',
      'Applicant should have business premises or plan in trading, manufacturing, or services sector.'
    ],
    teluguEligibility: [
      'వ్యాపార ప్రణాళిక కలిగిన భారతీయ పౌరులు ఎవరైనా దరఖాస్తు చేసుకోవచ్చు.',
      'గతంలో బ్యాంక్ రుణాల డిఫాల్టర్ కాకూడదు (మంచి క్రెడిట్ స్కోరు ఉండాలి).',
      'వ్యాపార దుకాణం లేదా సర్వీస్ యూనిట్ ఏర్పాటు చేయదలిచిన వారు.'
    ],
    requiredDocuments: [
      'Identity Proof (Aadhaar / Voter ID / Driving License)',
      'Address Proof & Business address proof (Trade license / Electricity bill)',
      'Business Project quotation / Machinery estimate',
      'Last 6 months Bank Statement',
      'Passport photographs'
    ],
    applicableStates: ['All India', 'Andhra Pradesh', 'Telangana', 'All Commercial Banks, RRBs & MFIs'],
    status: 'OPEN',
    statusText: 'Open via JanSamarth Portal & Bank Branches',
    startDate: 'Continuous',
    deadline: 'Open Throughout the Year',
    sourceName: 'Department of Financial Services / MUDRA',
    sourceDomain: 'mudra.org.in / jansamarth.in',
    sourceUrl: 'https://www.jansamarth.in',
    schemeType: 'Central',
    tags: ['Business Loan', 'Self-Employment', 'MSME', 'No Collateral']
  },
  {
    id: 'atal-pension-yojana',
    name: 'Atal Pension Yojana (APY)',
    teluguName: 'అటల్ పెన్షన్ యోజన (APY)',
    shortExplanation: 'Guaranteed monthly pension of ₹1,000 to ₹5,000 after age 60 for unorganized sector workers with low monthly contributions.',
    teluguShortExplanation: 'అసంఘటిత రంగ కార్మికులు, సాధారణ పౌరులకు 60 ఏళ్లు నిండిన తర్వాత నెలకు ₹1,000 నుండి ₹5,000 వరకు గ్యారంటీ పెన్షన్.',
    targetCategories: ['senior_citizen', 'general_citizen', 'job_seeker'],
    whoItsFor: 'Indian citizens aged 18 to 40 years, especially those without formal provident fund or pension security.',
    teluguWhoItsFor: '18 నుండి 40 ఏళ్ల వయస్సు గల పౌరులు, అసంఘటిత కార్మికులు మరియు ప్రైవేట్ ఉద్యోగులు.',
    highlightBenefit: 'Guaranteed ₹1,000 to ₹5,000 / month lifetime pension',
    benefits: [
      'Fixed monthly pension (₹1k, ₹2k, ₹3k, ₹4k, or ₹5k) from age 60 till death.',
      'Same monthly pension continues to spouse upon subscriber’s demise.',
      'Full accumulated corpus returned to nominees upon death of both subscriber and spouse.',
      'Automated auto-debit from savings bank account.'
    ],
    teluguBenefits: [
      '60 ఏళ్లు దాటిన తర్వాత జీవితాంతం నెలకు ₹1,000 నుండి ₹5,000 వరకు గ్యారంటీ పెన్షన్.',
      'చందాదారుని మరణానంతరం అదే పెన్షన్ భార్య/భర్తకు అందుతుంది.',
      'ఇద్దరి మరణానంతరం మొత్తం పెన్షన్ నిధి నామినీలకు తిరిగి చెల్లించబడుతుంది.',
      'బ్యాంక్ ఖాతా నుండి ఆటోమేటిక్ గా చిన్న మొత్తంలో నెలకు కట్ అవుతుంది.'
    ],
    eligibility: [
      'Age between 18 and 40 years.',
      'Must have an active Savings Bank Account with Aadhaar and mobile number linked.',
      'Should not be an income taxpayer (as per recent PFRDA norms).'
    ],
    teluguEligibility: [
      'వయస్సు 18 నుండి 40 సంవత్సరాల మధ్య ఉండాలి.',
      'ఆధార్ మరియు మొబైల్ లింక్ అయిన సేవింగ్స్ బ్యాంక్ ఖాతా ఉండాలి.',
      'ఆదాయపు పన్ను (Income Tax) చెల్లించే వారు కాకూడదు.'
    ],
    requiredDocuments: [
      'Aadhaar Card',
      'Savings Bank Account details & auto-debit consent',
      'Nominee Aadhaar and Relationship details'
    ],
    applicableStates: ['All India', 'All States & Union Territories'],
    status: 'OPEN',
    statusText: 'Open at all Public/Private Banks & Post Offices',
    startDate: 'Continuous',
    deadline: 'Before applicant turns 40 years of age',
    sourceName: 'Pension Fund Regulatory and Development Authority (PFRDA)',
    sourceDomain: 'npscra.nsdl.co.in',
    sourceUrl: 'https://www.npscra.nsdl.co.in',
    schemeType: 'Central',
    tags: ['Pension', 'Senior Citizens', 'Retirement', 'Social Security']
  },
  {
    id: 'pm-surya-ghar',
    name: 'PM Surya Ghar: Muft Bijli Yojana',
    teluguName: 'పీఎం సూర్య ఘర్: ఉచిత విద్యుత్ యోజన',
    shortExplanation: 'Up to ₹78,000 direct central subsidy for installing residential rooftop solar systems to get up to 300 units of free electricity per month.',
    teluguShortExplanation: 'ఇంటి పైకప్పుపై సోలార్ ప్యానెల్స్ అమర్చుకోవడానికి ప్రభుత్వం ఇచ్చే ₹78,000 వరకు సబ్సిడీ మరియు నెలకు 300 యూనిట్ల ఉచిత విద్యుత్.',
    targetCategories: ['general_citizen', 'senior_citizen'],
    whoItsFor: 'Residential homeowners having an active electricity connection and suitable rooftop space for solar panel installation.',
    teluguWhoItsFor: 'సొంత ఇల్లు మరియు విద్యుత్ కనెక్షన్ కలిగిన గృహ యజమానులు.',
    highlightBenefit: 'Up to ₹78,000 direct subsidy + ₹0 monthly power bill for 300 units',
    benefits: [
      '₹30,000 subsidy for 1 kW rooftop solar system.',
      '₹60,000 subsidy for 2 kW systems.',
      '₹78,000 subsidy for 3 kW and above rooftop solar systems.',
      'Generates surplus solar units that can be sold back to state DISCOM via net metering.'
    ],
    teluguBenefits: [
      '1 kW సోలార్ సిస్టమ్‌కు ₹30,000 ప్రభుత్వ సబ్సిడీ.',
      '2 kW సిస్టమ్‌కు ₹60,000 సబ్సిడీ.',
      '3 kW లేదా అంతకంటే ఎక్కువ సిస్టమ్‌కు గరిష్టంగా ₹78,000 సబ్సిడీ.',
      'మిగిలిన కరెంట్‌ను డిస్కం (DISCOM)కి నెట్ మీటరింగ్ ద్వారా విక్రయించి ఆదాయం పొందవచ్చు.'
    ],
    eligibility: [
      'Indian citizen owning a residential house with suitable roof.',
      'Valid residential consumer electricity connection in the applicant\'s name.',
      'Should not have availed other central subsidy for solar panels previously.'
    ],
    teluguEligibility: [
      'సొంత ఇల్లు మరియు సోలార్ అమర్చడానికి అనువైన పైకప్పు స్థలం ఉండాలి.',
      'దరఖాస్తుదారుడి పేరిట గృహ వినియోగ విద్యుత్ మీటర్ కనెక్షన్ ఉండాలి.',
      'గతంలో సోలార్ కొరకు కేంద్ర సబ్సిడీ పొంది ఉండకూడదు.'
    ],
    requiredDocuments: [
      'Latest Electricity Bill (showing Consumer Number / Service No)',
      'Aadhaar Card of Electricity Consumer',
      'Proof of house ownership (Property tax receipt / sale deed)',
      'Bank Account Passbook / Cancelled Cheque for subsidy DBT',
      'Rooftop photo'
    ],
    applicableStates: ['All India', 'Andhra Pradesh (APEPDCL/APCPDCL)', 'Telangana (TGSPDCL/TGNPDCL)', 'All States'],
    status: 'OPEN',
    statusText: 'Registrations & Vendor Allotment Open Online',
    startDate: '13 February 2024',
    deadline: 'Target based (Active)',
    sourceName: 'Ministry of New and Renewable Energy (MNRE)',
    sourceDomain: 'pmsuryaghar.gov.in',
    sourceUrl: 'https://pmsuryaghar.gov.in',
    schemeType: 'Central',
    tags: ['Solar Energy', 'Subsidy', 'Electricity', 'Green Energy', 'Homeowners']
  },
  {
    id: 'post-matric-scholarship-scst',
    name: 'National Overseas & Post-Matric Scholarship (Special Cycle)',
    teluguName: 'పోస్ట్ మెట్రిక్ స్పెషల్ ఫెలోషిప్ & స్కాలర్‌షిప్',
    shortExplanation: 'Full tuition fee reimbursement and maintenance stipend for professional postgraduate and research studies.',
    teluguShortExplanation: 'ఉన్నత పీజీ మరియు రీసెర్చ్ కోర్సుల కోసం పూర్తి ట్యూషన్ ఫీజు రీయింబర్స్‌మెంట్ మరియు మెయింటెనెన్స్ అలవెన్స్.',
    targetCategories: ['student', 'job_seeker'],
    whoItsFor: 'Economically weaker students pursuing Master’s / M.Tech / PhD programs in technical and professional disciplines.',
    teluguWhoItsFor: 'పీజీ, ఎం.టెక్, పీహెచ్‌డీ చదివే అర్హులైన విద్యార్థులు.',
    highlightBenefit: 'Full Tuition Fee Waiver + ₹1,200 / month Maintenance Allowance',
    benefits: [
      '100% mandatory tuition fee reimbursement directly to institution.',
      'Monthly maintenance allowance of ₹1,200 (hostellers) / ₹550 (day scholars).',
      'Study tour allowance and thesis typing grant for research scholars.'
    ],
    teluguBenefits: [
      '100% పూర్తి కాలేజ్ ట్యూషన్ ఫీజు ప్రభుత్వం చెల్లిస్తుంది.',
      'హాస్టలర్లకు నెలకు ₹1,200 మరియు డే స్కాలర్లకు ₹550 మెయింటెనెన్స్ అలవెన్స్.',
      'బుక్స్ మరియు పరిశోధన ప్రాజెక్టుల కొరకు అదనపు గ్రాంట్.'
    ],
    eligibility: [
      'Family annual income less than ₹2.50 Lakhs per annum.',
      'Passed qualifying Bachelor\'s degree with at least 55% marks.',
      'Enrolled in full-time regular accredited institution.'
    ],
    teluguEligibility: [
      'కుటుంబ వార్షిక ఆదాయం ₹2.5 లక్షల లోపు ఉండాలి.',
      'డిగ్రీలో కనీసం 55% మార్కులతో ఉత్తీర్ణులై ఉండాలి.',
      'గుర్తింపు పొందిన కళాశాలలో రెగ్యులర్ విద్యార్థిగా ఉండాలి.'
    ],
    requiredDocuments: [
      'Caste and Income Certificate (MeeSeva / eSeva / Tahsildar issued)',
      'Degree Marksheets and Transfer Certificate',
      'College Fee Receipt and Bonafide Certificate',
      'Aadhaar and Bank Account details'
    ],
    applicableStates: ['All India', 'Telangana', 'Andhra Pradesh', 'Karnataka'],
    status: 'CLOSED',
    statusText: 'Application Window Expired for Current Cycle',
    startDate: '15 June 2026',
    deadline: '15 August 2026 (Passed)',
    sourceName: 'Ministry of Social Justice and Empowerment',
    sourceDomain: 'scholarships.gov.in',
    sourceUrl: 'https://scholarships.gov.in',
    schemeType: 'Central',
    tags: ['Scholarship', 'Post Graduate', 'Fee Reimbursement', 'Higher Education']
  },
  {
    id: 'state-farm-mechanization-subsidy',
    name: 'State Farm Mechanization & Tractor Subsidy Scheme',
    teluguName: 'వ్యవసాయ యాంత్రీకరణ & ట్రాక్టర్ సబ్సిడీ పథకం',
    shortExplanation: '50% government subsidy on tractors, harvesters, power tillers, and modern agricultural implements for registered farmers.',
    teluguShortExplanation: 'రైతులకు ట్రాక్టర్లు, పవర్ టిల్లర్లు, పంట కోత యంత్రాల కొనుగోలుపై 50% వరకు ప్రభుత్వ సబ్సిడీ.',
    targetCategories: ['farmer'],
    whoItsFor: 'Small and marginal farmers who want to purchase tractors and mechanized implements for crop cultivation.',
    teluguWhoItsFor: 'ఆధునిక వ్యవసాయ పరికరాలు మరియు ట్రాక్టర్లు కొనదలచిన చిన్న/సన్నకారు రైతులు.',
    highlightBenefit: '50% Subsidy up to ₹1.5 Lakhs on purchase of tractors/tools',
    benefits: [
      'Up to ₹1,50,000 or 50% cost subsidy on registered tractor models.',
      'Free training on equipment maintenance and safety.',
      'Special preference to custom hiring centers run by farmer producer organizations (FPOs).'
    ],
    teluguBenefits: [
      'ట్రాక్టర్ లేదా వ్యవసాయ పనిముట్ల ధరపై 50% (గరిష్టంగా ₹1.5 లక్ష వరకు) సబ్సిడీ.',
      'పరికరాల నిర్వహణపై ఉచిత శిక్షణ.',
      'రైతు ఉత్పత్తి సంఘాలకు (FPO) ప్రాధాన్యత.'
    ],
    eligibility: [
      'Farmer must hold at least 1.0 acre of cultivable land.',
      'Should not have availed farm machinery subsidy during the last 7 years.',
      'Must have verified Kisan Credit Card (KCC) or bank loan sanction.'
    ],
    teluguEligibility: [
      'కనీసం 1 ఎకరం సాగు భూమి కలిగి ఉండాలి.',
      'గత 7 ఏళ్లలో ఎలాంటి ట్రాక్టర్ లేదా యంత్రాల సబ్సిడీ పొంది ఉండకూడదు.',
      'బ్యాంక్ లోన్ మంజూరు లేదా కిసాన్ క్రెడిట్ కార్డు ఉండాలి.'
    ],
    requiredDocuments: [
      'Pattadar Passbook / 1B copy',
      'Aadhaar Card and Mobile linked to Bank',
      'Quotation from Authorized Agriculture Machinery Dealer',
      'No Objection Certificate from Local Agriculture Officer'
    ],
    applicableStates: ['Andhra Pradesh', 'Telangana', 'Karnataka', 'Tamil Nadu'],
    status: 'CLOSED',
    statusText: 'FY 2026 Quota Exhausted & Deadline Passed',
    startDate: '01 May 2026',
    deadline: '31 July 2026 (Passed)',
    sourceName: 'Department of Agriculture & Farmers Welfare (State Portal)',
    sourceDomain: 'agricoop.nic.in / rythubharosa.ap.gov.in',
    sourceUrl: 'https://agricoop.nic.in',
    schemeType: 'State',
    tags: ['Agriculture', 'Tractor', 'Subsidy', 'Machinery', 'Farm Tools']
  },
  {
    id: 'ayushman-bharat-pmjay',
    name: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
    teluguName: 'ఆయుష్మాన్ భారత్ (PM-JAY)',
    shortExplanation: 'Cashless free hospitalization cover of ₹5,00,000 per family per year for secondary and tertiary care at empanelled public & private hospitals.',
    teluguShortExplanation: 'ప్రైవేట్ మరియు ప్రభుత్వ ఆసుపత్రులలో ఉచిత వైద్య చికిత్స కోసం కుటుంబానికి ఏడాదికి ₹5 లక్షల నగదు రహిత ఆరోగ్య బీమా.',
    targetCategories: ['general_citizen', 'senior_citizen', 'woman', 'farmer'],
    whoItsFor: 'Low income families and recently expanded to all senior citizens aged 70+ irrespective of income.',
    teluguWhoItsFor: 'అర్హులైన పేద కుటుంబాలు మరియు 70 ఏళ్లు పైబడిన సీనియర్ సిటిజన్లు అందరూ (ఆదాయ పరిమితి లేకుండా).',
    highlightBenefit: '₹5 Lakh / year cashless treatment at 29,000+ hospitals across India',
    benefits: [
      '₹5,00,000 health insurance cover per family per year.',
      'Covers 1,949+ medical procedures including surgeries, ICU, implants and medicines.',
      'Completely cashless and paperless at all network hospitals across India (portable nationwide).',
      'Pre-existing diseases covered from Day 1.'
    ],
    teluguBenefits: [
      'ప్రతి కుటుంబానికి ఏడాదికి ₹5,00,000 వరకు ఉచిత ఆసుపత్రి చికిత్స.',
      'దేశవ్యాప్తంగా 29,000కు పైగా నెట్‌వర్క్ ఆసుపత్రులలో నగదు రహిత (Cashless) సేవలు.',
      'పాత జబ్బులు మరియు పెద్ద శస్త్రచికిత్సలు కూడా మొదటి రోజు నుంచే కవర్ అవుతాయి.',
      '70 ఏళ్లు పైబడిన వృద్ధులకు ప్రత్యేక ఆయుష్మాన్ వయ వందన కార్డు ద్వారా అదనపు ప్రయోజనం.'
    ],
    eligibility: [
      'Families identified in Socio-Economic Caste Census (SECC) or having State Food Security Ration Cards.',
      'All Senior Citizens aged 70 years and above are eligible for dedicated Ayushman Vaya Vandana Card.',
      'No cap on family size or age of family members.'
    ],
    teluguEligibility: [
      'రేషన్ కార్డు కలిగిన కుటుంబాలు లేదా SECC డేటాలో నమోదైన పేద కుటుంబాలు.',
      '70 ఏళ్లు మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న సీనియర్ సిటిజన్లు అందరూ అర్హులు.',
      'కుటుంబ సభ్యుల సంఖ్యపై ఎలాంటి పరిమితి లేదు.'
    ],
    requiredDocuments: [
      'Aadhaar Card of all family members',
      'Ration Card / Food Security Card',
      'Active mobile number for OTP'
    ],
    applicableStates: ['All India', 'Andhra Pradesh (Dr. YSR Aarogyasri aligned)', 'Telangana', 'All States & UTs'],
    status: 'OPEN',
    statusText: 'Continuous Ayushman Card Generation Open via App & Hospitals',
    startDate: 'Continuous',
    deadline: 'Open Throughout the Year',
    sourceName: 'National Health Authority (NHA)',
    sourceDomain: 'beneficiary.nha.gov.in',
    sourceUrl: 'https://beneficiary.nha.gov.in',
    schemeType: 'Central',
    tags: ['Healthcare', 'Health Insurance', 'Free Treatment', 'Senior Citizens 70+']
  }
];
