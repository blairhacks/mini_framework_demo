<template>
  <div id="app">
    <h1>You have clicked the button {{ count }} times!</h1>
    <button @click="count++">
      The button
    </button>

    <p v-if="count >= 10">
      You have clicked the button 10 times 👍
    </p>

    <p v-else>
      You have not clicked the button 10 times
    </p>
  </div>
</template>

<script>
export default { // alternatively, you could use refs
  data() {
    return {
      count: 0
    }
  }
}
</script>