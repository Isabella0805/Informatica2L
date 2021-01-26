let masa;
do{
    masa= parseFloat(prompt("Ingrese su masa en kg"));
}while (isNan(masa)) || masa<0;

let altura;
do{
    altura= parseFloat(prompt("Ingrese su estatura en m"));
}while (isNan(altura)) || altura<0;

let Bmi = masa/(altura*altura)
alert (Bmi);
if (18.5>Bmi) 
alert ("underweight");
else if (18.5<Bmi<25)
alert ("normal");
else if (25>Bmi>30)
alert ("overweight")