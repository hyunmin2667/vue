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

<script>
export default {
  data() {
    return {
      serviceKey: import.meta.env.VITE_API_KEY,
      objBus : [
        { location: "냉정역5번", bus: "사상구5-1", time: "도착정보없음" },
        { location: "냉정역5번", bus: "사상구5-2", time: "도착정보없음" }
      ],
    }
  },
  methods: {
      /**
     * 함수에 대한 설명을 작성합니다.
     * @param { Number } arrayNum - 화면에 표시할 배열의 순번
     * @param { Number } lineid - 노선 ID
     * @param { Number } bstopid - 정류소 ID
     * @returns { Number } 버스도착정보에 대한 정보
     */
      stopArrByBstopid(arrayNum, lineid, bstopid) {
        const self = this;
        const SERVICE_KEY = this.serviceKey;
        var xhr = new XMLHttpRequest();
        var url = 'http://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid'; /*URL*/
        var queryParams = '?' + encodeURIComponent('serviceKey') + '='+encodeURIComponent(SERVICE_KEY); /*Service Key*/
        queryParams += '&' + encodeURIComponent('lineid') + '=' + encodeURIComponent(lineid); /**/
        queryParams += '&' + encodeURIComponent('bstopid') + '=' + encodeURIComponent(bstopid); /**/

        xhr.open('GET', url + queryParams);
        xhr.onreadystatechange = function () {
          if (this.readyState == 4) {
            // parsing

            let xmlParser = new DOMParser(); //DOM파서 객체를 생성 
            let xmlDoc = xmlParser.parseFromString(this.responseText, "text/xml"); // parseFromString() 메소드를 이용해 문자열을 파싱함.
            
            try {
              let parsedTag_min1 = xmlDoc.getElementsByTagName('min1')[0].textContent;
              let parsedTag_station1 = xmlDoc.getElementsByTagName('station1')[0].textContent;
              self.objBus[arrayNum].time = parsedTag_min1+"분 ("+parsedTag_station1+"번째 전)";
            } catch (error) {
              self.objBus[arrayNum].time = "도착정보없음";
            }
          }
        };
        xhr.send('');
      }
    },
    created() {
      //0번째, 사상구5-1, 냉정역5번출구
      this.stopArrByBstopid(0,5291505100,195730101);

      //1번째, 사상구5-2, 냉정역5번출구
      this.stopArrByBstopid(1,5291505200,195730101);


    },
  };
</script> 