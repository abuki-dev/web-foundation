const filename=document.getElementById("head");
const parag=document.getElementById("para");
const boto=document.getElementById("btn");
const pw=document.getElementById("parbtn")
boto.innerText="Clik to enter title";
pw.textContent="Click here to add paragraph";
function updator(){
    const name=prompt("pleas enter your header");
    filename.innerText=name;
}
boto.addEventListener("click",updator)
function writepara(){
    const para=prompt("pleas enter your paragraph");
    parag.innerText=para;
}
pw.addEventListener("click",writepara);
