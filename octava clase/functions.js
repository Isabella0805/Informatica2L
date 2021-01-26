function areaCirc (r)
{
    let area = Math.PI*(Math.pow(r,2))
    return area
}


function volEsfera (r)
{ 
    let volumen = 4/3*Math.PI*(Math.pow (r,3))
    return volumen
}


function max (a,b) 
{ 
    if (a,b) 
    { 
        return a 
    }
    else 
    { 
        return b
    }
}


function imprimirMasLarga (word1,word2)
let word1=prompt("Ingrese word1")
let word2=prompt("Ingrese word2")
{ 
    if(word1.lenght>word2.lenght)
    {
        return word1
    }
    else
    {
        return word2
    }
}
console.log (`la palabra más larga es ${imprimirMasLarga (word1,word2)}`)


function masLarga (p1,p2)
let p1=prompt("Ingrese p1")
let p2=prompt("Ingrese p2")
{
    if(p1.lenght>p2.lenght)
    {
        return p1 
    }
    else
    { 
        return p2 
    }
}
alert(`la palabra más larga es ${masLarga(p1,p2)}`)


function fibonacci (n)
{ 
    n = n-1 + n-2
    return n
}