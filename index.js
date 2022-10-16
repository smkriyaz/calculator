function Calculate()
{
    const a = parseInt(document.getElementById('eng').value);
    const b = parseInt(document.getElementById('tamil').value);
    const c = parseInt(document.getElementById('math').value);
    const d = parseInt(document.getElementById('sci').value);
    const e = parseInt(document.getElementById('soc').value);
    
    let total= (a+b+c+d+e);
    let avg= total/5;
    let grade;
    if (avg>90)
    {
        grade="S";
    }
    else if(avg>80)
    {
        grade= "A";
    }
    else if(avg>70)
    {
        grade= "B";
    }
    else if(avg>60)
    {
        grade= "C";
    }
    else if(avg>50)
    {
        grade= "D";
    }
    else{
        grade="E";
    }
    const result= document.getElementById('result');
    result.style.color ="rgba(0,0,0,.8)";
    result.style.font= "helvatica";
    result.style.textAlign= "center"
    result.innerText= "Percentage: "+ avg + "%" + "\nGrade: " + grade ;
}
