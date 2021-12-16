
<script>
    import MultiSelect from 'svelte-multiselect';
    import { userName } from '../../stores/store.js';
    import { email } from '../registration/email.js'
    import { regHelper } from '../../stores/regHelper.js';
        import { goto,  prefetch } from '$app/navigation';
        import * as yup from "yup";
                    import { onMount } from 'svelte';


function find_contry_id(contry_name_arr){
     var  arr = [];
      for (let j = 0; j< contry_name_arr.length; j++ ){
      for (let i = 0; i< country.length; i++){
        if(country[i].heb === contry_name_arr[j]){
          arr.push(country[i].value)  ;
        }
      }
      }
      return arr;
     };
    
    const country =  [
                    { value: 104 , label: 'Israel', heb: 'ישראל'},
                    { value: 167 , label: 'Palestine jehuda & sumeria', heb: 'הרשות הפלסטינית יו"ש'},
                    { value: 246 , label: 'Palestine gaza strip', heb: 'רצועת עזה'},
                    { value: 230 , label: 'United States', heb: 'ארצות הברית של אמריקה'},
                    { value: 245, label: 'Åland Islands', heb: 'אולנד' },
                    { value: 11, label: 'Afghanistan'  ,heb: 'אפגניסטן' },
                    { value: 1, label: 'Albania' ,heb: 'אלבניה' },
                    { value: 13, label: 'Algeria' ,heb: 'אלג\'יריה' },
                    { value: 2, label: 'American Samoa' ,heb: 'סמואה האמריקנית'},
                    { value: 7, label: 'Andorra' ,heb: 'אנדורה'},
                    { value: 3, label: 'Angola' ,heb: 'אנגולה'},
                    { value: 4, label: 'Anguilla' ,heb: 'אנגווילה'},
                    { value: 5, label: 'Antarctica' ,heb: 'אנטרטיקה'},
                    { value: 6, label: 'Antigua and Barbuda', heb: 'אנטיגואה וברבודה'},
                    { value: 8, label: 'Argentina', heb: 'ארגנטינה'},
                    { value: 14, label: 'Armenia', heb: 'ארמניה'},
                    { value: 9, label: 'Aruba', heb: 'ארובה'},
                    { value: 10, label: 'Australia', heb: 'אוסטרליה'},
                    { value: 12, label: 'Austria', heb: 'אוסטריה'},
                    { value: 15, label: 'Azerbaijan' , heb: 'אזרבייג\'ן'},
                    { value: 16, label: 'Bahamas' , heb: 'איי בהאמה'},
                    { value: 17, label: 'Bahrain' , heb: 'בחריין'},
                    { value: 18, label: 'Bangladesh', heb: 'בנגלדש'},
                    { value: 19, label: 'Barbados', heb: 'ברבדוס'},
                    { value: 20, label: 'Belarus', heb: 'בלרוס'},
                    { value: 21, label: 'Belgium', heb: 'בלגיה'},
                    { value: 22, label: 'Belize', heb: 'בליז'},
                    { value: 26, label: 'Benin', heb: 'בנין'},
                    { value: 24, label: 'Bermuda', heb: 'ברמודה'},
                    { value: 27, label: 'Bhutan', heb: 'בהוטאן'},
                    { value: 23, label: 'Bolivia', heb: 'בוליביה'},
                    { value: 247, label: 'Bonaire, Sint Eustatius and Saba', heb: 'האיים הקריביים ההולנדיים'},
                    { value: 25, label: 'Bosnia and Herzegovina', heb: 'בוסניה והרצגובינה'},
                    { value: 28, label: 'Botswana', heb: 'בוטסואנה'},
                    { value: 29, label: 'Bouvet Island', heb: 'בובה'},
                    { value: 30, label: 'Brazil', heb: 'ברזיל'},
                    { value: 31, label: 'British Indian Ocean Territory', heb: 'הטריטוריה הבריטית באוקיינוס ההודי'},
                    { value: 32, label: 'Brunei Darussalam', heb: 'ברוניי דארוסלאם'},
                    { value: 34, label: 'Bulgaria', heb: 'בולגריה'},
                    { value: 33, label: 'Burkina Faso',  heb: 'בורקינה פאסו'}, 
                    { value: 36, label: 'Burundi',  heb: 'בורונדי'}, 
                    { value: 35, label: 'Cambodia',  heb: 'קמבודיה'}, 
                    { value: 37, label: 'Cameroon',  heb: 'קמרון'}, 
                    { value: 39, label: 'Canada',  heb: 'קנדה'}, 
                    { value: 38, label: 'Cape Verde',  heb: 'כף ורדה'}, 
                    { value: 40, label: 'Cayman Islands', heb: 'איי קיימן'}, 
                    { value: 41, label: 'Central African Republic', heb: ' הרפובליקה המרכז אפריקאית '},
                    { value: 42, label: 'Chad', heb: 'צ\'אד'},
                    { value: 43, label: 'Chile', heb: 'צ\'ילה'},
                    { value: 44, label: 'China', heb: 'סין'},
                    { value: 45, label: 'Christmas Island', heb: 'איי חג המולד'},
                    { value: 49, label: 'Cocos (Keeling) Islands', heb: 'איי קוקוס'},
                    { value: 47, label: 'Colombia', heb: 'קולומביה'},
                    { value: 48, label: 'Comoros', heb: 'איי קומורו'},
                    { value: 46, label: 'Congo', heb: 'קונגו'},
                    { value: 216, label: 'Congo, The Democratic Republic of The', heb: 'הרפובליקה העממית של קונגו'},
                    { value: 50, label: 'Cook Islands', heb: 'איי קוק'},
                    { value: 51, label: 'Costa Rica', heb: 'קוסטה ריקה'},
                    { value: 248, label: 'Cote D\'ivoire', heb: 'חוף השנהב'},
                    { value: 52, label: 'Croatia', heb: 'קרואטיה'},
                    { value: 53, label: 'Cuba', heb: 'קובה'},
                    { value: 249, label: 'Curaçao', heb: 'קוראסאו'},
                    { value: 54, label: 'Cyprus', heb: 'קפריסין'},
                    { value: 57, label: 'Czech Republic', heb: 'צ\'כיה'},
                    { value: 55, label: 'Denmark', heb: 'דנמרק'},
                    { value: 58, label: 'Djibouti', heb: 'ג\'יבוטי'},
                    { value: 56, label: 'Dominica', heb: 'דומיניקה'},
                    { value: 59, label: 'Dominican Republic', heb: 'הרפובליקה הדומיניקנית'},
                    { value: 61, label: 'Ecuador', heb: 'אקוודור'},
                    { value: 62, label: 'Egypt', heb: 'מצריים'},
                    { value: 63, label: 'El Salvador', heb: 'אל סלבדור'},
                    { value: 66, label: 'Equatorial Guinea', heb: 'גינאה המשוונית'},
                    { value: 65, label: 'Eritrea', heb: 'אריתראה'},
                    { value: 69, label: 'Estonia', heb: 'אסטוניה'},
                    { value: 250, label: 'Eswatini', heb: 'אסוואטיני'},
                    { value: 70, label: 'Ethiopia', heb: 'אתיופיה'},
                    { value: 67, label: 'Falkland Islands (Malvinas)', heb: 'איי מאלבינס (איי פוקלנד)'},
                    { value: 68, label: 'Faroe Islands', heb: 'איי פארו'},
                    { value: 71, label: 'Fiji', heb: 'פיג\'י'},
                    { value: 72, label: 'Finland', heb: 'פינלנד'},
                    { value: 73, label: 'France', heb: 'צרפת'},
                    { value: 74, label: 'French Guiana', heb: 'גויאנה הצרפתית'},
                    { value: 75, label: 'French Polynesia', heb: 'פולינזיה הצרפתית'},
                    { value: 78, label: 'French Southern Territories', heb: 'הארצות הדרומיות והאנטרקטיות של צרפת'},
                    { value: 79, label: 'Gabon', heb: 'גאבון'},
                    { value: 76, label: 'Gambia', heb: 'גמביה'},
                    { value: 77 , label: 'Georgia', heb: 'גאורגיה'},
                    { value: 80 , label: 'Germany', heb: 'גרמניה'},
                    { value: 81 , label: 'Ghana', heb: 'גאנה'},
                    { value: 82 , label: 'Gibraltar', heb: 'גיברלטר'},
                    { value: 84 , label: 'Greece', heb: 'יוון'},
                    { value: 83 , label: 'Greenland', heb: 'גרינלנד'},
                    { value: 85 , label: 'Grenada', heb: 'גרנדה'},
                    { value: 86 , label: 'Guadeloupe', heb: 'גוואדלופ'},
                    { value: 87 , label: 'Guam', heb: 'גואם'},
                    { value: 88 , label: 'Guatemala', heb: 'גואטמלה'},
                    { value: 251 , label: 'Guernsey', heb: 'גרנזי'},
                    { value: 90 , label: 'Guinea', heb: 'גינאה'},
                    { value: 89 , label: 'Guinea-bissau', heb: 'גינאה-ביסאו'},
                    { value: 91 , label: 'Guyana', heb: 'גויאנה'},
                    { value: 92 , label: 'Haiti', heb: 'האיטי'},
                    { value: 93 , label: 'Heard Island and Mcdonald Islands', heb: 'האי הרד ואיי מקדונלד'},
                    { value: 94 , label: 'Holy See (Vatican City State)', heb: 'וותיקן'},
                    { value: 98 , label: 'Honduras', heb: 'הונדורס'},
                    { value: 96 , label: 'Hong Kong', heb: 'הונג קונג'},
                    { value: 95 , label: 'Hungary', heb: 'הונגריה'},
                    { value: 97 , label: 'Iceland', heb: 'איסלנד'},
                    { value: 99 , label: 'India', heb: 'הודו'},
                    { value: 100 , label: 'Indonesia', heb: 'אינדונזיה'},
                    { value: 101 , label: 'Iran, Islamic Republic of', heb: 'איראן'},
                    { value: 102 , label: 'Iraq', heb: 'עירק'},
                    { value: 103 , label: 'Ireland', heb: 'אירלנד'},
                    { value: 252 , label: 'Isle of Man', heb: 'האי מאן'},
                    { value: 105 , label: 'Italy', heb: 'איטליה'},
                    { value: 107 , label: 'Jamaica', heb: 'ג\'מייקה'},
                    { value: 109 , label: 'Japan', heb: 'יפן'},
                    { value: 253 , label: 'Jersey', heb: 'ג\'רזי'},
                    { value: 108 , label: 'Jordan', heb: 'ירדן'},
                    { value: 110 , label: 'Kazakhstan', heb: 'קזחסטן'},
                    { value: 111 , label: 'Kenya', heb: 'קניה'},
                    { value: 112 , label: 'Kiribati', heb: 'קיריבאטי'},
                    { value: 160 , label: 'Korea, Democratic People\'s Republic of', heb: 'קוריאה הצפונית'},
                    { value: 201 , label: 'Korea, Republic of', heb: 'קוריאה הדרומית'},
                    { value: 113 , label: 'Kuwait', heb: 'כווית'},
                    { value: 254 , label: 'Kurdistan', heb: 'כורדיסטאן'},
                    { value: 114 , label: 'Kyrgyzstan', heb: 'קירג\'יסטן'},
                    { value: 115 , label: 'Lao People\'s Democratic Republic, laos', heb: 'לאוס'},
                    { value: 116 , label: 'Latvia', heb: 'לטביה'},
                    { value: 117 , label: 'Lebanon', heb: 'לבנון'},
                    { value: 118 , label: 'Lesotho', heb: 'לסוטו'},
                    { value: 119 , label: 'Liberia', heb: 'ליבריה'},
                    { value: 121 , label: 'Libyan Arab Jamahiriya', heb: 'לוב'},
                    { value: 120 , label: 'Liechtenstein', heb: 'ליכטנשטיין'},
                    { value: 122 , label: 'Lithuania', heb: 'ליטא'},
                    { value: 125 , label: 'Luxembourg', heb: 'לוקסמבורג'},
                    { value: 123 , label: 'Macao', heb: 'מקאו'},
                    { value: 126 , label: 'Madagascar', heb: 'מדגסקר'},
                    { value: 127 , label: 'Malawi', heb: 'מלאווי'},
                    { value: 128 , label: 'Malaysia', heb: 'מלזיה'},
                    { value: 129 , label: 'Maldives', heb: 'איי המלדיביים'},
                    { value: 130 , label: 'Mali', heb: 'מאלי'},
                    { value: 132 , label: 'Malta', heb: 'מלטה'},
                    { value: 131 , label: 'Marshall Islands', heb: 'איי מרשל'},
                    { value: 135 , label: 'Martinique', heb: 'מרטיניק'},
                    { value: 134 , label: 'Mauritania', heb: 'מאוריטניה'},
                    { value: 133 , label: 'Mauritius', heb: 'מאוריציוס'},
                    { value: 136 , label: 'Mayotte', heb: 'מאיוט'},
                    { value: 138 , label: 'Mexico', heb: 'מכסיקו'},
                    { value: 137 , label: 'Micronesia, Federated States of', heb: 'מיקרונזיה'},
                    { value: 139 , label: 'Moldova, Republic of', heb: 'מולדובה'},
                    { value: 140 , label: 'Monaco', heb: 'מונקו'},
                    { value: 142 , label: 'Mongolia', heb: 'מונגוליה'},
                    { value: 141 , label: 'Montenegro', heb: 'מונטנגרו'},
                    { value: 143 , label: 'Montserrat', heb: 'מונסראט'},
                    { value: 145 , label: 'Morocco', heb: 'מרוקו'},
                    { value: 144 , label: 'Mozambique', heb: 'מוזמביק'},
                    { value: 149 , label: 'Myanmar', heb: 'מיאנמר (בורמה)'},
                    { value: 146 , label: 'Namibia', heb: 'נמיביה'},
                    { value: 147 , label: 'Nauru', heb: 'נאורו'},
                    { value: 150 , label: 'Nepal', heb: 'נפאל'},
                    { value: 152 , label: 'Netherlands', heb: 'הולנד'},
                    { value: 148 , label: 'Netherlands Antilles', heb: 'האנטילים ההולנדיים'},
                    { value: 151 , label: 'New Caledonia', heb: 'קלדוניה החדשה'},
                    { value: 153 , label: 'New Zealand', heb: 'ניו זינלנד'},
                    { value: 155 , label: 'Nicaragua', heb: 'ניקרגואה'},
                    { value: 154 , label: 'Niger', heb: 'ניז\'ר'},
                    { value: 156 , label: 'Nigeria', heb: 'ניגריה'},
                    { value: 157 , label: 'Niue', heb: 'ניואה'},
                    { value: 158 , label: 'Norfolk Island', heb: 'האי נורפולק'},
                    { value: 124 , label: 'North Macedonia', heb: 'מקדוניה (FYROM)'},
                    { value: 161 , label: 'Northern Mariana Islands', heb: 'איי מריאנה הצפוניים'},
                    { value: 162 , label: 'Norway', heb: 'נורווגיה'},
                    { value: 164 , label: 'Oman', heb: 'עומאן'},
                    { value: 163 , label: 'Pakistan', heb: 'פקיסטאן'},
                    { value: 165 , label: 'Palau', heb: 'פלאו'},
                    { value: 166 , label: 'Panama', heb: 'פנמה'},
                    { value: 168 , label: 'Papua New Guinea', heb: 'פפואה ניו גינאה'},
                    { value: 169 , label: 'Paraguay', heb: 'פרגוואי'},
                    { value: 170 , label: 'Peru', heb: 'פרו'},
                    { value: 171 , label: 'Philippines', heb: 'פיליפינים'},
                    { value: 172 , label: 'Pitcairn', heb: 'איי פיטקיירן'},
                    { value: 174 , label: 'Poland', heb: 'פולין'},
                    { value: 173 , label: 'Portugal', heb: 'פורטוגל'},
                    { value: 175 , label: 'Puerto Rico', heb: 'פורטו ריקו'},
                    { value: 176 , label: 'Qatar', heb: 'קטאר'},
                    { value: 177 , label: 'Reunion', heb: 'ראוניון'},
                    { value: 178 , label: 'Romania', heb: 'רומניה'},
                    { value: 179 , label: 'Russian Federation', heb: 'רוסיה'},
                    { value: 180 , label: 'Rwanda', heb: 'רוואנדה'},
                    { value: 255 , label: 'Saint Barthélemyn', heb: 'סן ברתלמי'},
                    { value: 181 , label: 'Saint Helenan', heb: 'סנט הלנה'},
                    { value: 182 , label: 'Saint Kitts and Nevis', heb: 'סנט קיטס ונוויס'},
                    { value: 183 , label: 'Saint Lucia', heb: 'סנט לוסיה'},
                    { value: 256 , label: 'Saint Martin (French part)', heb: 'סן מרטן'},
                    { value: 184 , label: 'Saint Pierre and Miquelon', heb: 'סנט פייר ומיקלון'},
                    { value: 185 , label: 'Saint Vincent and The Grenadines', heb: 'סנט וינסנט והגרנדינים'},
                    { value: 186 , label: 'Samoa', heb: 'סמואה'},
                    { value: 187 , label: 'San Marino', heb: 'סן מרינו'},
                    { value: 188 , label: 'Sao Tome and Principe', heb: 'סאו טומה ופרינסיפה'},
                    { value: 189 , label: 'Saudi Arabia', heb: 'ערב הסעודית'},
                    { value: 191 , label: 'Senegal', heb: 'סנגל'},
                    { value: 259, label: "tibet", heb: "טיבט", ar: "التبت"},
                    { value: 192 , label: 'Serbia', heb: 'סרביה'},
                    { value: 194 , label: 'Seychelles', heb: 'סיישל'},
                    { value: 193 , label: 'Sierra Leone', heb: 'סיירה לאון'},
                    { value: 195 , label: 'Singapore', heb: 'סינגפור '},
                    { value: 257 , label: 'Sint Maarten (Dutch part)', heb: 'סנט מארטן'},
                    { value: 196 , label: 'Slovakia', heb: 'סלובקיה'},
                    { value: 199 , label: 'Slovenia', heb: 'סלובניה'},
                    { value: 198 , label: 'Solomon Islands', heb: 'איי שלמה'},
                    { value: 211 , label: 'Somalia', heb: 'סומליה'},
                    { value: 197 , label: 'South Africa', heb: 'דרום אפריקה'},
                    { value: 200 , label: 'South Georgia and The South Sandwich Islands', heb: 'איי ג\'ורג\'יה הדרומית ואיי סנדוויץ\' הדרומיים'},
                    { value: 202 , label: 'South Sudan', heb: 'דרום סודן'},
                    { value: 203 , label: 'Spain', heb: 'ספרד'},
                    { value: 204 , label: 'Sri Lanka', heb: 'סרי לנקה'},
                    { value: 205 , label: 'Sudan', heb: 'סודן'},
                    { value: 206 , label: 'Suriname', heb: 'סורינאם'},
                    { value: 209 , label: 'Svalbard and Jan Mayen', heb: 'סבאלברד ויאן מאיין'},
                    { value: 207 , label: 'Swaziland', heb: 'אסוואטיני'},
                    { value: 208 , label: 'Sweden', heb: 'שוודיה'},
                    { value: 210 , label: 'Switzerland', heb: 'שוויץ'},
                    { value: 212 , label: 'Syrian Arab Republic', heb: 'סוריה'},
                    { value: 258 , label: 'Taiwan', heb: 'טייוואן'},
                    { value: 213 , label: 'Tajikistan', heb: 'טג\'יקיסטן'},
                    { value: 215 , label: 'Tanzania, United Republic of', heb: 'טנזניה'},
                    { value: 214 , label: 'Thailand', heb: 'תאילנד'},
                    { value: 60 , label: 'Timor-leste', heb: 'מזרח טימור'},
                    { value: 218 , label: 'Togo', heb: 'טוגו'},
                    { value: 217 , label: 'Tokelau', heb: 'טוקלאו'},
                    { value: 219 , label: 'Tonga', heb: 'טונגה'},
                    { value: 220 , label: 'Trinidad and Tobago', heb: 'טרינידד וטובגו'},
                    { value: 221 , label: 'Tunisia', heb: 'תוניסיה'},
                    { value: 224 , label: 'Turkey', heb: 'טורקיה'},
                    { value: 222 , label: 'Turkmenistan', heb: 'טורקמניסטן'},
                    { value: 223 , label: 'Turks and Caicos Islands', heb: 'איי טורקס וקאיקוס'},
                    { value: 225 , label: 'Tuvalu', heb: 'טובאלו'},
                    { value: 226 , label: 'Uganda', heb: 'אוגנדה'},
                    { value: 227 , label: 'Ukraine', heb: 'אוקראינה'},
                    { value: 228 , label: 'United Arab Emirates', heb: 'איחוד האמירויות הערביות'},
                    { value: 229 , label: 'United Kingdom', heb: 'אנגליה'},
                    { value: 233 , label: 'United States Minor Outlying Islands', heb: 'האיים המרוחקים הקטנים של ארה״ב'},
                    { value: 231 , label: 'Uruguay', heb: 'אורוגוואי'},
                    { value: 232 , label: 'Uzbekistan', heb: 'אוזבקיסטן'},
                    { value: 234 , label: 'Vanuatu', heb: 'ונואטו'},
                    { value: 235 , label: 'Venezuela', heb: 'ונצואלה'},
                    { value: 236 , label: 'Viet Nam', heb: 'ויטנאם'},
                    { value: 237 , label: 'Virgin Islands, British', heb: 'איי הבתולה הבריטיים'},
                    { value: 239 , label: 'Virgin Islands, U.S.', heb: 'איי הבתולה של ארצות הברית'},
                    { value: 240 , label: 'Wallis and Futuna', heb: 'ואליס ופוטונה'},
                    { value: 241 , label: 'Western Sahara', heb: 'סהרה המערבית'},
                    { value: 242 , label: 'Yemen', heb: 'תימן'},
                    { value: 244 , label: 'Zambia', heb: 'זמביה'},
                    { value: 243 , label: 'Zimbabwe', heb: 'זימבבואה'}
                  ];
    const nameC = `country`;
    const placeholder = `My place`;
    const required = true;
    
    let selected;
       let already = false;
   let datar;
   let idx = 1;
   let data;
    import { createForm } from "svelte-forms-lib";
    
