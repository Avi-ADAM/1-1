//import {
  const PUBLIC_CONTACT_EMAIL = "baruch@1lev1.com"
  const PUBLIC_FACEBOOK_AUTHOR_PAGE = ""
  const PUBLIC_FACEBOOK_PAGE = ""
  const PUBLIC_GITHUB_PAGE = ""
  const PUBLIC_LINKEDIN_PROFILE = ""
  const PUBLIC_SITE_URL = "https://love.1lev1.com"
  const PUBLIC_TELEGRAM_USERNAME = ""
  const PUBLIC_TIKTOK_USERNAME = ""
  const PUBLIC_TWITTER_USERNAME = ""
  const PUBLIC_TWITTER_USER_ID = ""
  const PUBLIC_WIRE_USERNAME = ""
//} from '$env/static/public';

const facebookPageName = PUBLIC_FACEBOOK_PAGE;
const facebookAuthorPageName = PUBLIC_FACEBOOK_AUTHOR_PAGE;

const website = {
  author: 'baruch babayof',
  ogLanguage: 'en_GB',
  siteLanguage: 'en-GB',
  siteTitle: '1💗1',
  siteShortTitle: '1💗1',
  description:
    '1💗1 Worldwide consensus for Security and Peace | collaboration platform, create together harmoniously | consensus based partnerships management platform | we can together',
  siteUrl: PUBLIC_SITE_URL,
  backgroundColor: '#1b4079',
  themeColor: '#d62828',
  contactEmail: PUBLIC_CONTACT_EMAIL,
  facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
  facebookAuthorPageName,
  facebookPage: `https://www.facebook.com/${facebookPageName}`,
  facebookPageName,
  githubPage: PUBLIC_GITHUB_PAGE,
  linkedinProfile: PUBLIC_LINKEDIN_PROFILE,
  telegramUsername: PUBLIC_TELEGRAM_USERNAME,
  tiktokUsername: PUBLIC_TIKTOK_USERNAME,
  twitterUsername: PUBLIC_TWITTER_USERNAME,
  twitterUserId: PUBLIC_TWITTER_USER_ID,
  wireUsername: PUBLIC_WIRE_USERNAME
};

export { website as default };
