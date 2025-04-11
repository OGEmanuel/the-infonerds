interface BaseVideo {
  id: string;
  title: string;
  type: 'short' | 'regular';
}

export interface Short extends BaseVideo {}

export interface RegularVideo extends BaseVideo {
  duration: string;
  thumbnail?: string;
}

export interface FullData {
  shorts: Short[];
  videos: RegularVideo[];
}

export const BTS: FullData = {
  shorts: [
    {
      id: 'bRzAqjPxjX0',
      type: 'short',
      title: 'Nerd Not Nood x QLuxury | Premium Collaboration Ad',
    },
  ],
  videos: [
    {
      id: 'sYw4UIvNVdE',
      type: 'regular',
      title:
        'Behind the Scenes: TVC Shoot with Papaya Ex, Unusual Phyna, Aisha Olayinka & More | Zedapex Academy',
      duration: '1:01',
    },
    {
      id: 'dOXd1WUPrZg',
      type: 'regular',
      title:
        'Behind the Scenes: Rediprofiles TVC Shoot Featuring TikTok Star @realpeller | Commercial Insight',
      duration: '1:14',
    },
  ],
};

export const Documentaries: FullData = {
  shorts: [],
  videos: [
    {
      id: 'FHaYAqDjLN4',
      type: 'regular',
      title:
        "The Founding of Ibadan: Authentic Account from Lagelu's Descendants | Pre-Okebadan Festival",
      duration: '1:36',
    },
    {
      id: '8ud9OZT6hE0',
      type: 'regular',
      title: 'SEEDS OF CHANGE | EMPOWERING IROKO COMMUNITY IBADAN, NIGERIA',
      duration: '11:34',
    },
  ],
};

export const Styles: FullData = {
  shorts: [
    {
      id: 'og7ZrGTJ22Y',
      type: 'short',
      title:
        'Dress Up with James Gardiner | Host of The Future Awards Africa 2023 | Style & Lifestyle Reel',
    },
  ],
  videos: [],
};

export const Motion: FullData = {
  shorts: [],
  videos: [
    {
      id: 'vFYLybUK2yY',
      type: 'regular',
      title: 'Soole Rides Commercial (Animation)',
      duration: '0:27',
    },
    {
      id: 'MOBrcQ1JvzM',
      type: 'regular',
      title: 'Animated Commercial For Wawooh (Black Friday)',
      duration: ' 0:28',
    },
  ],
};

export const RealEstate: FullData = {
  shorts: [],
  videos: [
    {
      id: '9DWYccHCZs0',
      type: 'regular',
      title:
        'Prime Land Investment in Ajah-Epe Corridor | Aerial Tour of Monastery Location | Crowne Real Estate',
      duration: '1:00',
    },
    {
      id: 'kdupu3CThQw',
      type: 'regular',
      title:
        'Discover Luxury Living at Olayfted Apartment | Premium Service Apartment in Ibadan',
      duration: ' 0:47',
    },
  ],
};

