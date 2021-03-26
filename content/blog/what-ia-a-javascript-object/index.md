---
title: What is a Javascript Object
date: "2021-02-21"
tags: ["javascript"]
cover: ./unsplash.jpg
description: In simple terms, an object is a data type represented in the computing language of Javascript.
---

In simple terms, an `object` is a data type represented in the computing language of Javascript. You can use an `object` to store keyed <em>named values</em>, written as `{name: value}`, and can be scaled in complexity to define larger or more detailed "objects".

Let's look at the syntax of a simple use case of an object:

```javascript
let user = {
	name: "John Doe",
	age: 48,
};
```

In the code above, 'user' is our variable which will store the data of our `object`.
You define (and create) a JavaScript object with an object literal. Spaces and line breaks are not crucial in the syntax; an object definition can span multiple lines.

If you're still confused about what an object is, the following example may help.

### Real Life Objects, Properties, and Methods

In real life, a car is an `object`. A car has <strong>properties</strong> like weight, color, and <strong>methods</strong> like start and stop.

All cars have the same properties, but the property values differ from car to car. All cars have the same methods, but the methods are performed at different times.

```javascript
let car = {
	name: "Fiat",
	model: "500",
	color: "white",
	weight: "850kg",
};
```

### You've Already Been Working With Objects

If you've done any kind of HTML mark-up and used CSS, you've worked with objects:

```css
h1 {
	color: white;
	text-align: center;
}
```

Look familiar? Each key-value pair is what we use to describe the style that we want. Imagine that the CSS selector is the variable, and you've got a javascript object.

```css
let h1 = {
  color: white,
  text-align: center,
}
```

Another easy-to-understand example is JSON (JavaScript Object Notation). According to [json.org](https://www.json.org/json-en.html "Introducing JSON"):

<p className='warn'>
	An object is an unordered set of name/value pairs. An object begins with a
	left brace and ends with right brace. Each name is followed by a colon and the
	name/value pairs are separated by , comma.
</p>

JSON uses JavaScript syntax, but the JSON format is text only. The key and value are in quotes in JSON, here's an example:

```json
{ "name": "Mike" } //JSON
```

```javascript
{
	name: "Mike";
} //Javascript
```

### Object Properties

The <em>name:values</em> pairs in JavaScript objects are called properties:

<h4>Resources</h4>
<br />
<a className="footnote" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">MDN- Object</a><br />
<a className="footnote" href="https://www.json.org/json-en.html">json.org- Introducing JSON</a><br />
<a className="footnote" href="https://tc39.es/ecma262/#sec-fundamental-objects">Ecma- Fundamental Objects</a><br />
