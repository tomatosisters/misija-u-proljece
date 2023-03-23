function hide_mocpuzzle_rjesenje1() {
  document.getElementById("lajka").style.display = "none";
};

function mocpuzzle_evidence1() {
	var e1lowercase = document.getElementById("mocpuzzle1_text").value;
  var e1 = e1lowercase.toUpperCase();
  var answer1;
  var randomanswer1 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e1 == "PAS LAJKA" || e1 == "LAJKA" || e1 == "PAS LAIKA" || e1 == "LAIKA") {
  		answer1 = "";
      hide_mocpuzzle_rjesenje1();
      document.getElementById("lajka").style.display = "block";
	} else {
  		answer1 = randomanswer1[Math.floor(Math.random()*randomanswer1.length)];
      hide_mocpuzzle_rjesenje1();
  	}
  document.getElementById("mocpuzzle1_answer").innerHTML = answer1;
};

function hide_mocpuzzle_rjesenje2() {
  document.getElementById("zeus").style.display = "none";
};

function mocpuzzle_evidence2() {
	var e2lowercase = document.getElementById("mocpuzzle2_text").value;
  var e2 = e2lowercase.toUpperCase();
  var answer2;
  var randomanswer2 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e2 == "ZEUS") {
  		answer2 = "";
      hide_mocpuzzle_rjesenje2();
      document.getElementById("zeus").style.display = "block";
	} else {
  		answer2 = randomanswer2[Math.floor(Math.random()*randomanswer2.length)];
      hide_mocpuzzle_rjesenje2();
  	}
  document.getElementById("mocpuzzle2_answer").innerHTML = answer2;
};

function hide_mocpuzzle_rjesenje3() {
  document.getElementById("tridesetsest").style.display = "none";
};

function mocpuzzle_evidence3() {
	var e3lowercase = document.getElementById("mocpuzzle3_text").value;
  var e3 = e3lowercase.toUpperCase();
  var answer3;
  var randomanswer3 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e3 == "36" || e3 == "TRIDESET ŠEST" || e3 == "TRIDESET SEST" || e3 == "TRIDESETŠEST" || e3 == "TRIDESETSEST" || e3 == "TRIDESET I ŠEST" || e3 == "TRIDESET I SEST") {
  		answer3 = "";
      hide_mocpuzzle_rjesenje3();
      document.getElementById("tridesetsest").style.display = "block";
	} else {
  		answer3 = randomanswer3[Math.floor(Math.random()*randomanswer3.length)];
      hide_mocpuzzle_rjesenje3();
  	}
  document.getElementById("mocpuzzle3_answer").innerHTML = answer3;
};

function hide_mocpuzzle_rjesenje4() {
  document.getElementById("kokosi").style.display = "none";
};

function mocpuzzle_evidence4() {
	var e4lowercase = document.getElementById("mocpuzzle4_text").value;
  var e4 = e4lowercase.toUpperCase();
  var answer4;
  var randomanswer4 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e4 == "RASPJEVANE KOKOSI" || e4 == "RASPJEVANE KOKOŠI") {
  		answer4 = "";
      hide_mocpuzzle_rjesenje4();
      document.getElementById("kokosi").style.display = "block";
	} else {
  		answer4 = randomanswer4[Math.floor(Math.random()*randomanswer4.length)];
      hide_mocpuzzle_rjesenje4();
  	}
  document.getElementById("mocpuzzle4_answer").innerHTML = answer4;
};

function hide_mocpuzzle_rjesenje5() {
  document.getElementById("plava").style.display = "none";
};

function mocpuzzle_evidence5() {
	var e5lowercase = document.getElementById("mocpuzzle5_text").value;
  var e5 = e5lowercase.toUpperCase();
  var answer5;
  var randomanswer5 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e5 == "PLAVA") {
  		answer5 = "";
      hide_mocpuzzle_rjesenje5();
      document.getElementById("plava").style.display = "block";
	} else {
  		answer5 = randomanswer5[Math.floor(Math.random()*randomanswer5.length)];
      hide_mocpuzzle_rjesenje5();
  	}
  document.getElementById("mocpuzzle5_answer").innerHTML = answer5;
};

function hide_mocpuzzle_rjesenje6() {
  document.getElementById("tri").style.display = "none";
};