export const Concerts: FullData = {
  shorts: [
    {
      id: '1lwKOHGdUec',
      type: 'short',
      title:
        'DJ Kaywise Live at ABUAD 2022 | Electrifying Concert at Afe Babalola University, Ado-Ekiti',
    },
    {
      id: 'hSpZ5Qre7A8',
      type: 'short',
      title: "Hikmat's Cookout Highlights | Culinary Experience by FoodCraft",
    },
    {
      id: 'rVRa8Dz355c',
      type: 'short',
      title:
        'Red Carpet Highlights | Faces of TFAA 17 Nominees Party at The Future Awards Africa 2023',
    },
    {
      id: 'C93rnKjrGXg',
      type: 'short',
      title:
        'Random Moments from TFAA 17 Nominees Party 2023 | Unfiltered Highlights',
    },
    {
      id: '1L1rEJn5aFA',
      type: 'short',
      title:
        'Cadbury "Like a Child Again" | Children’s Day 2023 Celebration in Ibadan | Alternate Cut',
    },
    {
      id: 'Bf74A9nsngU',
      type: 'short',
      title:
        'Highlights from the 10th Anniversary of the Nigerian Healthcare Excellence Awards (NHEA) 2024',
    },
  ],

  videos: [
    {
      id: '6ekoq2bEs0M',
      type: 'regular',
      title:
        'Infinix Note 12 Series City Road Show Highlights | Innovation Comes to Town',
      duration: '2:38',
    },
    {
      id: 'akvgD1PpHOw',
      type: 'regular',
      title:
        'Infinix Note 30 Road Tour Highlights | Innovation and Style on the Move',
      duration: '1:44',
    },
    {
      id: 'kBV4tHBG-iM',
      type: 'regular',
      title:
        'Tecno Black Friday 2023 Grocery Shopping Spree | Speed Shopping Challenge',
      duration: '1:20',
    },
    {
      id: 'TwqU2wuqIDQ',
      type: 'regular',
      title:
        'Cadbury "Like a Child Again" | Children’s Day 2023 Celebration in Ibadan',
      duration: '0:44',
    },
    {
      id: '0MtmI0KPX88',
      type: 'regular',
      title:
        'Coca-Cola "Christmas Always Finds a Way" Road Show & Event Highlights | 2022',
      duration: '1:04',
    },
    {
      id: 'PfF245w6I-g',
      type: 'regular',
      title: 'The Future Awards Africa 2023 | 1-Minute Highlights from TFAA 17',
      duration: '1:03',
    },
    {
      id: 'wxhcvVTLEcI',
      type: 'regular',
      title:
        'The Future Awards Africa 2023 | TFAA 17 Highlights in 1 Minute (Alternate Cut)',
      duration: '1:02',
    },
    {
      id: 'Qa7gXFGv7Yw',
      type: 'regular',
      title:
        'Fanfaro Autofest 2022 in Ibadan | Car Festival & Star-Studded Performances',
      duration: '0:32',
    },
    {
      id: '2pbxbhJjLiY',
      type: 'regular',
      title:
        'Heineken Stand at The Future Awards Africa 2023 | TFAA Sponsor Highlight Reel',
      duration: '0:16',
    },
    {
      id: 'fLMhq4AhSD4',
      type: 'regular',
      title:
        'Infinix Hot 30 "Fast and Fun" Challenge | 30-Second Grocery Shopping Spree Highlights',
      duration: '0:59',
    },
    {
      id: '-EsYuwjENww',
      type: 'regular',
      title:
        'Qoray Electric Vehicle Showcase by Sterling Bank | Africa Social Impact Summit 2024 Highlights',
      duration: '0:44',
    },
    {
      id: 'f2J_uYH7OQA',
      type: 'regular',
      title:
        'Qoray EV Showcase by Sterling Bank | Africa Social Impact Summit 2024 Highlights (Alternate Cut)',
      duration: '1:00',
    },
    {
      id: 'k7JobpKNSGg',
      type: 'regular',
      title:
        "50th Anniversary Celebration of SOS Children's Village | Highlight",
      duration: '0:46',
    },
    {
      id: 'z589rFQkS3Y',
      type: 'regular',
      title:
        'TFAA 17 Nominees Party Highlights | Exclusive Moments from The Future Awards Africa 2023',
      duration: '0:54',
    },
    {
      id: 'oVST7k3tu7I',
      type: 'regular',
      title:
        'Mannywellz "Manny is Home" Concert | Alternate Cut Highlights in Lagos, Nigeria',
      duration: '1:25',
      thumbnail:
        'https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1744411355/Concert_Mannywellz_ei9ccm.jpg',
    },
    {
      id: 'XDj9KemOcb4',
      type: 'regular',
      title:
        'Presidential CNG Initiative: CNG Buses Handover to Pacesetters Transport, Oyo State | Highlights',
      duration: '1:23',
    },
    {
      id: 'QM_ot3aS5nU',
      type: 'regular',
      title: 'The Cavemen Live in Ibadan | 2022 Concert Highlights',
      duration: '1:38',
    },
    {
      id: 'DFoGVpJx3dM',
      type: 'regular',
      title:
        'The Campus Rave with DJ Gabi at University of Ibadan | Maiden Edition Highlights',
      duration: '1:51',
    },
    {
      id: 'U3QheCKF_Qo',
      type: 'regular',
      title: 'i-Fitness Prelaunch Workout Event | Ibadan 2022 Highlight',
      duration: '0:56',
    },
  ],
};

