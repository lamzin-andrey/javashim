$(testJavaShimClass);
function testJavaShimClass(){
    var ex = Integer.toString(25);
    if (ex !== "25") {
        console.log('25 !== 25 Error!');
    }

    var sb = new StringBuffer();
    sb.append('1');
    sb.append('q');
    sb.append('3');
    var s = sb.toString();
    if (s !== "1q3") {
        console.log('1q3 !== 1q3 Error!');
        console.log(s);
    }
}