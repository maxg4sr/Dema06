<template>
  <!-- Call To Action Begin -->
  <section class="callto spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="callto__content set-bg" data-setbg="img/team/callto-bg.png">
            <div class="callto__text">
              <h2>Join with us</h2>
              <p>Every love story is beautiful. But your is our favourite.</p>
              <li><router-link to="/views/join" class="primary-btn">View more</router-link></li>
<!--              <a href="" class="primary-btn">View more</a>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Call To Action End -->
</template>

<script>
export default {
  name: "TeamJoinForm"
}
</script>

<style scoped>

.spad {
  padding-top: 100px;
  padding-bottom: 100px;
  background-size: 50%;
  background-position: center;
  background-image: url(~@/img/team/callto-bg.png);
  background-repeat: no-repeat;
}

.callto {
  padding-top: 0;
}

.callto__content {
  height: 513px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.callto__text {
  text-align: center;
}

.callto__text h2 {
  color: #111111;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.callto__text p {
  color: #111111;
  font-size: 20px;
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  margin-bottom: 42px;
}

.callto__text .primary-btn {
  padding: 12px 28px 10px;
}

</style>