export const Corporate: FullData = {
  shorts: [
    {
      id: '0MtmI0KPX88',
      type: 'short',
      title:
        'Coca-Cola "Christmas Always Finds a Way" Road Show & Event Highlights | 2022',
    },
    {
      id: '1L1rEJn5aFA',
      type: 'short',
      title:
        'Cadbury "Like a Child Again" | Children’s Day 2023 Celebration in Ibadan | Alternate Cut',
    },
    {
      id: 'Bf74A9nsngU',
      type: 'short',
      title:
        'Highlights from the 10th Anniversary of the Nigerian Healthcare Excellence Awards (NHEA) 2024',
    },
  ],
  videos: [
    // {
    //   id: '8ud9OZT6hE0',
    //   type: 'regular',
    //   title: 'SEEDS OF CHANGE | EMPOWERING IROKO COMMUNITY IBADAN, NIGERIA',
    //   duration: '1:34',
    // },
    {
      id: 'akvgD1PpHOw',
      type: 'regular',
      title:
        'Infinix Note 30 Road Tour Highlights | Innovation and Style on the Move',
      duration: '1:44',
    },
    {
      id: '6ekoq2bEs0M',
      type: 'regular',
      title:
        'Infinix Note 12 Series City Road Show Highlights | Innovation Comes to Town',
      duration: '2:38',
    },
    {
      id: 'fLMhq4AhSD4',
      type: 'regular',
      title:
        'Infinix Hot 30 "Fast and Fun" Challenge | 30-Second Grocery Shopping Spree Highlights',
      duration: '0:59',
    },
    {
      id: 'TwqU2wuqIDQ',
      type: 'regular',
      title: `Cadbury "Like a Child Again" | Children’s Day 2023 Celebration in Ibadan`,
      duration: '0:44',
    },
    {
      id: 'kBV4tHBG-iM',
      type: 'regular',
      title:
        'Tecno Black Friday 2023 Grocery Shopping Spree | Speed Shopping Challenge',
      duration: '1:20',
    },
    {
      id: '-EsYuwjENww',
      type: 'regular',
      title:
        'Qoray Electric Vehicle Showcase by Sterling Bank | Africa Social Impact Summit 2024 Highlights',
      duration: '0:44',
    },
    {
      id: 'f2J_uYH7OQA',
      type: 'regular',
      title:
        'Qoray EV Showcase by Sterling Bank | Africa Social Impact Summit 2024 Highlights (Alternate Cut)',
      duration: '1:00',
    },
    {
      id: 'k7JobpKNSGg',
      type: 'regular',
      title:
        "50th Anniversary Celebration of SOS Children's Village | Highlight",
      duration: '0:46',
    },
    {
      id: 'XDj9KemOcb4',
      type: 'regular',
      title:
        'Presidential CNG Initiative: CNG Buses Handover to Pacesetters Transport, Oyo State | Highlights',
      duration: '1:23',
    },
    {
      id: 'U3QheCKF_Qo',
      type: 'regular',
      title: 'i-Fitness Prelaunch Workout Event | Ibadan 2022 Highlight',
      duration: '0:56',
    },
  ],
};

export const Proposals: FullData = {
  shorts: [],
  videos: [
    {
      id: 'vZoyf5sqCgs',
      type: 'regular',
      title:
        'Prewedding Reel for Ifeanyi & Chidubem | A Love Story in Motion #BecomingIC23',
      duration: '0:29',
    },
    {
      id: 'hO3n47PpgVQ',
      type: 'regular',
      title: 'Ayo Proposes to Fiyin | A Beautiful Love Story Unfolds',
      duration: '1:06',
      thumbnail:
        'https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1744411354/Proposal_Ayo_Fiyin_fl1nvq.jpg',
    },
    {
      id: 'l5dreDc2nS8',
      type: 'regular',
      title:
        'Mayorkun & Victoria’s Prewedding Magic | A Love Story to Remember',
      duration: '0:55',
    },
    {
      id: 'IJ3Wo-z45Jw',
      type: 'regular',
      title: 'Ibukun Proposes to Eniola | A Magical Proposal Highlight',
      duration: '1:12',
      thumbnail:
        'https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1744411355/Proposal_Ibukun_Enioluwa_ua9ws3.png',
    },
  ],
};

