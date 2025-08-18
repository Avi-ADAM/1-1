<script>
let amort = $state("I ,||name||, will never use violence or hurt anyone.")
let amorts =  $state("Because I, ||name||, do not want to be a victim of violence, and because there is no authority, value, purpose, faith, money or interest that justifies harming a person's life, violence and coercion by force.")
let amortt = $state("I,||name||, will trust in the good and that when all humanity signs: violence, fighting and regimentation will cease to be a form of human communication")
let amortf = $state("When the entire ||country|| is a signatory to this Convention, I, || name || will relinquish my weapons and the armed policemen from whom the ||country|| State is Appointments in my name.")
let amorth = $state("I, ||name||, will give up the weapons of the ||country|| Army when all of humanity will be a signatory to this Convention")
let amortq = "I ,||name||, will never use violence or hurt anyone."
let amortsq =  "Because I, ||name||, do not want to be a victim of violence, and because there is no authority, value, purpose, faith, money or interest that justifies harming a person's life, violence and coercion by force."
let amorttq = "I,||name||, will trust in the good and that when all humanity signs: violence, fighting and regimentation will cease to be a form of human communication"
let amortfq = "When the entire ||country|| is a signatory to this Convention, I, || name || will relinquish my weapons and the armed policemen from whom the ||country|| State is Appointments in my name."
let amorthq = "I, ||name||, will give up the weapons of the ||country|| Army when all of humanity will be a signatory to this Convention"
let already = $state(false);
  let more = $state(), come = $state(), name = $state(), email = $state();
let error1;
 let { onDone, onErore } = $props();
const baseUrl = import.meta.env.VITE_URL

let miDatan = [];
let linkg = baseUrl+'/graphql';
async function add (){
already = true;
 let d = new Date
        try {
            await fetch(linkg, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query: `mutation 
                        { createTikunolam(
      data: {
                publishedAt: "${d.toISOString()}",
        amort: "${amort}",
             name:  "${name}",
             amorts: "${amorts}",
             amortt: "${amortt}",
             amortf: "${amortf}",
              amorth: "${amorth}",
             more: "${more}",
              notes: "${come}",
             email: ${email}",
    }
  ) {data{id }}

}
`})
                })
                .then(r => r.json())
                .then(data => miDatan = data);
            console.log(miDatan);
            onDone?.()
        } catch (e) {
            error1 = e
            console.log(error1);
                        onErore?.()

        }
}

  </script>
<h1 class="text-center text-barbi">suggest text changes</h1>
      <br>

<div class='textinput first'>
  <textarea id="hoursny" name="hoursn "  bind:value={amort} class='input d' required></textarea>
  <label for="hoursny" class='firsty'>{amortq}</label>
  <span class='line'></span>
</div>
<br>
<div  class='textinput sec'>
  <textarea id="hoursn" name="hoursn"  bind:value={amorts} class='input d' required></textarea>
  <label for="hoursn" class=' seci'>{amortsq}</label>
  <span class='line'></span>
</div>
<br>

<div  class='textinput sec'>
  <textarea id="hoursna" name="hoursn"  bind:value={amortt} class='input d' required></textarea>
  <label for="hoursna" class='seci'>{amorttq}</label>
  <span class='line'></span>
</div>
<br>
<div  class='textinput sec'>
  <textarea  id="hoursnp" name="hoursn"  bind:value={amortf} class='input d' required></textarea>
  <label for="hoursnp" class='seci'>{amortfq}</label>
  <span class='line'></span>
</div>
<br>
<div  class='textinput sec'>
  <textarea  id="hoursnl" name="hoursn"  bind:value={amorth} class='input d' required></textarea>
  <label for="hoursnl" class='seci'>{amorthq}</label>
  <span class='line'></span>
</div>
<div  class='textinput'>
  <textarea  id="hoursnm" name="hoursn"  bind:value={more} class='input d' required></textarea>
  <label for="hoursnm" class='label'>add more</label>
  <span class='line'></span>
</div>
<div class='textinput'>
  <textarea  id="hoursnu" name="hoursn"  bind:value={come} class='input d' required></textarea>
  <label for="hoursnu" class='label'>notes</label>
  <span class='line'></span>
</div>
<div  class='textinput'>
  <input type="text" id="hoursng" name="hoursn"  bind:value={name} class='input' required>
  <label for="hoursng" class='label'>your name</label>
  <span class='line'></span>
