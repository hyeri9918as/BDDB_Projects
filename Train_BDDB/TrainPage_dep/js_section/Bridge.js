var id = 1; // Table ID
var myVar;  // setTimeInterval function
var pos = 0;
var pos2 = 0;
var elem = document.getElementById("myAnimation");  // html에 있는 "myAnimation" 개체를 불러와 elem 변수에 선언 / var : 유연한 변수 선언, 변수 재선언 및 재할당 가능 
const elem2 = document.getElementById("myAnimation2");  // html에 있는 "myAnimation2" 개체를 반환한다. / const : 변수를 재선언 및 재할당이 불가능하다.  
function myMove() {
  // <p> button onclick

  // setInterval() : API에서 받아오는 변경된 데이터들을 일정 시간 간격을 두고 받아올때 사용하는 함수
  var id1 = setInterval(frame, 5);  // 기차 이동 속도 , frame 함수를 0.005초마다 호출,  1000밀리초 = 1초
  function frame() {
    if (pos == 1720) {
      pos = 0;
      clearInterval(id1); // clearIntervar() : setIntervar 함수 반복을 중지(리턴받은 id1 값을 매개변수로 작성)
      document.getElementById("GeneralPart1").src = '../../IMG/gray.png'
      document.getElementById("GeneralPart2").src = '../../IMG/gray.png'
      document.getElementById("GeneralPart3").src = '../../IMG/gray.png'
      document.getElementById("GeneralPart4").src = '../../IMG/gray.png'
      myTrain2();

    } else {
      if ((pos == 210) || (pos == 450)
      ) {
        animalHabitat()
      } else {
        if ((pos == 900) || (pos == 1150)) {
          bridge()
        }
      }

      pos++;
      elem.style.left = pos + 'px';
    }
  }
}

function myTrain2() {
  var id2 = setInterval(frame, 5);
  function frame() {
    if (pos2 == -1720) {
      clearInterval(id2);
      document.getElementById("GeneralPart1").src = '../../IMG/gray.png'
      document.getElementById("GeneralPart2").src = '../../IMG/gray.png'
      document.getElementById("GeneralPart3").src = '../../IMG/gray.png'
      document.getElementById("GeneralPart4").src = '../../IMG/gray.png'
      pos2 = 0;
      elem.style.left = 0 + 'px';
      elem2.style.left = 0 + 'px';


    } else {
      if ((pos2 == -400) || (pos2 == -710)) {
        animalHabitat2()
      } else {
        if ((pos2 == -1250) || (pos2 == -1550)) {
          bridge2()
        }
      }
      pos2--;
      elem2.style.left = pos2 + 'px';
    }
  }
}


function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}


function animalHabitat() {

  var table = document.getElementById("AnimalHabitat");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  var cell12 = row.insertCell(11);
  

  cell1.innerHTML = id;
  id++;

  var Timestamp = document.getElementById("AnimalHabitat");            // 출력할 장소 선택
  var now = new Date();      // 현재시간
  var nowTime = now.getFullYear() + "년" + (now.getMonth()+1) + "월" + now.getDate() + "일" + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";

  cell3.innerHTML = nowTime;           // 현재시간을 출력

  var vibration1 = randomInteger(100, 60);
  var vibration2 = randomInteger(90, 60);
  var vibration3 = randomInteger(60, 40);
  var noise1 = randomInteger(100, 60);
  var noise2 = randomInteger(90, 60);
  var noise3 = randomInteger(60, 40);

  cell4.innerHTML = vibration1;
  cell5.innerHTML = vibration2;
  cell6.innerHTML = vibration3;
  cell7.innerHTML = noise1;
  cell8.innerHTML = noise2;
  cell9.innerHTML = noise3;

  var sensorName1 = "I A1";
  var sensorName2 = "I A2";


  if (pos == 210) {
    cell2.innerHTML = sensorName1;
    cell10.innerHTML = "<span style='color: red;'> Detected </span>";
    cell11.innerHTML = "<span style='color: red;'> Detected </span>";
    cell12.innerHTML = "<span style='color: red;'> Detected </span>";

    pic = "../../IMG/Red.png";
  } else
    if (pos == 450) {
      cell2.innerHTML = sensorName2;
      cell10.innerHTML = "<span style='color: green;'> UnDetected </span>";
      cell11.innerHTML = "<span style='color: green;'> UnDetected </span>";
      cell12.innerHTML = "<span style='color: green;'> UnDetected </span>";

      pic = "../../IMG/Green.png";
    }

  if (pos == 210) {
    document.getElementById('GeneralPart1').src = pic;
  } else if (pos = 450) {
    document.getElementById('GeneralPart2').src = pic;
  }
  
}


