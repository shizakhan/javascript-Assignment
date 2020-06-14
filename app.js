// Assignment#1
// JavaScript
// Chapter 01

// Question 01
alert("Welcome to our website!...");


// Question 02
alert("Error!Please enter a valid password.");


// Question 03
alert("Welcome to JS Land...\nHappy Coding!");

//Question 04
alert("Welcome to JS Land!")
alert("Happy coding!\nPrevent this page from creating additional dialogs")

//Question 05
alert("Hello.. I can run JS through my web browser's console")

//Assignment 02
// Chapter 02

// Question 01
var username="Shiza Khan"

// Question 02
var myName ="Shiza khan"

// Question 03
var message ="Hello World"
alert(message)

// Question 04
var name="John Doe"
var age="15 years old"
var certification="Certified Mobile Application Development"
alert(name)
alert(age)
alert(certification)

// Question 05
var pizza ="PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)

// Question 06
var email ="Sohailshiza56@gmail.com"
alert("My email address is "+email)

// Question 07
var book ="A smarter way to learn JavaScript"
alert("I am trying to learn from the Book "+book)

// Question 08
document.write("yah! I can write HTML content through Javavscript")

// Question 09
var des ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(des)

// Assignment 03
// Chapter 03

//Queston 01
var age=15
alert("i am "+age+" years old")

//Question 02
var time=10
alert("You have visited the site "+time+" times")

//Question 03
var birthyear=2000
document.write("My birth year is "+birthyear+"<br>")

//Question 04
var visitorname="Maryum"
var Product="Shirt"
var quantity=2
document.write(visitorname+" ordered "+quantity+" "+Product+" on ABC clothing store <br>")

// Assignment 04
// Question 04

var name,middle,last
var first,second,third,fourth,fifth

document.write("<h1>Rules for naming JS variables</h1>.<br> Variable names can only contain number,$, and _.For example $my_1stVariablev <br>Variables must begin with anumber,$, or _. For example $name, _name or name<br>Variable names are case Sensitive<br>Variable names should not be JS Keyword")


// Assignment 05
// Chapter 05

//Question 01
var a=5
var b=5
var c=a+b
document.write("The sum of 5 and 5 is "+c+"<br>")

//Question 02
var a=5
var b=6
var f=a-b
document.write("The answer is "+f+"<br>")
var d=a*b
document.write("The multiplication of  5 into 6 is "+d+"<br>")
var e=a%b
document.write("The modulus of 5 and 6 is "+e+"<br>")

//Question 03
var value
document.write("Value after variable declaration is : "+value+"<br>")
var number=5
document.write("Initial value : "+number+"<br>")
document.write("Value after increment is : ",++number+"<br>")
number=7+number
document.write("after addition is "+number+"<br>")
document.write("Value after decrement is : ",--number+"<br>")
number=number%3
document.write("The remainder is :"+number+"<br>")


//Question 04
var cost=600
var buy=5
document.write("The cost to buy "+buy+" tickets to a movie is "+ (buy*cost)+"PKR <br>")


//Question 05
document.write("Table of 3<br>")
var num=3
for(i=1; i<=10; ++i){
    v=num*i
    document.write(num+"*"+i+"="+v+"<br>")
}

//Question 06
var cel=25
var ferh=77
var c=(ferh-32)*5/9
var f=(cel*9/5)+32
document.write(cel+"C is "+ferh+"C<br>")
document.write(ferh+"C is "+cel+"C<br>")


//Question 07
var item1=650
var item2=100
var quantity1=3
var quantity2=7
var shippingcharges=100
document.write("Price of item 1 is "+item1+"<br>"+"Quantity: "+quantity1+"<br>")
document.write("Price of item 2 is "+item2+"<br>"+"Quantity: "+quantity2+"<br>")
var f=item1*quantity1
var g=item2*quantity2
document.write("The total cost is ",f+g+shippingcharges,"<br>")


//Question 08
var totalmarks=980
var marksobt=804
document.write("Total marks: "+totalmarks+"<br>marks obtained : "+marksobt+"<br>Percentage : "+((marksobt/totalmarks)*100+"%<br>"))

//Question 09
var us=10
var saudi=25
document.write("Total currency in PKR is "+((us*104.8)+(saudi*28)))

//Question 10
var numb=2
document.write("<br>The result is : "+((numb+5)*10)/2)

//Question 11
var currentyear=2016
var birthyear=1992
document.write("<br>Your age is: "+(currentyear-birthyear))

//Question 12
var radius=20
var circum=2*3.142*radius
var area=3.142*(radius*radius)
document.write("<br>Radius of a circle is :"+radius+"<br>The circumferense is : "+circum+"<br>The area is : "+area+"<br>")


//Question 13
var snack="lays"
var currentage=15
var maxage=65
var amount=3
var totalNeeded =(amount*365)*(maxage-currentage)
document.write("You will need "+totalNeeded+" "+snack+" to last you until the ripe old age of "+maxage+"<br>")

// Assignment 06
// Chapter 6 to 9

