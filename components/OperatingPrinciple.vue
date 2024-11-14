<template>
  <div class="box-principle border-r ">
    <div class="principle-item">
      <img class="img-login" src="/login.png" alt="login">
      <p>Зарегистрируйся</p>
    </div>
    <div class="line"></div>
    <div class="principle-item">
      <img class="img-login" src="/event.png" alt="event">
      <p>Создай мероприятие</p>
    </div>
    <div class="line"></div>
    <div class="principle-item">
      <img class="img-login" src="/money.png" alt="money">
      <p>Открывай продажи</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 100px;
}
.box-principle{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 30px;
}
.principle-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; 
  p{
    font-size: 20px;
  }
}
.line {
 border-top: 2px dashed #9e9e9e;
  width: 150px;
}
</style>