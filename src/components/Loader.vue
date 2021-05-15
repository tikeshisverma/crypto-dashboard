<template>
<div class="loader"></div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    
  }
};
</script>

<style scoped>
/* Credit: https://codepen.io/code_dependant/pen/bjFgq */
.loader {
  width: 400px;
  height: 40px;
  background-color: #ddd;
  top: 50%;
  left: 50%;
  margin: -40px -200px;
  position: absolute;
  border-radius: 100px;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.05);
}

.loader:after {
  border-radius: 100px;
  content: "";
  position: absolute;
  background-color: #fff;
  left: 2px;
  top: 2px;
  bottom: 2px;
  right: 360px;
  animation-name: slide;
  animation-duration: 2s;
  animation-easing-function: linear;
  animation-iteration-count: infinite;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes slide {
  0% {
    right: 360px;
    left: 2px;
  }
  5% {
    left: 2px;
  }
  50% {
    right: 2px;
    left: 360px;
  }
  55% {
    right: 2px;
  }
  100% {
    right: 360px;
    left: 2px;
  }
}

</style>
