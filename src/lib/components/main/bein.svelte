<script>
  import { userName } from '../../stores/store.js';
  import { show } from '../registration/store-show.js';
  import Hello from '../registration/hello.svelte';
  import Share from '$lib/components/share/shareButtons/index.svelte';
  import Confetti from 'svelte-confetti';
  import { lang } from '$lib/stores/lang.js';
let { idx = 1 } = $props();
  let confettiActive = true;

  const shareProps = {
    title: {
      he: 'הצטרפתי להסכמה!',
      en: 'I joined the agreement!',
      ar: 'انضممت إلى الاتفاقية!'
    },
    body: {
      he: 'הצטרפתי להסכמה לחירות ושלום בעולם. הצטרפו גם אתם!',
      en: 'I joined the agreement for Freedom and peace in the world. Join us too!',
      ar: 'انضممت إلى اتفاقية الحب والسلام في العالم. انضموا إلينا أيضاً!'
    }
  };

  function goToRegister() {
    window.location.href = `https://www.1lev1.com?${encodeURIComponent(localStorage.getItem('linkos'))}`;
  }
  const levRecomend = {
    he: 'ברכותינו על הצטרפותך להסכמה! כעת אנו מזמינים אותך להירשם לאתר 1💗1 - פלטפורמה ייחודית לניהול ויצירת שותפויות בהסכמה. כאן תוכל ליצור קשרים משמעותיים ולהשתתף בפרויקטים משותפים למען עולם טוב יותר.',
    en: 'Congratulations on joining the agreement! Now we invite you to register to the  1💗1 website - a unique platform for managing and creating partnerships in agreement. Here you can create meaningful connections and participate in joint projects for a better world.',
    ar: 'تهانينا على انضمامك إلى الاتفاقية! ندعوك الآن للتسجيل في موقع 1💗1 - منصة فريدة لإدارة وإنشاء الشراكات بالاتفاق. هنا يمكنك إنشاء اتصالات ذات معنى والمشاركة في مشاريع مشتركة من أجل عالم أفضل.'
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
<main class="page" dir={$lang === 'en' ? 'ltr' : 'rtl'}>
  
  <div class="card" dir={$lang === 'en' ? 'ltr' : 'rtl'}>
    <div class="card-inner bg-gold ">
    <section class="hero" dir={$lang === 'en' ? 'ltr' : 'rtl'}>
      <div class="greeting">
        <Hello {idx} {onProgres} />
   
      </div>


    </section>

    <aside class="actions">
      <div class="navigation-links">
        <a href="/about" class="nav-link about-link">
          {$lang === 'he' ? 'אודות האמנה' : $lang === 'en' ? 'About the Charter' : 'حول الميثاق'}
        </a>
        <a href="/love" class="nav-link love-link">
          {$lang === 'he' ? 'מפת ההסכמה' : $lang === 'en' ? 'Agreement Map' : 'خريطة الاتفاقية'}
        </a>
      </div>
      <div class="p-4 shadow-xl shadow-barbi">
            <div class="texts">
        <p class={$lang === 'en' ? 'ltr' : 'rtl'}>{levRecomend[$lang]}</p>
      </div>
      <button class="register-button" onclick={goToRegister} aria-label="Register">
        {$lang === 'he' ? 'להרשמה ל- 1💗1' : $lang === 'en' ? 'Register to  1💗1' : 'التسجيل في  1💗1'}
      </button>
    </div>
 </aside>
</div>
  <div class="share-wrap" aria-hidden="false">
        <Share 
          title={shareProps.title[$lang]}
          desc={shareProps.body[$lang]}
          hashtags={['love', 'peace', 'agreement', '1lev1']}
          quote={shareProps.body[$lang]}
          body={shareProps.body[$lang]}/>
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
