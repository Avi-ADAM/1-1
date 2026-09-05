<script>
  import { userName } from '../../stores/store.js';
  import { show } from '../registration/store-show.js';
  import Hello from '../registration/hello.svelte';
  import Share from '$lib/components/share/shareButtons/index.svelte';
  import Confetti from 'svelte-confetti';
  import { lang } from '$lib/stores/lang.js';
  import { localeDir } from '$lib/config/locales.js';
  import { t } from '$lib/translations';
let { idx = 1 } = $props();
  let dir = $derived(localeDir($lang));
  let confettiActive = true;

  const shareProps = {
    title: {
      he: 'הצטרפתי להסכמה!',
      en: 'I joined the agreement!',
      ar: 'انضممت إلى الاتفاقية!',
      fa: 'به پیمان پیوستم!',
      es: '¡Me uní al acuerdo!',
      fr: "J'ai rejoint l'accord !",
      de: 'Ich habe mich der Vereinbarung angeschlossen!',
      hu: 'Csatlakoztam a megállapodáshoz!',
      ru: 'Я присоединился к соглашению!',
      zh: '我加入了这份协议！',
      ja: '合意に加わりました！'
    },
    body: {
      he: 'הצטרפתי להסכמה לחירות ושלום בעולם. הצטרפו גם אתם!',
      en: 'I joined the agreement for Freedom and peace in the world. Join us too!',
      ar: 'انضممت إلى اتفاقية الحب والسلام في العالم. انضموا إلينا أيضاً!',
      fa: 'به پیمان آزادی و صلح در جهان پیوستم. شما هم بپیوندید!',
      es: 'Me uní al acuerdo por la libertad y la paz en el mundo. ¡Únete tú también!',
      fr: "J'ai rejoint l'accord pour la liberté et la paix dans le monde. Rejoignez-nous aussi !",
      de: 'Ich habe mich der Vereinbarung für Freiheit und Frieden in der Welt angeschlossen. Mach auch du mit!',
      hu: 'Csatlakoztam a világ szabadságáért és békéjéért kötött megállapodáshoz. Tarts velünk te is!',
      ru: 'Я присоединился к соглашению за свободу и мир во всём мире. Присоединяйтесь и вы!',
      zh: '我加入了为世界自由与和平而立的协议。也来加入我们吧！',
      ja: '世界の自由と平和のための合意に加わりました。あなたもぜひご一緒に！'
    }
  };

  // Fall back to English for languages without their own copy here.
  const pick = (map) => map[$lang] ?? map.en;

  function goToRegister() {
    window.location.href = `https://www.1lev1.com/hascama?${localStorage.getItem('linkos')}`;
  }
  const levRecomend = {
    he: 'ברכותינו על הצטרפותך להסכמה! כעת אנו מזמינים אותך להירשם לאתר 1💗1 - פלטפורמה ייחודית לניהול ויצירת שותפויות בהסכמה. כאן תוכל ליצור קשרים משמעותיים ולהשתתף בפרויקטים משותפים למען עולם טוב יותר.',
    en: 'Congratulations on joining the agreement! Now we invite you to register to the  1💗1 website - a unique platform for managing and creating partnerships in agreement. Here you can create meaningful connections and participate in joint projects for a better world.',
    ar: 'تهانينا على انضمامك إلى الاتفاقية! ندعوك الآن للتسجيل في موقع 1💗1 - منصة فريدة لإدارة وإنشاء الشراكات بالاتفاق. هنا يمكنك إنشاء اتصالات ذات معنى والمشاركة في مشاريع مشتركة من أجل عالم أفضل.',
    fa: 'از پیوستن شما به این پیمان سپاسگزاریم! اکنون شما را به ثبت‌نام در وبگاه 1💗1 دعوت می‌کنیم — سکویی یگانه برای ساختن و اداره کردن همکاری‌ها بر پایهٔ رضایت متقابل. اینجا می‌توانید پیوندهای معنادار بسازید و در کارهای مشترک برای جهانی بهتر شریک شوید.',
    es: '¡Felicidades por unirte al acuerdo! Ahora te invitamos a registrarte en el sitio 1💗1: una plataforma única para crear y gestionar asociaciones de mutuo acuerdo. Aquí podrás crear vínculos significativos y participar en proyectos conjuntos por un mundo mejor.',
    fr: "Félicitations d'avoir rejoint l'accord ! Nous vous invitons maintenant à vous inscrire sur le site 1💗1 : une plateforme unique pour créer et gérer des partenariats par consentement mutuel. Vous pourrez y nouer des liens porteurs de sens et participer à des projets communs pour un monde meilleur.",
    de: 'Herzlichen Glückwunsch zum Beitritt zur Vereinbarung! Wir laden dich nun ein, dich auf 1💗1 zu registrieren – einer einzigartigen Plattform, um Partnerschaften im gegenseitigen Einvernehmen zu schaffen und zu führen. Hier kannst du bedeutsame Verbindungen knüpfen und dich an gemeinsamen Projekten für eine bessere Welt beteiligen.',
    hu: 'Köszönjük, hogy csatlakoztál a megállapodáshoz! Most arra hívunk, hogy regisztrálj az 1💗1 oldalon – ez egy különleges felület, ahol kölcsönös egyetértéssel lehet együttműködéseket létrehozni és működtetni. Itt valódi kapcsolatokat építhetsz, és bekapcsolódhatsz egy jobb világért indított közös munkákba.',
    ru: 'Поздравляем с присоединением к соглашению! Теперь приглашаем вас зарегистрироваться на сайте 1💗1 — уникальной платформе для создания и ведения партнёрств по взаимному согласию. Здесь вы сможете создавать значимые связи и участвовать в совместных проектах ради лучшего мира.',
    zh: '恭喜你加入这份协议！现在我们邀请你注册 1💗1 网站——一个以相互同意来创建和管理合作关系的独特平台。在这里，你可以建立有意义的联系，并参与共创更美好世界的合作项目。',
    ja: '合意へのご参加おめでとうございます！次はぜひ 1💗1 に登録してください。相互の合意にもとづいてパートナーシップをつくり、運営するための独自のプラットフォームです。ここで意味のあるつながりを築き、より良い世界のための共同プロジェクトに参加できます。'
  }
  function onProgres() {
    confettiActive = true;
    setTimeout(() => {
      confettiActive = false;
    }, 5000); // Confetti will be active for 5 seconds
  }
