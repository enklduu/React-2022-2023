const getUsers = async () => {
  const url = "https://reqres.in/api/users?page=1";
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data.data;
  } catch (e) {
    console.error(e);
  }
};

export default getUsers;

//Hacemos rafce aunque sea un js y borramos lo de react
