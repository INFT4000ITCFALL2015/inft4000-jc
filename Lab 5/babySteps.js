/**
 * Created by inet2005 on 11/19/15.
 */
var result = 0;

for(var i = 2;i < process.argv.length; i++){
    result += Number(process.argv[i]);
}

console.log(result);