function mocpuzzle_evidence6() {
	var e6lowercase = document.getElementById("mocpuzzle6_text").value;
  var e6 = e6lowercase.toUpperCase();
  var answer6;
  var randomanswer6 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e6 == "3" || e6 == "TRI") {
  		answer6 = "";
      hide_mocpuzzle_rjesenje6();
      document.getElementById("tri").style.display = "block";
	} else {
  		answer6 = randomanswer6[Math.floor(Math.random()*randomanswer6.length)];
      hide_mocpuzzle_rjesenje6();
  	}
  document.getElementById("mocpuzzle6_answer").innerHTML = answer6;
};

function hide_mocpuzzle_rjesenje7() {
  document.getElementById("sest").style.display = "none";
};

function mocpuzzle_evidence7() {
	var e7lowercase = document.getElementById("mocpuzzle7_text").value;
  var e7 = e7lowercase.toUpperCase();
  var answer7;
  var randomanswer7 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e7 == "6" || e7 == "SEST") {
  		answer7 = "";
      hide_mocpuzzle_rjesenje7();
      document.getElementById("sest").style.display = "block";
	} else {
  		answer7 = randomanswer7[Math.floor(Math.random()*randomanswer7.length)];
      hide_mocpuzzle_rjesenje7();
  	}
  document.getElementById("mocpuzzle7_answer").innerHTML = answer7;
};

function hide_mocpuzzle_rjesenje8() {
  document.getElementById("kapa").style.display = "none";
};

function mocpuzzle_evidence8() {
	var e8lowercase = document.getElementById("mocpuzzle8_text").value;
  var e8 = e8lowercase.toUpperCase();
  var answer8;
  var randomanswer8 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e8 == "KAPA" || e8 == "KAPICA") {
  		answer8 = "";
      hide_mocpuzzle_rjesenje8();
      document.getElementById("kapa").style.display = "block";
	} else {
  		answer8 = randomanswer8[Math.floor(Math.random()*randomanswer8.length)];
      hide_mocpuzzle_rjesenje8();
  	}
  document.getElementById("mocpuzzle8_answer").innerHTML = answer8;
};

function hide_mocpuzzle_rjesenje9() {
  document.getElementById("crvena").style.display = "none";
};

function mocpuzzle_evidence9() {
	var e9lowercase = document.getElementById("mocpuzzle9_text").value;
  var e9 = e9lowercase.toUpperCase();
  var answer9;
  var randomanswer9 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e9 == "CRVENA" || e9 == "CRVENE") {
  		answer9 = "";
      hide_mocpuzzle_rjesenje9();
      document.getElementById("crvena").style.display = "block";
	} else {
  		answer9 = randomanswer9[Math.floor(Math.random()*randomanswer9.length)];
      hide_mocpuzzle_rjesenje9();
  	}
  document.getElementById("mocpuzzle9_answer").innerHTML = answer9;
};

function hide_mocpuzzle_rjesenje10() {
  document.getElementById("pingpong").style.display = "none";
};

function mocpuzzle_evidence10() {
	var e10lowercase = document.getElementById("mocpuzzle10_text").value;
  var e10 = e10lowercase.toUpperCase();
  var answer10;
  var randomanswer10 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e10 == "PINGPONG" || e10 == "PING PONG" || e10 == "PING-PONG") {
  		answer10 = "";
      hide_mocpuzzle_rjesenje10();
      document.getElementById("pingpong").style.display = "block";
	} else {
  		answer10 = randomanswer10[Math.floor(Math.random()*randomanswer10.length)];
      hide_mocpuzzle_rjesenje10();
  	}
  document.getElementById("mocpuzzle10_answer").innerHTML = answer10;
};

function hide_mocpuzzle_rjesenje11() {
  document.getElementById("d").style.display = "none";
};

function mocpuzzle_evidence11() {
	var e11lowercase = document.getElementById("mocpuzzle11_text").value;
  var e11 = e11lowercase.toUpperCase();
  var answer11;
  var randomanswer11 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e11 == "D") {
  		answer11 = "";
      hide_mocpuzzle_rjesenje11();
      document.getElementById("d").style.display = "block";
	} else {
  		answer11 = randomanswer11[Math.floor(Math.random()*randomanswer11.length)];
      hide_mocpuzzle_rjesenje11();
  	}
  document.getElementById("mocpuzzle11_answer").innerHTML = answer11;
};

function hide_mocpuzzle_rjesenje12() {
  document.getElementById("hidrant").style.display = "none";
};