const { form, errors, state, handleChange, handleSubmit } = createForm({
          initialValues: {
            name: "",
            email: "",
            countries: []
          },
      validationSchema: yup.object().shape({
        name: yup.string().required(),
        email: yup
          .string()
          .email()
          .required()
      }),
onSubmit: values => {
            fetch('https://strapi-k4vr.onrender.com/chezins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: $form.name,
        email: $form.email,
        countries: find_contry_id(selected)
      }),
    }) 
      .then(response => response.json())
      .then(data => 
      datar);
            userName.set($form.name);
            email.set($form.email);
            regHelper.set(1);
            datar = data;
            already = true;
          }
        });

function show (){
  const amana = document.getElementById("amana-show")
  const lines = document.getElementById("lines")
  
}
    let trans = false;
function tran (){
trans = !trans;
}
let error;
onMount(async () => {
        const parseJSON = (resp) => (resp.json ? resp.json() : resp);
        const checkStatus = (resp) => {
        if (resp.status >= 200 && resp.status < 300) {
          return resp;
        }
        return parseJSON(resp).then((resp) => {
          throw resp;
        });
      };
      const headers = {
        'Content-Type': 'application/json',
      };
    
        try {
            const res = await fetch("https://strapi-k4vr.onrender.com/chezins/count", {
              method: "GET",
              headers: {
                 'Content-Type': 'application/json'
              },
            }).then(checkStatus)
          .then(parseJSON);
 idx = res + 2
 console.log(idx)
        } catch (e) {
            error = e
        }
    });
      </script>
   
      <div class="all">
          <div style="position:absolute ; left: 1%; top: 1%; display: flex; flex-direction: column ;">
              {#if trans === false}
          <button on:click={tran}><img src="https://res.cloudinary.com/love1/image/upload/v1639345051/icons8-translate-app_gwpwcn.svg"></button>
          {:else}
          <button on:click={tran} class=" text-barbi hover:text-lturk "
 ><svg style="width:24px;height:24px" viewBox="0 0 24 24">
  <path fill="currentColor" d="M8.27,3L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27L15.73,3M8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41" />
</svg></button> 
          <a style="border-bottom-width: 4px; border-color: var(--gold);" class="text-barbi  text-bold hover:text-lturk bg-lturk text-center hover:bg-barbi px-1 py-0.5 " sveltekit:prefetch href="/" >עברית</a>
          <a class="text-barbi text-bold hover:text-lturk text-center bg-lturk hover:bg-barbi px-1 py-0.5 " sveltekit:prefetch href="/ar">العربية</a>
          {/if}
          </div>
      <div class="mobile">
        

<section class="container" dir="ltr" id="lines"> 
    
<div class="flexi">
  <h3
       class="amanat" 
       style="white-space: nowrap; font-family: StamSefarad, serif; font-weight: 700; font-size: 1em; line-height: normal;" 
       dir="ltr">The Declaration of:  
      </h3>
  <input 
          id="name"
          name="name"
          placeholder="my name"
          required
                on:blur={handleChange}

          on:change={handleChange}
          bind:value={$form.name}
        /> 
     {#if $errors.name}
      <small style="color: red; white-space: pre-wrap;">{$errors.name}</small>
    {/if}
</div>
<div class="flexi1">
  <h3        class="amanat " id="m" 
 style="font-family: StamSefarad, serif; font-size: 1em; font-weight: 700;" dir="ltr">from: </h3> 
      <MultiSelect
      bind:selected
      {nameC} 
      {placeholder}
      options={country.map(c => c.label)}
       {required}
       />  </div>    
<div class="flexi2">
  <h3        class="amanat" 
 style="font-weight: 700; white-space: nowrap; font-family: 'StamSefarad', serif; font-size: 1em; line-height:normal;" dir="ltr">Email:</h3>
  <input
 
    placeholder="my email"
    id="email"
    name="email"
    required
          on:blur={handleChange}
    on:change={handleChange}
    bind:value={$form.email}
    />
 {#if $errors.email}
      <small style="color: red; white-space: pre-wrap;" >{$errors.email}</small>
    {/if}
</div>
    </section>     
    </div> 
    <div class="aab">
<div dir="ltr" class="amana" id="amana-show">
 <h1 dir="ltr" style="color:var(--barbi-pink);   text-decoration: underline; font-weight: 900;">
       {$form.name}'s Declaration of Independence:
    </h1>
          <span>
              <span>
              I ,{$form.name}, will never use violence or hurt anyone.   
                   <br>
Because I, {$form.name}, do not want to be a victim of violence, and because there is no authority, value, purpose, faith, money or interest that justifies harming a person's life, violence and coercion by force.              <br>	
I, {$form.name}, will trust in the good and that when all humanity signs: violence, fighting and regimentation will cease to be a form of human communication              <br>
When the entire {selected} is a signatory to this Convention, I, {$form.name}, will relinquish my weapons and the armed policemen from whom the {selected} State is Appointments in my name.              <br>
I, {$form.name}, will give up the weapons of the {selected} Army when all of humanity will be a signatory to this Convention          </span>
          </span>
    </div>
     


<form on:submit={handleSubmit}>

<div class="flexid">
   {#if already == false}

    <button
     class="button hover:scale-150"
      on:submit="{handleSubmit}"
      type="submit"
      ></button> 
      {:else if already == true}
  <h1 class="alredy" dir="rtl">{$form.name}
 Your signature has been received, you have reached the number {idx} place, an email will be sent when we expand, soon</h1>
 <!-- <button class="p-4 rounded bg-lturk hover:bg-barbi text-barbi hover:text-lturk" on:click={()=> goto("/about", )}>אודותינו</button>-->

  {/if}
  </div>
  </form>
  
</div> </div>
  <style>
   .alredy{
           text-align: center;
           margin: 4vh  4vw 2vh 4vw;
          background-color: var(--gold);
          padding: 4vh 4vw;
          font-family: 'StamSefarad', serif;
          color: var(--barbi-pink);
          border: 1px var(--lturk);
   }

   :global(.multiselect) {
    background-color: var(--gold) !important ;
  /* top-level wrapper div */
}
  :global(.multiselect:focus){
    border: 1px solid var(--barbi-pink) !important;
  }
  :global(.multiselect span.token) {
  color: #ffffff;
  background: var(--barbi-pink) ;
    /* selected options */
  }
 /* :global(.multiselect span.token button),
  :global(.multiselect .remove-all) {

    /* buttons to remove a single or all selected options at once */
 /* } 
  :global(.multiselect ul) {
    /* dropdown options */
 /* }
  :global(.multiselect ul li) {
    /* dropdown options */
 /* } */
 :global(li.selected) {
    border: var(--sms-focus-border, 1pt solid var(--sms-active-color, cornflowerblue));
    color: var(--gold);
    /* selected options in the dropdown list */
  }
  :global(li:not(.selected):hover) {
 color: var(--barbi-pink);
    background-color:var(--lturk);    /* unselected but hovered options in the dropdown list */
  }
  :global(ul.tokens > li){
    background-color: var(--barbi-pink);
    color:var(--lturk);
  }
  :global(ul.tokens > li):hover{
    color: var(--barbi-pink);
background-color:var(--lturk);  
  }
  /*
  :global(li.selected:hover) {
    /* selected and hovered options in the dropdown list */
    /* probably not necessary to style this state in most cases */
 /* } */
  :global(li.active) {
    color:var(--barbi-pink) !important;
    /* active means element was navigated to with up/down arrow keys */
    /* ready to be selected by pressing enter */
  }
 /* :global(li.selected.active) {
  } */
  
#lines{
  display: "";

}
#amana-show{
  display: "";
}
.amanat{
  padding: 1rem;
  text-shadow: 1px 1px 4px var(--gold) ;
}

  input {
   
    font-family: inherit;
    font-size: inherit;
    max-width: 200px;
    box-sizing: border-box;
    border: 1px solid var(--gold);
    border-radius: 4px;
    transition: all 150ms ease;
    background: var(--gold);
  }
  
  input:focus {
    outline: none;
    box-shadow: 0 0 0 4px var(--barbi-pink);
    border-color: var(--barbi-pink);
  }
  
  input:disabled,
  
  textarea:disabled {
    color: #ccc;
  }
  @media(max-width:576px) {
    #m{
      margin-bottom: -20px;
    }
    :global(.multiselect) {
    max-width: 200px !important;
  }
.amanat{
  margin: 0 auto;
  padding: 0;
    text-shadow: 1px 1px 4px var(--gold) ;

}
  .mobile{
    width: 100vw;
    height:100vh;
    margin:0px auto;
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639088864/SHALOM1_awkhot.svg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size:  130vw 100vh;
}
 .amana{   
   
    padding: 1.5em 1em 1em 1em;
    font-size: 120%;
    font-family: 'StamSefarad', serif;
    text-align: center;
    font-weight: 900;
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639088838/megila1_m6kvgh.png);
    background-size: 180vw 180vh;
    background-repeat: no-repeat;
    background-position: center;
    line-height: normal;
    font-size-adjust: auto;
    height: 80vh;
        overflow-y: scroll;

  }
  .aab{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .flexid{
    display: flex;
    flex-direction: colomn;
    justify-content: center;
   align-items: center;
   order: 1;
  }
 
  .flexi1{
    display: flex;
    flex-direction: column;
    justify-content: center;
   align-items: center;
   order: 2;
   line-height: normal;
   
  }
  .flexi2{
    display: flex;
    flex-direction: column;
    justify-content: center;
   align-items: center;
   order: 3;
   line-height: normal;
  }
  .container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    width: 100vw;
  /*  background-size: cover;
        background-image: url(newcoin.svg);
      background-position: center center;
      padding:9vh 0;*/
      
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
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639322184/bu_bubcta.png);  
 background-repeat: no-repeat;
 background-size: 170px;
 margin: auto;
 min-height: 170px;
 min-width: 170px;
     cursor: url(https://res.cloudinary.com/love1/image/upload/v1639255090/Fingerprint-Heart-II_wqvlih.svg), auto;
  }
  
 .flexi {
   padding-top: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
   align-items: center;
    order: 1;
    white-space: nowrap;
  }
}

