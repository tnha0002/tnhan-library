<template>
  <div>
    <h1>Count Book API</h1>
    <pre>{{ jsondata }}</pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CountBookAPI',
  data() {
    return {
      jsondata: null,
      error: null
    }
  },
  mounted() {
    this.getBookCountAPI()
  },
  methods: {
    async getBookCountAPI() {
      try {
        const response = await axios.get('https://countbooks-5dss6isz2q-uc.a.run.app')
        this.jsondata = response.data
      } catch (error) {
        console.error('Error fetching book count:', error)
        this.error = error
        this.jsondata = null
      }
    }
  }
}
</script>
