
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
                    { value: 104 , label: 'Israel', heb: 'ישראל', ar: "إسرائيل	"},
                    { value: 167 , label: 'Palestine jehuda & sumeria', heb: 'הרשות הפלסטינית יו"ש', ar: "دولة فلسطين	"},
                    { value: 246 , label: 'Palestine gaza strip', heb: 'רצועת עזה', ar: "قطاع غزّة"},
                    { value: 230 , label: 'United States', heb: 'ארצות הברית של אמריקה', ar: "الولايات المتحدة"},
                    { value: 245, label: 'Åland Islands', heb: 'אולנד', ar: "جزر أولاند" },
                    { value: 11, label: 'Afghanistan'  ,heb: 'אפגניסטן', ar: "أفغانستان" },
                    { value: 1, label: 'Albania' ,heb: 'אלבניה', ar: "ألبانيا" },
                    { value: 13, label: 'Algeria' ,heb: 'אלג\'יריה' , ar: "الجزائر	"},
                    { value: 2, label: 'American Samoa' ,heb: 'סמואה האמריקנית', ar: "ساموا-الأمريكي"},
                    { value: 7, label: 'Andorra' ,heb: 'אנדורה', ar: "أندورا"},
                    { value: 3, label: 'Angola' ,heb: 'אנגולה', ar: "أنجولا	"},
                    { value: 4, label: 'Anguilla' ,heb: 'אנגווילה', ar: "أنجويلا"},
                    { value: 5, label: 'Antarctica' ,heb: 'אנטרטיקה', ar: "المنطقة القطبية الجنوبية"},
                    { value: 6, label: 'Antigua and Barbuda', heb: 'אנטיגואה וברבודה', ar: "أنتيغوا وباربودا	"},
                    { value: 8, label: 'Argentina', heb: 'ארגנטינה', ar: "الأرجنتين"},
                    { value: 14, label: 'Armenia', heb: 'ארמניה', ar: "أرمينيا"},
                    { value: 9, label: 'Aruba', heb: 'ארובה', ar: "أروبا"},
                    { value: 10, label: 'Australia', heb: 'אוסטרליה', ar: "أستراليا"},
                    { value: 12, label: 'Austria', heb: 'אוסטריה', ar: "النمسا"},
                    { value: 15, label: 'Azerbaijan' , heb: 'אזרבייג\'ן', ar: "أذربيجان"},
                    { value: 16, label: 'Bahamas' , heb: 'איי בהאמה', ar: "باهاماس"},
                    { value: 17, label: 'Bahrain' , heb: 'בחריין', ar: "البحرين"},
                    { value: 18, label: 'Bangladesh', heb: 'בנגלדש', ar: "بنجلاديش"},
                    { value: 19, label: 'Barbados', heb: 'ברבדוס', ar: "باربادوس"},
                    { value: 20, label: 'Belarus', heb: 'בלרוס', ar: "بيلاروس"},
                    { value: 21, label: 'Belgium', heb: 'בלגיה', ar: "بلجيكا"},
                    { value: 22, label: 'Belize', heb: 'בליז', ar: "بيليز"},
                    { value: 26, label: 'Benin', heb: 'בנין', ar: "بنين"},
                    { value: 24, label: 'Bermuda', heb: 'ברמודה', ar: "برمودا"},
                    { value: 27, label: 'Bhutan', heb: 'בהוטאן', ar: "بوتان"},
                    { value: 23, label: 'Bolivia', heb: 'בוליביה', ar: "بوليفيا"},
                    { value: 247, label: 'Bonaire, Sint Eustatius and Saba', heb: 'האיים הקריביים ההולנדיים', ar: "الجزر الكاريبية الهولندية"},
                    { value: 25, label: 'Bosnia and Herzegovina', heb: 'בוסניה והרצגובינה', ar: "البوسنة والهرسك	"},
                    { value: 28, label: 'Botswana', heb: 'בוטסואנה', ar: "بوتسوانا"},
                    { value: 29, label: 'Bouvet Island', heb: 'בובה', ar: "جزيرة بوفيه"},
                    { value: 30, label: 'Brazil', heb: 'ברזיל', ar: "البرازيل"},
                    { value: 31, label: 'British Indian Ocean Territory', heb: 'הטריטוריה הבריטית באוקיינוס ההודי', ar: "إقليم المحيط الهندي البريطاني"},
                    { value: 32, label: 'Brunei Darussalam', heb: 'ברוניי דארוסלאם', ar: "بروناي"},
                    { value: 34, label: 'Bulgaria', heb: 'בולגריה', ar: "بلغاريا"},
                    { value: 33, label: 'Burkina Faso',  heb: 'בורקינה פאסו', ar: "بوركينا فاسو"}, 
                    { value: 36, label: 'Burundi',  heb: 'בורונדי', ar: "بوروندي"}, 
                    { value: 35, label: 'Cambodia',  heb: 'קמבודיה', ar: "كمبوديا"}, 
                    { value: 37, label: 'Cameroon',  heb: 'קמרון', ar: "كاميرون"}, 
                    { value: 39, label: 'Canada',  heb: 'קנדה', ar: "كندا"}, 
                    { value: 38, label: 'Cape Verde',  heb: 'כף ורדה', ar: "الرأس الأخضر"}, 
                    { value: 40, label: 'Cayman Islands', heb: 'איי קיימן', ar: "جزر كايمان"}, 
                    { value: 41, label: 'Central African Republic', heb: ' הרפובליקה המרכז אפריקאית ', ar: "جمهورية أفريقيا الوسطى"},
                    { value: 42, label: 'Chad', heb: 'צ\'אד', ar: "تشاد"},
                    { value: 43, label: 'Chile', heb: 'צ\'ילה', ar: "تشيلي"},
                    { value: 44, label: 'China', heb: 'סין', ar: "الصين"},
                    { value: 45, label: 'Christmas Island', heb: 'איי חג המולד', ar: "جزيرة كريسماس"},
                    { value: 49, label: 'Cocos (Keeling) Islands', heb: 'איי קוקוס', ar: "جزر كوكوس"},
                    { value: 47, label: 'Colombia', heb: 'קולומביה', ar: "كولومبيا"},
                    { value: 48, label: 'Comoros', heb: 'איי קומורו', ar: "جزر القمر"},
                    { value: 46, label: 'Congo', heb: 'קונגו', ar: "جمهورية الكونغو"},
                    { value: 216, label: 'Congo, The Democratic Republic of The', heb: 'הרפובליקה העממית של קונגו', ar: "جمهورية الكونغو الديمقراطية"},
                    { value: 50, label: 'Cook Islands', heb: 'איי קוק', ar: "جزر كوك"},
                    { value: 51, label: 'Costa Rica', heb: 'קוסטה ריקה', ar: "كوستاريكا"},
                    { value: 248, label: 'Cote D\'ivoire', heb: 'חוף השנהב', ar: "ساحل العاج"},
                    { value: 52, label: 'Croatia', heb: 'קרואטיה', ar: "كرواتيا"},
                    { value: 53, label: 'Cuba', heb: 'קובה', ar: "كوبا"},
                    { value: 249, label: 'Curaçao', heb: 'קוראסאו', ar: "كوراساو"},
                    { value: 54, label: 'Cyprus', heb: 'קפריסין', ar: "قبرص"},
                    { value: 57, label: 'Czech Republic', heb: 'צ\'כיה', ar: "التشيك"},
                    { value: 55, label: 'Denmark', heb: 'דנמרק', ar: "الدنمارك"},
                    { value: 58, label: 'Djibouti', heb: 'ג\'יבוטי', ar: "جيبوتي"},
                    { value: 56, label: 'Dominica', heb: 'דומיניקה', ar: "دومينيكا"},
                    { value: 59, label: 'Dominican Republic', heb: 'הרפובליקה הדומיניקנית', ar: "جمهورية الدومينيكان	"},
                    { value: 61, label: 'Ecuador', heb: 'אקוודור', ar: "الإكوادور	"},
                    { value: 62, label: 'Egypt', heb: 'מצריים', ar: "مصر"},
                    { value: 63, label: 'El Salvador', heb: 'אל סלבדור', ar: "السلفادور"},
                    { value: 66, label: 'Equatorial Guinea', heb: 'גינאה המשוונית', ar: "غينيا الاستوائية	"},
                    { value: 65, label: 'Eritrea', heb: 'אריתראה', ar: "إريتريا"},
                    { value: 69, label: 'Estonia', heb: 'אסטוניה', ar: "إستونيا"},
                    { value: 250, label: 'Eswatini', heb: 'אסוואטיני', ar: "إسواتيني"},
                    { value: 70, label: 'Ethiopia', heb: 'אתיופיה', ar: "إثيوبيا"},
                    { value: 67, label: 'Falkland Islands (Malvinas)', heb: 'איי מאלבינס (איי פוקלנד)', ar: "جزر فوكلاند"},
                    { value: 68, label: 'Faroe Islands', heb: 'איי פארו', ar: "جزر فارو"},
                    { value: 71, label: 'Fiji', heb: 'פיג\'י', ar: "فيجي"},
                    { value: 72, label: 'Finland', heb: 'פינלנד', ar: "فنلندا"},
                    { value: 73, label: 'France', heb: 'צרפת', ar: "فرنسا	"},
                    { value: 74, label: 'French Guiana', heb: 'גויאנה הצרפתית', ar: "غينيا الفرنسية	"},
                    { value: 75, label: 'French Polynesia', heb: 'פולינזיה הצרפתית', ar: "بولينيزيا الفرنسية	"},
                    { value: 78, label: 'French Southern Territories', heb: 'הארצות הדרומיות והאנטרקטיות של צרפת', ar: "أراض فرنسية جنوبية وأنتارتيكية"},
                    { value: 79, label: 'Gabon', heb: 'גאבון', ar: "الغابون"},
                    { value: 76, label: 'Gambia', heb: 'גמביה', ar: "غامبيا"},
                    { value: 77 , label: 'Georgia', heb: 'גאורגיה', ar: "جورجيا"},
                    { value: 80 , label: 'Germany', heb: 'גרמניה', ar: "ألمانيا"},
                    { value: 81 , label: 'Ghana', heb: 'גאנה', ar: "غانا"},
                    { value: 82 , label: 'Gibraltar', heb: 'גיברלטר', ar: "جبل طارق"},
                    { value: 84 , label: 'Greece', heb: 'יוון', ar: "اليونان"},
                    { value: 83 , label: 'Greenland', heb: 'גרינלנד', ar: "جرينلاند"},
                    { value: 85 , label: 'Grenada', heb: 'גרנדה', ar: "غرينادا"},
                    { value: 86 , label: 'Guadeloupe', heb: 'גוואדלופ', ar: "غوادلوب"},
                    { value: 87 , label: 'Guam', heb: 'גואם', ar: "غوام"},
                    { value: 88 , label: 'Guatemala', heb: 'גואטמלה', ar: "غواتيمال"},
                    { value: 251 , label: 'Guernsey', heb: 'גרנזי', ar: "غيرنزي"},
                    { value: 90 , label: 'Guinea', heb: 'גינאה', ar: "غينيا"},
                    { value: 89 , label: 'Guinea-bissau', heb: 'גינאה-ביסאו', ar: "غينيا بيساو	"},
                    { value: 91 , label: 'Guyana', heb: 'גויאנה', ar: "غيانا"},
                    { value: 92 , label: 'Haiti', heb: 'האיטי', ar: "هايتي"},
                    { value: 93 , label: 'Heard Island and Mcdonald Islands', heb: 'האי הרד ואיי מקדונלד', ar:"جزيرة هيرد وجزر ماكدونالد"},
                    { value: 94 , label: 'Holy See (Vatican City State)', heb: 'וותיקן', ar: "الفاتيكان"},
                    { value: 98 , label: 'Honduras', heb: 'הונדורס', ar: "هندوراس"},
                    { value: 96 , label: 'Hong Kong', heb: 'הונג קונג', ar: "هونغ كونغ	"},
                    { value: 95 , label: 'Hungary', heb: 'הונגריה', ar: "المجر"},
                    { value: 97 , label: 'Iceland', heb: 'איסלנד', ar: "أيسلندا"},
                    { value: 99 , label: 'India', heb: 'הודו', ar: "الهند"},
                    { value: 100 , label: 'Indonesia', heb: 'אינדונזיה', ar: "إندونيسيا"},
                    { value: 101 , label: 'Iran, Islamic Republic of', heb: 'איראן', ar: "إيران"},
                    { value: 102 , label: 'Iraq', heb: 'עירק', ar: "العراق"},
                    { value: 103 , label: 'Ireland', heb: 'אירלנד', ar: "جمهورية أيرلندا	"},
                    { value: 252 , label: 'Isle of Man', heb: 'האי מאן', ar: "جزيرة مان"},
                    { value: 105 , label: 'Italy', heb: 'איטליה', ar: "إيطاليا"},
                    { value: 107 , label: 'Jamaica', heb: 'ג\'מייקה', ar: "جامايكا"},
                    { value: 109 , label: 'Japan', heb: 'יפן', ar: "اليابان"},
                    { value: 253 , label: 'Jersey', heb: 'ג\'רזי', ar: "جيرزي"},
                    { value: 108 , label: 'Jordan', heb: 'ירדן', ar: "الأردن"},
                    { value: 110 , label: 'Kazakhstan', heb: 'קזחסטן', ar: "كازاخستان"},
                    { value: 111 , label: 'Kenya', heb: 'קניה', ar: "كينيا" },
                    { value: 112 , label: 'Kiribati', heb: 'קיריבאטי', ar: "كيريباتي" },
                    { value: 160 , label: 'Korea, Democratic People\'s Republic of', heb: 'קוריאה הצפונית', ar: "كوريا الشمالية"},
                    { value: 201 , label: 'Korea, Republic of', heb: 'קוריאה הדרומית', ar: "كوريا الجنوبية"},
                    { value: 113 , label: 'Kuwait', heb: 'כווית', ar: "الكويت"},
                    { value: 254 , label: 'Kurdistan', heb: 'כורדיסטאן', ar: "كردستان"},
                    { value: 114 , label: 'Kyrgyzstan', heb: 'קירג\'יסטן', ar: "قيرغيزستان"},
                    { value: 115 , label: 'Lao People\'s Democratic Republic, laos', heb: 'לאוס', ar: "لاوس"},
                    { value: 116 , label: 'Latvia', heb: 'לטביה', ar: "لاتفيا"},
                    { value: 117 , label: 'Lebanon', heb: 'לבנון' , ar: "لبنان"},
                    { value: 118 , label: 'Lesotho', heb: 'לסוטו', ar: "ليسوتو"},
                    { value: 119 , label: 'Liberia', heb: 'ליבריה', ar: "ليبيريا"},
                    { value: 121 , label: 'Libyan Arab Jamahiriya', heb: 'לוב', ar:"ليبيا"},
                    { value: 120 , label: 'Liechtenstein', heb: 'ליכטנשטיין', ar: "ليختنشتاين"},
                    { value: 122 , label: 'Lithuania', heb: 'ליטא', ar: "ليتوانيا"},
                    { value: 125 , label: 'Luxembourg', heb: 'לוקסמבורג', ar: "لوكسمبورغ"},
                    { value: 123 , label: 'Macao', heb: 'מקאו', ar: "ماكاو"},
                    { value: 126 , label: 'Madagascar', heb: 'מדגסקר', ar: "مدغشقر"},
                    { value: 127 , label: 'Malawi', heb: 'מלאווי', ar: "مالاوي"},
                    { value: 128 , label: 'Malaysia', heb: 'מלזיה', ar: "ماليزيا"},
                    { value: 129 , label: 'Maldives', heb: 'איי המלדיביים', ar: "المالديف"},
                    { value: 130 , label: 'Mali', heb: 'מאלי', ar: "مالي"},
                    { value: 132 , label: 'Malta', heb: 'מלטה', ar: "مالطا"},
                    { value: 131 , label: 'Marshall Islands', heb: 'איי מרשל', ar: "جزر مارشال	"},
                    { value: 135 , label: 'Martinique', heb: 'מרטיניק', ar: "مارتينيك"},
                    { value: 134 , label: 'Mauritania', heb: 'מאוריטניה', ar: "موريتانيا"},
                    { value: 133 , label: 'Mauritius', heb: 'מאוריציוס', ar: "موريشيوس"},
                    { value: 136 , label: 'Mayotte', heb: 'מאיוט', ar: "مايوت"},
                    { value: 138 , label: 'Mexico', heb: 'מכסיקו', ar: "المكسيك"},
                    { value: 137 , label: 'Micronesia, Federated States of', heb: 'מיקרונזיה', ar: "ولايات ميكرونيسيا المتحدة	"},
                    { value: 139 , label: 'Moldova, Republic of', heb: 'מולדובה', ar: "مولدوفا"},
                    { value: 140 , label: 'Monaco', heb: 'מונקו', ar: "موناكو"},
                    { value: 142 , label: 'Mongolia', heb: 'מונגוליה', ar: "منغوليا"},
                    { value: 141 , label: 'Montenegro', heb: 'מונטנגרו', ar: "الجبل الأسو"},
                    { value: 143 , label: 'Montserrat', heb: 'מונסראט', ar: "مونتسرات"},
                    { value: 145 , label: 'Morocco', heb: 'מרוקו', ar: "المغرب"},
                    { value: 144 , label: 'Mozambique', heb: 'מוזמביק', ar: "موزمبيق"},
                    { value: 149 , label: 'Myanmar', heb: 'מיאנמר (בורמה)', ar: "(بورما) ميانمار	"},
                    { value: 146 , label: 'Namibia', heb: 'נמיביה', ar: "ناميبيا"},
                    { value: 147 , label: 'Nauru', heb: 'נאורו', ar: "ناورو"},
                    { value: 150 , label: 'Nepal', heb: 'נפאל', ar: "نيبال"},
                    { value: 152 , label: 'Netherlands', heb: 'הולנד', ar: "هولندا"},
                    { value: 148 , label: 'Netherlands Antilles', heb: 'האנטילים ההולנדיים', ar: "جزر الأنتيل الهولندية"},
                    { value: 151 , label: 'New Caledonia', heb: 'קלדוניה החדשה', ar: "كاليدونيا الجديدة	"},
                    { value: 153 , label: 'New Zealand', heb: 'ניו זינלנד', ar: "نيوزيلندا	"},
                    { value: 155 , label: 'Nicaragua', heb: 'ניקרגואה', ar: "نيكاراجوا	"},
                    { value: 154 , label: 'Niger', heb: 'ניז\'ר', ar: "النيجر"},
                    { value: 156 , label: 'Nigeria', heb: 'ניגריה', ar: "نيجيريا"},
                    { value: 157 , label: 'Niue', heb: 'ניואה', ar: "نييوي"},
                    { value: 158 , label: 'Norfolk Island', heb: 'האי נורפוק', ar: "جزيرة نورفولك"},
                    { value: 124 , label: 'North Macedonia', heb: 'מקדוניה (FYROM)', ar: "مقدونيا الشمالية"},
                    { value: 161 , label: 'Northern Mariana Islands', heb: 'איי מריאנה הצפוניים', ar: "جزر ماريانا الشمالية	"},
                    { value: 162 , label: 'Norway', heb: 'נורווגיה', ar: "النرويج"},
                    { value: 164 , label: 'Oman', heb: 'עומאן', ar: "عُمان"},
                    { value: 163 , label: 'Pakistan', heb: 'פקיסטאן', ar: "باكستان"},
                    { value: 165 , label: 'Palau', heb: 'פלאו', ar: "بالاو"},
                    { value: 166 , label: 'Panama', heb: 'פנמה', ar: "بنما"},
                    { value: 168 , label: 'Papua New Guinea', heb: 'פפואה ניו גינאה', ar: "بابوا غينيا الجديدة"},
                    { value: 169 , label: 'Paraguay', heb: 'פרגוואי', ar: "باراغواي"},
                    { value: 170 , label: 'Peru', heb: 'פרו', ar: "بيرو"},
                    { value: 171 , label: 'Philippines', heb: 'פיליפינים', ar: "الفلبين"},
                    { value: 172 , label: 'Pitcairn', heb: 'איי פיטקיירן', ar: "جزر بيتكيرن"},
                    { value: 174 , label: 'Poland', heb: 'פולין', ar: "بولندا"},
                    { value: 173 , label: 'Portugal', heb: 'פורטוגל', ar: "البرتغال"},
                    { value: 175 , label: 'Puerto Rico', heb: 'פורטו ריקו', ar: "بورتوريكو	"},
                    { value: 176 , label: 'Qatar', heb: 'קטאר', ar: "قطر"},
                    { value: 177 , label: 'Reunion', heb: 'ראוניון', ar: "ريونيون"},
                    { value: 178 , label: 'Romania', heb: 'רומניה', ar: "رومانيا"},
                    { value: 179 , label: 'Russian Federation', heb: 'רוסיה', ar: "روسيا"},
                    { value: 180 , label: 'Rwanda', heb: 'רוואנדה', ar: "رواندا"},
                    { value: 255 , label: 'Saint Barthélemyn', heb: 'סן ברתלמי', ar: "سان بارتيلمي"},
                    { value: 181 , label: 'Saint Helenan', heb: 'סנט הלנה', ar: "سانت هيلينا"},
                    { value: 182 , label: 'Saint Kitts and Nevis', heb: 'סנט קיטס ונוויס', ar: "سانت كيتس ونيفيس	"},
                    { value: 183 , label: 'Saint Lucia', heb: 'סנט לוסיה', ar: "سانت لوسيا"},
                    { value: 256 , label: 'Saint Martin (French part)', heb: 'סן מרטן', ar: "تجمع سان مارتين"},
                    { value: 184 , label: 'Saint Pierre and Miquelon', heb: 'סנט פייר ומיקלון', ar: "سان بيير وميكلون"},
                    { value: 185 , label: 'Saint Vincent and The Grenadines', heb: 'סנט וינסנט והגרנדינים', ar: "سانت فينسنت والغرينادين"},
                    { value: 186 , label: 'Samoa', heb: 'סמואה', ar: "ساموا	"},
                    { value: 187 , label: 'San Marino', heb: 'סן מרינו', ar: "سان مارينو"},
                    { value: 188 , label: 'Sao Tome and Principe', heb: 'סאו טומה ופרינסיפה', ar: "ساو تومي وبرينسيب"},
                    { value: 189 , label: 'Saudi Arabia', heb: 'ערב הסעודית', ar: "السعودية"},
                    { value: 191 , label: 'Senegal', heb: 'סנגל', ar: "السنغال"},
                    { value: 192 , label: 'Serbia', heb: 'סרביה', ar: "صربيا"},
                    { value: 194 , label: 'Seychelles', heb: 'סיישל', ar: "سيشل"},
                    { value: 193 , label: 'Sierra Leone', heb: 'סיירה לאון', ar: "سيراليون"},
                    { value: 195 , label: 'Singapore', heb: 'סינגפור ', ar: "سنغافورة"},
                    { value: 257 , label: 'Sint Maarten (Dutch part)', heb: 'סנט מארטן', ar: "سينت مارتن"},
                    { value: 196 , label: 'Slovakia', heb: 'סלובקיה', ar: "سلوفاكيا"},
                    { value: 199 , label: 'Slovenia', heb: 'סלובניה', ar: "سلوفينيا"},
                    { value: 198 , label: 'Solomon Islands', heb: 'איי שלמה', ar: "جزر سليمان"},
                    { value: 211 , label: 'Somalia', heb: 'סומליה', ar: "الصومال"},
                    { value: 197 , label: 'South Africa', heb: 'דרום אפריקה', ar: "جنوب أفريقيا"},
                    { value: 200 , label: 'South Georgia and The South Sandwich Islands', heb: 'איי ג\'ורג\'יה הדרומית ואיי סנדוויץ\' הדרומיים', ar: "جورجيا الجنوبية وجزر ساندويتش الجنوبية"},
                    { value: 202 , label: 'South Sudan', heb: 'דרום סודן', ar: "جنوب السودان"},
                    { value: 203 , label: 'Spain', heb: 'ספרד', ar: "إسبانيا"},
                    { value: 204 , label: 'Sri Lanka', heb: 'סרי לנקה', ar: "سريلانكا"},
                    { value: 205 , label: 'Sudan', heb: 'סודן', ar: "السودان"},
                    { value: 206 , label: 'Suriname', heb: 'סורינאם', ar: "سورينام"},
                    { value: 209 , label: 'Svalbard and Jan Mayen', heb: 'סבאלברד ויאן מאיין', ar: "سفالبارد"},
                    { value: 207 , label: 'Swaziland', heb: 'אסוואטיני', ar: "سوازيلند (إسواتيني)"},
                    { value: 208 , label: 'Sweden', heb: 'שוודיה', ar: "السويد"},
                    { value: 210 , label: 'Switzerland', heb: 'שוויץ', ar:"سويسرا"},
                    { value: 212 , label: 'Syrian Arab Republic', heb: 'סוריה', ar: "سوريا"},
                    { value: 258 , label: 'Taiwan', heb: 'טייוואן', ar:"تايوان"},
                    { value: 213 , label: 'Tajikistan', heb: 'טג\'יקיסטן', ar: "طاجيكستان"},
                    { value: 215 , label: 'Tanzania, United Republic of', heb: 'טנזניה', ar: "تنزانيا"},
                    { value: 214 , label: 'Thailand', heb: 'תאילנד', ar: "تايلاند"},
                    { value: 60 , label: 'Timor-east', heb: 'מזרח טימור', ar: "تيمور الشرقية"},
                    { value: 218 , label: 'Togo', heb: 'טוגו', ar: "توغو"},
                    { value: 217 , label: 'Tokelau', heb: 'טוקלאו', ar: "توكيلاو"},
                    { value: 219 , label: 'Tonga', heb: 'טונגה', ar: "تونغا"},
                    { value: 220 , label: 'Trinidad and Tobago', heb: 'טרינידד וטובגו', ar: "ترينيداد وتوباغو	"},
                    { value: 221 , label: 'Tunisia', heb: 'תוניסיה', ar: "تونس"},
                    { value: 224 , label: 'Turkey', heb: 'טורקיה', ar: "تركيا"},
                    { value: 222 , label: 'Turkmenistan', heb: 'טורקמניסטן', ar:"تركمانستان"},
                    { value: 223 , label: 'Turks and Caicos Islands', heb: 'איי טרקס וקייקוס', ar: "جزر توركس وكايكوس"},
                    { value: 225 , label: 'Tuvalu', heb: 'טובאלו', ar: "توفالو"},
                    { value: 226 , label: 'Uganda', heb: 'אוגנדה', ar: "أوغندا"},
                    { value: 227 , label: 'Ukraine', heb: 'אוקראינה', ar: "أوكرانيا"},
                    { value: 228 , label: 'United Arab Emirates', heb: 'איחוד האמירויות הערביות', ar: "الإمارات العربية المتحدة	"},
                    { value: 229 , label: 'United Kingdom', heb: 'אנגליה', ar:"المملكة المتحدة	"},
                    { value: 233 , label: 'United States Minor Outlying Islands', heb: 'האיים המרוחקים הקטנים של ארה״ב', ar: "جزر الولايات المتحدة الصغيرة النائية"},
                    { value: 231 , label: 'Uruguay', heb: 'אורוגוואי', ar: "أوروغواي"},
                    { value: 232 , label: 'Uzbekistan', heb: 'אוזבקיסטן', ar: "أوزبكستان"},
                    { value: 234 , label: 'Vanuatu', heb: 'ונואטו', ar: "فانواتو"},
                    { value: 235 , label: 'Venezuela', heb: 'ונצואלה', ar: "فنزويلا	"},
                    { value: 236 , label: 'Viet Nam', heb: 'ויטנאם', ar: "فيتنام"},
                    { value: 237 , label: 'Virgin Islands, British', heb: 'איי הבתולה הבריטיים', ar: "جزر العذراء البريطانية	"},
                    { value: 239 , label: 'Virgin Islands, U.S.', heb: 'איי הבתולה של ארצות הברית', ar: "جزر العذراء الأمريكية	"},
                    { value: 240 , label: 'Wallis and Futuna', heb: 'ואליס ופוטונה', ar: "واليس وفوتونا	"},
                    { value: 241 , label: 'Western Sahara', heb: 'סהרה המערבית', ar: "الصحراء الغربية	"},
                    { value: 242 , label: 'Yemen', heb: 'תימן', ar: "اليمن"},
                    { value: 244 , label: 'Zambia', heb: 'זמביה', ar: "زامبيا	"},
                    { value: 243 , label: 'Zimbabwe', heb: 'זימבבואה', ar: "زيمبابوي"},
                    { value: 259, label: "tibet", heb: "טיבט", ar: "التبت"}
                  ];
    const nameC = `country`;
    const placeholder = `الدول التي أنت مواطنها`;
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
  
}let trans = false;
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
          <a style="border-bottom-width: 4px; border-color: var(--gold);" class="text-barbi  text-bold hover:text-lturk bg-lturk text-center hover:bg-barbi px-1 py-0.5 " sveltekit:prefetch href="/en" >English</a>
          <a class="text-barbi text-bold hover:text-lturk text-center bg-lturk hover:bg-barbi px-1 py-0.5 " sveltekit:prefetch href="/">עברית</a>
          {/if}
          </div>
      <div class="mobile">
        

