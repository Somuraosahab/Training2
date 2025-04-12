console.log("---welcome in js-----");

const myHTML = `<h1>Added from JS</h1>
<h1>Sushant</h1>`;

const htmlEle = document.getElementById("container");
const htmlEle2 = document.getElementsByClassName("container2")[0];

    htmlEle.innerHTML = myHTML;
    htmlEle2.innerHTML = myHTML;

    console.log("-----functions---------")

    function sum(a,b) {
        const result = a + b;

        console.log("sum : ", result);
        return result;
    }

    function sub(a,b) {
        const result = a - b;
        return result;
    }

    const ans = sub(6,7);
    console.log(ans);
