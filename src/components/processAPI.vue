

<!-- 

<script>
export default {
  data: {
    items: [],
    error: null
  },
  
  created: function() {
    const SERVICE_KEY = import.meta.env.API_KEY;
    var self = this;
    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/6260000/BusanBIMS/busStopList'; /*URL*/
    var queryParams = '?' + encodeURIComponent('serviceKey') + '='+SERVICE_KEY; /*Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
    queryParams += '&' + encodeURIComponent('bstopnm') + '=' + encodeURIComponent('동서대스튜던트프라자'); /**/
    queryParams += '&' + encodeURIComponent('arsno') + '=' + encodeURIComponent(''); /**/

    xhr.open('GET', url + queryParams, true);
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          self.items = [];
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(this.responseText, 'text/xml');
          var items = xmlDoc.getElementsByTagName('item');
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            self.items.push({
              bstopnm: item.getElementsByTagName('bstopnm')[0].childNodes[0].nodeValue,
              arsno: item.getElementsByTagName('arsno')[0].childNodes[0].nodeValue
            });
          }
        } else {
          self.error = 'Failed to load data (' + this.status + ')';
        }
      }
    };
    xhr.send();
  }
};


</script>

 -->