// Question 01
var num=10
document.write("Result")
document.write("<br>The value of a is "+num)

document.write("<br><br>The value of a++ is "+ ++num)
document.write("<br>The value of a is "+num)
document.write("<br><br>The value of a++ is "+ ++num)
document.write("<br>The value of a is "+num)
document.write("<br><br>The value of a-- is "+ --num)
document.write("<br>The value of a is "+num)
document.write("<br><br>The value of a-- is "+ --num)
document.write("<br>The value of a is "+num)

// Question 02
var a=2, b=1
document.write("--a : 1 <br> --a - --b : 1 <br> --a - --b + ++b : 1 - 0 + 1 <br> --a - --b + ++b + b-- : 1 - 0 + 1 + 1 <br>")
document.write(" The result is :",--a - --b + ++b + b--,"<br>")

// Question 03
var name=prompt("Enter Name")
alert("Welcome " +name)

// Question 05
var num =  prompt("Enter Num1")
num=num*1
if(num!=0){
document.write("Table of "+num+"<br>")
for( var i=1;i<11;i++){

    document.write(num+" x "+i+" = "+(num*i)+"<br>")
  

}
}
else
{
    document.write("Table of 5<br>")
    for( var i=1;i<11;i++){
    
        document.write("5 x "+i+" = "+(5*i)+"<br>")
      
    
    }

}
// Question 06
var sub1 = prompt("Enter Subject Name")
var sub2 = prompt("Enter Subject Name")
var sub3 = prompt("Enter Subject Name")
var total = 100
var mSub1 = prompt("Enter Subject Marks for "+sub1)
var mSub2 = prompt("Enter Subject Marks for" +sub2)
var mSub3 = prompt("Enter Subject Marks for "+sub3)

var percSub1 =(mSub1/total)*100
var percSub2 =(mSub2/total)*100
var percSub3 =(mSub3/total)*100
var subt=++mSub1 + ++mSub3 + ++mSub2
var subt=subt-3
--mSub1
--mSub2
--mSub3
var subtperc=(subt/300)*100
document.write("<table><tr> <td>"+sub1+"</td> <td>"+total+"</td> <td>"+mSub1+"</td> <td>"+percSub1+"%</td> </tr>   <tr> <td>"+sub2+"</td> <td>"+total+"</td> <td>"+mSub2+"</td> <td>"+percSub2+"%</td> </tr>   <tr> <td>"+sub3+"</td> <td>"+total+"</td> <td>"+mSub3+"</td> <td>"+percSub3+"%</td> </tr> <tr> <td></td> <td>"+total*3+"</td> <td>"+subt+"</td> <td>"+subtperc+"%</td> </tr> </table>")

// Assignment 9-11
//Question 01
var city=prompt("Enter your city")
if(city=="karachi"){
    alert("Welcome to the city of lights")
}

//Question 02
var gender=prompt("Enter your gender")
if(gender=="male"){
    alert("Good Morning Sir.")
}
else if(gender=="female"){
    alert("Good Morning Ma'am.")
}

//Question 03
var traffic=prompt("Enter the color of road traffic signal")
if(traffic=="red"){
    alert("Must stop")
}
else if(traffic=="yellow"){
    alert("Ready to move")
}
else if(traffic=="green"){
    alert("move now")
}

//Question 04
var fuel=prompt("Enter the remaining fuel in car (in litres)")
if(fuel<0.25){
    alert("Please refill the fuel in your car")
}

//Question 05
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if(true){
    alert("True");
}
if(false){
    alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}
//Question 06
var mark1=+prompt("Enter your subject 1 marks")
var mark2=+prompt("Enter your subject 2 marks")
var mark3=+prompt("Enter your subject 3 marks")
var totalmarks1=300
var mark=mark1+mark2+mark3
var per=(mark/totalmarks1)*100
alert("Total marks :"+mark)
alert("Percentage is :"+per)
if(per>=80){
    alert("Grade : A-one \n Remarks : Excellent")
}
else if(per>=70){
    alert("Grade : A \n Remarks : Good")
}
else if(per >=60){
    alert("Grade : B \n Remarks : You need to improve")
}
else if(per<60){
    alert("Grade : Fail \n Remarks : Sorry")
}

//Question 07
var secret=6
var guess=+prompt("Guess the number")
if(guess==secret){
    alert("Bingo!")
}
else if(guess+1==secret){
    alert("You are close enough to guess the correct answer")
}

//Question 08
var number3=+prompt("Enter the number")
if(number3%3==0){
    document.write("Yes it is divisible by 3<br>")
}

//Question 09
var number2=+prompt("Enter the number")
if(number2%2==0){
    document.write("<br>It is even")
}
else{
    document.write("<br>It is odd")
}

