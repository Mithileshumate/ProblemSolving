//Que1-PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to 
//calculate the shorter angle formed between hour and minute hand at any given time.

var Minimal_Angle = (h, m) => 
{
  let angle;
  h = (h % 12  + m/60)*30 ;
  m = m*6;
  angle = (h - m);
  if(angle >180){
    angle = 360 - angle;
  }
  return (angle);
};
 

//Que2-Write a program which takes an year Nas input from the user and find out whether the given year is a Leap Year or not.

var Check_Leap = (year) => 
{
 if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
   return (" Leap Year");
 }
 else{
   return ("Non Leap Year");
 }
};
 

//Que3-Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal
// to the sum of all its divisors except that number itself.Now, You are given an integer N, write a program to check
// whether the given number is a Perfect Number or not.

var Perfect_Check = (N) => 
{
  let i,sum = 0;
  
  for(i = 0 ; i <= N/2 ; i++){
    if(N%i===0){
      sum = sum + i ;
    }
  }
  if (N === sum){
    return("YES");
  }
  else{
    return("NO");
  }
};


//Que4-Write a program which takes a numebr N as input from the user and You need to reverse the number

var Reverse_Number = (N) => 
{
var reverse = 0 ;
while (N !== 0){
  reverse = (reverse *10)+(N % 10);
  N = parseInt(N/10);
}
return (reverse);
};


//Que5-You are given two strings S1 and S2, you need to check whether the string S1 is a substring of string S2 or not.

var Substring_Check = (S1, S2) => 
{
   if(S1.includes(S2)){
     return ('YES')
   }  
   else {
     return('NO');
   }
};