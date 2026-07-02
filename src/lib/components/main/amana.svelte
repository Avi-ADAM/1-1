<script>
  import { liUN } from '$lib/stores/liUN.js';
  import { Canvas } from '@threlte/core';
  import Scene from './globu.svelte';
  import { doesLang, langUs, lang } from '$lib/stores/lang.js';
  import { goto } from '$app/navigation';
  import Maze from './maze.svelte';
  import MultiSelect from 'svelte-multiselect';
  import { userName } from '../../stores/store.js';
  import { email } from '../registration/email.js';
  import { contriesi } from '../registration/contries.js';
  import { fpval } from '../registration/fpval.js';
  import { regHelper } from '../../stores/regHelper.js';
  import { t } from '$lib/translations';

  import { RingLoader } from 'svelte-loading-spinners';
  import { DialogOverlay, DialogContent } from 'svelte-accessible-dialog';
  import { fly } from 'svelte/transition';
  import Tikun from './tikunolam.svelte';
  import TRan from './translatehe.svelte';
  import { linkos } from '$lib/stores/linkos.js';
  import { useProgress } from '@threlte/extras';
  const { progress } = useProgress();
  import { Head } from 'svead';
  import { track } from '@vercel/analytics';
  $effect(() => {
    console.log('amana', $progress);
  });

  let title = ' 1💗1 | הסכמה עולמית על חירות';
  let image = `https://res.cloudinary.com/love1/image/upload/v1640020897/cropped-PicsArt_01-28-07.49.25-1_wvt4qz.png`;
  let description =
    'הסכמה העולמית על חירות היא חלק מרכזי ב- 1💗1. על ידי הסכמה להצהרה זו, ניתן להירשם לפלטפורמה השיתופית 1💗1 ומשתתפים ביצירת עולם יותר בטוח. על ידי ההתחייבות ההדדית לאי-אלימות, לפתרון סכסוכים בהסכמה ולכבוד הדדי, אנו ניצור עולם בו כוח ואלימות מפסיקים להיות צורות של תקשורת אנושית. הצטרפו אלינו לקידום שלום, הסכמות וחופש. ביחד, אנחנו יכולים ליצור עולם שבו הטוב הבסיסי מנצח ובו חילוקי דעות נפתרים בהסכמה משותפת.';
  let url = 'https://1lev1.com/hascama';

  const baseUrl = import.meta.env.VITE_URL;

  function find_contry_id(contry_name_arr) {
    var arr = [];
    let field = $lang === 'he' ? 'heb' : $lang === 'ar' ? 'ar' : 'label';
    for (let j = 0; j < contry_name_arr.length; j++) {
      for (let i = 0; i < country.length; i++) {
        if (country[i][field] === contry_name_arr[j]) {
          arr.push(country[i].value);
        }
      }
    }
    return arr;
  }

  const country = [
    { value: 104, label: 'Israel', heb: 'ישראל' },
    {
      value: 167,
      label: 'Palestine jehuda & sumeria',
      heb: 'הרשות הפלסטינית יו"ש'
    },
    { value: 246, label: 'Palestine gaza strip', heb: 'רצועת עזה' },
    { value: 230, label: 'United States', heb: 'ארצות הברית של אמריקה' },
    { value: 245, label: 'Åland Islands', heb: 'אולנד' },
    { value: 11, label: 'Afghanistan', heb: 'אפגניסטן' },
    { value: 1, label: 'Albania', heb: 'אלבניה' },
    { value: 13, label: 'Algeria', heb: "אלג'יריה" },
    { value: 2, label: 'American Samoa', heb: 'סמואה האמריקנית' },
    { value: 7, label: 'Andorra', heb: 'אנדורה' },
    { value: 3, label: 'Angola', heb: 'אנגולה' },
    { value: 4, label: 'Anguilla', heb: 'אנגווילה' },
    { value: 5, label: 'Antarctica', heb: 'אנטרטיקה' },
    { value: 6, label: 'Antigua and Barbuda', heb: 'אנטיגואה וברבודה' },
    { value: 8, label: 'Argentina', heb: 'ארגנטינה' },
    { value: 14, label: 'Armenia', heb: 'ארמניה' },
    { value: 9, label: 'Aruba', heb: 'ארובה' },
    { value: 10, label: 'Australia', heb: 'אוסטרליה' },
    { value: 12, label: 'Austria', heb: 'אוסטריה' },
    { value: 15, label: 'Azerbaijan', heb: "אזרבייג'ן" },
    { value: 16, label: 'Bahamas', heb: 'איי בהאמה' },
    { value: 17, label: 'Bahrain', heb: 'בחריין' },
    { value: 18, label: 'Bangladesh', heb: 'בנגלדש' },
    { value: 19, label: 'Barbados', heb: 'ברבדוס' },
    { value: 20, label: 'Belarus', heb: 'בלרוס' },
    { value: 24, label: 'Bermuda', heb: 'ברמודה' },
    { value: 27, label: 'Bhutan', heb: 'בהוטאן' },
    { value: 23, label: 'Bolivia', heb: 'בוליביה' },
    {
      value: 247,
      label: 'Bonaire, Sint Eustatius and Saba',
      heb: 'האיים הקריביים ההולנדיים'
    },
    { value: 25, label: 'Bosnia and Herzegovina', heb: 'בוסניה והרצגובינה' },
    { value: 28, label: 'Botswana', heb: 'בוטסואנה' },
    { value: 29, label: 'Bouvet Island', heb: 'בובה' },
    { value: 30, label: 'Brazil', heb: 'ברזיל' },
    {
      value: 31,
      label: 'British Indian Ocean Territory',
      heb: 'הטריטוריה הבריטית באוקיינוס ההודי'
    },
    { value: 32, label: 'Brunei Darussalam', heb: 'ברוניי דארוסלאם' },
    { value: 34, label: 'Bulgaria', heb: 'בולגריה' },
    { value: 33, label: 'Burkina Faso', heb: 'בורקינה פאסו' },
    { value: 36, label: 'Burundi', heb: 'בורונדי' },
    { value: 35, label: 'Cambodia', heb: 'קמבודיה' },
    { value: 37, label: 'Cameroon', heb: 'קמרון' },
    { value: 39, label: 'Canada', heb: 'קנדה' },
    { value: 38, label: 'Cape Verde', heb: 'כף ורדה' },
    { value: 40, label: 'Cayman Islands', heb: 'איי קיימן' },
    {
      value: 41,
      label: 'Central African Republic',
      heb: ' הרפובליקה המרכז אפריקאית '
    },
    { value: 42, label: 'Chad', heb: "צ'אד" },
    { value: 43, label: 'Chile', heb: "צ'ילה" },
    { value: 44, label: 'China', heb: 'סין' },
    { value: 45, label: 'Christmas Island', heb: 'איי חג המולד' },
    { value: 49, label: 'Cocos (Keeling) Islands', heb: 'איי קוקוס' },
    { value: 47, label: 'Colombia', heb: 'קולומביה' },
    { value: 48, label: 'Comoros', heb: 'איי קומורו' },
    { value: 46, label: 'Congo', heb: 'קונגו' },
    {
      value: 216,
      label: 'Congo, The Democratic Republic of The',
      heb: 'הרפובליקה העממית של קונגו'
    },
    { value: 50, label: 'Cook Islands', heb: 'איי קוק' },
    { value: 51, label: 'Costa Rica', heb: 'קוסטה ריקה' },
    { value: 248, label: "Cote D'ivoire", heb: 'חוף השנהב' },
    { value: 52, label: 'Croatia', heb: 'קרואטיה' },
    { value: 53, label: 'Cuba', heb: 'קובה' },
    { value: 249, label: 'Curaçao', heb: 'קוראסאו' },
    { value: 54, label: 'Cyprus', heb: 'קפריסין' },
    { value: 57, label: 'Czech Republic', heb: "צ'כיה" },
    { value: 55, label: 'Denmark', heb: 'דנמרק' },
    { value: 58, label: 'Djibouti', heb: "ג'יבוטי" },
    { value: 56, label: 'Dominica', heb: 'דומיניקה' },
    { value: 59, label: 'Dominican Republic', heb: 'הרפובליקה הדומיניקנית' },
    { value: 61, label: 'Ecuador', heb: 'אקוודור' },
    { value: 62, label: 'Egypt', heb: 'מצריים' },
    { value: 63, label: 'El Salvador', heb: 'אל סלבדור' },
    { value: 66, label: 'Equatorial Guinea', heb: 'גינאה המשוונית' },
    { value: 65, label: 'Eritrea', heb: 'אריתראה' },
    { value: 69, label: 'Estonia', heb: 'אסטוניה' },
    { value: 250, label: 'Eswatini, Swaziland', heb: 'אסוואטיני' },
    { value: 70, label: 'Ethiopia', heb: 'אתיופיה' },
    {
      value: 67,
      label: 'Falkland Islands (Malvinas)',
      heb: 'איי מאלבינס (איי פוקלנד)'
    },
    { value: 68, label: 'Faroe Islands', heb: 'איי פארו' },
    { value: 71, label: 'Fiji', heb: "פיג'י" },
    { value: 72, label: 'Finland', heb: 'פינלנד' },
    { value: 73, label: 'France', heb: 'צרפת' },
    { value: 74, label: 'French Guiana', heb: 'גויאנה הצרפתית' },
    { value: 75, label: 'French Polynesia', heb: 'פולינזיה הצרפתית' },
    {
      value: 78,
      label: 'French Southern Territories',
      heb: 'הארצות הדרומיות והאנטרקטיות של צרפת'
    },
    { value: 79, label: 'Gabon', heb: 'גאבון' },
    { value: 76, label: 'Gambia', heb: 'גמביה' },
    { value: 77, label: 'Georgia', heb: 'גאורגיה' },
    { value: 80, label: 'Germany', heb: 'גרמניה' },
    { value: 81, label: 'Ghana', heb: 'גאנה' },
    { value: 82, label: 'Gibraltar', heb: 'גיברלטר' },
    { value: 84, label: 'Greece', heb: 'יוון' },
    { value: 83, label: 'Greenland', heb: 'גרינלנד' },
    { value: 85, label: 'Grenada', heb: 'גרנדה' },
    { value: 86, label: 'Guadeloupe', heb: 'גוואדלופ' },
    { value: 87, label: 'Guam', heb: 'גואם' },
    { value: 88, label: 'Guatemala', heb: 'גואטמלה' },
    { value: 251, label: 'Guernsey', heb: 'גרנזי' },
    { value: 90, label: 'Guinea', heb: 'גינאה' },
    { value: 89, label: 'Guinea-bissau', heb: 'גינאה-ביסאו' },
    { value: 91, label: 'Guyana', heb: 'גויאנה' },
    { value: 92, label: 'Haiti', heb: 'האיטי' },
    {
      value: 93,
      label: 'Heard Island and Mcdonald Islands',
      heb: 'האי הרד ואיי מקדונלד'
    },
    { value: 94, label: 'Holy See (Vatican City State)', heb: 'וותיקן' },
    { value: 98, label: 'Honduras', heb: 'הונדורס' },
    { value: 96, label: 'Hong Kong', heb: 'הונג קונג' },
    { value: 95, label: 'Hungary', heb: 'הונגריה' },
    { value: 97, label: 'Iceland', heb: 'איסלנד' },
    { value: 99, label: 'India', heb: 'הודו' },
    { value: 100, label: 'Indonesia', heb: 'אינדונזיה' },
    { value: 101, label: 'Iran, Islamic Republic of', heb: 'איראן' },
    { value: 102, label: 'Iraq', heb: 'עירק' },
    { value: 103, label: 'Ireland', heb: 'אירלנד' },
    { value: 252, label: 'Isle of Man', heb: 'האי מאן' },
    { value: 105, label: 'Italy', heb: 'איטליה' },
    { value: 107, label: 'Jamaica', heb: "ג'מייקה" },
    { value: 109, label: 'Japan', heb: 'יפן' },
    { value: 253, label: 'Jersey', heb: "ג'רזי" },
    { value: 108, label: 'Jordan', heb: 'ירדן' },
    { value: 110, label: 'Kazakhstan', heb: 'קזחסטן' },
    { value: 111, label: 'Kenya', heb: 'קניה' },
    { value: 112, label: 'Kiribati', heb: 'קיריבאטי' },
    {
      value: 160,
      label: "Korea, Democratic People's Republic of",
      heb: 'קוריאה הצפונית'
    },
    { value: 201, label: 'Korea, Republic of', heb: 'קוריאה הדרומית' },
    { value: 113, label: 'Kuwait', heb: 'כווית' },
    { value: 254, label: 'Kurdistan', heb: 'כורדיסטאן' },
    { value: 114, label: 'Kyrgyzstan', heb: "קירג'יסטן" },
    {
      value: 115,
      label: "Lao People's Democratic Republic, laos",
      heb: 'לאוס'
    },
    { value: 116, label: 'Latvia', heb: 'לטביה' },
    { value: 117, label: 'Lebanon', heb: 'לבנון' },
    { value: 118, label: 'Lesotho', heb: 'לסוטו' },
    { value: 119, label: 'Liberia', heb: 'ליבריה' },
    { value: 121, label: 'Libyan Arab Jamahiriya', heb: 'לוב' },
    { value: 120, label: 'Liechtenstein', heb: 'ליכטנשטיין' },
    { value: 122, label: 'Lithuania', heb: 'ליטא' },
    { value: 125, label: 'Luxembourg', heb: 'לוקסמבורג' },
    { value: 123, label: 'Macao', heb: 'מקאו' },
    { value: 126, label: 'Madagascar', heb: 'מדגסקר' },
    { value: 127, label: 'Malawi', heb: 'מלאווי' },
    { value: 128, label: 'Malaysia', heb: 'מלזיה' },
    { value: 129, label: 'Maldives', heb: 'איי המלדיביים' },
    { value: 130, label: 'Mali', heb: 'מאלי' },
    { value: 132, label: 'Malta', heb: 'מלטה' },
    { value: 131, label: 'Marshall Islands', heb: 'איי מרשל' },
    { value: 135, label: 'Martinique', heb: 'מרטיניק' },
    { value: 134, label: 'Mauritania', heb: 'מאוריטניה' },
    { value: 133, label: 'Mauritius', heb: 'מאוריציוס' },
    { value: 136, label: 'Mayotte', heb: 'מאיוט' },
    { value: 138, label: 'Mexico', heb: 'מכסיקו' },
    { value: 137, label: 'Micronesia, Federated States of', heb: 'מיקרונזיה' },
    { value: 139, label: 'Moldova, Republic of', heb: 'מולדובה' },
    { value: 140, label: 'Monaco', heb: 'מונקו' },
    { value: 142, label: 'Mongolia', heb: 'מונגוליה' },
    { value: 141, label: 'Montenegro', heb: 'מונטנגרו' },
    { value: 143, label: 'Montserrat', heb: 'מונסראט' },
    { value: 145, label: 'Morocco', heb: 'מרוקו' },
    { value: 144, label: 'Mozambique', heb: 'מוזמביק' },
    { value: 149, label: 'Myanmar', heb: 'מיאנמר (בורמה)' },
    { value: 146, label: 'Namibia', heb: 'נמיביה' },
    { value: 147, label: 'Nauru', heb: 'נאורו' },
    { value: 150, label: 'Nepal', heb: 'נפאל' },
    { value: 152, label: 'Netherlands', heb: 'הולנד' },
    { value: 148, label: 'Netherlands Antilles', heb: 'האנטילים ההולנדיים' },
    { value: 151, label: 'New Caledonia', heb: 'קלדוניה החדשה' },
    { value: 153, label: 'New Zealand', heb: 'ניו זינלנד' },
    { value: 155, label: 'Nicaragua', heb: 'ניקרגואה' },
    { value: 154, label: 'Niger', heb: "ניז'ר" },
    { value: 156, label: 'Nigeria', heb: 'ניגריה' },
    { value: 157, label: 'Niue', heb: 'ניואה' },
    { value: 158, label: 'Norfolk Island', heb: 'האי נורפולק' },
    { value: 124, label: 'North Macedonia', heb: 'מקדוניה (FYROM)' },
    {
      value: 161,
      label: 'Northern Mariana Islands',
      heb: 'איי מריאנה הצפוניים'
    },
    { value: 162, label: 'Norway', heb: 'נורווגיה' },
    { value: 164, label: 'Oman', heb: 'עומאן' },
    { value: 163, label: 'Pakistan', heb: 'פקיסטאן' },
    { value: 165, label: 'Palau', heb: 'פלאו' },
    { value: 166, label: 'Panama', heb: 'פנמה' },
    { value: 168, label: 'Papua New Guinea', heb: 'פפואה ניו גינאה' },
    { value: 169, label: 'Paraguay', heb: 'פרגוואי' },
    { value: 170, label: 'Peru', heb: 'פרו' },
    { value: 171, label: 'Philippines', heb: 'פיליפינים' },
    { value: 172, label: 'Pitcairn', heb: 'איי פיטקיירן' },
    { value: 174, label: 'Poland', heb: 'פולין' },
    { value: 173, label: 'Portugal', heb: 'פורטוגל' },
    { value: 175, label: 'Puerto Rico', heb: 'פורטו ריקו' },
    { value: 176, label: 'Qatar', heb: 'קטאר' },
    { value: 177, label: 'Reunion', heb: 'ראוניון' },
    { value: 178, label: 'Romania', heb: 'רומניה' },
    { value: 179, label: 'Russian Federation', heb: 'רוסיה' },
    { value: 180, label: 'Rwanda', heb: 'רוואנדה' },
    { value: 255, label: 'Saint Barthélemyn', heb: 'סן ברתלמי' },
    { value: 181, label: 'Saint Helenan', heb: 'סנט הלנה' },
    { value: 182, label: 'Saint Kitts and Nevis', heb: 'סנט קיטס ונוויס' },
    { value: 183, label: 'Saint Lucia', heb: 'סנט לוסיה' },
    { value: 256, label: 'Saint Martin (French part)', heb: 'סן מרטן' },
    { value: 184, label: 'Saint Pierre and Miquelon', heb: 'סנט פייר ומיקלון' },
    {
      value: 185,
      label: 'Saint Vincent and The Grenadines',
      heb: 'סנט וינסנט והגרנדינים'
    },
    { value: 186, label: 'Samoa', heb: 'סמואה' },
    { value: 187, label: 'San Marino', heb: 'סן מרינו' },
    { value: 259, label: 'tibet', heb: 'טיבט', ar: 'التبت' },
    { value: 188, label: 'Sao Tome and Principe', heb: 'סאו טומה ופרינסיפה' },
    { value: 189, label: 'Saudi Arabia', heb: 'ערב הסעודית' },
    { value: 191, label: 'Senegal', heb: 'סנגל' },
    { value: 192, label: 'Serbia', heb: 'סרביה' },
    { value: 194, label: 'Seychelles', heb: 'סיישל' },
    { value: 193, label: 'Sierra Leone', heb: 'סיירה לאון' },
    { value: 195, label: 'Singapore', heb: 'סינגפור ' },
    { value: 257, label: 'Sint Maarten (Dutch part)', heb: 'סנט מארטן' },
    { value: 196, label: 'Slovakia', heb: 'סלובקיה' },
    { value: 199, label: 'Slovenia', heb: 'סלובניה' },
    { value: 198, label: 'Solomon Islands', heb: 'איי שלמה' },
    { value: 211, label: 'Somalia', heb: 'סומליה' },
    { value: 197, label: 'South Africa', heb: 'דרום אפריקה' },
    {
      value: 200,
      label: 'South Georgia and The South Sandwich Islands',
      heb: "איי ג'ורג'יה הדרומית ואיי סנדוויץ' הדרומיים"
    },
    { value: 202, label: 'South Sudan', heb: 'דרום סודן' },
    { value: 203, label: 'Spain', heb: 'ספרד' },
    { value: 204, label: 'Sri Lanka', heb: 'סרי לנקה' },
    { value: 205, label: 'Sudan', heb: 'סודן' },
    { value: 206, label: 'Suriname', heb: 'סורינאם' },
    { value: 209, label: 'Svalbard and Jan Mayen', heb: 'סבאלברד ויאן מאיין' },
    { value: 208, label: 'Sweden', heb: 'שוודיה' },
    { value: 210, label: 'Switzerland', heb: 'שוויץ' },
    { value: 212, label: 'Syrian Arab Republic', heb: 'סוריה' },
    { value: 258, label: 'Taiwan', heb: 'טייוואן' },
    { value: 213, label: 'Tajikistan', heb: "טג'יקיסטן" },
    { value: 215, label: 'Tanzania, United Republic of', heb: 'טנזניה' },
    { value: 214, label: 'Thailand', heb: 'תאילנד' },
    { value: 60, label: 'Timor-leste', heb: 'מזרח טימור' },
    { value: 218, label: 'Togo', heb: 'טוגו' },
    { value: 217, label: 'Tokelau', heb: 'טוקלאו' },
    { value: 219, label: 'Tonga', heb: 'טונגה' },
    { value: 220, label: 'Trinidad and Tobago', heb: 'טרינידד וטובגו' },
    { value: 221, label: 'Tunisia', heb: 'תוניסיה' },
    { value: 224, label: 'Turkey', heb: 'טורקיה' },
    { value: 222, label: 'Turkmenistan', heb: 'טורקמניסטן' },
    { value: 223, label: 'Turks and Caicos Islands', heb: 'איי טורקס וקאיקוס' },
    { value: 225, label: 'Tuvalu', heb: 'טובאלו' },
    { value: 226, label: 'Uganda', heb: 'אוגנדה' },
    { value: 227, label: 'Ukraine', heb: 'אוקראינה' },
    {
      value: 228,
      label: 'United Arab Emirates',
      heb: 'איחוד האמירויות הערביות'
    },
    { value: 229, label: 'United Kingdom', heb: 'אנגליה' },
    {
      value: 233,
      label: 'United States Minor Outlying Islands',
      heb: 'האיים המרוחקים הקטנים של ארה״ב'
    },
    { value: 231, label: 'Uruguay', heb: 'אורוגוואי' },
    { value: 232, label: 'Uzbekistan', heb: 'אוזבקיסטן' },
    { value: 234, label: 'Vanuatu', heb: 'ונואטו' },
    { value: 235, label: 'Venezuela', heb: 'ונצואלה' },
    { value: 236, label: 'Viet Nam', heb: 'ויטנאם' },
    {
      value: 237,
      label: 'Virgin Islands, British',
      heb: 'איי הבתולה הבריטיים'
    },
    {
      value: 239,
      label: 'Virgin Islands, U.S.',
      heb: 'איי הבתולה של ארצות הברית'
    },
    { value: 240, label: 'Wallis and Futuna', heb: 'ואליס ופוטונה' },
    { value: 241, label: 'Western Sahara', heb: 'סהרה המערבית' },
    { value: 242, label: 'Yemen', heb: 'תימן' },
    { value: 244, label: 'Zambia', heb: 'זמביה' },
    { value: 243, label: 'Zimbabwe', heb: 'זימבבואה' }
  ];
  const name = `countries`;
  const placeholdr = { he: '', ar: '', en: '' };
  const pl = `${placeholdr}.${$lang}`;
  const placeholder = `המקום שלי`;
  const required = true;
  let erorim = $state({
    st: false,
    msg: '',
    msg2: 'אם הבעיה נמשכת ניתן לפנות ל',
    msg1: 'baruch@1lev1.com'
  });
  let selected = $state([]);
  let already = $state(false);
  let erorims = $state(false);

  // Form state variables
  let formName = $state($userName || '');
  let formEmail = $state($email || '');
  let formErrors = $state({ name: '', email: '' });
  let g = $state(false);
  let datar;
  let { idx = 1 } = $props();
  let data;
  import Close from '$lib/celim/close.svelte';
  import { scrolltotop } from 'svelte-scrollto-element';
  import Text1lev1 from '$lib/celim/ui/text1lev1.svelte';
  import { sendError } from '$lib/func/send/senError.svelte';
  let meData = [];

  // Manual validation function
  function validate() {
    let valid = true;
    formErrors = { name: '', email: '' };

    if (!formName) {
      formErrors.name = 'יש למלא שם';
      valid = false;
    }

    if (!formEmail || !/^[^@]+@[^@]+\.[^@]+$/.test(formEmail)) {
      formErrors.email = 'יש למלא מייל תקין';
      valid = false;
    }

    if (selected.length < 1) {
      erorims = true;
      valid = false;
    } else {
      erorims = false;
    }

    return valid;
  }
  let isSubmitting = $state(false);

  // Form submit handler
  async function handleSubmit() {
    if (isSubmitting) return;

    track('tryToSign', {}, { flags: ['tryToSign'] });

    if (!validate()) {
      setTimeout(() => {
        scrolltotop();
      }, 0);
      return;
    }

    try {
      isSubmitting = true;
      g = true;
      erorim.st = false;
      const mail = formEmail.toLowerCase().trim();

      const response = await fetch(baseUrl + '/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
        mutation CreateChezin($name: String!, $email: String!, $countries: [ID]!, $publishedAt: DateTime) {
        createChezin(data: { name: $name, email: $email, countries: $countries, publishedAt: $publishedAt, fullAgreement: true }) {
          data { 
            id 
            attributes {
              name
              publishedAt
              email
            }
          }
        }
      }
    `,
          variables: {
            name: formName,
            email: mail,
            countries: find_contry_id(selected),
            publishedAt: new Date().toISOString()
          }
        })
      });

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors[0].message);
      }
      meData = result.data.createChezin;

      g = false;
      already = true;
      document.cookie =
        `email=${mail}; expires=` + new Date(2027, 0, 1).toUTCString();
      document.cookie =
        `un=${formName}; expires=` + new Date(2027, 0, 1).toUTCString();
      userName.set(formName);
      liUN.set(formName);
      email.set(mail);
      contriesi.set(find_contry_id(selected));
      fpval.set(meData.data.id);

      const returnParam = new URLSearchParams(window.location.search).get(
        'return'
      );

      let linko = `ref=true&id=${meData.data.id}&con=${find_contry_id(selected)}&un=${encodeURIComponent(formName)}&em=${encodeURIComponent(mail)}&lang=${$lang}`;
      linkos.set(linko);
      localStorage.setItem('linkos', linko);

      if (returnParam) {
        window.location.href = `https://www.1lev1.com/hascama?${linko}`;
        return;
      }

      regHelper.set(1);
    } catch (error) {
      g = false;
      erorim.st = true;
      if (!error.response) {
        erorim.msg = 'The server is asleep 😴, we woke it up, trying again';
      } else {
        erorim.msg = ` ${error.response.data.message}  ${error.response.data.statusCode} : An error occurred, here are the details `;
      }
    }
  }
  let dow = $state();
  /*function show (){
const amana = document.getElementById("amana-show")
const lines = document.getElementById("lines")

}*/
  let trans = $state(false);
  function tran() {
    trans = !trans;
  }
  function scrollTo() {
    dow.scrollIntoView({ behavior: 'smooth' });
  }

  let isOpen = $state(false);
  let a = $state(0);
  let h = $state(0);

  function sell() {
    isOpen = true;
    a = 0;
  }
  function info() {
    isOpen = true;
    a = 6;
  }
  function tr() {
    isOpen = true;
    a = 4;
  }
  const closer = () => {
    isOpen = false;
    a = 0;
  };
  function done() {
    a = 1;
  }

  function erore() {
    a = 3;
  }

  function erorer() {
    a = 5;
  }
  function change(la) {
    doesLang.set(true);
    langUs.set(la);
    lang.set(la);
  }
  let w = $state(0);
  let wid = $state(0);

  $effect(() => {
    if (formErrors.name || formErrors.email) {
      setTimeout(() => {
        scrolltotop();
      }, 0);
    }
  });

  $effect(() => {
    if ($userName) {
      formName = $userName;
    }
  });

  $effect(() => {
    if ($email) {
      formEmail = $email;
    }
  });

  $effect(() => {
    if ($contriesi && $contriesi.length > 0 && selected.length === 0) {
      // If contriesi contains IDs (numbers), we should convert to names
      // If it contains names, we use them directly.
      let first = $contriesi[0];
      if (!isNaN(first)) {
        // It's ID
        let names = [];
        for (let id of $contriesi) {
          let c = country.find((c) => c.value == id);
          if (c) names.push(c.heb);
        }
        selected = names;
      } else {
        selected = [...$contriesi];
      }
    }
  });

  let countriesJoined = $derived.by(() => {
    const list = selected.length > 0 ? selected : ['__'];
    if ($lang === 'he') {
      return list.length < 2 ? list[0] : list.join(' וכל אוכלוסיית ');
    }
    if ($lang === 'ar') {
      return list.length < 2 ? list[0] : list.join(' وكل سكان ');
    }
    return list.join(', ');
  });

  let countriesArmyJoined = $derived.by(() => {
    const list = selected.length > 0 ? selected : ['__'];
    if ($lang === 'he') {
      return list.length < 2 ? list[0] : list.join(' ושל צבא ');
    }
    return list.join(', ');
  });

  let countriesPlural = $derived(selected.length > 1);
  let appointWord = $derived(countriesPlural ? 'ממנות' : 'ממנה');

  let displayName = $derived(
    formName ? formName : $t('love.declaration.default_name')
  );
