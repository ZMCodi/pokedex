




const fetchData = async () => {
    try {
      const res = await fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon");
      const data = await res.json();
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };
  
  fetchData();