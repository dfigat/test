function test_inc(value) {
    console.log(value);
    return value+1;
}

function test_switch(value) {
    var ret_val = "";
    switch(value) {
        case "True":
        case "true": {
            ret_val = "OK";
            break;
        }
        default: {
            ret_val = ":(";
        }
    }
    return ret_val;
}