</script>

<Head {title} {description} {image} {url} />

<DialogOverlay style="z-index: 700;" {isOpen} onDismiss={closer}>
  <div
    style="z-index: 700;"
    transition:fly={{ y: 450, opacity: 0.5, duration: 2000 }}
  >
    <DialogContent class="content" aria-label="form">
      <div style="z-index: 400;" dir="rtl">
        <button class=" hover:bg-barbi text-mturk rounded-full" onclick={closer}
          ><Close /></button
        >
        {#if a == 0}
          <Tikun onDone={done} onErore={erore} />
        {:else if a == 4}
          <TRan onDone={done} onErore={erorer} />
        {:else if a == 1}
          <div class="sp bg-gold">
            <h3 class="text-barbi">{$t('love.status.success')}</h3>
          </div>
        {:else if a == 2}
          <div class="flex text-center items-center justify-center bg-gold">
            <h3 class="text-barbi">{$t('love.status.loading')}</h3>
            <br />
            <RingLoader size="260" color="#ff00ae" unit="px" duration="2s"
            ></RingLoader>
          </div>
        {:else if a == 3}
          <h1>{$t('love.status.error')}</h1>
          <button
            class="hover:bg-barbi text-barbi hover:text-gold bg-gold rounded-full"
            onclick={() => (a = 0)}>{$t('love.status.try_again')}</button
          >
        {:else if a == 5}
          <h1>{$t('love.status.error')}</h1>
          <button
            class="hover:bg-barbi text-barbi hover:text-gold bg-gold rounded-full"
            onclick={() => (a = 4)}>{$t('love.status.try_again')}</button
          >
        {:else if a == 6}
          <Maze />
        {/if}
      </div></DialogContent
    >
  </div>
</DialogOverlay>

<button
  style="position: absolute; color: var(--gold); font-weight:bold; height:20px width:20px; z-index:500;"
  onclick={() => info()}
  class="ww">?</button
>
<div bind:clientWidth={wid} class="all">
  <div
    style="position:absolute ; left: 1%; top: 1%; display: flex; flex-direction: column ; z-index: 699;"
  >
    {#if trans === false}
      <button onclick={tran}
        ><img
          class="shadow-xl rounded"
          alt="translat-icon-by-barbi"
          src="https://res.cloudinary.com/love1/image/upload/v1639345051/icons8-translate-app_gwpwcn.svg"
        /></button
      >
    {:else}
      <button onclick={tran} class=" text-barbi hover:text-gold p-0.5"
        ><svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M8.27,3L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27L15.73,3M8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41"
          />
        </svg></button
      >
      <button
        onclick={() => change('he')}
        class="text-barbi border-2 border-gold text-bold hover:text-lturk bg-lturk text-center hover:bg-barbi px-1 py-0.5"
        >עברית</button
      >
      <button
        onclick={() => change('en')}
        class="text-barbi border-2 border-gold text-bold hover:text-lturk bg-lturk text-center hover:bg-barbi px-1 py-0.5"
        >English</button
      >
      <button
        onclick={() => change('ar')}
        class="text-barbi border-2 border-gold text-bold hover:text-lturk text-center bg-lturk hover:bg-barbi px-1 py-0.5"
        >العربية</button
      >
      <button
        onclick={() => change('fr')}
        class="text-barbi border-2 border-gold text-bold hover:text-lturk text-center bg-lturk hover:bg-barbi px-1 py-0.5"
        >Français</button
      >
      <button
        onclick={() => change('es')}
        class="text-barbi border-2 border-gold text-bold hover:text-lturk text-center bg-lturk hover:bg-barbi px-1 py-0.5"
        >Español</button
      >
      <button
        onclick={() => change('ru')}
        class="text-barbi border-2 border-gold text-bold hover:text-lturk text-center bg-lturk hover:bg-barbi px-1 py-0.5"
        >Русский</button
      >
      <button
        onclick={() => change('zh')}
        class="text-barbi border-2 border-gold text-bold hover:text-lturk text-center bg-lturk hover:bg-barbi px-1 py-0.5"
        >中文</button
      >

      <a
        class="text-barbi border-2 border-gold text-bold hover:text-lturk bg-lturk text-center hover:bg-barbi px-1 py-0.5"
        title={$t('love.menu.about')}
        data-sveltekit-prefetch
        href="/"
      >
        {$t('love.menu.about')}</a
      >
      <button
        onclick={sell}
        title={$t('love.menu.suggest_change')}
        class="text-barbi border-2 border-gold text-bold hover:text-lturk bg-lturk text-center hover:bg-barbi px-1 py-0.5"
        >{$t('love.menu.suggest_change')}</button
      >
      <button
        onclick={tr}
        title={$t('love.menu.translate')}
        class="text-barbi border-2 border-gold text-bold hover:text-lturk bg-lturk text-center hover:bg-barbi px-1 py-0.5"
        >{$t('love.menu.translate')}</button
      >
      <a
        class="text-barbi border-2 border-gold text-bold hover:text-lturk text-center bg-lturk hover:bg-barbi px-1 py-0.5"
        data-sveltekit-prefetch
        href="/love">מפת ההסכמה</a
      >
    {/if}
  </div>
  <div class="mobile">
    <header class="hero" dir={$t('love.lang.dir')}>
      <h1 class="hero-headline">{$t('love.hascama.headline')}</h1>
      {#if idx > 1}
        <p class="hero-counter">
          💗 {$t('love.hascama.counter', { count: idx })}
        </p>
      {/if}
    </header>
    <section class="explain" dir={$t('love.lang.dir')}>
      <div class="explain-card">
        <h3>{$t('love.hascama.explain_1_title')}</h3>
        <p>{$t('love.hascama.explain_1')}</p>
      </div>
      <div class="explain-card">
        <h3>{$t('love.hascama.explain_2_title')}</h3>
        <p>{$t('love.hascama.explain_2')}</p>
      </div>
      <div class="explain-card">
        <h3>{$t('love.hascama.explain_3_title')}</h3>
        <p>{$t('love.hascama.explain_3')}</p>
      </div>
    </section>
    <section class="container" dir="rtl" id="lines">
      <div class="flexi">
        <h3
          class="amanat"
          style="font-weight: 900; white-space: nowrap; font-family: StamSefarad, serif; font-size: 1.2em; line-height: normal;"
          dir={$t('love.lang.dir')}
        >
          {$t('love.form.name_label')}
        </h3>
        <input
          id="name"
          name="name"
          placeholder={$t('love.form.name_placeholder')}
          required
          bind:value={formName}
        />
        {#if formErrors.name}
          <small style="color: red;">{$t('love.form.error_name')}</small>
        {/if}
      </div>
      <div class="flexi1" style="white-space:nowrap;">
        <div>
          <h3
            class="amanat"
            id="m"
            style="font-weight: 900; font-family: StamSefarad, serif; font-size: 1em;"
            dir={$t('love.lang.dir')}
          >
            {$t('love.form.country_label')}
          </h3>
        </div>
        <div>
          <MultiSelect
            bind:selected
            outerDivClass="!bg-gold !text-barbi"
            inputClass="!bg-gold !text-barbi"
            liSelectedClass="!bg-barbi !text-gold"
            placeholder={$t('love.form.country_placeholder')}
            options={country.map(
              (c) => c[$lang === 'he' ? 'heb' : $lang === 'ar' ? 'ar' : 'label']
            )}
          />
        </div>
        {#if erorims == true}
          <small style="color: red;">{$t('love.form.error_country')}</small>
        {/if}
      </div>
      <div class="flexi2">
        <h3
          class="amanat"
          style=" font-weight: 900;   white-space: nowrap; font-family: 'StamSefarad', serif; font-size: 1.2em; line-height:normal;"
          dir={$t('love.lang.dir')}
        >
          {$t('love.form.email_label')}
        </h3>
        <input
          placeholder={$t('love.form.email_placeholder')}
          id="email"
          name="email"
          required
          bind:value={formEmail}
        />
        {#if formErrors.email}
          <small style="color: red;">{$t('love.form.error_email')}</small>
        {/if}
      </div>
    </section>
    <div class="onlym">
      <button
        alt="click-to-scroll-down"
        class="ca3-scroll-down-link ca3-scroll-down-arrow"
        data-ca3_iconfont="ETmodules"
        onclick={scrollTo}
        data-ca3_icon=""
      ></button>
    </div>
  </div>
  <div class="aab" bind:this={dow}>
    <div dir="rtl" class="amana" id="amana-show">
      <div
        class="card bg-[length:200%_auto] animate-gradientx bg-[linear-gradient(to_right,theme(colors.gra),theme(colors.grb),theme(colors.grc),theme(colors.grd),theme(colors.gre),theme(colors.grd),theme(colors.grc),theme(colors.grb),theme(colors.gra))]"
      >
        <div class="card-overlay"></div>
        <div class="card-inner d overflow-y-auto">
          <h1
            dir={$t('love.lang.dir')}
            style="color:#cc0066; text-shadow: 1px 1px black ; "
          >
            {formName
              ? $t('love.declaration.title', { name: formName })
              : $t('love.declaration.title_empty')}
          </h1>
          <ol class="steps" dir={$t('love.lang.dir')}>
            <li class="step step-now">
              <div class="step-head">
                <span class="step-badge">1</span>
                <h2 class="step-title">
                  {$t('love.declaration.step1_title')}
                </h2>
              </div>
              <p class="step-body">
                {$t('love.declaration.body_1', { name: displayName })}
                {$t('love.declaration.body_2', { name: displayName })}
              </p>
              <div class="step-body platform-line">
                {$t('love.declaration.body_3_start', { name: displayName })}
                <div dir="ltr" class="logo-1lev1 font-bold flex flex-row">
                  <div class="flip">
                    <h1
                      class="font-bold text-transparent bg-clip-text bg-[length:auto_200%] animate-gradienty
            bg-[linear-gradient(to_top,theme(colors.barbi),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.mturk),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.barbi))]"
                    >
                      1
                    </h1>
                  </div>
                  <div>
                    <h1
                      class="font-bold text-transparent bg-clip-text bg-[length:auto_200%] animate-gradienty
          bg-[linear-gradient(to_top,theme(colors.barbi),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.mturk),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.barbi))]"
                    >
                      💗
                    </h1>
                  </div>
                  <div>
                    <h1
                      class="font-bold text-transparent bg-clip-text bg-[length:auto_200%] animate-gradienty
            bg-[linear-gradient(to_top,theme(colors.barbi),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.mturk),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.barbi))]"
                    >
                      1
                    </h1>
                  </div>
                </div>
                {$t('love.declaration.body_3_end', { name: displayName })}
              </div>
            </li>
            <li class="step step-later">
              <div class="step-head">
                <span class="step-badge">2</span>
                <h2 class="step-title">
                  {$t('love.declaration.step2_title')}
                </h2>
              </div>
              <p class="step-body">
                {$t('love.declaration.body_4', {
                  name: displayName,
                  countries: countriesJoined || '__',
                  appoint: appointWord
                })}
              </p>
              <span class="step-lock">
                🔒→💗 {$t('love.declaration.mutual_badge')}
              </span>
            </li>
            <li class="step step-later">
              <div class="step-head">
                <span class="step-badge">3</span>
                <h2 class="step-title">
                  {$t('love.declaration.step3_title')}
                </h2>
              </div>
              <p class="step-body">
                {$t('love.declaration.body_5', {
                  name: displayName,
                  countries: countriesArmyJoined
                })}
              </p>
              <span class="step-lock">
                🔒→💗 {$t('love.declaration.mutual_badge')}
              </span>
            </li>
          </ol>
          <p class="decl-closing" dir={$t('love.lang.dir')}>
            {$t('love.declaration.body_6')}
          </p>
          <p class="decl-reassurance" dir={$t('love.lang.dir')}>
            💗 {$t('love.declaration.reassurance')}
          </p>
        </div>
      </div>
    </div>

    <form>
      <div class="flexid" bind:clientWidth={w} bind:clientHeight={h}>
        {#if already == false}
          {#if g == false}
            <button
              class="agree-btn"
              title={$t('love.form.submit_title')}
              onclick={handleSubmit}
              type="button"
            >
              {$t('love.form.submit_button')}
            </button>
            {#if $progress < 1}
              <button
                class="button hover:scale-150"
                title={$t('love.form.submit_title')}
                onclick={handleSubmit}
                type="button"
                aria-label={$t('love.form.submit_title')}
              >
              </button>
            {/if}
            <div class="cor">
              <Canvas size={{ width: w, height: h }}>
                <Scene
                  onClick={() => console.log('hhuibi')}
                  onSubmit={handleSubmit}
                />
              </Canvas>
            </div>
          {:else if g == true}
            <div class="sp text-center">
              <h3 class="text-barbi">{$t('love.status.loading')}</h3>
              <br />
              <RingLoader size="140" color="#ff00ae" unit="px" duration="2s"
              ></RingLoader>
            </div>
          {/if}
          {#if erorim.st == true}
            <small style="color:red; text-align: center;"
              >{erorim.msg} <br /><span dir="rtl">
                {erorim.msg2} - {erorim.msg1}</span
              >
            </small>
          {/if}
        {/if}
      </div>
    </form>
  </div>
</div>

<style>
  :root {
    --cosmic-bg: #0d0a1a;
    --card-dark: #1a0d00;
    --card-mid: #2a1500;
    --gold-bright: #f5d98b;
    --gold-main: #c8a84b;
    --gold-dim: #7a5c1e;
    --parchment: #fef3d0;
    --parchment-dim: #f2dfa8;
    --ink: #1a0900;
    --barbi-accent: #ff4fa3;
    --turq-accent: #1de7d8;
  }

  /* ─── Hero: הקונטקסט לפני הטופס ─── */
  .hero {
    text-align: center;
    padding: 1.2rem 1rem 0.4rem;
    max-width: 820px;
    margin: 0 auto;
    z-index: 650;
  }

  .hero-headline {
    font-family: 'StamSefarad', David, serif;
    font-size: 1.6em;
    font-weight: 900;
    color: #cc0066;
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.85),
      0 2px 6px rgba(0, 0, 0, 0.15);
    margin: 0 0 0.45em;
    line-height: 1.25;
  }

  .hero-counter {
    display: inline-block;
    background: var(--parchment);
    color: var(--ink);
    border: 1.5px solid var(--gold-main);
    border-radius: 999px;
    padding: 0.25em 1em;
    font-weight: 700;
    font-size: 1em;
    box-shadow: 0 2px 8px rgba(200, 168, 75, 0.3);
    margin: 0;
  }

  /* ─── ההסבר של 30 שניות ─── */
  .explain {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
    max-width: 900px;
    margin: 0.8rem auto;
    padding: 0 1rem;
    z-index: 650;
  }

  .explain-card {
    background: rgba(254, 243, 208, 0.94);
    border: 1px solid var(--gold-main);
    border-radius: 10px;
    padding: 0.6em 0.85em;
    color: var(--ink);
    text-align: start;
    box-shadow: 0 2px 8px rgba(200, 168, 75, 0.2);
  }

  .explain-card h3 {
    margin: 0 0 0.2em;
    font-size: 0.98em;
    font-weight: 900;
    color: #cc0066;
    font-family: 'StamSefarad', David, serif;
  }

  .explain-card p {
    margin: 0;
    font-size: 0.85em;
    line-height: 1.45;
  }

  @media (max-width: 720px) {
    .explain {
      grid-template-columns: 1fr;
      gap: 0.45rem;
    }
  }

  /* ─── ההצהרה בשלוש מדרגות — דיו על קלף ─── */
  .steps {
    list-style: none;
    margin: 0.8em auto 0;
    padding: 0;
    max-width: 62ch;
    text-align: start;
    position: relative;
  }

  /* ציר זמן — קו שמחבר את המדרגות */
  .steps::before {
    content: '';
    position: absolute;
    top: 1.2em;
    bottom: 1.2em;
    inset-inline-start: 1.05em;
    width: 2px;
    background: linear-gradient(
      to bottom,
      var(--gold-bright),
      var(--gold-main),
      var(--gold-dim)
    );
    z-index: 0;
  }

  .step {
    position: relative;
    z-index: 1;
    background: linear-gradient(
      135deg,
      var(--parchment) 0%,
      #fff8e8 60%,
      var(--parchment) 100%
    );
    border: 1.5px solid var(--gold-main);
    border-radius: 12px;
    padding: 0.7em 1em 0.8em;
    margin-bottom: 1em;
    color: var(--ink);
    font-size: 0.72em;
    font-weight: 700;
    line-height: 1.55;
    box-shadow: 0 2px 10px rgba(200, 168, 75, 0.28);
  }

  .step-now {
    font-size: 0.82em;
    border-color: var(--gold-bright);
    box-shadow:
      0 0 0 3px rgba(245, 217, 139, 0.35),
      0 4px 14px rgba(200, 168, 75, 0.35);
  }

  .step-later {
    opacity: 0.93;
  }

  .step-head {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-bottom: 0.35em;
  }

  .step-badge {
    flex: none;
    width: 1.7em;
    height: 1.7em;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold-bright), var(--gold-main));
    color: var(--ink);
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 4px rgba(90, 50, 0, 0.35);
  }

  .step-title {
    margin: 0;
    font-size: 1.05em;
    font-weight: 900;
    color: #cc0066;
    font-family: 'StamSefarad', David, serif;
    line-height: 1.3;
  }

  .step-body {
    margin: 0 0 0.3em;
    font-family: 'StamSefarad', David, serif;
  }

  .platform-line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.15em;
    text-align: center;
  }

  .logo-1lev1 {
    margin: 0 0.4em;
  }

  .logo-1lev1 h1 {
    font-size: 1.6em;
    margin: 0;
  }

  .step-lock {
    display: inline-block;
    font-size: 0.82em;
    background: rgba(200, 168, 75, 0.14);
    border: 1px dashed var(--gold-main);
    border-radius: 999px;
    padding: 0.1em 0.8em;
    color: var(--gold-dim);
    font-weight: 700;
  }

  .decl-closing {
    max-width: 62ch;
    margin: 0.9em auto 0;
    font-size: 0.72em;
    font-weight: 700;
    line-height: 1.55;
    color: #3a2a10;
    font-family: 'StamSefarad', David, serif;
    text-align: start;
  }

  .decl-reassurance {
    max-width: 62ch;
    margin: 0.7em auto 0.4em;
    font-size: 0.58em;
    font-style: italic;
    line-height: 1.5;
    color: #6b5a35;
    text-align: start;
  }

  /* ─── כפתור הסכמה רגיל וברור ─── */
  .agree-btn {
    font-family: 'StamSefarad', David, serif;
    font-size: 1.35em;
    font-weight: 900;
    color: #fff;
    background: linear-gradient(135deg, var(--barbi-accent), #cc0066);
    border: 2px solid var(--gold-bright);
    border-radius: 999px;
    padding: 0.45em 1.6em;
    margin: 0.7em auto 0.2em;
    cursor: pointer;
    box-shadow: 0 4px 18px rgba(255, 79, 163, 0.45);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    z-index: 200;
  }

  .agree-btn:hover,
  .agree-btn:focus-visible {
    transform: scale(1.05);
    box-shadow: 0 6px 24px rgba(255, 79, 163, 0.6);
  }

  @media (prefers-reduced-motion: reduce) {
    .agree-btn,
    .agree-btn:hover {
      transition: none;
      transform: none;
    }
  }

  .card {
    --bg: #e8e8e8;
    --contrast: #e2e0e0;
    --grey: #93a1a1;
    position: relative;
    padding: 9px;
    background-color: var(--bg);
    border-radius: 35px;
    box-shadow:
      rgba(50, 50, 93, 0) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    border-radius: 35px;

    pointer-events: none;
    background: repeating-conic-gradient(
        var(--bg) 0.0000001%,
        var(--grey) 0.000104%
      )
      60% 60%/600% 600%;
    filter: opacity(10%) contrast(105%);
  }

  .card-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    padding: 0.5em;
    width: 84vw;
    height: 72vh;
    background-color: var(--contrast);
    border-radius: 30px;
    /* Content style */
    font-size: 1.5em;
    font-size-adjust: auto;
    font-weight: 900;
    color: #c7c4c4;
    text-align: center;
  }
  .cor {
    cursor:
      url(https://res.cloudinary.com/love1/image/upload/v1639255090/Fingerprint-Heart-II_wqvlih.svg),
      auto;
  }
  .ww {
    top: calc(100% - 40px);
    right: calc(100% - 40px);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgb(26, 188, 156);
    background: -moz-linear-gradient(
      -45deg,
      rgba(26, 188, 156, 1) 0%,
      rgba(142, 68, 173, 1) 100%
    );
    background: -webkit-linear-gradient(
      -45deg,
      rgba(26, 188, 156, 1) 0%,
      rgba(142, 68, 173, 1) 100%
    );
    background: linear-gradient(
      135deg,
      rgba(26, 188, 156, 1) 0%,
      rgba(142, 68, 173, 1) 100%
    );

    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
  }
  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
  .overlay {
    background-color: #ff1a1a;
    background-image: linear-gradient(315deg, #ff1a1a 0%, #ffff00 74%);
    background-size: 110% 110%;
    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
    /* position, height, width, etc as appropriate. */
    z-index: 17;
    opacity: 0;
    animation-delay: 0.5s;
    animation-duration: 15s;
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-name: fireFlicker;
    animation-timing-function: linear;
  }
  @keyframes fireFlicker {
    0%,
    10% {
      opacity: 0;
    }
    15%,
    20% {
      opacity: 0.52;
    }
    22%,
    23% {
      opacity: 0.104;
    }
    25%,
    35% {
      opacity: 0.32;
    }
    39%,
    42% {
      opacity: 0.88;
    }
    44%,
    47% {
      opacity: 0.52;
    }
    49%,
    50% {
      opacity: 0.104;
    }
    52%,
    54% {
      opacity: 0.32;
    }
    57%,
    58% {
      opacity: 0.96;
    }
    60%,
    63% {
      opacity: 0.68;
    }
    65%,
    72% {
      opacity: 0.64;
    }
    77%,
    85% {
      opacity: 0.104;
    }
    90%,
    95% {
      opacity: 0.68;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  :global([data-svelte-dialog-content].content) {
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
    background-size: 400% 400%;
    /* -webkit-animation: AnimationName 13s ease infinite;
-moz-animation: AnimationName 13s ease infinite;
animation: AnimationName 3s ease infinite;*/
    width: 80vw;
  }
  @media (min-width: 568px) {
    :global([data-svelte-dialog-content].content) {
      background-color: #000000;
      background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
      background-size: 400% 400%;
      width: 78vw;
      overflow: visible !important;
      z-index: 800;
    }
  }
  .onlym {
    display: '';
  }
  [data-ca3_icon]::before {
    font-weight: normal;
    content: attr(data-ca3_icon);
  }

  .ca3-scroll-down-arrow {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .ca3-scroll-down-link {
    cursor: pointer;
    height: 60px;
    width: 80px;
    margin: 0px 0 0 -40px;
    line-height: 60px;
    position: absolute;
    left: 50%;
    bottom: 10%;
    color: #fff;
    text-align: center;
    font-size: 70px;
    z-index: 100;
    text-decoration: none;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);

    -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
    -moz-animation: ca3_fade_move_down 2s ease-in-out infinite;
    animation: ca3_fade_move_down 2s ease-in-out infinite;
  }

  /*animated scroll arrow animation*/
  @-webkit-keyframes ca3_fade_move_down {
    0% {
      -webkit-transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(0, 20px);
      opacity: 0;
    }
  }
  @-moz-keyframes ca3_fade_move_down {
    0% {
      -moz-transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -moz-transform: translate(0, 20px);
      opacity: 0;
    }
  }
  @keyframes ca3_fade_move_down {
    0% {
      transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 20px);
      opacity: 0;
    }
  }
  .midscreen-link {
    position: absolute;

    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639687279/Prismatic-Hearts-Vortex-Heart-13_pyb3yh.svg);

    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    color: var(--barbi-pink);
    text-shadow: 1px 1px black;
    text-align: center;
    align-self: center;
    justify-self: center;
  }
  .rightt {
    position: absolute;
    top: 50px;
    right: 50%;
    height: 50px;
    width: 50px;
    z-index: 14;
    aspect-ratio: 1/1;
  }
  .right {
    position: absolute;
    top: 50px;
    right: 50px;
    height: 50px;
    width: 50px;
    z-index: 14;
    aspect-ratio: 1/1;
  }
  .alredy {
    text-align: center;
    margin: 4vh 4vw 2vh 4vw;
    background-color: var(--gold);
    padding: 4vh 4vw;
    font-family: 'StamSefarad', serif;
    color: var(--barbi-pink);
    border: 1px var(--lturk);
  }

  #lines {
    display: '';
  }
  #amana-show {
    display: '';
  }
  /* ─── מיכל שורת הקלט ─── */
  .container {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.9em 1.4em 0.9em;
    margin: 0 auto;
    max-width: 1024px;
    z-index: 650;
    overflow: visible !important;

    /* רקע — מדליה שקופה עדינה */
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639089083/BG_umwddj.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    /* גבול זהוב עדין */
    border-bottom: 1px solid rgba(200, 168, 75, 0.2);
  }

  /* ─── תווית שם השדה (שמי / מ / דואר) ─── */
  .amanat {
    font-family: 'StamSefarad', serif;
    font-weight: 900;
    font-size: 1.05em;
    color: var(--gold-bright);
    text-shadow:
      0 0 12px rgba(245, 217, 139, 0.6),
      1px 1px 2px rgba(0, 0, 0, 0.9);
    padding: 0 0.5rem;
    white-space: nowrap;
    background: transparent;
    opacity: 1;
    /* ביטול אנימציה ישנה */
    animation: none;
    -webkit-animation: none;
  }

  /* ─── עטיפת כל שדה (flexi) ─── */
  .flexi,
  .flexi1,
  .flexi2 {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    position: relative;
  }

  /* ─── תיבת הקלט — עיצוב חדש ─── */
  input {
    font-family: 'StamSefarad', serif;
    font-size: 0.97em;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: var(--ink);

    max-width: 200px;
    min-width: 120px;
    padding: 0.35em 0.75em;
    box-sizing: border-box;

    /* רקע קלף */
    background: linear-gradient(
      135deg,
      var(--parchment) 0%,
      #fff8e8 60%,
      var(--parchment) 100%
    );

    /* גבול זהוב עדין */
    border: 1.5px solid var(--gold-main);
    border-radius: 6px;

    /* צל פנימי עדין */
    box-shadow:
      inset 0 1px 3px rgba(90, 50, 0, 0.15),
      0 2px 8px rgba(200, 168, 75, 0.2),
      0 0 0 0px rgba(200, 168, 75, 0);

    transition:
      box-shadow 220ms ease,
      border-color 220ms ease,
      background 220ms ease;
  }

  input::placeholder {
    color: var(--gold-dim);
    font-weight: 400;
    font-style: italic;
    opacity: 0.85;
  }

  /* ─── פוקוס — זוהר זהוב ─── */
  input:focus {
    outline: none;
    background: #fffdf5;
    border-color: var(--gold-bright);
    box-shadow:
      inset 0 1px 2px rgba(90, 50, 0, 0.1),
      0 0 0 3px rgba(200, 168, 75, 0.35),
      0 0 16px rgba(245, 217, 139, 0.25);
  }

  /* ─── שגיאות ─── */
  small {
    font-size: 0.78em;
    font-weight: 600;
    color: #cc0044;
    background: rgba(255, 240, 200, 0.95);
    border: 1px solid rgba(200, 168, 75, 0.4);
    border-radius: 4px;
    padding: 1px 6px;
    display: block;
    margin-top: 2px;
    white-space: nowrap;
  }

  /* ─── MultiSelect (כפתור בחירת מקום) — עקיפת ברירת מחדל ─── */
  /* מכסה את outerDivClass שמוגדר inline */
  :global(.multiselect) {
    --sms-bg: var(--parchment) !important;
    --sms-border: 1.5px solid var(--gold-main) !important;
    --sms-focus-border: 1.5px solid var(--gold-bright) !important;
    --sms-text-color: var(--ink) !important;
    --sms-selected-bg: var(--gold-main) !important;
    --sms-selected-color: var(--parchment) !important;

    --sms-dropdown-z-index: 9999 !important;
    z-index: 100;

    border-radius: 6px !important;
    min-width: 140px;
    max-width: 200px;
    box-shadow: 0 2px 8px rgba(200, 168, 75, 0.2) !important;
  }

  :global(.multiselect input) {
    background: transparent !important;
    color: var(--ink) !important;
  }

  /* ══════════════════════════════════════
   MOBILE ≤576px — שינויים לשדות
══════════════════════════════════════ */
  @media (max-width: 576px) {
    .container {
      flex-direction: column;
      gap: 0.8rem;
      padding: 1.2em 1em;
      background-image: none; /* ללא מדליה — נקי יותר */
      border-bottom: none;
      width: 100vw;
    }

    .flexi,
    .flexi1,
    .flexi2 {
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      width: 80vw;
    }

    .amanat {
      font-size: 1em;
      text-align: center;
      color: var(--gold-bright);
    }

    input {
      width: 72vw;
      max-width: unset;
      min-width: unset;
      font-size: 1em;
      padding: 0.45em 0.9em;
    }

    :global(.multiselect) {
      min-width: 72vw !important;
      max-width: 72vw !important;
    }
  }

  /* ══════════════════════════════════════
   TABLET 577–1099px
══════════════════════════════════════ */
  @media (min-width: 577px) and (max-width: 1099px) {
    .container {
      padding-top: 2rem;
      flex-direction: column;
      gap: 0.7rem;
    }

    .flexi,
    .flexi1,
    .flexi2 {
      flex-direction: row;
      width: auto;
    }

    input {
      max-width: 180px;
    }
  }

  /* ══════════════════════════════════════
   DESKTOP ≥1100px
══════════════════════════════════════ */
  @media (min-width: 1100px) {
    .container {
      height: 170px;
      flex-flow: row nowrap;
      padding-top: 67px;

      /* זכוכית קלה — רק במחשב */
      backdrop-filter: blur(6px) saturate(1.2);
      -webkit-backdrop-filter: blur(6px) saturate(1.2);
    }

    .flexi {
      order: 1;
      padding: 1rem;
    }
    .flexi1 {
      order: 2;
      padding: 2rem 1rem;
      flex-direction: row;
    }
    .flexi2 {
      order: 3;
      padding: 2rem 1rem;
      flex-direction: row;
      white-space: nowrap;
    }

    input {
      max-width: 210px;
    }
  }

  input:disabled,
  textarea:disabled {
    color: #ccc;
  }
  @media (max-width: 576px) {
    .right {
      position: absolute;
      top: 50px;
      height: 50px;
      width: 50px;
      z-index: 14;
      aspect-ratio: 1/1;
    }
    .midscreen-link {
      position: absolute;
      top: 192%;
      left: 82%;
      font-size: 0.8em;
      padding: 1.8em 1.8em;
    }

    .mobile {
      width: 100vw;
      min-height: 100vh;
      margin: 0px auto;
      background-color: var(--gold);
      background-image: url(https://res.cloudinary.com/love1/image/upload/v1648338694/Gold-German-Imperial-Crown-No-Background_4_cpunhj.svg);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-position: center;
      background-size: 130vw 100vh;
      padding: 0.8rem 0 1.2rem;
    }
    .amana {
      text-align: center;
      overflow-y: auto;
    }
    .aab {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #bbf0f3;
      background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
      background-size: 400% 400%;
      -webkit-animation: AnimationName 30s ease infinite;
      -moz-animation: AnimationName 30s ease infinite;
      animation: AnimationName 30s ease infinite;
    }
    .flexid {
      display: flex;
      flex-direction: column;
      align-items: center;
      order: 1;
      max-height: 20vh;
    }

    /*
.centeron{
    background-image: url('ceter.png');
background-repeat: no-repeat;
background-size: 50px;
min-height: 50px;
min-width: 50px;
margin-top: -10px;
margin-left: auto;
margin-right: auto;
position: absolute;
top: 4%;
left: 45.2%;
}*/

    .button {
      justify-self: center;
      align-self: center;
      background-image: url(https://res.cloudinary.com/love1/image/upload/v1641162947/-1_orig-removebg-k_kwefjh.png);
      background-repeat: no-repeat;
      background-size: 170px;
      margin: auto;
      margin-top: 30px;
      min-height: 170px;
      min-width: 170px;
      cursor:
        url(https://res.cloudinary.com/love1/image/upload/v1639255090/Fingerprint-Heart-II_wqvlih.svg),
        auto;
      -webkit-animation: spin 17s linear infinite;
      -moz-animation: spin 17s linear infinite;
      animation: spin 17s linear infinite;
    }
  }

  @media (min-width: 577px) and (max-width: 1099px) {
    .card-inner {
      width: 84vw;
      height: 60vh;
    }
    .flexid {
      display: flex;
      flex-direction: column;
      align-items: center;
      order: 1;
      max-height: 20vh;
    }
    /*.centeron{
background-image: url('ceter.png');
background-repeat: no-repeat;
background-size: 50px;
align-self: center;
min-height: 50px;
min-width: 50px;
}*/
    .aab {
      background-color: #bbf0f3;
      background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .mobile {
      background-color: var(--gold);
      min-height: 100vh;
      margin: 0px auto;
      background-image: url(https://res.cloudinary.com/love1/image/upload/v1648335809/Gold-German-Imperial-Crown-No-Background_qs7cri.svg);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-position: center;
      padding: 0 1vw;
      background-size: 98vw 100vh;
      background-repeat: no-repeat;
    }
    .button {
      justify-self: center;
      align-self: center;
      background-image: url(https://res.cloudinary.com/love1/image/upload/v1641162947/-1_orig-removebg-k_kwefjh.png);
      background-repeat: no-repeat;
      background-size: 170px;
      margin: auto;
      min-height: 170px;
      min-width: 170px;
      cursor:
        url(https://res.cloudinary.com/love1/image/upload/v1639255090/Fingerprint-Heart-II_wqvlih.svg),
        auto;
      -webkit-animation: spin 17s linear infinite;
      -moz-animation: spin 17s linear infinite;
      animation: spin 17s linear infinite;
    }
  }

  @media (min-width: 942px) and (max-width: 1099px) {
    .midscreen-link {
      position: absolute;
      top: 82%;
      left: 92%;
      font-size: 1em;
      padding: 2em 2em;
    }
    .mobile {
      width: 100vw;
      height: 100vh;
      margin: 0px auto;
      background-image: url(https://res.cloudinary.com/love1/image/upload/v1639597594/Prismatic-Hearts-World-Map-4_ge7z9u.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    /*
.centeron{
background-image: url('ceter.png');
background-repeat: no-repeat;
background-size: 50px;
align-self: center;
min-height: 50px;
min-width: 50px;

}*/
    .button {
      justify-self: center;
      align-self: center;
      background-image: url(https://res.cloudinary.com/love1/image/upload/v1641162947/-1_orig-removebg-k_kwefjh.png);
      background-repeat: no-repeat;
      background-size: 170px;
      margin: auto;
      min-height: 170px;
      min-width: 170px;
      cursor:
        url(https://res.cloudinary.com/love1/image/upload/v1639255090/Fingerprint-Heart-II_wqvlih.svg),
        auto;
      -webkit-animation: spin 17s linear infinite;
      -moz-animation: spin 17s linear infinite;
      animation: spin 17s linear infinite;
    }
    .amana {
      opacity: 0.9;
    }

    .flexid {
      display: flex;
      flex-direction: column;
      align-items: center;
      order: 1;
      max-height: 20vh;
    }
  }

  @media (min-width: 1100px) {
    .card-inner {
      width: 84vw;
      height: calc(66vh - 180px);
      font-size: 1.2em;
    }
    .onlym {
      display: none;
    }
    .midscreen-link {
      position: absolute;
      top: 82%;
      left: 92%;
      font-size: 1em;
      padding: 2em 2em;
    }
    .flexid {
      display: flex;
      flex-direction: column;
      align-items: center;
      order: 1;
      max-height: 33vh;
      height: 100%;
    }
    .mobile {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
      background: inherit;
      background-size: inherit;
    }
    /*
.centeron{
background-image: url('ceter.png');
background-repeat: no-repeat;
background-size: 50px;
align-self: center;
min-height: 50px;
min-width: 50px;
margin-top: 0px;
margin-left: auto;
margin-right: auto;
position: fixed;
top: 2%;
left: 47.9%;
}*/
    .button {
      justify-self: center;
      align-self: center;
      background-image: url(https://res.cloudinary.com/love1/image/upload/v1641162947/-1_orig-removebg-k_kwefjh.png);
      background-repeat: no-repeat;
      background-size: 130px;
      margin: auto;
      min-height: 130px;
      min-width: 130px;
      cursor:
        url(https://res.cloudinary.com/love1/image/upload/v1639255090/Fingerprint-Heart-II_wqvlih.svg),
        auto;
      -webkit-animation: spin 17s linear infinite;
      -moz-animation: spin 17s linear infinite;
      animation: spin 17s linear infinite;
    }

    .amana {
      display: flex;
      justify-content: center;
    }

    .all {
      min-height: 100vh;
    }
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media (min-width: 1200px) {
    .amana {
      font-size: 1.8em;
    }
    .centeron {
      left: 48%;
    }
  }

  @media (min-width: 1300px) {
    .centeron {
      left: 48%;
    }
  }

  @media (min-width: 1450px) {
    .centeron {
      left: 48%;
    }
  }
  @media (min-width: 1700px) {
    .centeron {
      left: 48%;
    }
    .button {
      background-size: 170px;
      min-height: 170px;
      min-width: 170px;
    }
  }
  @media (min-width: 2200px) {
    .centeron {
      left: 48%;
    }
    .button {
      background-size: 170px;
      min-height: 170px;
      min-width: 170px;
    }
  }
</style>
