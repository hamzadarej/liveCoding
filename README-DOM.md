# Live-coding

## DOM

[21/04/2020](april/21.04)

- DOM aka Document Object Module
- DOM tree
- Javascript in the browser: XMl, JSON, jQuery, Ajax, API
- JS Engines: V8 (Chrome, Node, Edge), SpiderMonkey (Firefox), Chakra (Internet Explorer)
- Adding javascript to HTML: The `<script>` tag, External JS with `<script src="...">`
- The Window object
- Host object
- Native object: [Global-Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- `window.prompt()` and `window.alert()`
- Project: The Guessing Game

[22/04/2020](april/22.04)

- window.alert === alert
- document.querySelectorAll() will return A non-live `NodeList` 🧐
- Node tree https://dom.spec.whatwg.org/#concept-node
- `document.getElementById(<id string>)`
- `HTMLElement.style` property
- `document.querySelector(<selector string>)`
- `document.querySelectorAll(<selector string>)`
- Project: Dom-querying

[27/04/2020](april/27.04)
- `document.write()` and script injection
- Creating Elements: `document.createElement(<tag name>)`
- Adding elements to the page: `Element.appendChild(<Element object>)`"
- ToDo app with DOM

- DOM Querying: Getting elements from `document`
- Selecting elements with `document.getElementById(<id string>)`
- Element objects: quick overview in the console
- Element style: Changing css styles with `HTMLElement.style` property
- Selecting by CSS query: `document.querySelector(<selector string>)`
- Getting more than one element: `document.querySelectorAll(<selector string>)`

[28/04/2020](april/28.04)

- DOM Traversing: Jumping from one element to its relative
- Node vs. Element: 
  Comparing `Node.previousSibling` and `Element.previousElementSibling`
- Getting an element's closest parent: `Element.closest(<selector string>)`
- Testing an element against a selector: `Element.matches(<selector string>)`
- Getting all children of an element: `ParentNode.children`
- Selecting specific children: `ParentNode.querySelector(<selector string>)`
- Finding more traversal techniques: MDN

[29/04/2020](april/29.04)

- Event listeners
- update to the generate password exercise
- simple game

[03/05/2020](Mai/03.05)

- recap
- Q & A

[04/05/2020](Mai/04.05)

- User Events (interaction) and Browser Events (loading, etc...)
- Keyboard Events: `keydown`, `keyup`
- The event object properties: A console example
- Getting the target of the event: `Event.target`
- Form events: `submit`, `reset`, `Event.preventDefault()`
- Getting form values on submit: 
  `target.elements[<id>]`, `target.elements[<name>]`, `Element.value`"
- Mouse Events: `click`, `mouseenter`, `mouseleave`
- Removing event listeners: 
  `EventTarget.removeEventListener(<namespace>, <function reference>)`
- Listening to browser events: `DOMContentLoaded` event
- Finding more events on MDN"
- 4 exercises (currency converter * weekend count-down * numeral-system converter * image-slider )

[05/05/2020](# Live-coding

## DOM

[21/04/2020](april/21.04)

- DOM aka Document Object Module
- DOM tree
- Javascript in the browser: XMl, JSON, jQuery, Ajax, API
- JS Engines: V8 (Chrome, Node, Edge), SpiderMonkey (Firefox), Chakra (Internet Explorer)
- Adding javascript to HTML: The `<script>` tag, External JS with `<script src="...">`
- The Window object
- Host object
- Native object: [Global-Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- `window.prompt()` and `window.alert()`
- Project: The Guessing Game

[22/04/2020](april/22.04)

- window.alert === alert
- document.querySelectorAll() will return A non-live `NodeList` 🧐
- Node tree https://dom.spec.whatwg.org/#concept-node
- `document.getElementById(<id string>)`
- `HTMLElement.style` property
- `document.querySelector(<selector string>)`
- `document.querySelectorAll(<selector string>)`
- Project: Dom-querying

[26/04/2020](april/26.04)

- `document.write()` and script injection
- Creating Elements: `document.createElement(<tag name>)`
- Adding elements to the page: `Element.appendChild(<Element object>)`"
- ToDo app with DOM

[27/04/2020](april/27.04)

- DOM Querying: Getting elements from `document`
- Selecting elements with `document.getElementById(<id string>)`
- Element objects: quick overview in the console
- Element style: Changing css styles with `HTMLElement.style` property
- Selecting by CSS query: `document.querySelector(<selector string>)`
- Getting more than one element: `document.querySelectorAll(<selector string>)`

[28/04/2020](april/28.04)

- DOM Traversing: Jumping from one element to its relative
- Node vs. Element: 
  Comparing `Node.previousSibling` and `Element.previousElementSibling`
- Getting an element's closest parent: `Element.closest(<selector string>)`
- Testing an element against a selector: `Element.matches(<selector string>)`
- Getting all children of an element: `ParentNode.children`
- Selecting specific children: `ParentNode.querySelector(<selector string>)`
- Finding more traversal techniques: MDN

[29/04/2020](april/29.04)

- Event listeners
- update to the generate password exercise
- simple game

[03/05/2020](Mai/03.05)

- recap
- Q & A

[04/05/2020](Mai/04.05)

- User Events (interaction) and Browser Events (loading, etc...)
- Keyboard Events: `keydown`, `keyup`
- The event object properties: A console example
- Getting the target of the event: `Event.target`
- Form events: `submit`, `reset`, `Event.preventDefault()`
- Getting form values on submit: 
  `target.elements[<id>]`, `target.elements[<name>]`, `Element.value`"
- Mouse Events: `click`, `mouseenter`, `mouseleave`
- Removing event listeners: 
  `EventTarget.removeEventListener(<namespace>, <function reference>)`
- Listening to browser events: `DOMContentLoaded` event
- Finding more events on MDN"
- 4 exercises (currency converter * weekend count-down * numeral-system converter * image-slider )

[05/05/2020](Mai/05.05)

- JSON
- Brief overview of IIFE and the Module pattern
- Advantages of scope isolation and encapsulation
- Using modules in the browser: `<script type=""module"" src=""..."">`
- Connecting files: The `import` and `export` keywords"
"Imports and Exports:
- Default exports vs. named exports
- Destructuring imports

[06/05/2020](Mai/06.05)

- The request response cycle - Client perspective
- Non-Blocking Promises
- Blocking vs. Non-Blocking code: A brief example, `window.setTimeout()`
- Race conditions: Reading non blocking code
- Promises
- Promisifying: Converting `setTimeout()` to a promise
- Breaking Promises
- fetch() and fetch API/05-05)

- JSON
- Brief overview of IIFE and the Module pattern
- Advantages of scope isolation and encapsulation
- Using modules in the browser: `<script type=""module"" src=""..."">`
- Connecting files: The `import` and `export` keywords"
"Imports and Exports:
- Default exports vs. named exports
- Destructuring imports

[06/05/2020](Mai/06.05)

- The request response cycle - Client perspective
- Non-Blocking Promises
- Blocking vs. Non-Blocking code: A brief example, `window.setTimeout()`
- Race conditions: Reading non blocking code
- Promises
- Promisifying: Converting `setTimeout()` to a promise
- Breaking Promises
- fetch() and fetch API
