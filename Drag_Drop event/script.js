const table1 = document.querySelector('#table1')
  const table2 = document.querySelector('#table2')
  const rows = table1.getElementsByTagName('tr');
  for(let row of rows){
  row.draggable= true;
  row.addEventListener("dragstart",(event)=>{
  event.dataTransfer.setData("Text", event.target.outerHTML);
  
})
}

table2.addEventListener("drop",(event)=> {
  event.preventDefault();

  
  const data = event.dataTransfer.getData("Text");
  const newrow = table2.insertRow(-1)
  newrow.innerHTML = data;

})


table2.addEventListener("dragover",(event)=> {
  event.preventDefault();
})