// 주거지역 테이블에 데이터 출력 
function bridge() {

  var table = document.getElementById("Bridge");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  var cell12 = row.insertCell(11);

  cell1.innerHTML = id;
  id++;

  var Timestamp = document.getElementById("Bridge");            // 출력할 장소 선택
  var now = new Date();      // 현재시간
  var nowTime = now.getFullYear() + "년" + (now.getMonth()+1) + "월" + now.getDate() + "일" + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";

  cell3.innerHTML = nowTime;           // 현재시간을 출력

  var vibration1 = randomInteger(100, 60);
  var vibration2 = randomInteger(90, 60);
  var vibration3 = randomInteger(60, 40);
  var noise1 = randomInteger(100, 60);
  var noise2 = randomInteger(90, 60);
  var noise3 = randomInteger(60, 40);

  cell4.innerHTML = vibration1;
  cell5.innerHTML = vibration2;
  cell6.innerHTML = vibration3;
  cell7.innerHTML = noise1;
  cell8.innerHTML = noise2;
  cell9.innerHTML = noise3;

  var sensorName1 = "G A1";
  var sensorName2 = "G A2";
  var sensorName3 = "R A3";
  var sensorName4 = "R A4";
  var sensorName5 = "T B1";
  var sensorName6 = "T B2";
  var sensorName7 = "B B3";
  var sensorName8 = "B B4";

  if (pos == 900) {
    cell2.innerHTML = sensorName3;
    cell10.innerHTML = "<span style='color: green;'> UnDetected </span>";
    cell11.innerHTML = "<span style='color: green;'> UnDetected </span>";
    cell12.innerHTML = "<span style='color: green;'> UnDetected </span>";
    pic = "../../IMG/Green.png";

  } else if (pos == 1150) {
    cell2.innerHTML = sensorName4;
    cell10.innerHTML = "<span style='color: red;'> Detected </span>";
    cell11.innerHTML = "<span style='color: red;'> Detected </span>";
    cell12.innerHTML = "<span style='color: red;'> Detected </span>";
    pic = "../../IMG/Red.png";

  }

  if (pos == 900) {
    document.getElementById('GeneralPart3').src = pic;
  } else if (pos = 1150) {
    document.getElementById('GeneralPart4').src = pic;
  }
}


function animalHabitat2() {

  var table = document.getElementById("AnimalHabitat2");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  var cell12 = row.insertCell(11);

  cell1.innerHTML = id;
  id++;

  var Timestamp = document.getElementById("AnimalHabitat2");            // 출력할 장소 선택
  var now = new Date();      // 현재시간
  var nowTime = now.getFullYear() + "년" + (now.getMonth()+1) + "월" + now.getDate() + "일" + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";

  cell3.innerHTML = nowTime;           // 현재시간을 출력

  var vibration1 = randomInteger(100, 60);
  var vibration2 = randomInteger(90, 60);
  var vibration3 = randomInteger(60, 40);
  var noise1 = randomInteger(100, 60);
  var noise2 = randomInteger(90, 60);
  var noise3 = randomInteger(60, 40);

  cell4.innerHTML = vibration1;
  cell5.innerHTML = vibration2;
  cell6.innerHTML = vibration3;
  cell7.innerHTML = noise1;
  cell8.innerHTML = noise2;
  cell9.innerHTML = noise3;

  var sensorName1 = "G A1";
  var sensorName2 = "G A2";
  var sensorName3 = "R A3";
  var sensorName4 = "R A4";
  var sensorName5 = "T B1";
  var sensorName6 = "T B2";
  var sensorName7 = "B B3";
  var sensorName8 = "B B4";


  if (pos2 == -400) {
    cell2.innerHTML = sensorName5;
    cell10.innerHTML = "<span style='color: red;'> Detected </span>";
    cell11.innerHTML = "<span style='color: red;'> Detected </span>";
    cell12.innerHTML = "<span style='color: red;'> Detected </span>";
    pic = "../../IMG/Red.png";
  } else
    if (pos2 == -710) {
      cell2.innerHTML = sensorName6;
      cell10.innerHTML = "<span style='color: green;'> UnDetected </span>";
      cell11.innerHTML = "<span style='color: green;'> UnDetected </span>";
      cell12.innerHTML = "<span style='color: green;'> UnDetected </span>";
      pic = "../../IMG/Green.png";
    }


  if (pos2 == -400) {
    document.getElementById('GeneralPart4').src = pic;
  } else if (pos2 == -710) {
    document.getElementById('GeneralPart3').src = pic;
  }


}

function bridge2() {

  var table = document.getElementById("Bridge2");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  var cell12 = row.insertCell(11);

  cell1.innerHTML = id;
  id++;

  var Timestamp = document.getElementById("Bridge2");            // 출력할 장소 선택
  var now = new Date();      // 현재시간
  var nowTime = now.getFullYear() + "년" + (now.getMonth()+1) + "월" + now.getDate() + "일" + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";

  cell3.innerHTML = nowTime;           // 현재시간을 출력

  var vibration1 = randomInteger(100, 60);
  var vibration2 = randomInteger(90, 60);
  var vibration3 = randomInteger(60, 40);
  var noise1 = randomInteger(100, 60);
  var noise2 = randomInteger(90, 60);
  var noise3 = randomInteger(60, 40);

  cell4.innerHTML = vibration1;
  cell5.innerHTML = vibration2;
  cell6.innerHTML = vibration3;
  cell7.innerHTML = noise1;
  cell8.innerHTML = noise2;
  cell9.innerHTML = noise3;

  var sensorName1 = "G A1";
  var sensorName2 = "G A2";
  var sensorName3 = "R A3";
  var sensorName4 = "R A4";
  var sensorName5 = "T B1";
  var sensorName6 = "T B2";
  var sensorName7 = "B B3";
  var sensorName8 = "B B4";


  if (pos2 == -1250) {
    cell2.innerHTML = sensorName7;
    cell10.innerHTML = "<span style='color: red;'> Detected </span>";
    cell11.innerHTML = "<span style='color: red;'> Detected </span>";
    cell12.innerHTML = "<span style='color: red;'> Detected </span>";
    pic = "../../IMG/Red.png";
  } else
    if (pos2 == -1550) {
      cell2.innerHTML = sensorName8;
      cell10.innerHTML = "<span style='color: green;'> UnDetected </span>";
      cell11.innerHTML = "<span style='color: green;'> UnDetected </span>";
      cell12.innerHTML = "<span style='color: green;'> UnDetected </span>";
      pic = "../../IMG/Green.png";
    }

  if (pos2 == -1250) {
    document.getElementById('GeneralPart2').src = pic;
  } else if (pos2 == -1550) {
    document.getElementById('GeneralPart1').src = pic;
  }


}
