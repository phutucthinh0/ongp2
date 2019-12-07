let e_qa;
let json_qa = []
let count_qa = 0
let count = 0;
let list_qa = []
window.onload = function () {
    e_qa = document.getElementById("question")
    $("#2").click(function () {
        load(2)
        $("button").remove();
    });
}
function load(n) {
    $.getJSON("qa/" + n + ".json",
        function (data, textStatus, jqXHR) {
            data.forEach(element => {
                json_qa[count_qa] = element
                list_qa[count_qa] = count_qa
                count_qa++
            });
            displayqa()
        }
    );
}
function displayqa() {
    // list_qa = shuffle(list_qa)
    e_qa.innerText = json_qa[count].q + "  (" + count + "/" + count_qa + ")"
    var span_a = document.createElement("span")
    span_a.innerText = json_qa[count].a
    var answer = document.createElement("button")
    answer.classList.add("btn")
    answer.appendChild(span_a)
    answer.addEventListener("click", function () {
        $("button").remove()
        count++
        if (count <= count_qa) {
            displayqa()
        } else {

        }
    });
    var n = json_qa[count].n
    var n_c = 0;
    var n_a = [];
    n.forEach(element => {
        n_a[n_c] = n_c
        n_c++
    });
    n_a = shuffle(n_a)
    var random = Math.floor(Math.random() * (n_c + 1));
    // console.log(n)
    // console.log(n_c)
    // console.log(n_a)
    var dem = 0
    n_a.forEach(element => {
        if (dem == random) {
            document.body.appendChild(answer)
        }
        var span = document.createElement("span")
        span.innerText = n[element]
        var button = document.createElement("button")
        button.classList.add("btn")
        button.appendChild(span)
        button.addEventListener("click", function () {
            button.classList.add("red")
        });
        document.body.appendChild(button);
        dem++
        if ((dem == random) && (dem == n_c)) {
            document.body.appendChild(answer)
        }
    });
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// var qa
// var da
// var ex = []
// var count = 0;
// window.onload = function () {
//     $.getJSON("qa/2.json",
//         function (data, textStatus, jqXHR) {
//             qa = data
//         }
//     )
//     $.getJSON("qa/2a.json",
//         function (data, textStatus, jqXHR) {
//             da = data
//             run()
//         }
//     )
// }
// function run() {
//     qa.forEach(element => {
//         var add = { "q": "", "a": "", "n": [] }
//         add.q = element.q
//         var non = element.n
//         var dem =0;
//         var demn=0;
//         non.forEach(e => {
//             if(dem!= da[count]){
//                 add.n[demn]=e
//                 demn++
//             }else{
//                 add.a=e
//             }
//             dem++
//         })
//         ex[count]=add
//         count++
//     });
//     download("ex.txt",JSON.stringify(ex))
// }
// function download(filename, text) {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);

//     element.style.display = 'none';
//     document.body.appendChild(element);

//     element.click();

//     document.body.removeChild(element);
//   }