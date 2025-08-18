<script>
	import "../app.postcss";

import { lang, doesLang, langUs } from '$lib/stores/lang.js'
  import { onMount } from 'svelte';
  let { data, children } = $props();
function getLang() {
  console.log(data)
    let la;
    const fromSe = data.userAgent
    if ($doesLang == false) {
       
   if (fromSe.includes("he")){
        la = "he"
  } else if (fromSe.includes("ar")){
        la = "ar"
   } else{
      la = "en"
    }
   }
    
    else {
        la = $langUs
    }
   // if (navigator.languages != undefined)
   //     return navigator.languages[0];
   // return navigator.language;
    lang.set(la)
    document.cookie = `lang=${$lang}; expires=` + new Date(2029, 0, 1).toUTCString();
}

onMount(async () => {
   getLang()
   let x;
   let user;
   /*
   if($lang != "he" && $lang != "ar" && x == null && user == 0){
        console.log('after', $lang)
    goto("/en")
  } else if($lang == "ar" && x == null && user == 0){
      console.log('Registration', $lang)

    goto("/ar")
  }
  */
})
</script>

	{@render children?.()}


