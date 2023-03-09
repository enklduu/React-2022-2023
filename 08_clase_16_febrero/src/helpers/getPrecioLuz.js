const getPrecioLuz = async () => {
  const url = "http://localhost:3000/api";
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
    
  };
  export default getPrecioLuz;
