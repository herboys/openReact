var a = 1
var flag = false

function test() {
    console.log(a)
    if (flag) {
        var a = 2
    }
}

test()
