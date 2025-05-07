# Expand

## Questions

1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)
2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?
3. What is a DOM fragment? Why are they powerful?
4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?
5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?
6. What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?


1. Its important to put thought because it helps prevent conflicts with peers, faster DOM traversal/lookup time, consistency, and resusable.
2. They are custom attriubtes allowing for extra storage of information of HTML elments without affecting the styling/layout. They're useful because it can vastly reduce the amount of clutter within the markup by just refering to the data of the refered element. Although data attributes can be used to convey shortened data, they won't be able to replace formats like microdata.
3. DOM fragments are light, minimized representations of a DOM structure that's not part of the live DOM tree, purely existing in memory. They're powerful because they allow developers to avoid adding cluttered DOM elements to the rendered output. 
4. The point of Virtual Dom is to manage changes more effeciently through the minimization of direct manipulation on the real DOM, enhancing web app performance. However we do incur lossed due to the additional memory and complex debugging due to not manipulating the actual DOM.
5. className is used instead of class in JavaScript because class is a reserved word for defining classes.
6. Their are quiet a few differences. onClick can have only one handler per event wherease addEventListener allows for multiple handlers. Furthermore addEventListener overall has a lot more options/support such as removal, additional options, and performance optimizations.
