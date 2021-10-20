
const newele = document.querySelector("body");
const newh = document.createElement("h1");
newh.innerHTML = "To DO list";
newele.append(newh);
newh.className = 'text-center'

const newli = document.createElement("ul");
newli.id = "li3";
newele.append(newli);

let todos = ["wakeup", "eat breack fast", "code"];
const sul = document.querySelector("ul");
const deleteFun = (i) => {
  todos = todos.filter((task, index) => index !== i);
  renderList();
};

function update1(i) {
  const kk = window.prompt("change value");
  todos[i.currentTarget.rer] = kk;
  console.log(todos);
  renderList();
}

const renderList = () => {
  newli.innerHTML = "";
  todos.forEach((element, index) => {
    const li8 = document.createElement("li");
    li8.innerHTML = element;
    sul.append(li8);
    const rr = document.createElement("button");
    rr.innerHTML = "remove";
    sul.append(rr);
    rr.addEventListener("click", () => deleteFun(index));
    const update = document.createElement("button");
    update.innerHTML = "update";
    sul.append(update);
    update.rer = index;
    update.addEventListener("click", update1);
    rr.className = 'btn-danger'
    update.className = 'btn-success'
    li8.className = 'active' 
    sul.className = 'row-xs-30' 
    li8.className = 'form-control'
    li8.className = 'center-block'
    
  });
};

renderList();

const newinput = document.createElement("input");
newinput.className = "bb";
newele.append(newinput);

const newbuttom = document.createElement("button");
newbuttom.className = "btn-info";
newbuttom.innerHTML = "click here";
newele.append(newbuttom);
newele.className = 'btn-warning'

const o9 = document.querySelector("#bbb");
const bb = document.querySelector("#bb");

o9.addEventListener("click",  () => {
  if (newinput.value.length) {
    todos.push(newinput.value);
    newinput.value = "";
    renderList();
  }
});
