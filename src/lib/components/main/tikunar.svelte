<script>
let amort = $state("أنا||اسم|| لن أستخدم العنف أبدًا أو أؤذي أي شخص")
let amorts =  $state("لأنني ||اسم|| لا أريد أن أكون ضحية للعنف ولأنه لا توجد سلطة أو قيمة أو غرض أو معتقد أو مال أو فائدة تبرر الإضرار بحياة الشخص والعنف والإكراه بالقوة.")
let amortt = $state("أنا ||اسم|| سأمنح ثقتي في الخير وأنه عندما توقع البشرية جمعاء هذه الاتفاقية: سيتوقف العنف والقتال والحكم عن أن يكون شكلاً من أشكال التواصل البشري")
let amortf = $state("عندما تكون كل ||اسم مكان|| من الموقعين على هذه المعاهدة أنا ||اسم|| سأتخلى عن أسلحتي ورجال الشرطة المسلحين الذين عينتهم دولة ||اسم مكان|| بالنيابة عني.")
let amorth = $state("أنا ||اسم||، سأتخلى عن أسلحة الجيش ||اسم مكان|| عندما توقع البشرية جمعاء على هذه الاتفاقية.")
let amortq = "أنا||اسم|| لن أستخدم العنف أبدًا أو أؤذي أي شخص"
let amortsq =  "لأنني ||اسم|| لا أريد أن أكون ضحية للعنف ولأنه لا توجد سلطة أو قيمة أو غرض أو معتقد أو مال أو فائدة تبرر الإضرار بحياة الشخص والعنف والإكراه بالقوة."
let amorttq = "أنا ||اسم|| سأمنح ثقتي في الخير وأنه عندما توقع البشرية جمعاء هذه الاتفاقية: سيتوقف العنف والقتال والحكم عن أن يكون شكلاً من أشكال التواصل البشري"
let amortfq = "عندما تكون كل ||اسم مكان|| من الموقعين على هذه المعاهدة أنا ||اسم|| سأتخلى عن أسلحتي ورجال الشرطة المسلحين الذين عينتهم دولة ||اسم مكان|| بالنيابة عني."
let amorthq = "أنا ||اسم||، سأتخلى عن أسلحة الجيش ||اسم مكان|| عندما توقع البشرية جمعاء على هذه الاتفاقية."
let already = $state(false);
  let more = $state(), come = $state(), name = $state(), email = $state();
let error1;
const baseUrl = import.meta.env.VITE_URL

/**
 * @typedef {Object} Props
 * @property {() => void} [onDone] - Callback for when the operation is successful.
 * @property {() => void} [onErore] - Callback for when an error occurs.
 */

/** @type {Props} */
let { onDone, onErore } = $props();

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
      data: {amort: "${amort}",
             name:  "${name}",
             amorts: "${amorts}",
             amortt: "${amortt}",
             amortf: "${amortf}",
              amorth: "${amorth}",
             more: "${more}",
             notes: "${come}",
             email: "${email}",
                     publishedAt: "${d.toISOString()}",
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

    
<div dir="rtl" class='textinput'>
  <textarea id="hoursny" name="hoursn"  bind:value={amort} class='input d' required></textarea>
  <label for="hoursny" class='label'>{amortq}</label>
  <span class='line'></span>
</div>
<br>
<div dir="rtl" class='textinput sec'>
  <textarea id="hoursn" name="hoursn"  bind:value={amorts} class='input d' required></textarea>
  <label for="hoursn" class=' seci'>{amortsq}</label>
  <span class='line'></span>
</div>
<br>

<div dir="rtl" class='textinput sec'>
  <textarea id="hoursna" name="hoursn"  bind:value={amortt} class='input d' required></textarea>
  <label for="hoursna" class='seci'>{amorttq}</label>
  <span class='line'></span>
</div>
<br>
<div dir="rtl" class='textinput sec'>
  <textarea  id="hoursnp" name="hoursn"  bind:value={amortf} class='input d' required></textarea>
  <label for="hoursnp" class='seci'>{amortfq}</label>
  <span class='line'></span>
</div>
<br>
<div dir="rtl" class='textinput sec'>
  <textarea  id="hoursnl" name="hoursn"  bind:value={amorth} class='input d' required></textarea>
  <label for="hoursnl" class='seci'>{amorthq}</label>
  <span class='line'></span>
</div>
<div dir="rtl" class='textinput'>
  <textarea  id="hoursnm" name="hoursn"  bind:value={more} class='input d' required></textarea>
  <label for="hoursnm" class='label'>إضافة</label>
  <span class='line'></span>
</div>
<div dir="rtl" class='textinput'>
  <textarea  id="hoursnu" name="hoursn"  bind:value={come} class='input d' required></textarea>
  <label for="hoursnu" class='label'>ملاحظات</label>
  <span class='line'></span>
</div>
<div dir="rtl" class='textinput'>
  <input type="text" id="hoursng" name="hoursn"  bind:value={name} class='input' required>
  <label for="hoursng" class='label'>اسم</label>
  <span class='line'></span>
</div>
<div dir="rtl" class='textinput'>
  <input type="email" id="hoursni" name="hoursn"  bind:value={email} class='input' required>
  <label for="hoursni" class='label'>بريد</label>
  <span class='line'></span>
</div>
{#if already == false}
<div class="flex items-center justify-center">
<button style="margin: 5px auto;"  class="border border-barbi hover:border-gold bg-gradient-to-br from-gra via-grb via-gr-c via-grd to-gre hover:from-barbi hover:to-mpink text-barbi hover:text-gold font-bold p-2  rounded-full"
 onclick={add} >اتصال</button>
 </div>
 {/if}
<style>
  textarea.input {
  resize: vertical;
height: 110px;
}
.sec{
   margin-top: 20px;
}
.input:focus ~ .seci, .input:valid ~ .seci{
    font-size: 11px;
  color: var(--gold);
    top: -22px;

}
@media (min-width: 498px){
    textarea.input {
  resize: vertical;
height: 79px;
}}
@media (min-width: 798px){
    textarea.input {
  resize: vertical;
height: 65px;
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
       .textinput {
  position: relative;
  width: 100%;
  display: block;
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

.label {

  font-size: 15px;
  position: absolute;
  right: 0;
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
</style>
