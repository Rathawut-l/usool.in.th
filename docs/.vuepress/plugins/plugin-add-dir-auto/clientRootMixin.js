export default {
  mounted () {
    setTimeout(this.addDirAuto, 500);
    this.$router.afterEach(() => {
      setTimeout(this.addDirAuto, 500);
    });
  },
  methods: {
    addDirAuto() {
      const content = document.querySelector('.page');
      if (!content) {
        setTimeout(this.addDirAuto, 500);
        return;
      }
      const p = document.querySelectorAll('p'); 
      for (var i = 0; i < p.length; i++) {
        p[i].setAttribute('dir', 'auto');
      }
      const blockquote = document.querySelectorAll('blockquote');
      for (let i = 0; i < blockquote.length; i++) {
        blockquote[i].setAttribute('dir', 'auto');
      }  
    }
  }
}
