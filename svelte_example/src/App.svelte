<script>
  let clicks = 0;
</script>

<main>
  <h1>You have clicked the button { clicks } times!</h1>
  <button on:click={() => ++clicks}>
    The button
  </button>

  {#if clicks >= 10}
    <p>You have clicked the button 10 times 👍</p>
  {:else}
    <p>You have not clicked the button 10 times</p>
  {/if}
</main>

<style>

</style>