</script>
  {#if confettiActive}
    <Confetti />
  {/if}
<main class="page" {dir}>

  <div class="card" {dir}>
    <div class="card-inner bg-gold ">
    <section class="hero" {dir}>
      <div class="greeting">
        <Hello {idx} {onProgres} />
   
      </div>


    </section>

    <aside class="actions">
      <div class="navigation-links">
        <a href="/" class="nav-link about-link">
          {$t('love.menu.about')}
        </a>
        <a href="/love" class="nav-link love-link">
          {$t('love.menu.map')}
        </a>
        <a href="https://www.1lev1.com/project/15" class="nav-link volunteer-link" target="_blank" rel="noopener noreferrer">
          {$lang === 'he' ? 'להתנדבות ותמיכה בעשיה' : $lang === 'en' ? 'Volunteer and support the initiative' : 'للتطوع ودعم المبادرة'}
        </a>
      </div>
      <div class="p-4 shadow-xl shadow-barbi">
            <div class="texts">
        <p class={dir}>{pick(levRecomend)}</p>
      </div>
      <button class="register-button" onclick={goToRegister} aria-label="Register">
        {$t('love.menu.register')}
      </button>
    </div>
 </aside>
</div>
  <div class="share-wrap" aria-hidden="false">
        <Share 
          title={pick(shareProps.title)}
          desc={pick(shareProps.body)}
          hashtags={['love', 'peace', 'agreement', '1lev1']}
          quote={pick(shareProps.body)}
          body={pick(shareProps.body)}/>
      </div>
   </div>


</main>

<style>
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
    background-color: #bbf0f3;
    background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
    background-size: 100% 100%; 
     box-sizing: border-box;
}