<section class="container" dir="rtl" id="lines"> 
    
<div class="flexi">
  <h3
       class="amanat" 
       style="white-space: nowrap; font-family: StamSefarad, serif; font-size: 1em; line-height: normal;" 
       dir="rtl">
     البيان من: 
      </h3>
  <input 
          id="name"
          name="name"
          placeholder="اسم"
          required
                on:blur={handleChange}

          on:change={handleChange}
          bind:value={$form.name}
        /> 
     {#if $errors.name}
      <small>{$errors.name}</small>
    {/if}
</div>
<div class="flexi1">
  <h3        class="amanat " id="m" 
 style="font-family: StamSefarad, serif; font-size: 1em;" dir="rtl">من: </h3> 
      <MultiSelect
      bind:selected
      {nameC} 
      {placeholder}
      options={country.map(c => c.ar)}
       {required}
       />  </div>    
<div class="flexi2">
  <h3        class="amanat" 
 style="    white-space: nowrap; font-family: 'StamSefarad', serif; font-size: 1em; line-height:normal;" dir="rtl">البريد الإلكتروني</h3>
  <input
 
    placeholder="البريد الإلكتروني"
    id="email"
    name="email"
    required
          on:blur={handleChange}
    on:change={handleChange}
    bind:value={$form.email}
    />
 {#if $errors.email}
      <small>{$errors.email}</small>
    {/if}
</div>
    </section>     
    </div> 
    <div class="aab">
<div dir="rtl" class="amana" id="amana-show">
 <h1 dir="rtl" style="color:var(--barbi-pink);   text-decoration: underline; font-weight: 900;">
    إعلان استقلال  
        <span> {$form.name}</span>  
        الشخصي
        :
    </h1>
          <span>
              <span>
أنا {$form.name} لن أستخدم العنف أبدًا أو أؤذي أي شخص                   <br>
لأنني {$form.name} لا أريد أن أكون ضحية للعنف ولأنه لا توجد سلطة أو قيمة أو غرض أو معتقد أو مال أو فائدة تبرر الإضرار بحياة الشخص والعنف والإكراه بالقوة.              <br>	
أنا {$form.name} سأمنح ثقتي في الخير وأنه عندما توقع البشرية جمعاء هذه الاتفاقية: سيتوقف العنف والقتال والحكم عن أن يكون شكلاً من أشكال التواصل البشري              <br>
عندما تكون كل {selected} من الموقعين على هذه المعاهدة أنا {$form.name} سأتخلى عن أسلحتي ورجال الشرطة المسلحين الذين عينتهم دولة {selected} بالنيابة عني.              <br>
أنا {$form.name} ، سأتخلى عن أسلحة الجيش {selected} عندما توقع البشرية جمعاء على هذه الاتفاقية.          </span>
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
 تم استلام توقيعك ، لقد وصلت إلى الرقم {idx} ، سيتم إرسال بريد إلكتروني للتحديث عندما نتوسع ، قريبًا </h1>
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
    font-size: 100%;
    font-family: 'StamSefarad', serif;
    text-align: center;
    font-weight: 900;
    background-image: url(https://res.cloudinary.com/love1/image/upload/v1639088838/megila1_m6kvgh.png);
    background-size: cover;
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
    font-size: 130%;
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
    font-size: 140%;
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