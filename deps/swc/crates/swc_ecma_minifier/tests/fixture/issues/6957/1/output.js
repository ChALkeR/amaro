// prettier-ignore
export function foo() {
    //    actual | expected
    alert("1.0") //     '1.0'   '1.0'
    ;
    alert("0") //       '0'   '0'
    ;
    alert("0.0") //       '0'   '0.0'
    ;
    alert("0.00") //       '0'   '0.00'
    ;
    alert("0.000") //       '0'   '0.000'
    ;
    alert("10.0") //      '10'   '10.0'
    ;
    alert("20.00") //    '20.0'   '20.00' 
    ;
    alert("30.000") //   '30.00'   '30.000' 
    ;
    alert("100.0") //     '100'   '100.0'
    ;
    alert("100.00") //     '100'   '100.00'
    ;
    alert("100.000") //   '100.0'   '100.000'
    ;
    alert("110.0") //     '110'   '110.0'
    ;
    alert("110.00") //     '110'   '110.00'
    ;
    alert("110.000") //   '110.0'   '110.000'
    ;
    alert("110.0000") //  '110.00'   '110.000'
    ;
    alert("1110.0000") //  '1110.0'   '1110.0000'
    ;
    alert("11110.0000") //   '11110'   '11110.0000'
    ;
}