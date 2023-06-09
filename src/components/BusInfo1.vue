<script>
export default {
  data() {
    return {
      objBus : [
        { location: "배라앞", bus: "사상구5", time: "3분" },
        { location: "배라앞", bus: "사상구5-1", time: "7분" },
        { location: "배라앞", bus: "사상구5-2", time: "12분" }
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