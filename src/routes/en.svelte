<script context="module">

	export const prerender = true;
 
</script>

   
<svelte:head>
	<title>World Security and Peace Convention</title>
</svelte:head>

<script>
  import Amana1 from "../lib/components/main/amanaen.svelte"
 

  
</script>

<div class="main">




<Amana1/>
	
   </div>
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
     background-image: url(https://res.cloudinary.com/love1/image/upload/v1639089050/reka2_unoegx.png);
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
