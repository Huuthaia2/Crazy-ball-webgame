var HttpPost=function(){function e(){}return e.HttpPost_GetTerrace=function(e,t,o){},e.serversData=function(e,t,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==a.readyState&&a.status>=200&&a.status<400){var e=a.responseText;GameBaseData.isDebug&&console.log(e),e=JSON.parse(e),o&&o(e)}},a.onerror=function(e){o&&o(e)},a.ontimeout=function(){o&&o("Timeout")},GameBaseData.isDebug&&console.log("httpPost=>"+e+"     data=>config="+t),a.open("POST",e,!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send("config="+t)},e.urlSevrves="https://facebook.miguapp.cc/Ball/",e._GetTerrace="getTerrace.do",e}();