/* הכרטיס המרכזי */
.card {
  width: 100%;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(6px);
  border-radius: 14px;
  box-shadow: 0 6px 30px rgba(0,0,0,0.08);
  display: grid;
  grid-template-columns: 3fr 1fr ;
  padding: 3rem;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.card-inner {
  width: 100%;
  backdrop-filter: blur(6px);
  border-radius: 14px;
  box-shadow: 0 6px 30px rgba(0,0,0,0.08);
  display: grid;
  grid-template-columns: 1fr  ;
  padding: 3rem;
  justify-content: center; 
  align-items: center;
  position: relative;
  overflow: hidden;
}
/* מבנה פנימי - בדסקטופ נעבור לעמודות */
@media (min-width: 1200px) {
  .card {
    grid-template-columns: 4fr 1fr ;
  }
  .card-inner {
    grid-template-columns: 2fr 1fr ;
  }
}

.hero {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: middle;
}

/* עבור RTL - יישור לימין */
.hero[dir="rtl"] {
  align-items: middle;
}

.greeting {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.name {
  font-weight: 600;
  color: var(--barbi-pink, #ff5c8a);
  margin: 0;
}

.texts {
  font-size: 1.05rem;
  line-height: 1.5;
  color: #333;
}

/* נפרד סגנון RTL עבור טקסטים בעברית/ערבית */
.rtl { text-align: right; direction: rtl; }
.ltr { text-align: left; direction: ltr; }

/* אזור הפעולות והשתף */
.actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
  justify-content: center;
}

.navigation-links {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-link {
  padding: 0.5rem 1rem;
  background-color: rgba(255, 92, 138, 0.1);
  color: var(--barbi-pink, #ff5c8a);
  text-decoration: none;
  border-radius: 20px;
  font-size: 1.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 92, 138, 0.2);
}

.nav-link:hover {
  background-color: rgba(255, 92, 138, 0.2);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 92, 138, 0.15);
}

.register-button {
  font-size: 1rem;
  color: var(--barbi-pink, #ff5c8a);
  background-color: var(--gold, #fff);
  padding: 0.75rem 1rem;
  border: 1px solid var(--barbi-pink, #ff5c8a);
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 6px 18px rgba(255,92,138,0.18);
  width: 100%;
}

.register-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(255,92,138,0.22);
}

/* Share component wrapper */
.share-wrap {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  overflow: visible;
  min-height: 50px;
}

/* מניעת גרירת אלמנטים כשהשיתוף נפתח */
.share-wrap :global(.share-dropdown),
.share-wrap :global(.share-menu) {
  position: absolute !important;
  top: 100% !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  z-index: 1000 !important;
  background: white !important;
  border-radius: 8px !important;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
  padding: 0.5rem !important;
  margin-top: 0.5rem !important;
  width: max-content !important;
}

.share-wrap :global(.share-button) {
  background: rgba(255, 92, 138, 0.1) !important;
  border: 1px solid rgba(255, 92, 138, 0.2) !important;
  border-radius: 6px !important;
  padding: 0.5rem 1rem !important;
  color: var(--barbi-pink, #ff5c8a) !important;
  font-weight: 500 !important;
  transition: all 0.2s ease !important;
}

.share-wrap :global(.share-button:hover) {
  background: rgba(255, 92, 138, 0.2) !important;
  transform: translateY(-1px) !important;
}

/* ריספונסיביות נוספת למסכים קטנים */
@media (max-width: 799px) {
  .card {
    padding: 1rem;
    background-position: center bottom;
    background-size: 90px;
  }

  .texts { font-size: 1rem; }
  .register-button { padding: 0.85rem; }
}
</style>
