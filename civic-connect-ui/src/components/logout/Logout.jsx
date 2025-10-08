

export const handleLogout = async () => {
  await fetch("/logout", {
    method: "POST",
    credentials: "include" 
  }).catch((err) => console.log(err));

  localStorage.removeItem("token");

  window.location.href = "/login";
};