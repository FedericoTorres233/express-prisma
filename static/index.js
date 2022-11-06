const a = async () => {
  const e = await fetch("http://localhost:5500/createuser", {
    method: "POST",
    body: JSON.stringify({ username: "pepe12", password: "hola123" }),
  });
  console.log(e);
};
a();
