<script>
        import { Confetti } from "svelte-confetti"

  let { success } = $props();
</script>

{#if success}
  <div style="
position: fixed;
top: -50px;
left: 0;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
overflow: hidden;
pointer-events: none;">
      <Confetti rounded size=30 x={[-5, 5]} y={[-5, 5]} delay={[0, 50]} amount=200 duration=10000 colorArray={["url(https://res.cloudinary.com/love1/image/upload/v1645647192/apple-touch-icon_irclue.png)"]} fallDistance="100vh"/><!--colorRange={[0, 120]}-->
<Confetti noGravity x={[-5, 5]} y={[-5, 5]} delay={[550, 550]} duration=10000  amount=2000 colorRange={[120, 240]} fallDistance="100vh"/>
<Confetti noGravity x={[-5, 5]} y={[-5, 5]} delay={[1000, 1050]} duration=10000 amount=200 colorRange={[240, 360]} fallDistance="100vh"/>
<Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]}  duration=5000 amount=200  />
</div>
{/if}