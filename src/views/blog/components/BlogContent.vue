<template>
  <div class="blog__details__content">
    <div class="blog__item">
      <div class="blog__item__title">
        <h2>打造完美零浪費婚禮的 10 個秘訣</h2>
      </div>

      <div class="blog__item__pic set-bg" :style="{ backgroundImage: 'url(' + imgUrl + ')'}"></div>
      <div class="blog__item__text">
        <ul class="custom-list">
          <li v-for="(tip, index) in weddingTips" :key="index">{{ tip }}</li>
        </ul>
        <p>{{ endingStatement }}</p>
      </div>
    </div>
    <div class="blog__quote">
      <p>“最重要的事莫過於享受你的人生，活得開心，這是最重要的。
        The most important thing is to enjoy your life—to be happy—it's all that matters..</p>
      <h5>– Audrey Hepburn 奧黛麗．赫本 –</h5>
    </div>
    <div class="blog__details__text">
      <p>{{ photographyQuote }}</p>
      <p>{{ photographyQuote2 }}</p>
    </div>
    <div class="blog__details__pic">
      <img v-for="(image, index) in detailImages" :key="index" :src="image" :alt="'Image ' + (index + 1)">
    </div>
    <div class="blog__details__widget">
      <div class="row">
        <div class="col-lg-6">
          <div class="blog__details__tags">
            <span><i class="fa fa-tag"></i> Tag:</span>
            <a v-for="(tag, index) in tags" :key="index" href="#">{{ tag }}</a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="blog__details__social">
            <span><i class="fa fa-share"></i> Share</span>
            <SocialMediaIcons/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMediaIcons from "@/views/social/SocialMediaIcons";
export default {
  components: {SocialMediaIcons},
  props: {
    imgUrl: String,
    weddingTips: Array,
    endingStatement: String,
    photographyQuote: String,
    photographyQuote2: String,
    detailImages: Array,
    tags: Array
  }
}
</script>

<style>
ul.custom-list {
  list-style-type: none;
  padding: 0; /* Optional, to remove default padding */
}

ul.custom-list li::before {
  content: none; /* Remove the default bullet point */
}


</style>
