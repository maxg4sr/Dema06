<!-- 靜態團隊成員列表 -->
<template>
  <section class="team spad">
    <div class="container">
      <div class="row">
        <div v-for="(member, index) in teamMembers" :key="index" class="col-lg-4 col-md-6 col-sm-6">
          <div class="team__item">
            <div class="team__item__pic">
              <img :src="member.image" alt="">
            </div>
            <div class="team__item__text">
              <h3>{{ member.name }}</h3>
              <span>{{ member.position }}</span>
              <div class="team__item__social">
                <TeamSocialMediaIcons/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TeamSocialMediaIcons from "@/views/team/components/TeamSocialMediaIcons";

export default {
  name: "TeamsMembersManagement",
  components: {
    TeamSocialMediaIcons,
  },
  data() {
    return {
      // 添加其他團隊成員的資料
      teamMembers: [
        {
          name: "Gin Li",
          position: "Dream Come True總監 CEO / 創辦人",
          image: require('@/img/team/ceo05.png'),
        },
        {
          name: "Maurice Watkins",
          position: "婚禮顧問",
          image: require('@/img/team/team-2.png'),
        },
        {
          name: "Nelle Curtis",
          position: "新娘秘書",
          image: require('@/img/team/team-3.png'),
        },
        {
          name: "Leon Taylor",
          position: "攝影技術總監",
          image: require('@/img/team/team-4.png'),
        },
        {
          name: "Susan Fuller",
          position: "攝影技術組長",
          image: require('@/img/team/team-5.png'),
        },
        {
          name: "Hettie Cole",
          position: "創意總監",
          image: require('@/img/team/team-6.png'),
        },
        {
          name: "Lula Henderson",
          position: "海外婚顧",
          image: require('@/img/team/team-7.png'),
        },
        {
          name: "Howard Haynes",
          position: "服裝設計組長",
          image: require('@/img/team/team-8.png'),
        },
        {
          name: "Lula Henderson",
          position: "海外婚顧",
          image: require('@/img/team/team-9.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>