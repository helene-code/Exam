

fetch("../familyMembers.json")
  .then(data => data.json())
  .then(json => {
    //console.log (json)


  var family = document.querySelector('.members');

    json.forEach(member => {
      let table = document.createElement('Table');
      table.innerText = `${member.name}, ${member.age}, ${member.city}`;
      family.appendChild(table);
    })
  })
  


