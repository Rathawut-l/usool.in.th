<template>
  <div class="pure-g" v-if="posts.length">
    <h2 class="pure-u-1" v-if="title">
      {{ title }}
    </h2>
    <div class="pure-u-1 pure-u-md-1-2" v-for="post in posts">
      <router-link :to="post.path" v-if="post.frontmatter.image">
        <div>
          <img :src="$withBase(post.frontmatter.image)" alt="">
        </div>
      </router-link>
      <h4>
        <router-link :to="post.path">
          {{ post.title }}
        </router-link>
      </h4>
      <p>
        <router-link :to="post.path">
          Last Updated: {{ post.lastUpdated }}
        </router-link>
      </p>
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
      return posts
    },
  },
}
</script>
