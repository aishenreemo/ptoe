const PTOE_JSON_URL = "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/periodic-table-lookup.json";

async function load() {
    const ptoe_json = await fetch(PTOE_JSON_URL).then(response => response.json());
    const table_div = document.querySelector("div.table");

    console.log(table_div);

    for (let i = 0; i < ptoe_json.order.length; i++) {
        const element_key = ptoe_json.order[i];
        const element_value = ptoe_json[element_key];
        const element_category = element_value.category
            .replaceAll(' ', '-')
            .replaceAll(',-', ' ');

        const element_div = document.createElement("div");
        element_div.className = `element ${element_category}`;
        element_div.id = element_key;

        const atomic_num_div = document.createElement("div");
        const symbol_div = document.createElement("div");
        const name_div = document.createElement("div");

        atomic_num_div.innerText = `${i + 1}`;
        atomic_num_div.className = `atomic-number`;
        symbol_div.innerText = element_value.symbol;
        symbol_div.className = "symbol";
        name_div.innerText = element_value.name;
        name_div.className = "name";

        element_div.appendChild(atomic_num_div);
        element_div.appendChild(symbol_div);
        element_div.appendChild(name_div);

        table_div.appendChild(element_div);

        element_div.style.gridColumnStart = element_value.xpos;
        element_div.style.gridRowStart = element_value.ypos;
    }
}

load();
