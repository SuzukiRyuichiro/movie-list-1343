import Mustache from "mustachejs";

// const template = "<h1>{{title}} - {{year}}</h1>";
// console.log(
//   Mustache.render(template, { year: 2001, title: "Hi from Mustache" })
// );
// console.log(Mustache.render(template, { year: 2003, title: "Hello world" }));
// console.log(Mustache.render(template, { year: 2012, title: "Star Wars" }));
// console.log(Mustache.render(template, { year: 1999, title: "Harry Potter" }));

const data = {
  fruits: [
    { name: "apple", price: 3 },
    { name: "pear", price: 2 },
    { name: "banana", price: 5 },
  ],
};

const template =
  "<ul>{{#fruits}}<li>{{name}}: {{price}} EUR</li>{{/fruits}}</ul>";

const result = Mustache.render(template, data);

console.log(result);
