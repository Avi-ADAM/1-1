<script context="module">

	export const prerender = true;
 
</script>

   
<svelte:head>
	<title>האמנה העולמית לביטחון ושלום</title>
</svelte:head>

<script>
  import Amana1 from "../lib/components/main/amana.svelte"
  import One from "../lib/components/main/bein.svelte"
  import { show } from '../lib/components/registration/store-show.js';
  import { regHelper } from '../lib/stores/regHelper.js';
  import { onMount } from 'svelte';


  let idx = 1;
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

   let kvar;
    onMount(async () => {
    if (document.cookie) {
      const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('jwt='))
  .split('=')[1];
    kvar  = cookieValue; }
    });


  let regHelperL = 0;

  
regHelper.subscribe(value => {
  regHelperL = value;
});

	let user = { signed: false };

	function toggle() {
		regHelperL = 0;
    show.set(0);
    regHelper.set(0)
	}
</script>
{#if kvar}
<One {idx}/>

<!--{ goto("/oneHomeGr", )}
todo: אמנה חתומה ל5 שניות ואז להעביר לעמוד הבית לקחת פרטים מהקוקיות או מלוקלסטורג'--> 
{:else}
<div class="main">
{#if regHelperL == 1}
<One {idx}/>
	
{/if}


{#if regHelperL == 0}
<Amana1 {idx}/>
	 
{/if}
   </div>
{/if}




<style>

:global(.multiselect) {
  color:#02a2ff;
  /* top-level wrapper div */
}

:global(li.selected) {
  border: var(--sms-focus-border, 1pt solid var(--sms-active-color, cornflowerblue))
  /* selected options in the dropdown list */
}
:global(li:not(.selected):hover) {
  color: #FF0092;
  /* unselected but hovered options in the dropdown list */
}

:global(li.active) {
  color:#EEE8AA;
  /* active means element was navigated to with up/down arrow keys */
  /* ready to be selected by pressing enter */
}

	:root {
  --primary-light: #a6f9d6;
  --primary: #5be2a9;
  --primary-dark: #53ce9a;
  --secondary: #1e2145;
  --white: #fff;
  --grey: #e6e6ff;
  --grey-dark: #6d7098;
  --red: #ff6b6b;
}
button:disabled {
  background-color: var(--grey);
}

button:focus:not(:disabled) {
  box-shadow: 0 0 0 4px var(--primary-light);
}

button:hover:not(:disabled) {
 
  background: radial-gradient(skyblue 20%, var(--barbi-pink))
		skyblue ;
}

*, *:after, *:before {
	box-sizing: border-box;
}
@media (min-width: 1100px) {
  
.main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
    height: 100vh;
		box-sizing: border-box;
      margin:0px ;
     background-image: url(https://res.cloudinary.com/love1/image/upload/v1639597594/Prismatic-Hearts-World-Map-4_ge7z9u.svg);
background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
	} 
}

@media (max-width: 1099px) {
.main {
		flex: 1;
		display: flex;
		flex-direction: column;
	
	} 
}
@media (max-width: 720px) {
.main {
		flex: 1;
		display: flex;
 width: 100vw;	
 padding: 0;
	} 
}
</style>