</div>
<div  class='textinput'>
  <input type="email" id="hoursni" name="hoursn"  bind:value={email} class='input' required>
  <label for="hoursni" class='label'>email</label>
  <span class='line'></span>
</div>
{#if already == false}
<div class="flex items-center justify-center">
<button style="margin: 5px auto;"  class="border border-barbi hover:border-gold bg-gradient-to-br from-gra via-grb via-gr-c via-grd to-gre hover:from-barbi hover:to-mpink text-barbi hover:text-gold font-bold p-2  rounded-full"
 onclick={add} >send</button>
 </div>
 {/if}
<style>
  textarea#hoursny,textarea#hoursnu,textarea#hoursnm {
      resize: vertical;
    height: 60px;

  }
  textarea.input {
  resize: vertical;
height: 160px;
}
.sec{
   margin-top: 70px;
}
.input:focus ~ .seci, .input:valid ~ .seci{
    font-size: 11px;
  color: var(--gold);
    top: -70px;

}
@media (min-width: 498px){
    textarea.input {
  resize: vertical;
height: 129px;
}
.sec{
   margin-top: 50px;
}
.input:focus ~ .seci, .input:valid ~ .seci{
    font-size: 11px;
  color: var(--gold);
    top: -50px;

}
.label,.input:focus ~ .firsty, .input:valid ~ .firsty {
  font-size: 11px;
  color: var(--gold);
  top: 0;
}
.first {
    margin-top: 0px;

}
}
@media (min-width: 798px){
    textarea.input {
  resize: vertical;
height: 50px;
}
  .sec{
   margin-top: 12px;
}
.input:focus ~ .seci, .input:valid ~ .seci{
    font-size: 11px;
  color: var(--gold);
    top: 0;

}
 .d::-webkit-scrollbar {
    width: 17px;
}
}
@media (min-width: 1098px){
    textarea.input {
  resize: vertical;
height: 44px;
}
}
  textarea::-webkit-resizer {
  border-width: 8px;
  border-style: solid;
  border-color: transparent  transparent var(--gold)  var(--gold);
}
 .d::-webkit-scrollbar {
    width: 10px;
}
   
.d::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
}
 
.d::-webkit-scrollbar-thumb {
    background-color: #d4aa70;
    border-radius: 100px;
}
.d {
    scrollbar-color: #D4AA70 #e4e4e4;
}
.d::-webkit-scrollbar-thumb {
    background-image: linear-gradient(180deg, #D0368A 0%, #708AD4 99%);
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    border-radius: 100px;
}
       .textinput {
  position: relative;
  width: 100%;
  display: block;
}
.first {
    margin-top: 20px;

}
.input {

  border: none;
  margin: 0;
  padding: 10px 0;
  outline: none;
  border-bottom: solid 1px var(--gold);
  font-size: 15px;
  margin-top: 12px;
  width: 100%;
 color:  var(--barbi-pink);
  -webkit-tap-highlight-color: transparent;
  background: transparent;
}

.seci {

  font-size: 15px;
  position: absolute;
  right: 0;
  top: 22px;
  transition: 0.2s cubic-bezier(0, 0, 0.3, 1);
  pointer-events: none;
  color:var(--barbi-pink);
  user-select: none;
}
.firsty {

  font-size: 15px;
  position: absolute;
  left: 0;
  top: -22px;
  transition: 0.2s cubic-bezier(0, 0, 0.3, 1);
  pointer-events: none;
  color:var(--barbi-pink);
  user-select: none;
}
.label {

  font-size: 15px;
  position: absolute;
  left: 0;
  top: 22px;
  transition: 0.2s cubic-bezier(0, 0, 0.3, 1);
  pointer-events: none;
  color:var(--barbi-pink);
  user-select: none;
}

.line {
  height: 2px;
  background-color: #2196F3;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0;
  width: 0;
  transition: 0.2s cubic-bezier(0, 0, 0.3, 1);
}

.input:focus ~ .line, .input:valid ~ .line {
  width: 100%;
}
.input:focus , .input:valid  {
  border: 0;
}
.input:focus ~ .label, .input:valid ~ .label {
  font-size: 11px;
  color: var(--gold);
  top: 0;
} 
.input:focus ~ .firsty, .input:valid ~ .firsty {
  font-size: 11px;
  color: var(--gold);
  top: -20;
} 
</style>
