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

function task2_5()
{
    return Math.random();
}

function task2_6()
{
    return Math.floor(Math.random() * 46) + 5;
}

function task2_7(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(task2_1(6.3));

console.log(task2_2(6.7));

console.log(task2_3(5.5));

console.log(task2_4(5.5, 1));

console.log(task2_5());

console.log(task2_6());

console.log(task2_7(5, 50));