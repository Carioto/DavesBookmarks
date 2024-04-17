const subbut = document.querySelector("#submit");
const canbut = document.querySelector("#cancel");
const resel = document.querySelector("#actiontext");

const sendNewUrl = async (event) => {
  const grpEl = "random";
  const titleEl = "none";
  const urlEl = document.querySelector("#url").value;
  const response = await fetch("/add", {
    method: "POST",
    body: JSON.stringify({
      grpEl,
      titleEl,
      urlEl,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload();
    console.log(response);
    resel.innerHTML = "Bookmark Added";
  } else {
    console.log(response);
    resel.innerHTML = "Bookmark Failed";
  }
};

function cancelNewUrl() {
  document.location.replace("/");
}

subbut.addEventListener("click", sendNewUrl);
canbut.addEventListener("click", cancelNewUrl);