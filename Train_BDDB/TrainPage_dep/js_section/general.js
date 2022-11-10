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
    if (pos == 1465) {
      pos = 0;
      clearInterval(id1); // clearIntervar() : setIntervar 함수 반복을 중지(리턴받은 id1 값을 매개변수로 작성)
      document.getElementById("GeneralPart1").src = '../IMG/gray.png'
      document.getElementById("GeneralPart2").src = '../IMG/gray.png'
      document.getElementById("GeneralPart3").src = '../IMG/gray.png'
      document.getElementById("GeneralPart4").src = '../IMG/gray.png'
      myTrain2();

    } else {
      if ((pos == 210) || (pos == 450)
      ) {
        intersection()
      } else {
        if ((pos == 900) || (pos == 1150)) {
          residentialarea()
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
    if (pos2 == -1465) {
      clearInterval(id2);
      document.getElementById("GeneralPart1").src = '../IMG/gray.png'
      document.getElementById("GeneralPart2").src = '../IMG/gray.png'
      document.getElementById("GeneralPart3").src = '../IMG/gray.png'
      document.getElementById("GeneralPart4").src = '../IMG/gray.png'
      pos2 = 0;
      elem.style.left = 0 + 'px';
      elem2.style.left = 0 + 'px';




    } else {
      if ((pos2 == -210) || (pos2 == -450)) {
        tunnel()
      } else {
        if ((pos2 == -900) || (pos2 == -1150)) {
          bridge()
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


function intersection() {

  var table = document.getElementById("Intersection");
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

  cell1.innerHTML = id;
  id++;

  var vibration1 = randomInteger(100, 60);
  var vibration2 = randomInteger(90, 60);
  var vibration3 = randomInteger(60, 40);
  var noise1 = randomInteger(100, 60);
  var noise2 = randomInteger(90, 60);
  var noise3 = randomInteger(60, 40);

  cell3.innerHTML = vibration1;
  cell4.innerHTML = vibration2;
  cell5.innerHTML = vibration3;
  cell6.innerHTML = noise1;
  cell7.innerHTML = noise2;
  cell8.innerHTML = noise3;

  var sensorName1 = "I A1";
  var sensorName2 = "I A2";


  if (pos == 210) {
    cell2.innerHTML = sensorName1;
    cell9.innerHTML = "x축";
    cell10.innerHTML = "y축";
    cell11.innerHTML = "z축";

    pic = "../IMG/Green.png";
  } else
    if (pos == 450) {
      cell2.innerHTML = sensorName2;
      cell9.innerHTML = "x축";
      cell10.innerHTML = "y축";
      cell11.innerHTML = "z축";

      pic = "../IMG/Green.png";
    }

  if (pos == 210) {
    document.getElementById('GeneralPart1').src = pic;
  } else if (pos = 450) {
    document.getElementById('GeneralPart2').src = pic;
  }


}


// 주거지역 테이블에 데이터 출력 
function residentialarea() {

  var table = document.getElementById("ResidensialArea");
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

  cell1.innerHTML = id;
  id++;

  var vibration1 = randomInteger(100, 60);
  var vibration2 = randomInteger(90, 60);
  var vibration3 = randomInteger(60, 40);
  var noise1 = randomInteger(100, 60);
  var noise2 = randomInteger(90, 60);
  var noise3 = randomInteger(60, 40);

  cell3.innerHTML = vibration1;
  cell4.innerHTML = vibration2;
  cell5.innerHTML = vibration3;
  cell6.innerHTML = noise1;
  cell7.innerHTML = noise2;
  cell8.innerHTML = noise3;

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
    cell9.innerHTML = "<span style='color: green;'> clear </span>";
    cell10.innerHTML = "<span style='color: green;'> clear </span>";
    cell11.innerHTML = "<span style='color: green;'> clear </span>";
    pic = "../IMG/Green.png";

  } else if (pos == 1150) {
    cell2.innerHTML = sensorName4;
    cell9.innerHTML = "<span style='color: green;'> clear </span>";
    cell10.innerHTML = "<span style='color: green;'> clear </span>";
    cell11.innerHTML = "<span style='color: green;'> clear </span>";
    pic = "../IMG/Green.png";

  }

  if (pos == 900) {
    document.getElementById('GeneralPart3').src = pic;
  } else if (pos = 1150) {
    document.getElementById('GeneralPart4').src = pic;
  }
}


function tunnel() {

  var table = document.getElementById("Tunnel");
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

  cell1.innerHTML = id;
  id++;

  var vibration1 = randomInteger(100, 60);
  var vibration2 = randomInteger(90, 60);
  var vibration3 = randomInteger(60, 40);
  var noise1 = randomInteger(100, 60);
  var noise2 = randomInteger(90, 60);
  var noise3 = randomInteger(60, 40);

  cell3.innerHTML = vibration1;
  cell4.innerHTML = vibration2;
  cell5.innerHTML = vibration3;
  cell6.innerHTML = noise1;
  cell7.innerHTML = noise2;
  cell8.innerHTML = noise3;

  var sensorName1 = "G A1";
  var sensorName2 = "G A2";
  var sensorName3 = "R A3";
  var sensorName4 = "R A4";
  var sensorName5 = "T B1";
  var sensorName6 = "T B2";
  var sensorName7 = "B B3";
  var sensorName8 = "B B4";


  if (pos2 == -210) {
    cell2.innerHTML = sensorName5;
    cell9.innerHTML = "x축";
    cell10.innerHTML = "y축";
    cell11.innerHTML = "z축";
    pic = "../IMG/Green.png";
  } else
    if (pos2 == -450) {
      cell2.innerHTML = sensorName6;
      cell9.innerHTML = "x축";
      cell10.innerHTML = "y축";
      cell11.innerHTML = "z축";
      pic = "../IMG/Green.png";
    }


  if (pos2 == -250) {
    document.getElementById('GeneralPart4').src = pic;
  } else if (pos2 == -450) {
    document.getElementById('GeneralPart3').src = pic;
  }


}

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

  cell1.innerHTML = id;
  id++;

  var vibration1 = randomInteger(100, 60);
  var vibration2 = randomInteger(90, 60);
  var vibration3 = randomInteger(60, 40);
  var noise1 = randomInteger(100, 60);
  var noise2 = randomInteger(90, 60);
  var noise3 = randomInteger(60, 40);

  cell3.innerHTML = vibration1;
  cell4.innerHTML = vibration2;
  cell5.innerHTML = vibration3;
  cell6.innerHTML = noise1;
  cell7.innerHTML = noise2;
  cell8.innerHTML = noise3;

  var sensorName1 = "G A1";
  var sensorName2 = "G A2";
  var sensorName3 = "R A3";
  var sensorName4 = "R A4";
  var sensorName5 = "T B1";
  var sensorName6 = "T B2";
  var sensorName7 = "B B3";
  var sensorName8 = "B B4";


  if (pos2 == -900) {
    cell2.innerHTML = sensorName7;
    cell9.innerHTML = "x축";
    cell10.innerHTML = "y축";
    cell11.innerHTML = "z축";
    pic = "../IMG/Green.png";
  } else
    if (pos2 == -1150) {
      cell2.innerHTML = sensorName8;
      cell9.innerHTML = "x축";
      cell10.innerHTML = "y축";
      cell11.innerHTML = "z축";
      pic = "../IMG/Green.png";
    }

  if (pos2 == -900) {
    document.getElementById('GeneralPart2').src = pic;
  } else if (pos2 == -1150) {
    document.getElementById('GeneralPart1').src = pic;
  }


}
