const e = document.querySelectorAll('#introHeader path');
const a = [];
for (let i = 0; i< e.length; i++){
    a.push(e[i].getTotalLength());
}
console.log(a);