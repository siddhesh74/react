// const heading = React.createElement("h1", {id: "heading"}, "Hello world from react!");


const parent = React.creatElement("div", {id: "parent"},
React.creatElement("div", {id: "child"}, [
React.creatElement("h1", {}, "this is a h1 tag"),
React.creatElement("h2", {}, "this is a h2 tag"),
])
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



