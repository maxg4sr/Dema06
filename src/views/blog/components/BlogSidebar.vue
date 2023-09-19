<template>
  <div class="blog__sidebar">
    <div class="blog__sidebar__item">
      <h4>最新文章</h4>
      <a v-for="(article, index) in recentArticles" :key="index" class="blog__sidebar__recent__item">
        <div class="blog__sidebar__recent__item__pic">
          <img :src="article.image" :alt="'Article ' + (index + 1)">
        </div>
        <div class="blog__sidebar__recent__item__text">
          <h5>{{ article.title }}</h5>
          <span>{{ article.date }}</span>
        </div>
      </a>
    </div>
    <div class="blog__sidebar__item">
      <h4>instagram:</h4>
      <div class="blog__sidebar__instagram">
        <img v-for="(image, index) in instagramImages" :key="index" :src="image" :alt="'Instagram ' + (index + 1)">
      </div>
    </div>
    <div class="blog__sidebar__item">
      <h4>Tags:</h4>
      <div class="blog__sidebar__tags">
        <a v-for="(tag, index) in sidebarTags" :key="index" href="#">{{ tag }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recentArticles: Array,
    instagramImages: Array,
    sidebarTags: Array
  }
}
</script>
