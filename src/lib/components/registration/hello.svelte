<script>
   import { userName } from '../../stores/store.js';
    import { show } from './store-show.js';
        import { lang } from '$lib/stores/lang.js'

     import {
    fly
} from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
import { onMount } from 'svelte';
let first = {"he":"         לחיצה לפתיחת ", "en": "click to open          ", "ar": "      انقر للفتح"}
let second = {"he":"               1💗1", "en": "1💗1               ", "ar": "              1💗1"}
let sh = {"he":"שלום", "en": "Hello", "ar": "مرحبا"}
let sh2 = {"he":" הסכמתך התקבלה!", "en": "", "ar": "تم استلام موافقتك!"}
let sh3 = {"he":"הגעת למקום ה-", "en": "You are the ", "ar": "أنت ال "}
let sh1 = {"he":"", "en": "th to agree", "ar": " للموافقة"}
let sh4 = {"he":"כעת ביכולתך לפתוח", "en": "Now you can open", "ar": "الآن يمكنك الفتح"}
let sh5 = {"he":"את", "en": "", "ar": ""}
let sh6 = {"he":"1💗1 לפתיחת", "en": "Open 1💗1", "ar": "فتح 1💗1"}
let dira = {"he":"rtl", "en": "ltr", "ar": "rtl"}
    function reverseString(str) {
    return str.split("").reverse().join("");
}
onMount(async () =>{
  console.log($lang)
     if ((navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) {
      if($lang == "he" || $lang == "ar"){
  first = reverseString(first[$lang])
  first = first
      }
};
})
    function slidefade(node, params) {
        const existingTransform = getComputedStyle(node).transform.replace('none', '');

        return {
            delay: params.delay || 100,
            duration: params.duration || 4000,
            easing: params.easing || cubicOut,
            css: (t, u) => `translateY:(-40%); translateX: (50% ,100%); transform: ${existingTransform} scale(${t}); opacity: ${t};`
        };
    }
let show_value;


show.subscribe(newValue => {
  show_value = newValue;
});
  /**
   * @typedef {Object} Props
   * @property {number} [idx]
   * @property {(payload: { tx: number, txx: number }) => void} [onProgres]
   */

  /** @type {Props} */
  let { idx = 1,onProgres } = $props();


function increment() {
    onProgres({ tx: idx, txx: idx });
	};


</script>
<div class="midscreenText-2 flex flex-col items-center justify-center" dir={dira[$lang]}>
    <h1 class="a1"  dir={dira[$lang]}>
     {sh[$lang]}
   {$userName} 
        </h1>  <h1 class="a2"  dir={dira[$lang]}>
{sh2[$lang]}
          {sh3[$lang]}{idx}{sh1[$lang]} 
</h1><h1 class="a3"  dir={dira[$lang]}>
  {sh4[$lang]}   
  {sh5[$lang]}
    1💗1
 </h1></div>

<button 
out:fly={{y: -600, x: 2000,  opacity: 0.6, duration: 2200}} 
title={sh6[$lang]} class="mt-3 button" onclick={increment}>
<svg class="key" height="80%" width="80%" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="{`600 80 2222 918.656`}" enable-background="new 0 0 2722.126 1518.656" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient gradientUnits="userSpaceOnUse" cx="1023.699" cy="448.468" r="843.488" id="gradient-1" gradientTransform="matrix(1.964807, -0.050779, 0.025836, 0.999666, -1004.848942, 91.27403)">
      <stop offset="0" style="stop-color: rgb(177, 219, 207);"/>
      <stop offset="0.155" style="stop-color: rgb(221, 221, 221);"/>
      <stop offset="0.385" style="stop-color: rgb(165, 67, 162);"/>
      <stop offset="0.678" style="stop-color: rgb(63, 140, 163);"/>
      <stop offset="0.891" style="stop-color: rgb(160, 42, 154);"/>
      <stop offset="1" style="stop-color: rgb(215, 113, 171);"/>
    </radialGradient>
    <linearGradient gradientUnits="userSpaceOnUse" x1="1796.683" y1="46.512" x2="1796.683" y2="800.321" id="gradient-4" gradientTransform="matrix(1, 0, 0, 1, -5.591242, 39.141397)">
      <stop offset="0" style="stop-color: rgb(222, 176, 42);"/>
      <stop offset="0.412" style="stop-color: rgb(235, 8, 129);"/>
      <stop offset="0.836" style="stop-color: rgb(221, 177, 43);"/>
      <stop offset="1" style="stop-color: rgb(233, 46, 152);"/>
    </linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" x1="1744.24" y1="424.807" x2="1744.24" y2="488.636" id="gradient-2" gradientTransform="matrix(1, 0, 0, 1, -134.36475, 10.351013)">
      <stop offset="0" style="stop-color: rgb(56, 117, 125);"/>
      <stop offset="0.471" style="stop-color: rgb(114, 36, 116);"/>
      <stop offset="1" style="stop-color: rgb(164, 235, 246);"/>
    </linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" x1="1734.914" y1="431.2" x2="1734.914" y2="495.029" id="gradient-0" gradientTransform="matrix(0.182647, 1.404465, -7.705621, 2.048721, 4564.696447, -2884.876656)">
      <stop offset="0" style="stop-color: rgba(164, 209, 246, 1)"/>
      <stop offset="0.201" style="stop-color: rgb(152, 224, 235);"/>
      <stop offset="0.346" style="stop-color: rgb(200, 202, 243);"/>
      <stop offset="0.405" style="stop-color: rgb(138, 244, 221);"/>
      <stop offset="0.49" style="stop-color: rgb(79, 252, 125);"/>
      <stop offset="0.52" style="stop-color: rgb(214, 229, 104);"/>
      <stop offset="0.596" style="stop-color: rgb(118, 99, 242);"/>
      <stop offset="0.683" style="stop-color: rgb(235, 14, 126);"/>
      <stop offset="0.87" style="stop-color: rgb(19, 201, 137);"/>
      <stop offset="1" style="stop-color: rgba(71, 162, 237, 1)"/>
    </linearGradient>
  </defs>
  <path transform="rotate(0)" id="maf" stroke-miterlimit="10" d="M 2631.277 428.551 C 2628.163 410.601 2628.984 410.521 2620.705 392.535 C 2589.329 324.385 2505.726 284.31 2433.186 304.401 C 2434.016 266.628 2433.123 227.178 2415.995 192.563 C 2393.308 147.376 2353.367 109.683 2304.638 94.473 C 2250.262 77.228 2188.143 85.489 2140.654 117.312 C 2107.663 138.777 2081.086 170.805 2068.676 208.355 C 2052.27 258.966 2053.171 317.312 2080.167 364.211 C 2088.696 380.519 2101.043 394.231 2112.855 408.131 C 2088.009 400.022 2066.178 385.203 2042.795 373.784 C 2029.663 385.623 2016.093 396.944 2002.042 407.721 C 1997.929 391.431 1991.069 373.82 1975.501 365.264 C 1943.803 348.367 1898.527 376.032 1902.979 412.895 C 1877.91 413.056 1852.841 413.198 1827.772 413.323 L 1827.772 413.377 C 1574.209 412.717 1320.636 411.825 1067.064 413.216 C 1065.503 420.906 1068.063 428.552 1067.787 436.197 C 1053.254 436.759 1049.079 419.951 1037.731 414.17 C 1019.683 403.286 996.818 405.614 978.181 413.786 C 951.738 428.114 939.783 464.379 953.058 491.482 C 965.994 518.014 999.556 533.618 1027.757 523.055 C 1039.881 519.103 1048.455 509.334 1056.965 500.457 C 1059.731 497.691 1064.834 494.694 1067.385 499.253 C 1067.653 505.971 1067.198 512.608 1067.091 519.228 C 1110.815 519.701 1154.654 516.828 1198.333 519.844 C 1197.842 532.396 1198.743 544.984 1197.548 557.465 C 1157.357 556.082 1117.14 557.911 1076.967 556.341 C 1071.632 556.127 1066.118 556.296 1060.721 557.046 C 1061.997 571.044 1063.076 585.095 1062.095 599.164 C 1062.648 608.317 1059.642 617.738 1063.032 626.508 C 1074.585 630.309 1085.906 634.671 1097.647 637.517 C 1099.155 646.893 1100.288 656.502 1098.093 665.816 C 1085.755 668.243 1074.184 673.426 1062.113 677.03 C 1062.158 729.167 1060.579 781.33 1063.3 833.395 C 1102.795 832.182 1142.326 833.814 1181.785 832.244 C 1185.211 795.158 1178.743 757.617 1184.559 720.762 C 1201.304 721.279 1218.032 720.548 1234.715 721.101 C 1237.588 757.973 1234.43 794.952 1236.598 831.815 C 1268.777 832.993 1300.992 833.724 1333.092 831.128 C 1333.19 794.131 1330.532 756.947 1332.485 720.021 C 1350.461 721.823 1368.527 719.049 1386.397 721.457 C 1385.764 758.73 1384.898 796.066 1387.004 833.304 C 1426.758 830.824 1466.583 832.76 1506.345 832.439 C 1508.602 780.142 1505.783 727.711 1505.569 675.369 C 1493.24 672.898 1481.731 667.59 1469.553 664.387 C 1468.09 655.341 1467.626 645.866 1470.213 636.9 C 1482.078 633.447 1493.926 629.763 1505.283 624.892 C 1506.934 602.169 1506.131 579.384 1505.658 556.617 C 1460.703 556.189 1415.713 556.207 1370.74 556.938 C 1368.206 543.815 1369.009 530.442 1370.124 517.193 C 1522.671 516.711 1827.773 513.83 1827.773 513.83 C 1853.244 513.75 1878.714 513.446 1904.149 512.09 C 1899.867 539.425 1924.061 565.199 1951.013 565.69 C 1968.945 567.617 1986.038 556.537 1995.04 541.549 C 1998.644 533.716 1998.751 524.768 2002.079 516.792 C 2014.899 529.112 2029.271 539.613 2042.671 551.211 C 2066.821 541.46 2087.929 525.054 2112.998 517.497 C 2098.447 534.1 2083.914 551.282 2075.144 571.792 C 2048.576 631.806 2053.438 706.273 2092.576 759.783 C 2122.909 803.275 2171.851 833.83 2224.996 838.309 C 2295.85 846.436 2370.968 811.063 2406.734 748.756 C 2430.242 710.947 2439.752 664.11 2430.822 620.342 C 2457.274 624.794 2484.725 626.346 2510.972 619.905 C 2564.527 607.406 2609.821 565.056 2626.727 512.84 C 2626.727 512.84 2631.964 498.361 2633.24 478.484 C 2635.033 461.605 2635.595 453.478 2631.277 428.551 Z M 2561.797 464.942 C 2559.718 515.036 2510.205 556.993 2460.602 551.952 C 2431.84 548.856 2408.724 528.828 2391.176 507.185 C 2369.801 525.92 2348.648 544.931 2327.246 563.631 C 2346.436 584.061 2362.021 609.433 2364.743 637.83 C 2369.462 678.315 2351.066 720.058 2319.235 745.145 C 2295.923 763.193 2265.778 772.944 2236.239 769.857 C 2201.597 767.35 2169.614 747.598 2149.157 719.933 C 2113.855 673.899 2121.367 602.162 2165.01 564.077 C 2183.504 545.405 2209.073 536.653 2234.4 532.237 C 2234.364 522.218 2231.09 511.843 2235.114 502.11 C 2244.437 501.477 2248.434 511.576 2253.662 517.383 C 2267.963 532.192 2293.603 532.05 2308.921 518.784 C 2329.048 502.253 2334.9 473.642 2330.993 448.867 C 2328.201 429.285 2318.03 408.899 2299.206 400.344 C 2284.771 393.055 2265.019 394.679 2254.26 407.677 C 2248.354 413.413 2244.099 423.138 2234.579 422.95 C 2231.501 414.493 2234.151 405.562 2233.499 396.828 C 2233.838 391.538 2227.79 391.859 2224.292 390.744 C 2208.76 387.666 2193.558 382.126 2180.229 373.41 C 2144.017 350.536 2122.124 306.464 2126.424 263.74 C 2129.145 226.029 2152.242 191.254 2184.235 171.645 C 2209.161 156.38 2239.976 150.867 2268.613 156.755 C 2325.612 167.362 2371.548 224.95 2364.286 283.403 C 2361.11 312.781 2346.443 339.84 2326.798 361.527 C 2349.334 379.236 2369.335 400.014 2392.54 416.831 C 2401.72 403.815 2412.622 391.592 2426.718 383.849 C 2451.957 368.7 2484.779 368.638 2510.847 381.761 C 2542.09 396.425 2563.439 430.273 2561.797 464.942 Z" style="fill: url(#gradient-1); stroke: url(#gradient-4); stroke-width: 23px;"/>
  <text class="tex"  style="fill: url(#gradient-2); font-family: Arial, sans-serif; font-size: 62px; letter-spacing: 6.1px; stroke: url(#gradient-0); stroke-width: 2.29039px; text-anchor: middle; white-space: pre;" transform="matrix(1.540934, 0, 0, 1.078712, -522.814819, -41.794453)"><tspan x="1365.63" y="486.829">{first[$lang]}</tspan><tspan x="1365.63" dy="1em">​</tspan><tspan x="1365.63" dy="1em">​</tspan><tspan x="1365.63" dy="1em">​</tspan><tspan>{second[$lang]}</tspan></text>
  <text class="tex" style="white-space: pre; fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 42.6px;" x="1800.767" y="479.051">  </text>
</svg>
</button>

<style>
.midscreenText-2 {
grid-column: 1 /6;
  grid-row: 1/ 2;
  align-self: center;
  justify-self: center;
  font-size: 1.5rem;
  line-height: normal;
text-shadow: 1px 1px black;
  color: var(--barbi-pink);
  background-image: url(https://res.cloudinary.com/love1/image/upload/v1639592274/line1_r0jmn5.png);
  background-size: 44.25vw 29.25vw;
  height: 29.25vw;
  width: 44.25vw ;
  text-align: center;
  padding-top: 0.5rem ;  
  
}
@media (min-width: 501px){
  .a2 {
  font-size: 20px;
  }
  .a1 {
  font-size: 32px;
}
.a3{
  font-size: 26px;
}
.midscreenText-2 {
   background-size:100% 100%;
  height: 8.5rem;
  width: 95% ;
}
}
@media (min-width: 701px){
  .a2 {
  font-size: 20px;
  }
  .a1 {
  font-size: 32px;
}
.a3{
  font-size: 27px;
}
.midscreenText-2 {
   background-size: 29.75rem 9.75rem;
  height: 9.75rem;
  width: 29.75rem ;
}
}
 @media (max-width:500px){
	 .midscreenText-2 {
		 
  font-size: 1rem;

	 }
    .a2 {
  font-size: 12px;
  }
  .a1 {
   font-size: 13px;
}
.a3{
   font-size: 13px;
}

}

.a1 {
overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 10px auto 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: normal; /* Adjust as needed */
     /* border-left: .15em solid orange; The typwriter cursor */
     visibility: hidden;
     animation: 
    cssAnimation 0s 1.5s forwards,
    typing 3.5s 1.5s steps(40, end);
    /* blink-caret .75s step-end 3.5s,
    hideb 0s 3.5s;*/

}
.a2 {
overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: normal; /* Adjust as needed */
    /*  border-left: .15em solid orange; The typwriter cursor */
  visibility: hidden;
     animation: 
    cssAnimation 0s 5s forwards,
    typing 3.5s 5.0s steps(32, end);
  /*  blink-caret .75s step-end 7s,
        hideb 0s 7s forwards;*/

}
.a3 {
text-shadow: 1px 1px purple ;
overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: normal; /* Adjust as needed */
    /* border-left: .15em solid orange;  The typwriter cursor */
  visibility: hidden;
     animation: 
     cssAnimation 0s 8.5s forwards,
    typing 5s 8.5s steps(28, end);
   /*  blink-caret .75s step-end 10.5s,
    hideb 1s 10.6s ; */
}
#maf{
    visibility: hidden;
    opacity: 0;
        transform-origin: center center;
     transition: all .2s ease-in-out; 
animation: 
     cssAnimation 0s 13.5s forwards,
     css 4s 13.5s forwards;

}
.tex{
  visibility: hidden;
    opacity: 0;
     transition: all .2s ease-in-out; 
animation: 
     cssAnimation 0s 15.5s forwards,
     css 4s 15.5s forwards;
}

.key {
    margin: 0 auto;

}
.key:hover {
   transform: scale(1.2);
   }
   @-moz-keyframes clockwise {
     0% {
        -moz-transform: rotate(-15deg);
    }
    50% {
        -moz-transform: rotate(-88deg);
    }
    100% {
        -moz-transform: rotate(-15deg);
    }
}
@keyframes clockwise {
    0% {
        transform: rotate(-25deg);
    }
    50% {
        transform: rotate(-88deg);
    }
        100% {
        transform: rotate(-25deg);
    }
}
   @keyframes leaves {
    0% {
        transform: scale(1.0);
    }
    100% {
        transform: scale(1.02);
    }
}
/* The typing effect */
@keyframes cssAnimation {
  to   { 
  visibility: visible; 
  }
}
@keyframes css {
  to   { 
    opacity: 1;
  }
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframe hideb {
 
from, to {
     border-style: hidden;
    }
}
/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }

}

   .button {
  grid-column: 1/6;
  grid-row: 2/3;
    align-self: center;
    justify-content: center;
            transform: rotate(-15deg);
        -moz-transform: rotate(-15deg);

   animation: 
      clockwise 20s ease-in-out 10s infinite;
  }
 
 
  </style>