@media(min-width:577px) and (max-width:1099px) {
  /*.centeron{
    background-image: url('ceter.png');
    background-repeat: no-repeat;
    background-size: 50px;
    align-self: center;
    min-height: 50px;
    min-width: 50px;
 }*/
  .aab{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
   .mobile{
    width: 100vw;
    height:100vh;
    margin:0px auto;
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639088888/SHALOM2_nd7evv.svg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-position: center;
    padding: 0 1vw;
    background-size:  98vw  100vh;
        background-repeat: no-repeat;

}
  .button {
    justify-self: center;
    align-self: center;
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639322184/bu_bubcta.png);  
    background-repeat: no-repeat;
    background-size: 170px;
    margin: auto;
    min-height: 170px;
    min-width: 170px;
     cursor: url(https://res.cloudinary.com/love1/image/upload/v1639255090/Fingerprint-Heart-II_wqvlih.svg), auto;
  }
  .amana{
    padding: 0px 13vw;
    font-size:100%;
    font-family: 'StamSefarad', serif;
    text-align: center;
    font-weight: 900;
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639088838/megila1_m6kvgh.png);
    background-size: 888px;
    background-repeat: no-repeat;
    background-position: center;
    align-self: center;
  }
  .container {
    padding-top: 26vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   
  }
  .flexi {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    order: 1;
    white-space: nowrap;
  }
  .flexi1 {
        display: flex;

    order: 2;
    flex: 0.5;
   flex-direction: row;
    justify-content: center;
    align-items: center;

  }
  .flexi2 {
        display: flex;

    order: 3;
 flex-direction: row;
    justify-content: center;
    align-items: center;
  }

}

