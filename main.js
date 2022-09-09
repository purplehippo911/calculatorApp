export default {
    data() {
      return { count: 0 }
    },
    methods: {
        toggleOpen() {
            this.$ref.toggle.style.gridColumnStart = "2";
            console.log("HI")
        }
    }
  }
