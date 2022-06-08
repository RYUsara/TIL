/* 8일의 배운 점 */
// 프로그래머스 직사각형 별찍기 문제
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const first = Number(n[0]), second = Number(n[1]);
    const row = '*'.repeat(first)
    for(let i =0; i < second; i++){
        console.log(row)
    }
});