@media(min-width:942px) and (max-width:1099px) {
 .mobile{
    width: 100vw;
    height:100vh;
    margin:0px auto;
 background-image: url(https://res.cloudinary.com/love1/image/upload/v1639089050/reka2_unoegx.png);
background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; }
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
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639322184/bu_bubcta.png);  
    background-repeat: no-repeat;
    background-size: 170px;
    margin: auto;
    min-height: 170px;
    min-width: 170px;
     cursor: url(https://res.cloudinary.com/love1/image/upload/v1639255090/Fingerprint-Heart-II_wqvlih.svg), auto;

  }
  .amana{
    width: 908px;
    padding: 0px 25px;
    font-size: 120%;
    font-family: 'StamSefarad', serif;
    text-align:center;
    font-weight: 900;
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639088838/megila1_m6kvgh.png);
    background-size: 1100px;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    align-self: center;
  }
  .container {
    display: flex;
    padding-top: 10em;
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639089083/BG_umwddj.png);
    background-size: contain;
    height: 170px;
    background-repeat: no-repeat;
    background-position: center;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    flex: 0.5;
    background-color: transparent;
    max-width: 769px;
  }
  
  .flexi {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    order: 1;
  
  }
  .flexi1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    order: 2;
  }
  .flexi2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    order: 3;
  }
   .flexid{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 1;
  }
}

