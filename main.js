const app = Vue.createApp({
    data() {
      return {
            message: "Hello Vue!",
            i: 0
      }
    },
    methods: {
        toggleOpen() {
            if(this.i = 1) {
                this.$refs.slider.style.left = `20px`;
            }
            if(this.i = 2) {
                this.$refs.slider.style.left = `20px`;
            }
            if(this.i > 3 ) {
                this.i = 0;
            }
            this.i = this.i + 1 ;
            console.log(this.i);
        }
    }
})

app.mount("#app");