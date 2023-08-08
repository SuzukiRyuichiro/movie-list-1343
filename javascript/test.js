import Mustache from "mustachejs";

const result = Mustache.render("<h1>{{title}}</h1>", {
  title: "This is the title",
});

const fruits = {
  list: [
    { name: "apple", price: 3 },
    { name: "pear", price: 2 },
    { name: "banana", price: 5 },
  ],
  show: true,
};

const template = `<ul>
    {{#list}}
    <li>{{name}}: {{price}} EUR</li>
    {{/list}}
  </ul>`;

console.log(Mustache.render(template, fruits));

const anotherTemplate = `
{{#show}}
<h1>I'm shown</h1>
{{/show}}
<p>I'm outside</p>
`;

console.log(Mustache.render(anotherTemplate, fruits));