@media(min-width:1100px) {
  .flexid{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 1;
  }
  .mobile{
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
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639322184/bu_bubcta.png);  
    background-repeat: no-repeat;
    background-size: 130px;
    margin: auto;
    min-height: 130px;
    min-width: 130px;
     cursor: url(https://res.cloudinary.com/love1/image/upload/v1639255090/Fingerprint-Heart-II_wqvlih.svg), auto;

  }

  .amana{
    width: 100vw;
    padding: 0px 120px;
    font-size:120%;
    font-family: 'StamSefarad', serif;
    text-align:center;
    font-weight: 900;
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639088838/megila1_m6kvgh.png);
    background-size: 1150px  ;
    background-repeat: no-repeat;
    background-position: center;
  }
  .container {
    display: flex;
    padding-top: 67px;
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639089083/BG_umwddj.png);
    background-size: contain;
    height: 170px;
    background-repeat: no-repeat;
    background-position: center;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    flex: 0.5;
    width: 100%;
     background-color: transparent;
    margin: 0 auto;
    max-width: 1024px;
  }
  
  .flexi {
    display: flex;
    flex-direction: row;
    justify-content: center;
   align-items: center;
    order: 1;
      padding: 1rem;
    margin-top: 0.2rem;
  }
  .flexi1 {
    order: 2;
    flex-direction: row;
        padding:2rem 1rem;
    margin-top: 0.2rem;
 display: flex;
    justify-content: center;
   align-items: center;
   line-height: normal;
  }
  .flexi2 {
    order: 3;
    flex-direction: row;
    padding: 2rem 1rem;
    margin-top: 0.2rem;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;
  }
  .all{
    height: 100vh;
  }
} 
@media(min-width:1200px) {
   .amana{
    padding: 0 110px;
    background-size: 1400px  ;
  }
   .centeron{
   left: 48%;
  }
}

@media(min-width:1300px) {
   .amana{
    padding: 0 150px;
    background-size: 1500px  ;
  }
   .centeron{
   left: 48%;
  }
}

@media(min-width:1450px) {
   .amana{
    padding: 0 210px;
    background-size: 1600px  ;
  }
   .centeron{
   left: 48%;
  }
}
@media(min-width:1700px) {
   .amana{
    padding: 0 210px;
    background-size: 1888px  ;
  }
   .centeron{
   left: 48%;
  }
}
 :global(.multiselect) {
    width: 250px;
   
  }
  </style> 