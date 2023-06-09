<script>
export default {
  data() {
    return {
      objBus : [
        { location: "냉정역5번", bus: "사상구5-1", time: "9분" },
        { location: "냉정역5번", bus: "사상구5-2", time: "5분" }
      ],
    }
  }
}
</script>

<template>
  <ul class="busInfo-list">
    <li v-for="bus,i in objBus" :key="i">
      <a>
        <span class="busInfo-title">{{ bus.location }}</span>
        <span class="busInfo-bus">{{ bus.bus }}</span>
      </a>
      <span class="busInfo-view">{{ bus.time }}</span>
    </li>
  </ul>
</template>