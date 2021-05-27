var marks=[30,44,23,15,49]
console.log(marks)
var s1,s2,s3,s4;
var array=[]
var subName,marks,totalMarks;
var sub1,sub2,sub3,sub4,sub5;
var marks1,marks2,marks3,marks4,marks5;
var totalMarks1,totalMarks2,totalMarks3,totalMarks4,totalMarks5;
var m1, m2, m3, m4, m5;
var tM1,tM2,tM3,tM4,tM5; 
var percent1, percent2, percent3, percent4, percent5;
var myTotalMarks,totalOutOfMarks,overallPercentage,average 
var addition,totalAddition;


function percentage1(){
  var percent= m1/tM1*100;
  text(percent+"%",220,350);
  
}

function percentage2(){
  var percent= m2/tM2*100;
  text(percent+"%",344,350)
}

function percentage3(){
  var percent= m3/tM3*100;
  text(percent+"%",464,350)
}

function percentage4(){
  var percent= m4/tM4*100;
  text(percent+"%",584,350);
  
}

function percentage5(){
  var percent= m5/tM5*100;
  text(percent+"%",705,350)
}

function myTotalSum(){
  addition= m1 + m2 + m3 + m4 + m5;
  text(addition,288,440)
}

function totalSum(){
  totalAddition= tM1 + tM2 + tM3 + tM4 + tM5;
  text(totalAddition,650,440)
}

function OVERALLPERCENTAGE(){
 var totalPercent= addition/totalAddition*100
 text(totalPercent+"%",465,530)
}

function AVERAGE(){
  var totalAverage= (m1+m2+m3+m4+m5)/5;
  text(totalAverage,478,610);
}

function setup(){
  createCanvas(800,610)
 

  subName= createSprite(92,118,180,35,);
  marks= createSprite(92,180,180,35,);
  totalMarks= createSprite(92,242,180,35,);
  
  sub1= createInput();
  sub1.position(190,100)
  sub1.size(110,30)

  sub2= createInput();
  sub2.position(310,100)
  sub2.size(110,30)

  sub3= createInput();
  sub3.position(430,100)
  sub3.size(110,30)

  sub4= createInput();
  sub4.position(550,100)
  sub4.size(110,30)

  sub5= createInput();
  sub5.position(670,100)
  sub5.size(110,30)

  marks1= createInput();
  marks1.position(190,162)
  marks1.size(110,30)
 
  marks2= createInput();
  marks2.position(310,162)
  marks2.size(110,30)

  marks3= createInput();
  marks3.position(430,162)
  marks3.size(110,30)

  marks4= createInput();
  marks4.position(550,162)
  marks4.size(110,30)

  marks5= createInput();
  marks5.position(670,162)
  marks5.size(110,30)

  totalMarks1= createInput();
  totalMarks1.position(190,224)
  totalMarks1.size(110,30)

  totalMarks2= createInput();
  totalMarks2.position(310,224)
  totalMarks2.size(110,30)

  totalMarks3= createInput();
  totalMarks3.position(430,224)
  totalMarks3.size(110,30)

  totalMarks4= createInput();
  totalMarks4.position(550,224)
  totalMarks4.size(110,30)

  totalMarks5= createInput();
  totalMarks5.position(670,224)
  totalMarks5.size(110,30)

  percent1=createButton("%");
  percent1.position(230,286)
  percent1.mousePressed(percentage1);
  
  percent2=createButton("%");
  percent2.position(350,286)
  percent2.mousePressed(percentage2);

  percent3=createButton("%");
  percent3.position(470,286)
  percent3.mousePressed(percentage3);

  percent4=createButton("%");
  percent4.position(590,286)
  percent4.mousePressed(percentage4);

  percent5=createButton("%");
  percent5.position(710,286)
  percent5.mousePressed(percentage5);

  myTotalMarks=createButton("Total Marks Obtained");
  myTotalMarks.position(240,380)
  myTotalMarks.mousePressed(myTotalSum);

  totalOutOfMarks=createButton("Total Marks assigned");
  totalOutOfMarks.position(600,380)
  totalOutOfMarks.mousePressed(totalSum);

  overallPercentage=createButton("OVERALL PERCENTAGE");
  overallPercentage.position(409,470)
  overallPercentage.mousePressed(OVERALLPERCENTAGE);

  average=createButton("Average");
  average.position(460,550)
  average.mousePressed(AVERAGE);
 
  textSize(25);
  
}

function draw(){
 
 m1= parseInt(marks1.value())
 m2= parseInt(marks2.value())
 m3= parseInt(marks3.value())
 m4= parseInt(marks4.value())
 m5= parseInt(marks5.value())
 tM1= parseInt(totalMarks1.value())
 tM2= parseInt(totalMarks2.value())
 tM3= parseInt(totalMarks3.value())
 tM4= parseInt(totalMarks4.value())
 tM5= parseInt(totalMarks5.value())
 drawSprites() 
 text("REPORT CARD",403,50)
 text("/",490,440)
 text("SUBJECT",34,128)
 text("MY MARKS",26,190)
 text("TOTAL MARKS",5,253)
 
}