---
title: How To Use Styled-Components With React.js
date: "2021-03-15"
tags: ["reactjs", "css", "styled-components"]
description: Styled-components is a CSS in JS library and is not a concept unique to React.js but broadly used in single page applications such as React.js, Angular.js, etc.
cover: ./unsplash.jpg
canonical: https://javascriptarticles.com/how-to-use-styled-components-with-reactjs/
---

Styled-components is a CSS in JS library and is not a concept unique to React.js but broadly used in single-page applications such as React.js, Angular.js, etc. It essentially allows you to write CSS as part of your "component."

We'll examine some concepts using styled-components with React.js, but these concepts will work with any framework using react.js, such as Gatsby.js or Next.js.

## Pre-requisites

I'm assuming you have a framework of your choice installed and ready to go. I'm also assuming that you have styled-components installed; if not, you can follow installation instructions [here](https://styled-components.com/docs/basics#installation).

Consider using a syntax highlighting extension for your IDE; I use [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) have a look at it [here](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components).

## What I'm Using

I'll be using the barebones App.js file that you get when you use “npx create-react-app”. I removed everything except app.js and index.js. All the other items have been deleted and after a little bit of clean-up this is my app.js file:

```jsx
// App.js

function App() {
	return <div>Hello World</div>;
}

export default App;
```

## Basic Structure

We can create a unique tag naming convention using styled-components that utilizes es6 syntax. This concept makes it easy to read and understand code but, consider how it will render on the client-side. Instead of `div` tags, consider using `section` or `article` tags as wrappers for better structure. Doing this makes for good practice and accessibility for search engines and browsers.

## Basic Usage

Our CSS syntax will use regular kabob-case instead of camel-case, such as margin-top instead of marginTop. All of the same rules apply here as if we were using a standard CSS stylesheet. We can, and will, use JavaScript inside our CSS, which is powerful and fun to use. This functionality makes it easy for theme application or component state changes.

## Global Styles

Functionality for global styles is offered with styled-components, and we’ll make use of it. First, we need to create a separate file and import the module:

```jsx
// GlobalStyles.js

import { createGlobalStyle } from "styled-components";
```

We can use this file for styling the entire app, and resetting CSS is what comes to mind, for me at least. I believe that any other styling should stay with the component if it’s not global. Now, we need to use the `createGlobalStyle` name we just imported and use it as so:

```jsx
// GlobalStyles.js

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  list-style: none;
 }
 body {
   background-color: white;
   line-height: 1.5;
   font-size: 1.1rem;
   font-family: sans-serif;
   font-weight:300;
   color: black;
 }
 `;
```

Everyone has their method for global styles, so once you’re done with yours, we need to import it into our app.js file.

```jsx
// App.js

import { GlobalStyle } from "./GlobalStyle";

function App() {
	return (
		<div>
			<GlobalStyle />
			Hello World
		</div>
	);
}

export default App;
```

## Naming Our Components

A Styled Component is the combination of an element and the CSS rules that style it. Your regular h1 element will need to be named something different and follow es6 syntax guidelines. For example:

```jsx
const Title = styled.h1`
	font-size: 2rem;
`;
```

In the code above, we’re declaring “Title” as our variable, which is equal to our new styled.h1 and the CSS rules that follow it. Let’s have a look at this in the React.js application.

Let’s use this for our nifty “Hello World,” also, we will import styled-components and make a title component using the h1 element as we previously discussed.

```jsx
// App.js

import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";

const Title = styled.h1`
	font-size: 2rem;
`;

function App() {
	return (
		<div>
			<GlobalStyle />
			<Title>Hello World</Title>
		</div>
	);
}

export default App;
```

For this use case, we’re going to need a container for our title, and those div tags that are not doing anything at the moment will be perfect. Let’s style a “header” element that will serve as our header for proper mark-up and contain our title.

```jsx
// App.js

import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";

const Title = styled.h1`
	font-size: 2rem;
`;

const Header = styled.header`
	max-width: 800px;
	margin: 0 auto;
`;

function App() {
	return (
		<div>
			<GlobalStyle />
			<Header>
				<Title>Hello World</Title>
			</Header>
		</div>
	);
}

export default App;
```

What we have above are styled-components and their primary use case. We have two elements that we’ve styled, an h1 and a header element, and we’ve named them appropriately. Now that we’re comfortable with the syntax let’s keep going with our styles.

## Pseudo Classes

Let’s make an example button for this pseudo-class section. To make it interactive, we’ll have to use the hover and active pseudos, so it’ll be perfect. Let’ start with the button.

```jsx
const Button = styled.button`
	color: #fff;
	background-color: #0d6efd;
	font-size: 1.1rem;
	padding: 0.5rem 1rem;
	border-radius: 5px;
`;
```

<br />
<br />

We’ve added a button, but it’s not very interactive. To add a hover class using styled-components, we’ll have to add it similar to SCSS. We’ll need to nest it and use `&:hover` or `&:yourPsuedoClass` as follows:

```jsx
const Button = styled.button`
	color: #fff;
	background-color: #0d6efd;
	font-size: 1.1rem;
	padding: 0.5rem 1rem;
	border-radius: 5px;
	transition: background-color 0.15s;
	&:hover {
		background-color: #3988ff;
		cursor: pointer;
	}
	&:focus {
		color: #fff;
		background-color: #0d6efd;
		border-color: #0d6efd;
		box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
		outline: none;
	}
`;
```

That’s better. There’s a lot of power by using this functionality, and we’ll make use of it a little later. Let’s extend our button and make a secondary variant.

## Extending Classes for Different Variants

Extending is an easy way to have different variants of your components. It keeps your styling code organized, and it’ll also cut down on the amount of code. Let’s make two different variants from our button component and make a primary and secondary button.

First, I’ll change the Button name we just created to “PrimaryButton” and add another JavaScript variable and call it SecondaryButton. So this is what we have for or two buttons so far:

```jsx
export const PrimaryButton = styled.button`
	color: #fff;
	background-color: #0d6efd;
	font-size: 1.1rem;
	padding: 0.5rem 1rem;
	border-radius: 5px;
	transition: background-color 0.15s;
	&:hover {
		background-color: #3988ff;
		cursor: pointer;
	}
	&:focus {
		color: #fff;
		background-color: #0d6efd;
		border-color: #0d6efd;
		box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
		outline: none;
	}
`;

export const SecondaryButton = styled(PrimaryButton)``;
```

Notice the SecondaryButton method we’re using, styled(PrimaryButton). Since we’re extending the original styled.button, which uses dot-notation, we need to add a “method” to extend it, which brings us to styled(PrimaryButton). If we wanted to add a tertiary button, we could add a third method and extend SecondaryButton, styled(SecondaryButton).

Let's add some styling to the SecondaryButton:

```jsx
export const PrimaryButton = styled.button`
	color: #fff;
	background-color: #0d6efd;
	font-size: 1.1rem;
	padding: 0.5rem 1rem;
	border-radius: 5px;
	transition: background-color 0.15s;
	&:hover {
		background-color: #3988ff;
		cursor: pointer;
	}
	&:focus {
		color: #fff;
		background-color: #0d6efd;
		border-color: #0d6efd;
		box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
		outline: none;
	}
`;

export const SecondaryButton = styled(PrimaryButton)`
	color: #0d6efd;
	background-color: white;
	&:hover {
		background-color: #3988ff;
		color: #fff;
	}
`;
```

Since we’re expanding on the first button, we only add styling that’s different from the primary. Here’s the secondary button:

Not the best-looking secondary, but I think it gets the point across. If you’re wondering about a tertiary button, here’s what that code would look like:

```jsx
export const PrimaryButton = styled.button`
// CSS code
`;
export const SecondaryButton = styled.(PrimaryButton)`
// CSS code
`;
export const TertiaryButton = styled.(SecondaryButton)`
// CSS code
`;
```

<br />
<br />

## Extending Components Versus Props

The official Styled-Components documentation suggests using interpolations as a method to extend components. While helpful, there are some cons associated with that method for its use with buttons.

Here’s the code they suggest for a secondary button:

```jsx
const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.primary ? "palevioletred" : "white")};
	color: ${(props) => (props.primary ? "white" : "palevioletred")};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

render(
	<div>
		<Button>Normal</Button>
		<Button primary>Primary</Button>
	</div>
);
```

A minor fixable issue is that they show “primary,” which should be “secondary.” What would you do with a “normal” button other than using it as a primary? Other than that, hover, and other pseudo-classes are nestable but seem a little trickier. It’s limiting, in this case, to use interpolation to be able to add a “primary” prop. Don’t get me wrong; it’s useful if we want a secondary anything.

<Card>
<h4>Resources</h4>
<br />
<a className="footnote" href="https://styled-components.com/docs/basics#getting-started">styled-components- Getting Started</a><br />
<a className="footnote" href="https://reactjs.org/docs/components-and-props.html">reactjs.org- Components and Props</a><br />

</Card>