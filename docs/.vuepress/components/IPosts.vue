<template>
  <div class="pure-g posts" v-if="posts.length">
    <h2 class="pure-u-1" v-if="title">
      {{ title }}
    </h2>
    <div class="pure-u-1 pure-u-md-1-3" v-for="post in posts">
      <div class="post">
        <router-link :to="post.path">
          <div class="image-container">
            <img :src="$withBase(post.frontmatter.image)" alt="" v-if="post.frontmatter.image">
            <img :src="$themeConfig.logo" alt="Logo" v-else>
          </div>
        </router-link>
        <div class="post-title">
          <router-link :to="post.path">
            {{ post.title }}
          </router-link>
        </div>
        <router-link :to="post.path">
          <small>Updated At: {{ post.lastUpdated }}</small>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IPosts',
  props: {
    title: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '/',
    },
    maximum: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    posts() {
      const posts = this.$site.pages
        .filter(page => {
           return page.path !== this.suffix && page.path.startsWith(this.suffix)
        })
        .sort((a, b) => {
          return new Date(b.lastUpdated) - new Date(a.lastUpdated)
        })
      return this.maximum > 0 ? posts.slice(0, this.maximum) : posts
    },
  },
}
</script>

<style scoped>
.post {
  margin: 0 5px 20px;
}
.post > .post-title {
  font-size: 20px;
  margin-top: 8px;
}
.image-container {
  border: 1px solid #2c3e50;
}
</style>
