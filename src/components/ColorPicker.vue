<template>
  <div>
    <v-btn
      icon
      small
      v-for="(color,i) in colors"
      :key="i"
      :color="color"
    >
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["red","blue","blue lighten-2","purple","yellow","orange","green","grey"]
    }
  }
}
</script>

