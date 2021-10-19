let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(x) {
    x.addEventListener("click", function(e){
        const y = e.currentTarget.classList;
        console.log(y);
        if(y.contains("decrease"))
        {
            count--;
            value.style.color = "red";
        }
        else if(y.contains("increase"))
        {
            count++;
            value.style.color = "green";
        }
        else
        {
            count = 0;
            value.style.color = "yellow";
        }

        value.textContent = count;
    });
})

