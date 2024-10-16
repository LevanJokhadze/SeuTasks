function task2_1(num)
{
    return Math.ceil(num);
}

function task2_2(num)
{
    return Math.floor(num);
}

function task2_3(num)
{
    return Math.round(num);
}

function task2_4(num, logic)
{
    if ( logic === 0 )
    {
        return Math.round(num);
    } else if (logic === 1)
    {
        return Math.ceil(num);
    } else {
        return Math.floor(num);
    }
}

console.log(task2_1(6.3));

console.log(task2_2(6.7));

console.log(task2_3(5.5));