//Question 10
var temp=+prompt("Enter the temperature")
if(temp>40){
    alert("It is too hot outside")
}
else if(temp>30){
    alert("The weather is normal")
}
else if(temp>20){
    alert("Today's weather is cool")
}
else if(temp>10){
    alert("OMG!Today's Weather is so cool")
}
//Question 11
var firstnum=+prompt("Enter the number")
var secondnum=+prompt("Enter the number")
var operation=prompt("Enter the operation")
if(operation=="+"){
    alert(firstnum+secondnum)
}
else if(operation=="-"){
    alert(firstnum-secondnum)
}
else if(operation=="%"){
    alert(firstnum%secondnum)
}
else if(operation=="*"){
    alert(firstnum*secondnum)
}
else if(operation=="/"){
    alert(firstnum/secondnum)
}

// Assignment 12-13
var a =prompt("Enter Number")


if(a>0){
    document.write("Number is positive ")
}
else if(a<0){
    document.write("Number is Negative")
   
}else{
    document.write("Number is 0")

}


var a =prompt("Enter Number")


if(a=="a"||a=="e"||a=="i"||a=="o"||a=="u"){
    document.write("True")
}
else{
    document.write("False")

}


var pass="Password123"

var Cpass = prompt("Enter Password")

if(Cpass==""){

    alert("Enter Pass")
}
else if(pass==Cpass){

    alert("Correct! The password you  entered matches the original password")
}
else{
    alert("Incorrect password")
}

var hour = 13;
if (hour < 18) {
greeting = "Good day"
}
else{
greeting = "Good evening"
}

var time = prompt("Enter Time")
if (time>=0000&&time<1200){

    alert("Good Morning")
}
else if(time>=1200&&time<1700){
    alert("Good Afternoon")
}
else if(time>=1700&&time<2100){
    alert("Good Evening")
}
else if(time>=2100&&time<2359){
    alert("Good Night")
}

// Assignment 14-16
//Question 01
var empty=[]


//Question 03
var stringarray=["yusra","shiza","asma"]

//Question 04
var numarray=[2,3,2,4]

//Question 05
var booleanarray=[true,false]

//Question 06
var mixearray=["yusra",5,"+",true]

//Question 07
var edu=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil"]
document.write("<h4>Qualifications</h4>",edu[0],"<br>",edu[1],"<br>",edu[2],"<br>",edu[3],"<br>",edu[4],"<br>",edu[5],"<br>",edu[6])

//Question 08
var studentarray=["yusra","shiza","asma"]
var scorestudent=["497","498","499"]
var totalmarks1=500
document.write("<br>Score of ",studentarray[0]," is ",scorestudent[0]," and Percentage is ",(scorestudent[0]/totalmarks1)*100,"%<br>")
document.write("Score of ",studentarray[1]," is ", "and Percentage is ",(scorestudent[1]/totalmarks1)*100,"%<br>")
document.write("Score of ",studentarray[2]," is ", "and Percentage is ",(scorestudent[2]/totalmarks1)*100,"%<br>")


//Question 09
var colorarray=["blue","red","yellow"]
document.write(colorarray[0],"<br>",colorarray[1],"<br>",colorarray[2],"<br>")
var askuser=prompt("What color do you want to add in the beginning?")
colorarray.unshift(askuser)
document.write(colorarray,"<br>")
var inend=prompt("What color do you want to add in the end?")
colorarray.push(inend)
document.write(colorarray,"<br>")
var askuser1=prompt("What  more colors do you want to add in the beginning?")
var askuser2=prompt("What  more colors do you want to add in the beginning?")
colorarray.unshift(askuser1,askuser2)
document.write(colorarray,"<br>")
colorarray.shift()
document.write(colorarray,"<br>")
colorarray.pop()
document.write(colorarray,"<br>")
var askcolor=prompt("On which index do you want to add a color?")
var askcolorname=prompt("Write a color name")
colorarray.splice(askcolor,0,askcolorname)
document.write(colorarray,"<br>")
var delcolor=prompt("Which index you want to delete the color")
colorarray.splice(delcolor,1)
document.write(colorarray)

//Question 10
var sortscore=[32,23,54]
document.write("Score of students ",sortscore)
sortscore.sort()
document.write("<br>Ordered score of students ",sortscore,"<br>")

//Question 11
var cityname=["Karachi","Lahore","Islamabad","Quetta"]
var selected=[cityname[0],cityname[2]]
document.write("City names :",cityname,"<br> Selected city names: ",selected,"<br>")

//Question 12
var arr=["This","is","my","cat"]
document.write(arr.join(" "))

//Question 13
var newarr=[]
newarr.push(3)
newarr.push(5)
newarr.push(6)
document.write("<br> The array is :",newarr)
document.write("<br> Values :",newarr.shift())
document.write("<br> Values :",newarr.shift())
document.write("<br> Values :",newarr.shift())

//Question 14
var newarr2=[]
newarr2.push(3)
newarr2.push(5)
newarr2.push(6)
document.write("<br> The array is :",newarr2)
document.write("<br> Values: ",newarr2.pop())
document.write("<br> Values: ",newarr2.pop())
document.write("<br> Values: ",newarr2.pop())

//Question 15
var mobilemanuf=["<br>Apple","Samsung", "Motorola", "Nokia", "Sony"]
document.write(mobilemanuf)