function mocpuzzle_evidence12() {
	var e12lowercase = document.getElementById("mocpuzzle12_text").value;
  var e12 = e12lowercase.toUpperCase();
  var answer12;
  var randomanswer12 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e12 == "HIDRANT") {
  		answer12 = "";
      hide_mocpuzzle_rjesenje12();
      document.getElementById("hidrant").style.display = "block";
	} else {
  		answer12 = randomanswer12[Math.floor(Math.random()*randomanswer12.length)];
      hide_mocpuzzle_rjesenje12();
  	}
  document.getElementById("mocpuzzle12_answer").innerHTML = answer12;
};

function hide_mocpuzzle_rjesenje13() {
  document.getElementById("anja").style.display = "none";
};

function mocpuzzle_evidence13() {
	var e13lowercase = document.getElementById("mocpuzzle13_text").value;
  var e13 = e13lowercase.toUpperCase();
  var answer13;
  var randomanswer13 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e13 == "ANJA") {
  		answer13 = "";
      hide_mocpuzzle_rjesenje13();
      document.getElementById("anja").style.display = "block";
	} else {
  		answer13 = randomanswer13[Math.floor(Math.random()*randomanswer13.length)];
      hide_mocpuzzle_rjesenje13();
  	}
  document.getElementById("mocpuzzle13_answer").innerHTML = answer13;
};

function hide_mocpuzzle_rjesenje14() {
  document.getElementById("maštara").style.display = "none";
};

function mocpuzzle_evidence14() {
	var e14lowercase = document.getElementById("mocpuzzle14_text").value;
  var e14 = e14lowercase.toUpperCase();
  var answer14;
  var randomanswer14 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e14 == "MAŠTARA" || e14 == "MASTARA") {
  		answer14 = "";
      hide_mocpuzzle_rjesenje14();
      document.getElementById("maštara").style.display = "block";
	} else {
  		answer14 = randomanswer14[Math.floor(Math.random()*randomanswer14.length)];
      hide_mocpuzzle_rjesenje14();
  	}
  document.getElementById("mocpuzzle14_answer").innerHTML = answer14;
};

function hide_mocpuzzle_rjesenje15() {
  document.getElementById("znanstvenice").style.display = "none";
};

function mocpuzzle_evidence15() {
	var e15lowercase = document.getElementById("mocpuzzle15_text").value;
  var e15 = e15lowercase.toUpperCase();
  var answer15;
  var randomanswer15 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e15 == "A4, B1, C5, D6, E3, F2" || e15 == "A4,B1,C5,D6,E3,F2") {
  		answer15 = "";
      hide_mocpuzzle_rjesenje15();
      document.getElementById("znanstvenice").style.display = "block";
	} else {
  		answer15 = randomanswer15[Math.floor(Math.random()*randomanswer15.length)];
      hide_mocpuzzle_rjesenje15();
  	}
  document.getElementById("mocpuzzle15_answer").innerHTML = answer15;
};

function hide_mocpuzzle_rjesenje16() {
  document.getElementById("oči").style.display = "none";
};

function mocpuzzle_evidence16() {
	var e16lowercase = document.getElementById("mocpuzzle16_text").value;
  var e16 = e16lowercase.toUpperCase();
  var answer16;
  var randomanswer16 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e16 == "4" || e16 == "ČETIRI") {
  		answer16 = "";
      hide_mocpuzzle_rjesenje16();
      document.getElementById("oči").style.display = "block";
	} else {
  		answer16 = randomanswer16[Math.floor(Math.random()*randomanswer16.length)];
      hide_mocpuzzle_rjesenje16();
  	}
  document.getElementById("mocpuzzle16_answer").innerHTML = answer16;
};

function hide_mocpuzzle_rjesenje17() {
  document.getElementById("pčela").style.display = "none";
};

function mocpuzzle_evidence17() {
	var e17lowercase = document.getElementById("mocpuzzle17_text").value;
  var e17 = e17lowercase.toUpperCase();
  var answer17;
  var randomanswer17 = [
  "Probaj ponovo!",
  "Pokušaj opet, možeš ti to!",
  "Hajmo znanstveniče, pokušaj još jednom!",
  ];
  if (e17 == "PČELA" || e17 == "O PČELI" || e17 == "PČELI") {
  		answer17 = "";
      hide_mocpuzzle_rjesenje17();
      document.getElementById("pčela").style.display = "block";
	} else {
  		answer17 = randomanswer17[Math.floor(Math.random()*randomanswer17.length)];
      hide_mocpuzzle_rjesenje17();
  	}
  document.getElementById("mocpuzzle17_answer").innerHTML = answer17;
};
