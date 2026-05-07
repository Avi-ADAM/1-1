<script>
  import { t, locale } from '$lib/translations';
  import { lang, doesLang, langUs } from '$lib/stores/lang.js';
  import { derived } from 'svelte/store';

  // ── Infographic images (place in /static/infographics/) ──────────────────
  //const INFOGRAPHIC_1 = '/he/infographic-consensus.png'; // unnamed.png  → rename
  //const INFOGRAPHIC_2 = '/he/infographic-agreement.png'; // unnamed__1___2_.png → rename

  // ── Language metadata ─────────────────────────────────────────────────────
  const RTL_LANGS = ['he', 'ar'];

  // ── All content keyed by locale ───────────────────────────────────────────
  const CONTENT = {
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

      rabiTitle: 'תפילה לשלום / רבי נחמן מברסלב',
      rabiText: `אדון השלום, מלך שהשלום שלו, עושה שלום ובורא הכל.
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
      contactText: 'הערות ויצירת קשר:'
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

      rabiTitle: 'Prayer for Peace — Rabbi Nachman of Breslov',
      rabiText: `Master of peace, King whose peace is His, Maker of peace and Creator of all.
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
      contactText: 'Questions & contact:'
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
      infographic2Alt:
        'إنسانية واحدة، اتفاقية واحدة - الطريق إلى السلام العالمي',
      infographic1Caption: 'مبادئ اتفاقية 1💗1',
      infographic2Caption: 'الطريق إلى السلام العالمي والحرية',

      rabiTitle: 'صلاة من أجل السلام',
      rabiText: `يا رب السلام، ملك السلام،
أسألك أن تُزيل الحروب وسفك الدماء من العالم
وأن تُحل سلاماً عظيماً ورائعاً —
لا يرفع شعب على شعب سيفاً ولا يتعلمون الحرب بعد الآن.`,

      journeyTitle: 'رحلة الـ 9 مليارات خطوة',
      journeyText: `السلام الحقيقي لن يتحقق إلا عندما يثق 9 مليارات إنسان ببعضهم البعض بما يكفي لوضع الأسلحة التي تهدف إلى إكراه الآخرين.
هذه المنصة ليست هروباً من الواقع — إنها المكان الذي نكتشف فيه أن الأشخاص خلف الأسوار يوافقون بحماس على نفس القيم المقدسة للحرية والسلام.
إنها رحلة تتكون من 9 مليارات خطوة. لا يمكنك سوى اتخاذ خطوتك الخاصة، ومن الضروري أن تفعل ذلك — لأنه لا أحد يستطيع اتخاذها نيابة عنك.`,

      ctaTitle: 'انضم إلى الاتفاقية',
      ctaText: 'أعلن التزامك بعالم سلمي',
      ctaButton: 'وقّع الاتفاقية',
      contactText: 'للاستفسارات والتواصل:'
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
          id: 'main',
          label: 'Свобода без принуждения',
          title: 'Свобода без принуждения',
          text: `Настоящий мир строится на взаимном уважении и свободе от принуждения. Принцип ненападения — что ни одно лицо или институт не вправе инициировать насилие против другого — является основой цивилизованного общества. Это соглашение защищает вашу жизнь, собственность и сообщество от насилия и принуждения любого рода.`
        }
      ],

      infographic1Alt: 'Простая истина - мы уже согласны',
      infographic2Alt: 'Одно человечество, одно соглашение',
      infographic1Caption: 'Принципы соглашения 1💗1',
      infographic2Caption: 'Путь к всеобщему миру и свободе',

      rabiTitle: 'Молитва о мире — рабби Нахман из Брeslav',
      rabiText: `Владыка мира, Царь, чей мир — Его,
да будет воля Твоя упразднить войны и кровопролитие с земли
и даровать великий и чудесный мир миру —
и не поднимет народ на народ меча, и не будут более учиться воевать.`,

      journeyTitle: 'Путешествие в 9 миллиардов шагов',
      journeyText: `Истинный мир наступит только тогда, когда 9 миллиардов человек будут доверять друг другу настолько, чтобы сложить оружие, предназначенное для принуждения других.
Эта платформа — не бегство от реальности. Это место, где мы обнаруживаем, что люди по ту сторону забора с энтузиазмом разделяют те же священные ценности свободы и мира.
Это путешествие в 9 миллиардов шагов. Каждый может сделать только свой собственный шаг, и очень важно, чтобы вы его сделали — потому что никто другой не сможет сделать его за вас.`,

      ctaTitle: 'Присоединяйтесь к соглашению',
      ctaText: 'Заявите о своей приверженности мирному миру',
      ctaButton: 'Подписать соглашение',
      contactText: 'Вопросы и контакт:'
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
          id: 'main',
          label: 'Liberté sans coercition',
          title: 'Liberté sans coercition',
          text: `La véritable paix repose sur le respect mutuel et la liberté de coercition. Le principe de non-agression — qu'aucune personne ou institution n'a le droit d'initier la force contre une autre — est le fondement de la société civilisée. Cet accord protège votre vie, vos biens et votre communauté contre toute forme de violence et de coercition.`
        }
      ],

      infographic1Alt: "La vérité simple - nous sommes déjà d'accord",
      infographic2Alt:
        'Une humanité, un accord - La voie vers la paix mondiale',
      infographic1Caption: "Principes de l'accord 1💗1",
      infographic2Caption: 'La voie vers la paix et la liberté mondiales',

      rabiTitle: 'Prière pour la paix — Rabbi Nachman de Breslov',
      rabiText: `Maître de la paix, Roi dont la paix est Sienne,
que Ta volonté soit d'abolir les guerres et les effusions de sang du monde
et d'apporter une grande et merveilleuse paix au monde —
les nations ne lèveront plus l'épée les unes contre les autres, et elles n'apprendront plus la guerre.`,

      journeyTitle: 'Un voyage de 9 milliards de pas',
      journeyText: `La véritable paix ne viendra que lorsque 9 milliards de personnes se feront suffisamment confiance pour déposer les armes destinées à contraindre les autres.
Cette plateforme n'est pas une fuite en avant — c'est le lieu où nous découvrons que les gens de l'autre côté de la barrière partagent avec enthousiasme les mêmes valeurs sacrées de liberté et de paix.
C'est un voyage de 9 milliards de pas. Vous ne pouvez faire que votre propre pas, et il est crucial que vous le fassiez — car personne d'autre ne peut le faire à votre place.`,

      ctaTitle: "Rejoignez l'accord",
      ctaText: 'Déclarez votre engagement pour un monde pacifique',
      ctaButton: "Signer l'accord",
      contactText: 'Questions et contact :'
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
          id: 'main',
          label: '没有强制的自由',
          title: '没有强制的自由',
          text: `真正的和平建立在相互尊重和免于强制的自由之上。不侵犯原则——任何人或机构都无权对另一方发动武力——是文明社会的基石。这份协议保护您的生活、财产和社区免受任何形式的暴力和强制。`
        }
      ],

      infographic1Alt: '简单的真相 - 我们已经达成共识',
      infographic2Alt: '一个人类，一个协议 - 通向世界和平之路',
      infographic1Caption: '1💗1协议原则',
      infographic2Caption: '通向全球和平与自由之路',

      rabiTitle: '和平祈祷——布雷斯洛夫的拉比·纳赫曼',
      rabiText: `和平之主，和平属于祂的王，
愿祢从世界上消除战争和流血，
为世界带来伟大而奇妙的和平——
各国不再以刀剑相向，不再学习战争。`,

      journeyTitle: '90亿步的旅程',
      journeyText: `只有当90亿人彼此建立足够的信任，放下那些用来压迫和胁迫他人的武器时，真正的和平才会降临。
这个平台不是逃避现实——在这里我们会发现，围墙另一边的人们同样热切地认同自由与和平的神圣价值观。
这是一场90亿步的旅程。每个人只能迈出属于自己的一步，而你迈出这一步至关重要——因为没有人能代替你走。`,

      ctaTitle: '加入协议',
      ctaText: '宣告您对和平世界的承诺',
      ctaButton: '签署协议',
      contactText: '问题与联系：'
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
          id: 'main',
          label: 'Libertad sin coerción',
          title: 'Libertad sin coerción',
          text: `La verdadera paz se construye sobre el respeto mutuo y la libertad de coerción. El principio de no agresión — que ninguna persona o institución tiene el derecho de iniciar la fuerza contra otra — es la base de la sociedad civilizada. Este acuerdo protege su vida, propiedad y comunidad de cualquier forma de violencia y coerción.`
        }
      ],

      infographic1Alt: 'La verdad simple - ya estamos de acuerdo',
      infographic2Alt:
        'Una humanidad, un acuerdo - El camino hacia la paz mundial',
      infographic1Caption: 'Principios del acuerdo 1💗1',
      infographic2Caption: 'El camino hacia la paz y la libertad mundiales',

      rabiTitle: 'Oración por la paz — Rabí Najmán de Breslov',
      rabiText: `Señor de la paz, Rey cuya paz es Suya,
que sea Tu voluntad abolir las guerras y el derramamiento de sangre del mundo
y traer una gran y maravillosa paz al mundo —
las naciones no levantarán más espada contra nación, ni aprenderán más la guerra.`,

      journeyTitle: 'Un viaje de 9 mil millones de pasos',
      journeyText: `La verdadera paz solo llegará cuando 9 mil millones de personas confíen lo suficiente unas en otras como para deponer las armas destinadas a coaccionar a los demás.
Esta plataforma no es escapismo moral: es el lugar donde descubrimos que las personas al otro lado de la valla están de acuerdo con los mismos valores sagrados de libertad y paz.
Es un viaje de 9 mil millones de pasos. Solo puedes dar tu propio paso, y es crucial que lo hagas, porque nadie más puede darlo por ti.`,

      ctaTitle: 'Únase al acuerdo',
      ctaText: 'Declare su compromiso con un mundo pacífico',
      ctaButton: 'Firmar el acuerdo',
      contactText: 'Preguntas y contacto:'
    }
  };

  // ── Reactive state ────────────────────────────────────────────────────────
  let currentLang = $state('he');
  let activeTab = $state(0);

  // ── Background image rotation ─────────────────────────────────────────────
  const BG_IMAGES = [3, 6];
  let bgIndex = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      bgIndex = (bgIndex + 1) % BG_IMAGES.length;
    }, 15000);
    return () => clearInterval(interval);
  });

  // Listen to the store
  $effect(() => {
    const unsubscribe = locale.subscribe((val) => {
      if (val && CONTENT[val]) {
        currentLang = val;
        activeTab = 0;
      }
    });
    return unsubscribe;
  });

  let content = $derived(CONTENT[currentLang] || CONTENT['he']);
  let isRTL = $derived(RTL_LANGS.includes(currentLang));

  // All supported languages for the switcher
  const LANGUAGES = [
    { code: 'he', label: 'עברית', flag: '🇮🇱' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🌍' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'es', label: 'Español', flag: '🇪🇸' }
  ];

  function switchLang(code) {
    locale.set(code);
    currentLang = code;
    activeTab = 0;
  }
</script>

<svelte:head>
  <title>{content.pageTitle}</title>
  <meta name="description" content={content.metaDescription} />
</svelte:head>

<!-- ═══════════════════════════════════════════════════════════════════════════
     ABOUT PAGE
════════════════════════════════════════════════════════════════════════════ -->
<div
  class="about-root min-h-screen bg-black text-white overflow-x-hidden relative"
  dir={content.dir}
  lang={currentLang}
>
  <!-- Light dimming overlay -->
  <div class="fixed inset-0 pointer-events-none bg-black/20 z-[60]"></div>

  <!-- ── Hero banner ──────────────────────────────────────────────────────── -->

  <div class="relative w-full overflow-hidden" style="aspect-ratio: 9/2;">
    {#each BG_IMAGES as bg, i}
      <div 
        class="absolute inset-0 w-full h-full transition-all duration-[3000ms] ease-in-out {bgIndex === i ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}"
      >
        <picture>
          <source srcset="/bg/{bg}.png" type="image/webp" />
          <img
            src="/bg/{bg}.png"
            alt="שלום"
            class="w-full h-full object-cover"
          />
        </picture>
      </div>
    {/each}

    <div
      class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10"
    ></div>

    <!-- Language switcher — always top-right visually -->
    <div class="absolute top-3 end-3 z-20">
      <div class="flex flex-wrap gap-1 justify-end">
        {#each LANGUAGES as lng}
          <button
            onclick={() => switchLang(lng.code)}
            class="px-2 py-1 rounded text-xs font-semibold transition-all duration-200
              {currentLang === lng.code
              ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/40'
              : 'bg-white/10 hover:bg-white/20 text-white/80 backdrop-blur-sm'}"
            title={lng.label}
          >
            {lng.flag}
            {lng.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- Hero text overlay -->
    <div class="absolute bottom-4 start-0 end-0 px-6 text-center">
      <h1
        class="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-2xl leading-tight"
      >
        <span class="text-pink-400">{content.heroTitle}</span><br />
        {content.heroSubtitle}
      </h1>
    </div>
  </div>

  <!-- ── Hero lead text ──────────────────────────────────────────────────── -->
  <div class="max-w-3xl mx-auto px-6 py-8 text-center">
    <p
      class="text-cyan-300 text-base sm:text-lg leading-relaxed whitespace-pre-line font-light"
    >
      {content.heroLead}
    </p>
  </div>

  <!-- ── Vision / Mission / Principle cards ─────────────────────────────── -->
  <div class="max-w-5xl mx-auto px-4 pb-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Vision -->
      <div
        class="rounded-2xl bg-gradient-to-br from-pink-900/40 to-purple-900/40 border border-pink-500/20 p-6 backdrop-blur-sm"
      >
        <div class="text-3xl mb-3 text-center">💗</div>
        <h2 class="text-pink-400 font-bold text-lg mb-3 text-center">
          {content.visionTitle}
        </h2>
        <p class="text-white/80 text-sm leading-relaxed text-center">
          {content.visionText}
        </p>
      </div>

      <!-- Mission -->
      <div
        class="rounded-2xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/20 p-6 backdrop-blur-sm"
      >
        <div class="text-3xl mb-3 text-center">🌍</div>
        <h2 class="text-cyan-400 font-bold text-lg mb-3 text-center">
          {content.missionTitle}
        </h2>
        <p class="text-white/80 text-sm leading-relaxed text-center">
          {content.missionText}
        </p>
      </div>

      <!-- Principle -->
      <div
        class="rounded-2xl bg-gradient-to-br from-amber-900/40 to-orange-900/40 border border-amber-500/20 p-6 backdrop-blur-sm"
      >
        <div class="text-3xl mb-3 text-center">✨</div>
        <h2 class="text-amber-400 font-bold text-lg mb-3 text-center">
          {content.principleTitle}
        </h2>
        <p class="text-white/80 text-sm leading-relaxed text-center">
          {content.principleText}
        </p>
      </div>
    </div>
  </div>

  <!-- ── Infographics ────────────────────────────────────────────────────── -->
  <div class="max-w-6xl mx-auto px-4 pb-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <!-- Infographic 1 
      {#if lang == 'he'}
        <figure
          class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-pink-900/20 bg-white/5"
        >
          <img
            src={INFOGRAPHIC_1}
            alt={content.infographic1Alt}
            class="w-full h-auto object-contain"
            loading="lazy"
          />
          <figcaption class="text-center text-white/60 text-sm py-3 px-4">
            {content.infographic1Caption}
          </figcaption>
        </figure>

      -->
      <!-- Infographic 2  --><!----
        <figure
          class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20 bg-white/5"
        >
          <img
            src={INFOGRAPHIC_2}
            alt={content.infographic2Alt}
            class="w-full h-auto object-contain"
            loading="lazy"
          />
          <figcaption class="text-center text-white/60 text-sm py-3 px-4">
            {content.infographic2Caption}
          </figcaption>
        </figure>
      {/if}-->
    </div>
  </div>

  <!-- ── Audience-specific tabs ──────────────────────────────────────────── -->
  {#if content.audienceTabs && content.audienceTabs.length > 1}
    <div class="max-w-3xl mx-auto px-4 pb-10">
      <div class="rounded-2xl border border-white/10 overflow-hidden">
        <!-- Tab buttons -->
        <div class="flex" role="tablist">
          {#each content.audienceTabs as tab, i}
            <button
              role="tab"
              aria-selected={activeTab === i}
              onclick={() => (activeTab = i)}
              class="flex-1 py-3 px-4 text-sm font-semibold transition-all duration-200 border-b-2
              {activeTab === i
                ? 'bg-pink-500/20 border-pink-500 text-pink-300'
                : 'bg-white/5 border-transparent text-white/50 hover:text-white/80 hover:bg-white/10'}"
            >
              {tab.label}
            </button>
          {/each}
        </div>

        <!-- Tab content -->
        <div class="p-6 bg-white/5">
          <h3 class="text-pink-300 font-bold text-lg mb-3">
            {content.audienceTabs[activeTab].title}
          </h3>
          <p class="text-white/80 leading-relaxed">
            {content.audienceTabs[activeTab].text}
          </p>
        </div>
      </div>
    </div>
  {:else if content.audienceTabs && content.audienceTabs.length === 1}
    <div class="max-w-3xl mx-auto px-4 pb-10">
      <div class="rounded-2xl border border-pink-500/20 bg-pink-900/10 p-6">
        <h3 class="text-pink-300 font-bold text-lg mb-3">
          {content.audienceTabs[0].title}
        </h3>
        <p class="text-white/80 leading-relaxed">
          {content.audienceTabs[0].text}
        </p>
      </div>
    </div>
  {/if}

  <!-- ── Prayer / Rabi section ──────────────────────────────────────────── -->
  <div class="max-w-3xl mx-auto px-6 pb-10">
    <div
      class="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/60 to-blue-950/60 p-6 sm:p-8 text-center"
    >
      <div class="text-2xl mb-4">🕊️</div>
      <h3
        class="text-cyan-400 font-bold text-base mb-4"
        style="font-family: 'StamSefarad', serif;"
      >
        {content.rabiTitle}
      </h3>
      <p
        class="text-cyan-200/80 leading-loose whitespace-pre-line text-sm sm:text-base"
        style="font-family: 'StamSefarad', serif;"
      >
        {content.rabiText}
      </p>
    </div>
  </div>

  <!-- ── 9 Billion Steps Journey (NEW SECTION) ──────────────────────────── -->
  <div class="max-w-4xl mx-auto px-6 pb-12 text-center">
    <div
      class="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-pink-500/30 bg-black/40 shadow-2xl backdrop-blur-md"
    >
      <!-- decorative glow -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent pointer-events-none"
      ></div>

      <h3
        class="text-2xl sm:text-3xl font-bold text-pink-400 mb-6 drop-shadow-md"
      >
        {content.journeyTitle}
      </h3>
      <p
        class="text-white/90 text-lg sm:text-xl leading-relaxed whitespace-pre-line font-light"
      >
        {content.journeyText}
      </p>
    </div>
  </div>

  <!-- ── CTA ────────────────────────────────────────────────────────────── -->
  <div class="max-w-xl mx-auto px-6 pb-10 text-center">
    <div
      class="rounded-2xl bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-pink-500/30 p-8"
    >
      <div class="text-4xl mb-4">1💗1</div>
      <h2 class="text-white font-bold text-2xl mb-2">{content.ctaTitle}</h2>
      <p class="text-white/70 mb-6">{content.ctaText}</p>
      <a
        href="https://agreement.1lev1.com"
        target="_blank"
        class="inline-block bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400
               text-white font-bold py-3 px-8 rounded-full transition-all duration-200
               shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105"
      >
        {content.ctaButton}
      </a>
    </div>
  </div>

  <!-- ── Social links ───────────────────────────────────────────────────── -->
  <div class="pb-10 flex flex-wrap justify-center gap-4 px-4">
    <a
      target="_blank"
      href="https://www.facebook.com/onehHart1"
      class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-pink-300 text-sm transition-all"
    >
      <img
        height="20"
        width="20"
        alt="facebook"
        src="https://res.cloudinary.com/love1/image/upload/v1639258134/NicePng_oro-png_2336309_rkhbf8.png"
      />
      1💗1
    </a>
    <a
      target="_blank"
      href="https://www.facebook.com/worldnonviolent"
      class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-pink-300 text-sm transition-all"
    >
      <img
        height="20"
        width="20"
        alt="facebook"
        src="https://res.cloudinary.com/love1/image/upload/v1639258134/NicePng_oro-png_2336309_rkhbf8.png"
      />
      האמנה העולמית
    </a>
    <a
      target="_blank"
      href="https://discord.gg/DNaMwrXzyS"
      class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-pink-300 text-sm transition-all"
    >
      <img
        height="20"
        width="40"
        alt="Discord"
        src="https://res.cloudinary.com/love1/image/upload/v1641482980/discord-seeklogo.com_tkftet.svg"
      />
    </a>
    <a
      target="_blank"
      href="https://payboxapp.page.link/mXnKCtYiWADBgAcB8"
      class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-pink-300 text-sm transition-all"
    >
      <img
        height="20"
        width="40"
        alt="payBox"
        src="https://res.cloudinary.com/love1/image/upload/v1641485170/PBr_hdbfuv.png"
      />
    </a>
  </div>

  <!-- ── Contact footer ─────────────────────────────────────────────────── -->
  <div class="text-center pb-8 px-4">
    <p class="text-white/40 text-sm">
      {content.contactText}
      <a
        href="mailto:baruch@1lev1.com"
        class="text-pink-400 hover:text-pink-300 transition-colors"
      >
        baruch@1lev1.com
      </a>
    </p>
    <p class="text-white/30 text-xs mt-2">
      <a
        target="_blank"
        class="hover:text-pink-300 transition-colors"
        href="https://shalom.1lev1.world"
      >
        1💗1
      </a>
    </p>
  </div>

  <!-- ── Bottom Decorative Image ────────────────────────────────────────── -->
  <div
    class="w-full relative overflow-hidden mt-12"
    style="aspect-ratio: 1881/836; min-height: 300px;"
  >
    <img
      src="/bg/1.png"
      alt="background decoration"
      class="w-full h-full object-cover"
    />
    <!-- Gradient: Dimmed at top, full brightness at bottom -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent"
    ></div>
  </div>
</div>

<style>
  .about-root {
    font-family:
      'Segoe UI', 'Noto Sans Hebrew', 'Noto Sans Arabic', system-ui, sans-serif;
  }

  /* Logical properties for RTL/LTR layout */
  [dir='rtl'] .start-0 {
    right: 0;
    left: auto;
  }
  [dir='rtl'] .end-3 {
    left: 0.75rem;
    right: auto;
  }
  [dir='ltr'] .start-0 {
    left: 0;
    right: auto;
  }
  [dir='ltr'] .end-3 {
    right: 0.75rem;
    left: auto;
  }

  /* StamSefarad font for the prayer section */
  @font-face {
    font-family: 'StamSefarad';
    src: local('StamSefarad');
    font-display: swap;
  }

  /* Smooth tab transitions */
  [role='tabpanel'],
  .tab-content {
    animation: fadeIn 0.2s ease;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Mobile: full-width infographic images */
  @media (max-width: 640px) {
    figure img {
      max-height: 85vw;
      object-fit: contain;
    }
  }
</style>
