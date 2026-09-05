/**
 * Content of the "about" page, which is served both at `/` and at `/about`.
 *
 * Both routes render the same copy, so it lives here rather than being kept in
 * sync by hand in two 900-line components.
 *
 * Each locale gets its own entry — not a word-for-word translation of the
 * Hebrew. `audienceTabs` and `peace*` speak from inside the reader's own
 * culture: the values, the history and the texts that carry "no one may coerce
 * another" in that language. Vision / mission / principle are the project's own
 * statement and stay the same everywhere.
 */

export const ABOUT_CONTENT = {
  // ── HEBREW ───────────────────────────────────────────────────────────────
  he: {
    pageTitle: 'אודות | הסכמה על שלום וביטחון',
    metaDescription:
      'הפלטפורמה העולמית להצהרת הסכמה אישית על אי-אלימות ואי-כפייה',
    dir: 'rtl',
    heroTitle: 'האמת הפשוטה:',
    heroSubtitle: 'כולנו כבר מסכימים על עולם שליו',
    heroLead: `בני אדם הם חופשיים כאשר הם מתנהלים בהדדיות ומתוך הסכמה.
בכל שפה, תרבות ומדינה הערכים הללו מקובלים,
ובכל זאת עדיין ישנן מלחמות, כפיה ואלימות.`,
    visionTitle: 'החזון',
    visionText: `יצירת פלטפורמה דיגיטלית גלובלית שבה אזרחים מכל העולם מצהירים באופן אישי על מחויבותם לעקרונות אי-אלימות ואי-כפייה — ומוכיחים יחד שהרוב הדומם שואף לאותו עולם.`,
    missionTitle: 'המטרה',
    missionText: `להוות כלי פרקטי לשיקום אמון בין דמוגרפיות וצדדים עוינים. האתר עוקף את הדיפלומטיה הממסדית כדי ליצור קונצנזוס עממי אמיתי — שלום מלמטה למעלה.`,
    principleTitle: 'העיקרון המנחה',
    principleText: `מסד נתונים של הסכמות יוכיח כי הרוב הדומם ברחבי העולם שותף לשאיפה בסיסית לחיים ללא אלימות וכפייה, חרף הבדלים פוליטיים ותרבותיים עמוקים.`,

    audienceTabs: [
      {
        id: 'secular',
        label: 'חופש ואוטונומיה',
        title: 'חופש בחירה ואוטונומיה אישית',
        text: `השלום האמיתי נבנה על כבוד הדדי וחופש מכפייה ממסדית. במרחב שבו אף אדם אינו מכתיב לאחר כיצד לחיות — דתי לחילוני, ימין לשמאל — מתפתח אמון ממשי. ההסכמה על אי-כפייה היא הבסיס לכל שיח אזרחי.`
      },
      {
        id: 'national',
        label: 'יחד נהיה שלמים',
        title: 'אחדות האומה כבסיס לשלום',
        text: `ברוח תורת הראי"ה קוק, חוסן פנימי ואחדות האומה הם התנאי לשלום אמיתי. אי-אלימות ואי-כפייה פנימיים מונעים מלחמת אחים ופילוג — וממקום של עוצמה ושלמות פנימית צומח שלום אמיתי עם העולם.`
      }
    ],

    infographic1Alt: 'האמת הפשוטה - כולנו כבר מסכימים',
    infographic2Alt: 'אנשות אחת, הסכמה אחת - הדרך לשלום עולמי',
    infographic1Caption: 'עקרונות ההסכמה (1💗1)',
    infographic2Caption: 'הדרך לשלום עולמי וחירות',

    peaceTitle: 'תפילה לשלום / רבי נחמן מברסלב',
    peaceText: `אדון השלום, מלך שהשלום שלו, עושה שלום ובורא הכל.
יהי רצון מלפניך שתבטל מלחמות ושפיכות דמים מן העולם
ותמשיך שלום גדול ונפלא בעולם —
וְלֹא יִשָּׂא גוֹי אֶל גוֹי חֶרֶב וְלֹא יִלְמְדוּ עוֹד מִלְחָמָה.`,

    journeyTitle: 'מסע של 9 מיליארד צעדים',
    journeyText: `שלום אמיתי יגיע רק כש-9 מיליארד בני אדם יסמכו מספיק אחד על השני כדי להניח את כלי הנשק שנועדו לכפות וליישר את האחר.
הפלטפורמה הזו אינה "אסקפיזם מוסרי" – היא המקום שבו אנחנו מגלים שגם האנשים מעבר לגדר מסכימים בדיוק על אותם ערכים מקודשים של חירות ושלווה.
זהו מסע של 9 מיליארד צעדים. כל אחד יכול לעשות רק את הצעד האחד שלו, וחשוב שתעשו אותו – כי אף אחד אחר לא יוכל לעשות זאת במקומכם.`,

    ctaTitle: 'הצטרפ/י להסכמה',
    ctaText: 'הצהירו על מחויבותכם לעולם שליו',
    ctaButton: 'חתמו על ההסכמה',
    contactText: 'הערות ויצירת קשר:',
    communityLinkText: `האמנה העולמית`,
    teamLinkText: `להצטרפות לצוות או לתמיכה בעשיה באתר 1💗1`
  },

  // ── ENGLISH ───────────────────────────────────────────────────────────────
  en: {
    pageTitle: 'About | Agreement for Peace & Security',
    metaDescription:
      'A global platform for personal declaration of non-violence and non-coercion',
    dir: 'ltr',
    heroTitle: 'The Simple Truth:',
    heroSubtitle: 'We Already Agree on a Peaceful World',
    heroLead: `Across every language, culture and nation, people share the same fundamental aspiration — to live free from violence and coercion. Yet wars, oppression and conflict persist. One unified declaration changes everything.`,
    visionTitle: 'Vision',
    visionText: `A global digital platform where citizens from every nation personally declare their commitment to non-violence and non-coercion — and collectively prove that the silent majority yearns for the same peaceful world.`,
    missionTitle: 'Mission',
    missionText: `To serve as a practical tool for rebuilding trust between adversarial communities and nations. We bypass institutional diplomacy to create genuine grassroots consensus — peace from the bottom up.`,
    principleTitle: 'Guiding Principle',
    principleText: `A database of agreements will prove that the world's silent majority shares a fundamental aspiration for a life free from violence and coercion, despite deep political and cultural differences.`,

    audienceTabs: [
      {
        id: 'conservative',
        label: 'Freedom and Liberty',
        title: 'Freedom, Order & Personal Liberty',
        text: `True peace is built on rule of law, personal sovereignty, and protection of individual rights from mob coercion or tyrannical interference. The principle of non-aggression — that no person or institution has the right to initiate force against another — forms the bedrock of civilized society. This agreement protects your way of life, your property, and your community from violence and coercion of any kind.`
      },
      {
        id: 'progressive',
        label: 'Human Rights, Autonomy & Solidarity',
        title: 'Human Rights, Autonomy & Solidarity',
        text: `Non-coercion is the foundation of human dignity — protection from systemic oppression, institutional violence, and the denial of personal autonomy. Non-violence is not passivity; it is radical moral resistance and an act of solidarity rooted in deep empathy. This agreement is a declaration that every human being has the right to self-determination, free from domination.`
      }
    ],

    infographic1Alt: 'The Simple Truth - We Already Agree',
    infographic2Alt: 'One Humanity, One Agreement - The Path to World Peace',
    infographic1Caption: 'The 1💗1 Agreement Principles',
    infographic2Caption: 'The Path to Global Peace and Freedom',

    peaceTitle: 'Prayer for Peace — Rabbi Nachman of Breslov',
    peaceText: `Master of peace, King whose peace is His, Maker of peace and Creator of all.
May it be Your will to abolish war and bloodshed from the world,
and bring great and wondrous peace to the world —
nation shall not lift sword against nation, neither shall they learn war anymore.`,

    journeyTitle: 'A Journey of 9 Billion Steps',
    journeyText: `True peace will only come when 9 billion people trust each other enough to lay down the weapons meant to coerce and align others.
This platform is not moral escapism — it is where we discover that people across the fence enthusiastically agree on the exact same sacred values of freedom and peace.
It is a journey of 9 billion steps. You can only take your own single step, and it is crucial that you do — because no one else can take it for you.`,

    ctaTitle: 'Join the Agreement',
    ctaText: 'Declare your commitment to a peaceful world',
    ctaButton: 'Sign the Agreement',
    contactText: 'Questions & contact:',
    communityLinkText: `The Worldwide Agreement`,
    teamLinkText: `Join the team or support the work on 1💗1`
  },

  // ── ARABIC ───────────────────────────────────────────────────────────────
  ar: {
    pageTitle: 'حول | الاتفاقية للسلام والأمن',
    metaDescription:
      'منصة عالمية للإعلان الشخصي عن الالتزام باللاعنف واللاإكراه',
    dir: 'rtl',
    heroTitle: 'الحقيقة البسيطة:',
    heroSubtitle: 'نحن نتفق بالفعل على عالم سلمي',
    heroLead: `في كل لغة وثقافة وأمة، يشترك الناس في التطلع نفسه — العيش بحرية بعيداً عن العنف والإكراه. ومع ذلك تستمر الحروب والصراعات. إعلان موحد واحد يغير كل شيء.`,
    visionTitle: 'الرؤية',
    visionText: `منصة رقمية عالمية يعلن فيها مواطنون من كل أنحاء العالم التزامهم الشخصي بمبادئ اللاعنف واللاإكراه — ويُثبتون معاً أن الأغلبية الصامتة تتطلع إلى العالم السلمي نفسه.`,
    missionTitle: 'الرسالة',
    missionText: `أن تكون أداة عملية لإعادة بناء الثقة بين المجتمعات المتنافسة. نتجاوز الدبلوماسية المؤسسية لخلق توافق شعبي حقيقي — سلام من القاعدة إلى القمة.`,
    principleTitle: 'المبدأ التوجيهي',
    principleText: `قاعدة بيانات من الاتفاقيات ستُثبت أن الأغلبية الصامتة في العالم تشترك في تطلع أساسي لحياة خالية من العنف والإكراه، رغم الاختلافات السياسية والثقافية العميقة.`,

    audienceTabs: [
      {
        id: 'traditional',
        label: 'الصُّلح، المصالحة والأمان',
        title: 'الصُّلح، المصالحة والأمان',
        text: `يرسّخ الإسلام مبادئ فض النزاعات سلمياً: الصُّلح، المُصالحة، والأمان. قال الله تعالى: «لَا إِكْرَاهَ فِي الدِّينِ» — فالإيمان الحقيقي يُبنى على الاختيار الحر لا على الإجبار. هذه الاتفاقية تجسيد لهذا المبدأ القرآني الأصيل: لا يُكره إنسان على أي معتقد أو سلوك.`
      },
      {
        id: 'modern',
        label: 'الحرية والكرامة الإنسانية',
        title: 'الحرية والكرامة الإنسانية',
        text: `اللاإكراه هو أساس الحرية والكرامة الإنسانية. حق كل إنسان في تقرير مصيره دون تدخل أو عنف — سواء من المؤسسات أو الأفراد. هذه الاتفاقية دعوة لعالم يحترم فيه كل إنسان حق الآخر في الاختلاف والعيش بحرية.`
      }
    ],

    infographic1Alt: 'الحقيقة البسيطة - نحن نتفق بالفعل',
    infographic2Alt: 'إنسانية واحدة، اتفاقية واحدة - الطريق إلى السلام العالمي',
    infographic1Caption: 'مبادئ اتفاقية 1💗1',
    infographic2Caption: 'الطريق إلى السلام العالمي والحرية',

    peaceTitle: 'كلمة من أجل السلام — سورة الأنفال ٦١',
    peaceText: `«وَإِنْ جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا وَتَوَكَّلْ عَلَى اللَّهِ»

اللهم أنت السلام، ومنك السلام، تباركت يا ذا الجلال والإكرام.
اللهم ارفع عن الناس الحرب وسفك الدماء، واجعل بيننا سلاماً لا يُنقض.`,

    journeyTitle: 'رحلة الـ 9 مليارات خطوة',
    journeyText: `السلام الحقيقي لن يتحقق إلا عندما يثق 9 مليارات إنسان ببعضهم البعض بما يكفي لوضع الأسلحة التي تهدف إلى إكراه الآخرين.
هذه المنصة ليست هروباً من الواقع — إنها المكان الذي نكتشف فيه أن الأشخاص خلف الأسوار يوافقون بحماس على نفس القيم المقدسة للحرية والسلام.
إنها رحلة تتكون من 9 مليارات خطوة. لا يمكنك سوى اتخاذ خطوتك الخاصة، ومن الضروري أن تفعل ذلك — لأنه لا أحد يستطيع اتخاذها نيابة عنك.`,

    ctaTitle: 'انضم إلى الاتفاقية',
    ctaText: 'أعلن التزامك بعالم سلمي',
    ctaButton: 'وقّع الاتفاقية',
    contactText: 'للاستفسارات والتواصل:',
    communityLinkText: `الاتفاقية العالمية`,
    teamLinkText: `للانضمام إلى الفريق أو دعم العمل على 1💗1`
  },

  // ── PERSIAN ──────────────────────────────────────────────────────────────
  fa: {
    pageTitle: 'دربارهٔ ما | پیمانی برای صلح و امنیت',
    metaDescription:
      'سکویی جهانی برای اعلام شخصی پایبندی به بی‌خشونتی و نفی اجبار',
    dir: 'rtl',
    heroTitle: 'حقیقت ساده:',
    heroSubtitle: 'ما از پیش بر سر جهانی آرام هم‌داستانیم',
    heroLead: `در هر زبان، هر فرهنگ و هر سرزمین، مردم یک آرزوی بنیادین دارند: زندگی بی‌خشونت و بی‌اجبار. با این حال جنگ، ستم و ستیز ادامه دارد. یک اعلامیهٔ مشترک همه چیز را دگرگون می‌کند.`,
    visionTitle: 'چشم‌انداز',
    visionText: `سکویی دیجیتال و جهانی که در آن مردم از هر کشوری شخصاً پایبندی خود را به بی‌خشونتی و نفی اجبار اعلام می‌کنند — و با هم نشان می‌دهند که اکثریت خاموش، آرزوی همان جهان آرام را دارد.`,
    missionTitle: 'مأموریت',
    missionText: `ابزاری عملی برای بازسازی اعتماد میان جامعه‌ها و ملت‌هایی که رو در روی هم ایستاده‌اند. از دیپلماسی رسمی می‌گذریم تا هم‌داستانی راستین مردمی ساخته شود — صلحی که از پایین می‌روید.`,
    principleTitle: 'اصل راهنما',
    principleText: `پایگاهی از موافقت‌ها نشان خواهد داد که اکثریت خاموش جهان، با وجود اختلاف‌های ژرف سیاسی و فرهنگی، در یک آرزوی بنیادین شریک است: زندگی بی‌خشونت و بی‌اجبار.`,

    audienceTabs: [
      {
        id: 'baniadam',
        label: 'بنی‌آدم',
        title: 'یک پیکر، یک درد',
        text: `سعدی هشتصد سال پیش گفت که آدمیان اعضای یک پیکرند؛ همان بیتی که امروز بر دیوار سازمان ملل نقش بسته است. این پیمان همان سخن است، اما به زبان اول‌شخص: من به هیچ عضو دیگری از این پیکر آسیب نمی‌زنم. امضا کردن، دست کشیدن از دفاع نیست؛ دست کشیدن از آغاز کردن زور است.`
      },
      {
        id: 'bi-ekrah',
        label: 'آزادی از اجبار',
        title: 'دل را به زور نمی‌توان گرفت',
        text: `در فرهنگ ایرانی، از «لا اکراه» تا حافظ و مولانا، این نکته بارها گفته شده است: آنچه با اجبار به دست آید، نه ایمان است و نه دوستی. هر جا اجبار می‌آید، رضایت می‌رود. این پیمان تنها همین را می‌گوید: هیچ قدرت، باور یا منفعتی حق ندارد جان و انتخاب انسانی را با زور بگیرد.`
      }
    ],

    infographic1Alt: 'حقیقت ساده — ما از پیش هم‌داستانیم',
    infographic2Alt: 'یک بشریت، یک پیمان — راه صلح جهانی',
    infographic1Caption: 'اصول پیمان 1💗1',
    infographic2Caption: 'راه صلح و آزادی جهانی',

    peaceTitle: 'بنی‌آدم — سعدی شیرازی، گلستان',
    peaceText: `بنی‌آدم اعضای یک پیکرند
که در آفرینش ز یک گوهرند
چو عضوی به درد آورد روزگار
دگر عضوها را نماند قرار`,

    journeyTitle: 'سفری نُه‌میلیارد گامی',
    journeyText: `صلح راستین تنها آن‌گاه می‌آید که نُه میلیارد انسان چندان به یکدیگر اعتماد کنند که سلاح‌هایی را که برای وادار کردن و یک‌شکل کردن دیگری ساخته شده بر زمین بگذارند.
این سکو گریز اخلاقی از واقعیت نیست؛ جایی است که درمی‌یابیم مردمِ آن سوی دیوار نیز دقیقاً همان ارزش‌های گران‌بها را باور دارند: آزادی و آرامش.
این سفری نُه‌میلیارد گامی است. تو تنها می‌توانی گام خودت را برداری، و برداشتن آن بسیار مهم است — چون هیچ‌کس دیگری نمی‌تواند به جای تو آن را بردارد.`,

    ctaTitle: 'به پیمان بپیوندید',
    ctaText: 'پایبندی خود را به جهانی آرام اعلام کنید',
    ctaButton: 'امضای پیمان',
    contactText: 'پرسش و ارتباط:',
    communityLinkText: `پیمان جهانی`,
    teamLinkText: `پیوستن به گروه یا پشتیبانی از کار در 1💗1`
  },

  // ── RUSSIAN ───────────────────────────────────────────────────────────────
  ru: {
    pageTitle: 'О нас | Соглашение о мире и безопасности',
    metaDescription:
      'Глобальная платформа для личного заявления о ненасилии и ненасилии',
    dir: 'ltr',
    heroTitle: 'Простая истина:',
    heroSubtitle: 'Мы уже согласны на мирный мир',
    heroLead: `На любом языке, в любой культуре и стране люди разделяют одно стремление — жить свободно, без насилия и принуждения. Тем не менее войны и конфликты продолжаются. Единая декларация способна изменить всё.`,
    visionTitle: 'Видение',
    visionText: `Глобальная цифровая платформа, где граждане со всего мира лично декларируют свою приверженность принципам ненасилия и ненасилия — и вместе доказывают, что молчаливое большинство стремится к одному и тому же мирному миру.`,
    missionTitle: 'Миссия',
    missionText: `Служить практическим инструментом восстановления доверия между враждующими сообществами и нациями. Мы обходим институциональную дипломатию для создания подлинного народного консенсуса — мира снизу вверх.`,
    principleTitle: 'Руководящий принцип',
    principleText: `База данных соглашений докажет, что молчаливое большинство мира разделяет фундаментальное стремление к жизни без насилия и принуждения, несмотря на глубокие политические и культурные различия.`,

    audienceTabs: [
      {
        id: 'nenasilie',
        label: 'Ненасилие',
        title: 'Непротивление злу насилием',
        text: `Русская мысль дала миру сам язык ненасилия: у Толстого его переняли и Ганди, и Кинг. Мысль простая: насилие не прекращается насилием — его прекращает тот, кто первым отказывается принуждать. Эта декларация и есть такой отказ, сказанный от первого лица и от своего имени. Отказ не от защиты, а от того, чтобы принуждать первым.`
      },
      {
        id: 'dom',
        label: 'Мирный дом',
        title: 'Здесь цену войны знают в каждой семье',
        text: `Почти никто не хочет её повторения — но молчаливое согласие большинства нигде не записано, и потому его как будто нет. Подпись позволяет перестать молчать, не вставая ни на чью сторону: она направлена не против кого-то, а против самого принуждения. Один человек, одно имя, одно предложение — и оно наконец поддаётся счёту.`
      }
    ],

    infographic1Alt: 'Простая истина - мы уже согласны',
    infographic2Alt: 'Одно человечество, одно соглашение',
    infographic1Caption: 'Принципы соглашения 1💗1',
    infographic2Caption: 'Путь к всеобщему миру и свободе',

    peaceTitle: 'Слово о ненасилии — Лев Толстой, «Воскресение» (1899)',
    peaceText: `«Люди думают, что есть положения, в которых можно обращаться
с человеком без любви. Но таких положений нет.»

Мир начинается там, где кто-то первым отказывается принуждать —
и не ждёт, чтобы первым отказался сосед.`,

    journeyTitle: 'Путешествие в 9 миллиардов шагов',
    journeyText: `Истинный мир наступит только тогда, когда 9 миллиардов человек будут доверять друг другу настолько, чтобы сложить оружие, предназначенное для принуждения других.
Эта платформа — не бегство от реальности. Это место, где мы обнаруживаем, что люди по ту сторону забора с энтузиазмом разделяют те же священные ценности свободы и мира.
Это путешествие в 9 миллиардов шагов. Каждый может сделать только свой собственный шаг, и очень важно, чтобы вы его сделали — потому что никто другой не сможет сделать его за вас.`,

    ctaTitle: 'Присоединяйтесь к соглашению',
    ctaText: 'Заявите о своей приверженности мирному миру',
    ctaButton: 'Подписать соглашение',
    contactText: 'Вопросы и контакт:',
    communityLinkText: `Всемирное соглашение`,
    teamLinkText: `Присоединиться к команде или поддержать работу на 1💗1`
  },

  // ── FRENCH ───────────────────────────────────────────────────────────────
  fr: {
    pageTitle: 'À propos | Accord pour la Paix et la Sécurité',
    metaDescription:
      'Une plateforme mondiale pour la déclaration personnelle de non-violence et non-coercition',
    dir: 'ltr',
    heroTitle: 'La vérité simple :',
    heroSubtitle: "Nous sommes déjà d'accord sur un monde pacifique",
    heroLead: `Dans chaque langue, culture et nation, les gens partagent la même aspiration fondamentale — vivre librement, sans violence ni coercition. Pourtant, les guerres et les conflits persistent. Une déclaration unifiée peut tout changer.`,
    visionTitle: 'Vision',
    visionText: `Une plateforme numérique mondiale où des citoyens de tous les pays déclarent personnellement leur engagement envers les principes de non-violence et de non-coercition — et prouvent ensemble que la majorité silencieuse aspire au même monde pacifique.`,
    missionTitle: 'Mission',
    missionText: `Servir d'outil pratique pour reconstruire la confiance entre des communautés et des nations adversaires. Nous contournons la diplomatie institutionnelle pour créer un véritable consensus populaire — la paix de bas en haut.`,
    principleTitle: 'Principe directeur',
    principleText: `Une base de données d'accords prouvera que la majorité silencieuse du monde partage une aspiration fondamentale à une vie sans violence ni coercition, malgré de profondes différences politiques et culturelles.`,

    audienceTabs: [
      {
        id: 'republique',
        label: 'Liberté et droit',
        title: `La liberté s'arrête où commence celle d'autrui`,
        text: `La Déclaration des droits de l'homme et du citoyen de 1789 le dit en une phrase : « La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. » C'est exactement le principe de cet accord : ni une personne, ni une institution n'a le droit d'ouvrir la violence contre un autre. Signer, ce n'est pas renoncer à se défendre ; c'est refuser d'être le premier à contraindre.`
      },
      {
        id: 'reconciliation',
        label: 'Réconciliation',
        title: 'Des ennemis peuvent devenir des voisins',
        text: `En une seule génération, l'Europe s'est déchirée deux fois, puis a choisi autre chose : des accords plutôt que des conquêtes. Ce que des États ont fini par réussir, des personnes peuvent le faire directement, sans attendre les chancelleries. Chaque signature est une main tendue par-dessus une frontière que personne n'a choisie.`
      }
    ],

    infographic1Alt: "La vérité simple - nous sommes déjà d'accord",
    infographic2Alt: 'Une humanité, un accord - La voie vers la paix mondiale',
    infographic1Caption: "Principes de l'accord 1💗1",
    infographic2Caption: 'La voie vers la paix et la liberté mondiales',

    peaceTitle: 'Un jour viendra — Victor Hugo, Congrès de la Paix, Paris 1849',
    peaceText: `« Un jour viendra où les armes vous tomberont des mains, à vous aussi !
Un jour viendra où la guerre paraîtra aussi absurde et sera aussi impossible
entre Paris et Londres, entre Pétersbourg et Berlin, entre Vienne et Turin,
qu'elle serait impossible aujourd'hui entre Rouen et Amiens. »

Ce jour-là commence par une signature à la fois.`,

    journeyTitle: 'Un voyage de 9 milliards de pas',
    journeyText: `La véritable paix ne viendra que lorsque 9 milliards de personnes se feront suffisamment confiance pour déposer les armes destinées à contraindre les autres.
Cette plateforme n'est pas une fuite en avant — c'est le lieu où nous découvrons que les gens de l'autre côté de la barrière partagent avec enthousiasme les mêmes valeurs sacrées de liberté et de paix.
C'est un voyage de 9 milliards de pas. Vous ne pouvez faire que votre propre pas, et il est crucial que vous le fassiez — car personne d'autre ne peut le faire à votre place.`,

    ctaTitle: "Rejoignez l'accord",
    ctaText: 'Déclarez votre engagement pour un monde pacifique',
    ctaButton: "Signer l'accord",
    contactText: 'Questions et contact :',
    communityLinkText: `L’accord mondial`,
    teamLinkText: `Rejoindre l’équipe ou soutenir le travail sur 1💗1`
  },

  // ── CHINESE ───────────────────────────────────────────────────────────────
  zh: {
    pageTitle: '关于我们 | 和平与安全协议',
    metaDescription: '全球个人宣告非暴力与非强制承诺的平台',
    dir: 'ltr',
    heroTitle: '简单的真相：',
    heroSubtitle: '我们已经在一个和平世界上达成共识',
    heroLead: `在每一种语言、文化和国家中，人们都怀有同样的基本愿望——自由地生活，远离暴力和强制。然而战争和冲突依然持续。一个统一的宣言可以改变一切。`,
    visionTitle: '愿景',
    visionText: `一个全球数字平台，世界各地的公民在此个人宣告他们对非暴力和非强制原则的承诺——并共同证明沉默的大多数渴望同样的和平世界。`,
    missionTitle: '使命',
    missionText: `作为在敌对社区和国家之间重建信任的实用工具。我们绕过机构外交，创造真正的草根共识——自下而上的和平。`,
    principleTitle: '指导原则',
    principleText: `协议数据库将证明，世界上沉默的大多数人共同渴望过上没有暴力和强制的生活，尽管存在深刻的政治和文化差异。`,

    audienceTabs: [
      {
        id: 'jianai',
        label: '兼爱非攻',
        title: '兼相爱，则国与国不相攻',
        text: `两千五百年前，墨子提出「兼爱非攻」：人若彼此相爱，国与国便不相攻。这份协议就是把这句古话写成第一人称——我不先动武，也不以强凌弱。签名不是放弃自保，而是放弃做第一个施加强制的人。`
      },
      {
        id: 'heweigui',
        label: '和为贵',
        title: '和为贵，天下为公',
        text: `《论语》说「礼之用，和为贵」，《礼记》说「大道之行也，天下为公」。和不是没有分歧，而是分歧不靠拳头解决。这份协议只做一件事：把本来就藏在多数人心里的共识，一个一个地记下来，让它被看见、被数清。`
      }
    ],

    infographic1Alt: '简单的真相 - 我们已经达成共识',
    infographic2Alt: '一个人类，一个协议 - 通向世界和平之路',
    infographic1Caption: '1💗1协议原则',
    infographic2Caption: '通向全球和平与自由之路',

    peaceTitle: '《墨子·兼爱》——墨翟，公元前五世纪',
    peaceText: `「若使天下兼相爱，
国与国不相攻，家与家不相乱，
强不执弱，众不劫寡，
若此则天下治。」

两千五百年前的一句话，今天只差一个一个地签上名字。`,

    journeyTitle: '90亿步的旅程',
    journeyText: `只有当90亿人彼此建立足够的信任，放下那些用来压迫和胁迫他人的武器时，真正的和平才会降临。
这个平台不是逃避现实——在这里我们会发现，围墙另一边的人们同样热切地认同自由与和平的神圣价值观。
这是一场90亿步的旅程。每个人只能迈出属于自己的一步，而你迈出这一步至关重要——因为没有人能代替你走。`,

    ctaTitle: '加入协议',
    ctaText: '宣告您对和平世界的承诺',
    ctaButton: '签署协议',
    contactText: '问题与联系：',
    communityLinkText: `全球协议`,
    teamLinkText: `加入团队或支持 1💗1 上的工作`
  },

  // ── SPANISH ───────────────────────────────────────────────────────────────
  es: {
    pageTitle: 'Acerca de | Acuerdo para la Paz y la Seguridad',
    metaDescription:
      'Una plataforma global para la declaración personal de no violencia y no coerción',
    dir: 'ltr',
    heroTitle: 'La verdad simple:',
    heroSubtitle: 'Ya estamos de acuerdo en un mundo pacífico',
    heroLead: `En cada idioma, cultura y nación, las personas comparten la misma aspiración fundamental — vivir libremente, sin violencia ni coerción. Sin embargo, las guerras y los conflictos persisten. Una declaración unificada puede cambiarlo todo.`,
    visionTitle: 'Visión',
    visionText: `Una plataforma digital global donde ciudadanos de todos los países declaran personalmente su compromiso con los principios de no violencia y no coerción — y prueban juntos que la mayoría silenciosa aspira al mismo mundo pacífico.`,
    missionTitle: 'Misión',
    missionText: `Servir como una herramienta práctica para reconstruir la confianza entre comunidades y naciones adversarias. Evitamos la diplomacia institucional para crear un consenso popular genuino — paz de abajo hacia arriba.`,
    principleTitle: 'Principio rector',
    principleText: `Una base de datos de acuerdos demostrará que la mayoría silenciosa del mundo comparte una aspiración fundamental a una vida sin violencia ni coerción, a pesar de las profundas diferencias políticas y culturales.`,

    audienceTabs: [
      {
        id: 'convivencia',
        label: 'Convivencia',
        title: 'Convivir sin imponer',
        text: `La palabra convivencia dice en español lo que muchos pueblos aprendieron a un precio muy alto: después de una guerra civil o de una dictadura, la paz no llega por vencer al otro, sino por acordar con él. Este acuerdo lleva esa idea a la primera persona: ni una persona ni una institución tiene derecho a iniciar la fuerza contra otro.`
      },
      {
        id: 'dignidad',
        label: 'Dignidad y derechos',
        title: 'La dignidad no se somete a votación',
        text: `La tradición latinoamericana de derechos humanos nació de saber lo que ocurre cuando el poder decide quién merece protección. Por eso aquí no se firma una consigna, sino un límite: mi vida y la tuya no están a disposición de ninguna autoridad, mayoría ni interés. La no violencia no es pasividad; es la forma más firme de decir que no.`
      }
    ],

    infographic1Alt: 'La verdad simple - ya estamos de acuerdo',
    infographic2Alt:
      'Una humanidad, un acuerdo - El camino hacia la paz mundial',
    infographic1Caption: 'Principios del acuerdo 1💗1',
    infographic2Caption: 'El camino hacia la paz y la libertad mundiales',

    peaceTitle: 'La paz, el mayor bien — Cervantes, Don Quijote (1605)',
    peaceText: `«El fin y paradero de las armas es la paz,
que es el mayor bien que los hombres pueden desear en esta vida.»

Y la paz no se conquista con armas: se acuerda, una persona tras otra.`,

    journeyTitle: 'Un viaje de 9 mil millones de pasos',
    journeyText: `La verdadera paz solo llegará cuando 9 mil millones de personas confíen lo suficiente unas en otras como para deponer las armas destinadas a coaccionar a los demás.
Esta plataforma no es escapismo moral: es el lugar donde descubrimos que las personas al otro lado de la valla están de acuerdo con los mismos valores sagrados de libertad y paz.
Es un viaje de 9 mil millones de pasos. Solo puedes dar tu propio paso, y es crucial que lo hagas, porque nadie más puede darlo por ti.`,

    ctaTitle: 'Únase al acuerdo',
    ctaText: 'Declare su compromiso con un mundo pacífico',
    ctaButton: 'Firmar el acuerdo',
    contactText: 'Preguntas y contacto:',
    communityLinkText: `El acuerdo mundial`,
    teamLinkText: `Únete al equipo o apoya el trabajo en 1💗1`
  },

  // ── GERMAN ────────────────────────────────────────────────────────────────
  de: {
    pageTitle: 'Über uns | Vereinbarung für Frieden und Sicherheit',
    metaDescription:
      'Eine weltweite Plattform für die persönliche Erklärung von Gewaltfreiheit und Zwangsfreiheit',
    dir: 'ltr',
    heroTitle: 'Die einfache Wahrheit:',
    heroSubtitle: 'Über eine friedliche Welt sind wir uns längst einig',
    heroLead: `In jeder Sprache, Kultur und Nation teilen Menschen dieselbe grundlegende Sehnsucht — frei von Gewalt und Zwang zu leben. Und dennoch gehen Kriege, Unterdrückung und Konflikte weiter. Eine gemeinsame Erklärung verändert alles.`,
    visionTitle: 'Vision',
    visionText: `Eine weltweite digitale Plattform, auf der Menschen aus allen Ländern persönlich ihre Verpflichtung zu Gewaltfreiheit und Zwangsfreiheit erklären — und gemeinsam beweisen, dass die schweigende Mehrheit sich dieselbe friedliche Welt wünscht.`,
    missionTitle: 'Auftrag',
    missionText: `Ein praktisches Werkzeug zu sein, um Vertrauen zwischen verfeindeten Gemeinschaften und Nationen wieder aufzubauen. Wir umgehen die institutionelle Diplomatie und schaffen einen echten Konsens von unten — Frieden von der Basis aus.`,
    principleTitle: 'Leitprinzip',
    principleText: `Eine Datenbank von Zustimmungen wird belegen, dass die schweigende Mehrheit der Welt trotz tiefer politischer und kultureller Unterschiede dieselbe grundlegende Sehnsucht nach einem Leben ohne Gewalt und Zwang teilt.`,

    audienceTabs: [
      {
        id: 'wuerde',
        label: 'Menschenwürde',
        title: 'Die Würde des Menschen ist unantastbar',
        text: `Der erste Satz des Grundgesetzes ist keine Verzierung, sondern eine Grenze: kein Staat, keine Mehrheit und kein einzelner Mensch darf über einen anderen verfügen. Diese Vereinbarung sagt dasselbe in der ersten Person — ich beginne keine Gewalt, und ich lasse mir keine antun. Wer unterschreibt, verzichtet nicht auf Schutz, sondern darauf, als Erster zu zwingen.`
      },
      {
        id: 'niewieder',
        label: 'Nie wieder',
        title: 'Aus der eigenen Geschichte gelernt',
        text: `Kaum ein Land weiß so genau, wohin Zwang führen kann, und kaum eines hat so deutlich gesagt: nie wieder. Nur bleibt „nie wieder" eine Formel, solange niemand persönlich dafür unterschreibt. Genau das ist hier möglich — eine einzelne, namentliche Erklärung, die zusammen mit Millionen anderen zählbar wird.`
      }
    ],

    infographic1Alt: 'Die einfache Wahrheit – wir sind uns längst einig',
    infographic2Alt:
      'Eine Menschheit, eine Vereinbarung – der Weg zum Weltfrieden',
    infographic1Caption: 'Die Prinzipien der 1💗1-Vereinbarung',
    infographic2Caption: 'Der Weg zu weltweitem Frieden und Freiheit',

    peaceTitle: '„Es soll kein Krieg sein" — Immanuel Kant, 1797',
    peaceText: `„Es soll kein Krieg sein; weder der, welcher zwischen mir und dir im Naturzustande,
noch zwischen uns als Staaten sein sollte —
denn das ist nicht die Art, wie jedermann sein Recht suchen soll."

Frieden ist kein Zustand, der von selbst eintritt. Er muss gestiftet werden — von jedem Einzelnen.`,

    journeyTitle: 'Eine Reise von 9 Milliarden Schritten',
    journeyText: `Wahrer Frieden kommt erst, wenn 9 Milliarden Menschen einander genug vertrauen, um die Waffen niederzulegen, die dazu da sind, andere zu zwingen und gleichzumachen.
Diese Plattform ist keine moralische Flucht — hier entdecken wir, dass die Menschen jenseits des Zauns genau dieselben heiligen Werte von Freiheit und Frieden teilen.
Es ist eine Reise von 9 Milliarden Schritten. Du kannst nur deinen einen eigenen Schritt gehen, und es ist entscheidend, dass du ihn gehst — denn niemand sonst kann ihn für dich tun.`,

    ctaTitle: 'Schließe dich der Vereinbarung an',
    ctaText: 'Erkläre deine Verpflichtung zu einer friedlichen Welt',
    ctaButton: 'Die Vereinbarung unterzeichnen',
    contactText: 'Fragen und Kontakt:',
    communityLinkText: `Die weltweite Vereinbarung`,
    teamLinkText: `Ins Team kommen oder die Arbeit auf 1💗1 unterstützen`
  },

  // ── HUNGARIAN ────────────────────────────────────────────────────────────
  hu: {
    pageTitle: 'Rólunk | Megállapodás a békéért és a biztonságért',
    metaDescription:
      'Világméretű felület, ahol bárki személyesen nyilatkozhat az erőszakmentességről és a kényszermentességről',
    dir: 'ltr',
    heroTitle: 'Az egyszerű igazság:',
    heroSubtitle: 'Egy békés világról már régen egyetértünk',
    heroLead: `Minden nyelven, minden kultúrában és minden országban ugyanazt szeretnék az emberek: erőszak és kényszer nélkül élni. Háború, elnyomás és viszály mégis van. Egyetlen közös nyilatkozat mindent megváltoztat.`,
    visionTitle: 'A látomás',
    visionText: `Világméretű digitális felület, ahol bármely ország polgára személyesen nyilatkozik arról, hogy elkötelezi magát az erőszakmentesség és a kényszermentesség mellett — és együtt bizonyítjuk be, hogy a csendes többség ugyanarra a békés világra vágyik.`,
    missionTitle: 'A cél',
    missionText: `Gyakorlati eszközt adni a bizalom újjáépítéséhez egymással szemben álló közösségek és nemzetek között. Megkerüljük az intézményes diplomáciát, hogy valódi, alulról jövő egyetértés szülessen — béke a hétköznapok felől.`,
    principleTitle: 'A vezérelv',
    principleText: `Az egyetértések adatbázisa bizonyítja majd, hogy a világ csendes többsége a mély politikai és kulturális különbségek ellenére ugyanazt az alapvető vágyat osztja: erőszak és kényszer nélküli életet.`,

    audienceTabs: [
      {
        id: 'szabadsag',
        label: 'Szabadság kényszer nélkül',
        title: 'Egy ország, amely tudja, mit jelent a kényszer',
        text: `1848 és 1956 után Magyarországon nem kell magyarázni, milyen az, amikor kívülről mondják meg valakinek, hogyan éljen. Ez a megállapodás pontosan ezt zárja ki, első személyben: sem embernek, sem intézménynek nincs joga elsőként erőszakhoz nyúlni. Aki aláírja, nem a védekezésről mond le, hanem arról, hogy ő kényszerítsen másokat.`
      },
      {
        id: 'szomszedsag',
        label: 'Jó szomszédság',
        title: 'Kevert vidékek, közös élet',
        text: `A Kárpát-medencében évszázadok óta élnek egymás mellett más-más nyelvű és hitű közösségek. A béke itt sosem attól lett, hogy valamelyik fél nyert, hanem attól, hogy megegyeztek. Ez az oldal ugyanezt kínálja, csak nem országok, hanem emberek között: egy aláírás, amely a szomszédnak szól, nem ellene.`
      }
    ],

    infographic1Alt: 'Az egyszerű igazság – már egyetértünk',
    infographic2Alt: 'Egy emberiség, egy megállapodás – út a világbékéhez',
    infographic1Caption: 'Az 1💗1 megállapodás alapelvei',
    infographic2Caption: 'Út a világ békéjéhez és szabadságához',

    peaceTitle: 'Az ember tragédiája — Madách Imre, 1861',
    peaceText: `„Mondottam, ember: küzdj és bízva bízzál!"

A bizalom nem naivság. Ez az egyetlen dolog, amit senki nem tud helyetted megtenni.`,

    journeyTitle: 'Kilencmilliárd lépésnyi út',
    journeyText: `Igazi béke csak akkor lesz, amikor kilencmilliárd ember annyira megbízik egymásban, hogy leteszi azokat a fegyvereket, amelyek a másik kényszerítésére és egyformává tételére valók.
Ez a felület nem erkölcsi menekülés a valóság elől — itt derül ki, hogy a kerítés túloldalán élők pontosan ugyanazokat a szent értékeket vallják: a szabadságot és a békét.
Kilencmilliárd lépésnyi út. Neked csak a saját egy lépésed jut, és fontos, hogy megtedd — mert helyetted senki más nem teheti meg.`,

    ctaTitle: 'Csatlakozz a megállapodáshoz',
    ctaText: 'Nyilatkozz arról, hogy elköteleződsz egy békés világ mellett',
    ctaButton: 'Aláírom a megállapodást',
    contactText: 'Kérdés, kapcsolat:',
    communityLinkText: `A világméretű megállapodás`,
    teamLinkText: `Csatlakozz a csapathoz, vagy támogasd a munkát az 1💗1-en`
  },

  // ── JAPANESE ──────────────────────────────────────────────────────────────
  ja: {
    pageTitle: '私たちについて | 平和と安全のための合意',
    metaDescription:
      '非暴力と非強制を個人として宣言するための世界的なプラットフォーム',
    dir: 'ltr',
    heroTitle: '単純な真実：',
    heroSubtitle: '私たちはすでに、平和な世界に合意しています',
    heroLead: `どの言語、どの文化、どの国でも、人々は同じ根本的な願いを分かち合っています — 暴力と強制のない自由な暮らしです。それでも戦争や抑圧、対立は続いています。ひとつに束ねられた宣言が、すべてを変えます。`,
    visionTitle: 'ビジョン',
    visionText: `世界中の市民が、非暴力と非強制の原則への自らの約束を個人として宣言する、グローバルなデジタル・プラットフォーム。そして沈黙する多数派が同じ平和な世界を望んでいることを、ともに証明します。`,
    missionTitle: 'ミッション',
    missionText: `対立するコミュニティや国家のあいだで信頼を回復するための、実践的な道具となること。制度化された外交を迂回し、市民の側から本物の合意をつくります — 下からの平和です。`,
    principleTitle: '指針となる原則',
    principleText: `合意のデータベースは、深い政治的・文化的な違いを越えて、世界の沈黙する多数派が「暴力と強制のない暮らし」という根本的な願いを共有していることを示します。`,

    audienceTabs: [
      {
        id: 'wa',
        label: '和を以て貴しと為す',
        title: '争わないことを根本に',
        text: `十七条憲法の第一条は「和を以て貴しと為し、忤ふること無きを宗とせよ」で始まります。和とは意見が同じことではなく、違いを力で解決しないということです。この合意はそれを一人称で言い直したものにすぎません——私は先に力を用いない。守りを手放すのではなく、先に強いる側になることを手放すのです。`
      },
      {
        id: 'fusen',
        label: '不戦の誓い',
        title: '戦争を知る社会からの一歩',
        text: `戦争がどこへ行き着くかを身をもって知る社会だからこそ、「二度と繰り返さない」という言葉は重く響きます。けれどもその誓いは、まだ一人ひとりの名前では書かれていません。ここでできるのは、まさにそれです。名前を記した一つの宣言が、何百万もの宣言とともに数えられる形になります。`
      }
    ],

    infographic1Alt: '単純な真実 - 私たちはすでに合意している',
    infographic2Alt: 'ひとつの人類、ひとつの合意 - 世界平和への道',
    infographic1Caption: '1💗1合意の原則',
    infographic2Caption: '世界の平和と自由への道',

    peaceTitle: '十七条憲法 第一条 — 聖徳太子、604年',
    peaceText: `「和を以て貴しと為し、忤ふること無きを宗とせよ。」

——和をなによりも大切にし、争わないことを根本としなさい。
千四百年前に書かれた最初の一条が、今も同じことを求めています。`,

    journeyTitle: '90億歩の旅',
    journeyText: `本当の平和は、90億の人々が互いを十分に信頼し、他者を強制し従わせるための武器を置いたときにはじめて訪れます。
このプラットフォームは道徳的な現実逃避ではありません。塀の向こう側の人々も、自由と平和というまったく同じ神聖な価値に心から同意していると気づく場所です。
これは90億歩の旅です。あなたが歩めるのは、あなた自身の一歩だけ。そしてその一歩はとても大切です — ほかの誰も、あなたの代わりに歩むことはできないのですから。`,

    ctaTitle: '合意に加わる',
    ctaText: '平和な世界への約束を宣言してください',
    ctaButton: '合意に署名する',
    contactText: 'お問い合わせ：',
    communityLinkText: `世界の合意`,
    teamLinkText: `チームに加わる、または 1💗1 での活動を支援する`
  }
};
