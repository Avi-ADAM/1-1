<script>
   import { userName } from '../../stores/store.js';
    import { show } from './store-show.js';
    export let idx = 1;
export let userName_value;
let show_value;

userName.subscribe(value => {
  userName_value = value;
});

show.subscribe(newValue => {
  show_value = newValue;
});

function increment() {
		show.update(n => n + 1);
	};


</script>
<div class="midscreenText-2">
    <h1 class="a1"  dir="rtl">
    שלום 
   {userName_value} 
        </h1>  <h1 class="a2" style="font-size: 1.7rem;"  dir="rtl">
 חתימתך התקבלה!
הגעת למקום ה-{idx} 
</h1><h1 class="a3"  dir="rtl">
  כעת ביכולתך להירשם
    ל 
    1❤️1
 </h1></div>
    <a class="midscreen-link" sveltekit:prefetch href="/about">אודות האמנה</a>
  <!--  <a class="midscreen-link" sveltekit:prefetch href="/aboutOne">אודות 1❤️1</a>
 -->
<button class="button" on:click="{increment}">
    להרשמה
    </button>
  

    
<style>
.midscreenText-2 {
grid-column: 1 /6;
  grid-row: 1/ 2;
  align-self: center;
  justify-self: center;
  font-size: 1.8rem;
  line-height: normal;
  font-weight: 900;
  color: var(--barbi-pink);
  margin-top: 17vh;
  background-image: url(https://res.cloudinary.com/love1/image/upload/v1639592274/line1_r0jmn5.png);
  background-size: 29.5rem 9.75rem;
  height: 9.75rem;
  width: 29.5rem;
  text-align: center;
  padding-top: 0.5rem ;
  
}

.a1 {
overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: normal; /* Adjust as needed */
     /* border-left: .15em solid orange; The typwriter cursor */
     animation: 
    typing 3.5s steps(40, end);
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
          cssAnimation 0s 3.5s forwards,
    typing 3.5s 3.5s steps(32, end);
  /*  blink-caret .75s step-end 7s,
        hideb 0s 7s forwards;*/

}
.a3 {
text-shadow: 1px 1px var(--lturk) ;
overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: normal; /* Adjust as needed */
    /* border-left: .15em solid orange;  The typwriter cursor */
   
  visibility: hidden;
     animation: 
     cssAnimation 0s 7s forwards,
    typing 5s 7s steps(28, end);
   /*  blink-caret .75s step-end 10.5s,
    hideb 1s 10.6s ; */
}
/* The typing effect */
@keyframes cssAnimation {
  to   { 
  visibility: visible; 
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
  grid-column: 1/3;
  grid-row: 4/5;
    font-size: 13px;
    color: var(--gold);;
    padding: 10px;
    margin: 10px;
    align-self: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--barbi-pink);
  }
  .midscreen-link{
    grid-column:  4/6;
  grid-row: 4/5;
  margin: 29px 0px 29px 48px ;
  background-color: var(--gold);
  padding: 0.5em;
      border-radius: 50%;
      color: var(--barbi-pink);
  }
  </style>