export const Commercials: FullData = {
  shorts: [
    {
      id: 'bRzAqjPxjX0',
      type: 'short',
      title: 'Nerd Not Nood x QLuxury | Premium Collaboration Ad',
    },
  ],
  videos: [
    {
      id: 'xpSxEjhu5mM',
      type: 'regular',
      title: 'Dreams - Bamboo x Temi',
      duration: '1:00',
    },
    {
      id: '5K39trFYeNY',
      type: 'regular',
      title: 'How to win with Bamboo x Essenza ✨',
      duration: '0:32',
    },
    {
      id: 'FMi6sceHekU',
      type: 'regular',
      title:
        "Layi Wasabi's Verve Card Good Life Promo | Experience More with Every Transaction",
      duration: '2:02',
    },
    {
      id: 'Lg7rvQ9KCL4',
      type: 'regular',
      title:
        'Rediprofiles Ad Featuring TikTok Star Peller: Your Trusted Social Media Accounts Merchant',
      duration: '1:00',
    },
    {
      id: '5w9xpUWdjLo',
      type: 'regular',
      title:
        'Zedapex Academy Ad Featuring Papaya Ex: Empowering Your Financial Journey',
      duration: '1:02',
    },
    {
      id: 'zDEFdiVNik8',
      type: 'regular',
      title:
        'Zedapex Signs and Unveils Papaya Ex: Brand Ambassador Announcement Video',
      duration: '1:16',
    },
    {
      id: 'wyBX9X_jWJ0',
      type: 'regular',
      title:
        'Zedapex Exchange TVC Featuring Influencer Aisha Olayinka | Seamless Transactions Made Simple',
      duration: '0:25',
    },
    {
      id: 'P1y0w_X2Eqo',
      type: 'regular',
      title:
        'Zedapex Academy Ad Featuring BBNaija’s Unusual Phyna: Your Financial Freedom Starts Here',
      duration: '1:18',
    },
    {
      id: 'iazwgC2sGks',
      type: 'regular',
      title: 'Havma.ng: A New Era in Video Marketing Solutions',
      duration: '1:20',
    },
    {
      id: 'UMRf3exT9gk',
      type: 'regular',
      title:
        'Unveiling Havma.ng: Revolutionizing Video Marketing Solutions | Yoruba Ad',
      duration: '1:24',
      thumbnail:
        'https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1744411354/Brand_Ad_Havma_Yoruba_Ad_gv57nc.jpg',
    },
    {
      id: 'PLzICoz_9vQ',
      type: 'regular',
      title:
        'Kclaut: Transforming Social Media with Innovative Web-Based Solutions',
      duration: '1:35',
    },
    {
      id: 'AROyaAIt-eY',
      type: 'regular',
      title:
        'Media Cartel: Boosting Your Social Media Engagement with Smart Solutions',
      duration: '1:18',
      thumbnail:
        'https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/v1744411354/Brand_Ad_Media_Cartel_tc68tu.jpg',
    },
    {
      id: 'wPjLeREre-Y',
      type: 'regular',
      title: 'Tiwa The Tailor Announces Her Comeback After a Year-Long Hiatus',
      duration: '1:06',
    },
  ],
};

export const Weddings: FullData = {
  shorts: [
    {
      id: '2raz-kRWyHA',
      type: 'short',
      title: 'Boluwatife & Julius | Intimate Portrait Moments',
    },
    {
      id: 'NTfSWieKCTk',
      type: 'short',
      title: "Olanike & Ayokunle's Wedding Reel",
    },
    {
      id: 'lxmdoIqlkgc',
      type: 'short',
      title:
        'Sawpheey & Fahd’s Wedding Morning in Ilorin | First Outfit Highlights',
    },
    {
      id: '3O9Td2xLf5c',
      type: 'short',
      title: 'Toluwani & Jibola’s Elegant White Wedding Look',
    },
  ],
  videos: [
    {
      id: 'gx7cvvldJFg',
      type: 'regular',
      title:
        'Fatiha & Sulaiman’s Wedding Highlight | Wedding Ceremony in Ile-Ife',
      duration: '2:28',
    },
    {
      id: 'PRspBOnZ3jk',
      type: 'regular',
      title:
        'Ifeanyi & Chidubem’s Magical Lagos Wedding Highlight | #BecomingIC23',
      duration: '2:43',
    },
    {
      id: 'sio1Nsl1kGU',
      type: 'regular',
      title:
        'Toluwani & Jibola’s Traditional Wedding in Ibadan | A Cultural Celebration of Love',
      duration: '1:50',
    },
  ],
};
