<template>
  <div>
    <HeaderAll/>
    <TeamBreadcrumb/>
    <TeamsMembersManagement/>
    <team-join-form/>
    <FooterAll/>
  </div>
</template>

<script>
import HeaderAll from "@/views/header/HeaderAll";
import FooterAll from "@/views/footer/FooterAll";
import TeamBreadcrumb from "@/views/team/components/TeamBreadcrumb";
import TeamsMember from "@/views/team/components/TeamsMember";
import TeamJoinForm from "@/views/team/components/TeamJoinForm";
import TeamsMembersManagement from "@/views/team/components/TeamsMembersManagement";


export default {
  name: "team",
  components: {
    TeamsMembersManagement,
    TeamJoinForm,
    TeamsMember,
    TeamBreadcrumb,
    HeaderAll,
    FooterAll,
  }
}
</script>

<style scoped>

</style>