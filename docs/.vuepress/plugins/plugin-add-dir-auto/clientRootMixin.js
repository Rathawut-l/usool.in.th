export default {
  mounted () {
    setTimeout(this.addDirAuto, 100);
    this.$router.afterEach(() => {
      setTimeout(this.addDirAuto, 100);
    });
  },
  methods: {
    addDirAuto() {
      const content = document.querySelector('.page');
      if (!content) {
        setTimeout(this.addDirAuto, 100);
        return;
      }
      const p = content.querySelectorAll('p'); 
      for (var i = 0; i < p.length; i++) {
        p[i].setAttribute('dir', 'auto');
      }
      const blockquote = content.querySelectorAll('blockquote');
      for (let i = 0; i < blockquote.length; i++) {
        blockquote[i].setAttribute('dir', 'auto');
      }  
    }
  }
}
