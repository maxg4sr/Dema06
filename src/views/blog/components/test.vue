<template>
  <section class="blog-details spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8">
          <div class="blog__details__content">
            <div class="blog__item">
              <div class="blog__item__title">
                <h2>打造完美零浪費婚禮的 10 個秘訣</h2>
              </div>
              <div class="blog__item__pic set-bg" :data-setbg="imagePath"></div>
              <div class="blog__item__text">
                <ul>
                  <li v-for="(point, index) in weddingPoints" :key="index">{{ point }}</li>
                  <br>
                </ul>
                <p>{{ additionalNote }}</p>
              </div>
            </div>
            <div class="blog__quote">
              <p>“最重要的事莫過於享受你的人生，活得開心，這是最重要的。
                The most important thing is to enjoy your life to be happy—it's all that matters..”</p>
              <h5>– Audrey Hepburn 奧黛麗．赫本 –</h5>
            </div>
            <div class="blog__details__text">
              <p>{{ photoDirectorMessage }}</p>
            </div>
            <div class="blog__details__pic">
              <img v-for="(imgSrc, index) in imageSources" :src="imgSrc" :alt="'Image ' + index">
            </div>
            <div class="blog__details__widget">
              <div class="row">
                <div class="col-lg-6">
                  <div class="blog__details__tags">
                    <span><i class="fa fa-tag"></i> Tag:</span>
                    <a href="#" v-for="(tag, index) in tags" :key="index">{{ tag }}</a>
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
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="blog__sidebar">
            <div class="blog__sidebar__item">
              <h4>最新文章</h4>
              <a href="#" class="blog__sidebar__recent__item" v-for="(article, index) in recentArticles" :key="index">
                <div class="blog__sidebar__recent__item__pic">
                  <img :src="article.image" :alt="'Article ' + index">
                </div>
                <div class="blog__sidebar__recent__item__text">
                  <h5>{{ article.title }}</h5>
                  <span>{{ article.date }}</span>
                </div>
              </a>
            </div>
            <!-- 其他側邊欄項目... -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialMediaIcons from "@/views/social/SocialMediaIcons";
export default {
  components: {SocialMediaIcons},
  data() {
    return {
      imagePath: "img/blog/blog-1.jpg",
      weddingPoints: [
        "制定預算：在開始策劃之前，確定一個合理的婚禮預算...",
        "精選婚禮場地：選擇一個價格合理且能容納所有嘉賓的場地...",
        // 其他婚禮秘訣...
      ],
      additionalNote: "遵循這些秘訣，你就能打造一個精彩而又零浪費的婚禮...",
      photoDirectorMessage: "我通常的攝影風格是捕捉抓拍的瞬間...",
      imageSources: [
        "img/blog/details/bd-1.jpg",
        "img/blog/details/bd-2.jpg",
        "img/blog/details/bd-3.jpg",
      ],
      tags: ["Wedding", "Event", "Couple"],
      recentArticles: [
        {
          title: "成功夫妻的10種祕訣，你做到了嗎？",
          date: "Nov 27, 2023",
          image: "img/blog/sidebar/br-1.jpg",
        },
        {
          title: "常做五件事，讓相愛成為一種習慣",
          date: "Sep 27, 2021",
          image: "img/blog/sidebar/br-2.jpg",
        },
        {
          title: "7個讓愛延續的方法：深厚的友誼，互相尊重並享受彼此的陪伴！",
          date: "Aug 18, 2010",
          image: "img/blog/sidebar/br-3.jpg",
        },
        {
          title: "遇到磨合期也不怕！情侶建立感情的8個小秘訣...",
          date: "Feb 07, 2018",
          image: "img/blog/sidebar/br-4.jpg",
        },
        // 其他最新文章...
      ],
    };
  },
};
</script>

<style scoped>
/* 在這裡添加組件的樣式 */
</style>
