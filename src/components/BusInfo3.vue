<script>
export default {
  data() {
    return {
      objBus : [
        { location: "주례역1번", bus: "사상구2", time: "1분" },
        { location: "주례역1번", bus: "사상구3", time: "4분" },
        { location: "주례역1번", bus: "사상구3-1", time: "3분" }
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