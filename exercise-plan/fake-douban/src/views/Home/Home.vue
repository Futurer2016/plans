<template>
<div>
  <sign-in></sign-in>
  <db-sns></db-sns>
  <db-time></db-time>
  <db-video></db-video>
  <db-movie></db-movie>
  <db-team></db-team>
  <db-read></db-read>
  <db-music></db-music>
  <db-dp></db-dp>
  <db-city></db-city>
</div>
</template>

<script>
import SignIn from "./../../components/SignIn/SignIn";
import DbSns from "./../../components/DbSns/DbSns";
import DbTime from "./../../components/DbTime/DbTime";
import DbVideo from "./../../components/DbVideo/DbVideo";
import DbMovie from "./../../components/DbMovie/DbMovie";
import DbTeam from "@/components/DbTeam/DbTeam";
import DbRead from "@/components/DbRead/DbRead";
import DbMusic from "@/components/DbMusic/DbMusic";
import DbDp from "@/components/DbDp/DbDp";
import DbCity from "@/components/DbCity/DbCity";

export default {
  components: {
    SignIn, DbSns, DbTime, DbVideo, DbMovie, DbTeam, DbRead, DbMusic, DbDp, DbCity
  }
}
</script>

<style lang="scss">
  @import "./Home.css";
</style>
