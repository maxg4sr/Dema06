<template>
  <section class="blog-details spad">
    <HeaderAll/>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8">
          <BlogContent
              :imgUrl="imgUrl"
              :weddingTips="weddingTips"
              :endingStatement="endingStatement"
              :photographyQuote="photographyQuote"
              :photographyQuote2="photographyQuote2"
              :detailImages="detailImages"
              :tags="tags"
          />
        </div>
        <div class="col-lg-4 col-md-4">
          <BlogSidebar :recentArticles="recentArticles" :instagramImages="instagramImages" :sidebarTags="sidebarTags" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogContent from "@/views/blog/components/BlogContent";
import BlogSidebar from "@/views/blog/components/BlogSidebar";
import HeaderAll from "@/views/header/HeaderAll";
export default {
  components: {
    HeaderAll,
    BlogContent,
    BlogSidebar
  },
  data() {
    return {
      imgUrl: [
          require('@/img/blog/blog-1.jpg'),
          ],
      weddingTips: [
        '1.制定預算：在開始策劃之前，確定一個合理的婚禮預算。仔細考慮你和伴侶的財務情況，並確定在這個預算內完成婚禮所需的各項開支。',
        '2.精選婚禮場地：選擇一個價格合理且能容納所有嘉賓的場地。考慮室內和室外場所，也許有合適的公園或社區場地可供使用。',
        '3.簡約而華美的裝飾：婚禮裝飾不一定要奢華，可以選擇簡約但有品味的裝飾風格。使用鮮花和自然元素，這樣不僅經濟實惠，還環保。',
        '4.精心選擇婚禮服飾：婚紗和西裝不一定要昂貴，可以在打折或二手店尋找合適的服飾，或者選擇租借服務。',
        '5.邀請合理人數：限制婚禮嘉賓的數量，只邀請最親近的親友和親戚。這樣不僅減少開支，也可以讓婚禮更加溫馨。',
        '6.精巧DIY：考慮自己動手製作一些婚禮細節，例如手工製作婚禮邀請卡、場地佈置、小禮物等。這樣不僅省錢，還能增加親近感。',
        '7.考慮非傳統時間和日期：在非繁忙的婚禮季節或非傳統日期舉辦婚禮，可能會獲得更多優惠價格。',
        '8.計劃經濟實惠的用餐：選擇經濟實惠但美味的用餐方案，例如自助餐、小吃或野餐風格的聚餐。',
        '9.整合婚禮和蜜月：選擇一個美麗的目的地舉辦婚禮，並留在那裡度蜜月，這樣可以節省旅行成本。',
        '10.精打細算的禮物：選擇實用且有意義的婚禮禮物，可以考慮提供自製的小禮品，或是讓嘉賓分享一些特殊時刻的照片或回憶。\n',
      ],
      endingStatement: '遵循這些秘訣，你就能打造一個精彩而又零浪費的婚禮，讓這個特殊的時刻充滿愛與溫馨，同時不會給你和伴侶帶來經濟壓力...',
      photographyQuote: '“我通常的攝影風格是捕捉抓拍的瞬間，而使用手機可以讓我四處走動並捕捉瞬間，而如果使用傳統的數碼單反相機，這會更加困難。”\n'
      +'攝影技術總監 Leon:',
      photographyQuote2:'婚顧新人霍莉和詹姆斯說：“我們對於用智能手機來拍攝婚禮的專業相機感到緊張，\n' +
          '但是拍照出來也感覺很自然，我們幾乎沒有注意到Leon在那裡，捕捉到了許多微小而坦率的時刻，回顧起來非常特別。',
      detailImages: [
        require('@/img/blog/details/bd-1.jpg'),
        require('@/img/blog/details/bd-2.jpg'),
        require('@/img/blog/details/bd-3.jpg')
      ],
      tags: ['Wedding', 'Event', 'Couple'],
      recentArticles: [
        {
          image: require('@/img/blog/sidebar/br-1.jpg'),
          title: '成功夫妻的10種祕訣，你做到了嗎？',
          date: 'Nov 27, 2023'
        },
        {
          image: require('@/img/blog/sidebar/br-2.jpg'),
          title: '常做五件事，讓相愛成為一種習慣',
          date: 'Sep 27, 2021'
        },
        {
          image: require('@/img/blog/sidebar/br-3.jpg'),
          title: '7個讓愛延續的方法：深厚的友誼，互相尊重並享受彼此的陪伴！',
          date: 'Aug 18, 2010'
        },
        {
          image: require('@/img/blog/sidebar/br-4.jpg'),
          title: '遇到磨合期也不怕！情侶建立感情的8個小秘訣，做到這些讓你們感情越來越穩～',
          date: 'Feb 07, 2018'
        },
      ],
      instagramImages: [
        require('@/img/blog/sidebar/bi-1.jpg'),
        require('@/img/blog/sidebar/bi-2.jpg'),
        require('@/img/blog/sidebar/bi-3.jpg'),
        require('@/img/blog/sidebar/bi-4.jpg'),
        require('@/img/blog/sidebar/bi-5.jpg'),
        require('@/img/blog/sidebar/bi-6.jpg'),
        require('@/img/blog/sidebar/bi-7.jpg'),
        require('@/img/blog/sidebar/bi-8.jpg')
        // 其他Instagram圖片...
      ],
      sidebarTags: ['Photography', 'Bride', 'Groom', 'Wedding', 'Event', 'Couple']
    };
  }
}
</script>

<style>

</style>
