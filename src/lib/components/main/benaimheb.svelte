<script>
  import { userName } from '../../stores/store.js';
  import { show } from '../registration/store-show.js';
  import  Hello  from '../registration/hello.svelte'
//  import  Password from '../lib/components/registration/password.svelte'
//  import  Skills from '../lib/components/registration/skills.svelte'
//  import  VidValDate from '../lib/components/registration/vidValDate.svelte'
//  import Workways from '../lib/components/registration/workways.svelte'
//  import Roles from '../lib/components/registration/roles.svelte'
//  import Vallues from '../lib/components/registration/vallues.svelte'
  
let userName_value;

let show_value = 0;

userName.subscribe(value => {
  userName_value = value;
});

show.subscribe(newValue => {
  show_value = newValue;
});
  export let idx = 1;

</script>
<div class="body">
<div class="background">
<div class="midscreen">
{#if show_value == 0}

<Hello {idx}/>
<!--{:else if show_value == 1}
<Vallues/>
{:else if show_value == 2}
<Skills/>
{:else if show_value == 3}
 <Roles/>
  {:else if show_value == 4} 
  <Workways/>
  {:else if show_value == 5}  
<VidValDate/>
  {:else if show_value == 6}
   <Password/>   //  if show_value == 7-->
  {:else }
    <h1 dir="rtl" class="midscreenText-3">
תודה
<br>
{userName_value} 
<br>
ולהתראות בקרוב      </h1>
    
   
{/if}
</div></div> </div>
<style>

.body{
  padding: -1rem;
	
		max-width: auto;
height: 100vh;
 width:100vw;
}
.midscreen  {
  min-width:80%;
min-height:80%;
position: fixed;
top: 50%;
left: 50%;
display: grid;
grid-template-columns: auto auto auto auto;
transform: translate(-50%, -50%);
align-items: center;
justify-content: center;
background-image: url(https://res.cloudinary.com/love1/image/upload/v1639592319/love_nnzswg.svg);
background-position: center; 
  background-repeat: no-repeat; 
  background-size: contain;
}

 .midscreenText-3 {
      grid-column: 1 /5;
  grid-row: 1/ 2;
  align-self: center;
  justify-self: center;
  font-size: 1.8rem;
  line-height: normal;
  font-weight: 900;
  color: var(--barbi-pink);
  background-image: url(https://res.cloudinary.com/love1/image/upload/v1639592274/line1_r0jmn5.png);
  background-size: 420px 150px;
  height: 150px;
  width: 420px;
text-align: center;  
padding-top: 8px;
padding-right: 25px;
padding-left: 25px;
}


</style>