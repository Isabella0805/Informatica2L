let total = 0;
let sumando = 0;
while (sumando <= 10000)
{
    if(sumando%3==0 ^ i%5==0)
    {
    total = total + 1;
    }
    sumando = sumando + 1;
}
console.log (total);