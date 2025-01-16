<template>
  <footer class="border-r">
    <div class="footer-box">
      <div class="footer-class">   
        <div class="for-desktop"><img src="/logo.png" alt="tickets"/></div>
        <div class="box-footer-item">
          <NuxtLink class="hover-text-d" to="/">Возможности</NuxtLink>
          <NuxtLink class="hover-text-d" to="/">Стоимость</NuxtLink>
          <NuxtLink class="hover-text-d" to="/">Помощь</NuxtLink>
          <NuxtLink class="hover-text-d" to="/">Обучение</NuxtLink>
        </div>
      </div>
      <div class="footer-class">
        <span>Оплата</span>
        <div class="payment-item">
          <img src="/masterc.png" alt="mastercard"/>
          <img src="/mir.png" alt="mir"/>
          <img src="/visa.png" alt="visa"/>
          <img src="/spb.png" alt="spb">
          <img src="/sberpay.png" alt="sberpay">
          <img src="/halva.png" alt="halva">
        </div>
      </div>
      <div class="contacts footer-class">
        <span>Контакты</span>
        <div class="box-mail">
          <div class="mail-item">
            <a href="/"><img src="/mail.png" alt="mail"></a>
            <div>
              <p>для продавцов</p>
              <a class="mail-a hover-text-d" href="/">info@passtickets.ru</a>
            </div>
          </div>
          <div class="mail-item">
            <a href="/"><img src="/mail.png" alt="mail"></a>
            <div>
              <p>для покупателей</p>
              <a class="mail-a hover-text-d" href="/">support@passtickets.ru</a>
            </div>
          </div>
          <div style="margin: 20px 0 0 80px;display: flex;">
            <a href="/"><img class="socialnet" src="/vk.png" alt="vk"></a>
            <a href="/"><img class="socialnet" src="/telegram.png" alt="tg"></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #3a3a3a;
  margin-top: 20px;
  font-size: 18px;
}

.footer-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
}
span {
  font-family: 'TT Norms Pro Black';
  font-weight: 900;
  font-style: normal;
  opacity: 0.5;
}

.box-footer-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: 0.8s;
}

.footer-class {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  span {
    font-size: 30px;
  }
}

.payment-item {
  display: flex;
  flex-wrap: wrap;
  width: 230px;
  justify-content: center;
  gap: 20px;
}

.mail-item {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
}

.socialnet {
  width: 25px;
  margin: 0 5px;
}
.mail-a {
  font-family: 'TT Norms Pro ThinItalic';
  font-weight: 100;
  font-style: italic;
}
.hover-text-d:hover {
text-decoration: underline #bab9ff;
}
</style>