const app = document.querySelector("#app");

if (app === null) {
throw new Error("#appが見つからない");
}

app.innerHTML = `
  <h1>画面生成方式の比較</h1>
  <p>この文章はTypeScriptから追加した。</p>
`;

window.addEventListener("hashchange", () => {
  const page = location.hash;
  console.log(page)
  console.log(location.hash)

  if(page === "#detail") {
    <h1>画面生成方式の比較</h1>
    <p>この文章はTypeScriptから追加した</p>
  }
});
