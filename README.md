
Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

When we reload a browser by a HTML file. It creates a Structure by tree. This process name is DOM(Document Object Model).
JavaScript works the help of DOM.It works by selecting elements by this DOM and then do something that we want.
Actually, these four methods are four different ways to select elements from the DOM.
Now I will write the difference of these four different methods step by step.

# 1.1 getElementById

We will use this method when we want to catch an element from HTML page. we can use it for single element selection. Only one unique ID is need to catch an element by this method. It's return type is Element. It's static. It's performance is very fastest as it returns only one single element.

getElementById is a DOM method that allows us to catch or select a single element by it's unique id. It's return type is an element. It is static. it means that it directly references element in the DOM, But If we change the DOM structure, It won't be update automatically. This method is primarily used when we want to manipulate and target one specific element on the page.

# 1.2 getElementsByClassName

getElementByClassName is a DOM method that allows us to catch to select multiple elements by sharing one class that will be same class name for all the elements. It can catch all the elements together by the help of same class. It's return type is an HTMLCollection which is live. It can automatically update if the DOM is changed. This method is primarily used when we manipulate and select multiple elements with the same class at once.

# 1.3 querySelector

querySelector is also a DOM method that is used to select an element by using a CSS selector. It can return the first matching element from the document. It returns the first element that matches the given selector. It's return type is a single element. it's static, meaning it doesn't update automatically if the DOM is changed later. This method is used because we can use here any standard CSS selectors. such as : id, class, tag name and nested selectors. It help us to select element more flexible and easily. It doesn't support foreach.

# 1.4 querySelectorAll

querySelector returns only the one element that is first matching element where querySelectorAll can return all the matching elements as a static NodeList. Here, both methods support all the CSS selectors but we will use querySelectorAll, when we need multiple elements to work. It supports foreach. It's return type is a NodeList. It doesn't automatically update if new matching elements are added to the DOM later. This method is used commonly when we need to select and work with multiple elements at once.

# 2. How do you create and insert a new element into the DOM?

if we want to create and insert a new element in the DOM, we have to follow some steps.

step-1: At first, we will find parent element where we want to keep our new child element. we have to find the parent element by using it's specific id. 
needed code syntax -> const parentElement = document.getElementById("the name of parent id");

step-2: now, we will create the child element. 
For creating new element, we have to write this code ->const childElement = document.createElement("the name of child element");

step-3: After creating child element, we will insert it inside the parent element. 
we insert the child element by using 3 methods of DOM.

3.1: appendChild();   // it will help us to insert only one new child element inside the parent element. It will be add the last position inside the parent.

3.2: append();   // we can add single or multiple new child elements in the end position of this parent element. 

3.3: prepend();   // we can insert one or multiple new child elements in the first position inside this parent element.


# 3. What is Event Bubbling? And how does it work?

Event Bubbling -> Event Bubbling is an event propagation mechanism of the DOM(Document Object Model). when we click on child element, the same event will be triggered on it's parent elements. when an event is triggered on an element, it bubbles up through the DOM tree from the child element to it's parent element.

And how does it work -> It works by three Bubble Event Stages.

Stage-1 (Capturing Phase):  → The Event will move by checking each element sequentially  from the top of the DOM Tree to the down of the Target Element.

Stage-2 (Bubble Phase):   ->After reaching the Target Element, the event bubbles come back by checking each parent element sequentially from the down of the Target Element to the top. 

Stage-3(Target Phase):   -> when the event reaches the element what we want, the event handler on that element will be execute with the desired output.


# 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation: Event Delegation is a technique of JavaScript. Where We don't give multiple listener for multiple different child, we give a single event listener depending on their parent element. Here, Parent Element handles all the events of child element. we use the Event Handler of Parent Element to control or maintain the events of child element.

Why is it useful: 

4.1: Memory Efficient: We don't need to add multiple different listeners for child element. We use only one listener for their parent element. Thus, It optimization memory space. It increases the performance by optimization memory.

4.2: Cleaner Code: To use fewer listener, we can keep our code more clean and simple. It helps to maintain our all the codes easily.

4.3: Dynamic Elements Support: when we insert new child in the DOM, It handles Parent Elements automatically.


# 5. What is the difference between preventDefault() and stopPropagation() methods?

stopPropagation(): It is a method of javaScript Event that stops or prevents event bubbling or capturing. It means that, If we will trigger event on the child element, It won't trigger listener of parent element. It is also used to control Event Propagation.
It is used to prevent parent click listener from firing. If we click child button, parent div won't trigger.

preventDefault(): It is also a method of javascript Event that stops the behavior of default browser of an element.
It means that after clicking event trigger the browser won't complete its default action. It is used to stop default browser behavior of from submission, context menu, scroll, link navigation etc.
J