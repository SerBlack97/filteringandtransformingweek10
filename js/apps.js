//pokemon list
const pokemon = [
  { name: "Charmander", type: "fire", maxHp: 100, attack: 15 },

  { name: "Squirtle", type: "water", maxHp: 110, attack: 12 },

  { name: "Pikachu", type: "electric", maxHp: 95, attack: 18 },
  
  { name: "Bulbasaur", type: "grass", maxHp: 105, attack: 13 }
];

// user input selections
const typeSelect = document.getElementById("types");
const statSelect = document.getElementById("stats");
const displaySelection = document.getElementById("pokemonDisplay");

const totalHpSpan = document.getElementById("totalHp");
const averageAttackSpan = document.getElementById("averageAttack");

//pokemon total health
const initialMaxHealth = 0;
const totalHealth = pokemon.reduce(
  (accumulator, currentValue) => accumulator + currentValue.maxHp, initialMaxHealth
);

//pokemon attack average
const initialAttack = 0;
const totalAttack = pokemon.reduce(
  (accumulator, currentValue) => accumulator + currentValue.attack,
  initialAttack
);
const averageAttack = totalAttack / pokemon.length;

//function to display results based on selection
function displayUp(){
  displaySelection.innerHTML = ""; 

  const selectionType = typeSelect.value;
  const selectionStat = statSelect.value;

  // pokemon type selection
  let filterList = pokemon;
  if (selectionType !== "all"){
    filterList = pokemon.filter(itm => itm.type === selectionType);
  }

  //total health math
  const initialMaxHealth = 0;
  const totalHealth = filterList.reduce(
    (accumulator, currentValue) => accumulator + currentValue.maxHp, initialMaxHealth
  );
  //attack average math
  const initialAttack = 0;
  const averageAttack = filterList.length > 0 ? totalAttack / filterList.length : 0;
  
  // total health and attack average
  totalHpSpan.textContent = totalHealth;
  averageAttackSpan.textContent = averageAttack;

  // filtered list rendering
  filterList.map(itm => {
    const ele = document.createElement("div");
    
    // health selection
    if (selectionStat === "health") {
      ele.innerHTML = `${itm.name} | HP: ${itm.maxHp}`;
    }
    // attack selection
    else if (selectionStat === "attack") {
      ele.innerHTML = `${itm.name} | Attack: ${itm.attack}`;
    } else {
      // all selection
      ele.innerHTML = `${itm.name} | HP: ${itm.maxHp} | Attack: ${itm.attack}`;
    }

    // basic word formatting 
    ele.style.textTransform = "uppercase";
    ele.style.fontWeight = "bold";
    ele.style.margin = "10px 0";
    ele.style.color = "black"; 

    displaySelection.appendChild(ele);
  });
}

//allows changes based on selection
typeSelect.addEventListener("change", displayUp);
statSelect.addEventListener("change", displayUp);

displayUp();

