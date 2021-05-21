<template>
  <div class="home">
    <error :error="error"></error>
    <h1>{{ appTitre | cap}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import error from '@/components/Error'
import cap from '@/filters/Capitalize'

export default {
  name: 'Home',
  components: {
    error
  },
  data() {
    return {
      error: "Il y a ue erreur",
      appTitre: "titre de l'APPLICATION"
    }
  },
  filters: {
    cap
  }
}
</script>
