//In React, fragments allow you to group multiple elements without adding extra nodes to the DOM.
// They are useful when you want to return multiple elements from a component 
//but avoid introducing unnecessary wrappers like <div>,'
// which can clutter the HTML structure.

//There are two ways to use fragments:
//1)Short Syntax (Shorthand): This is the most concise way of writing fragments, 
//but it doesn’t support key attributes.

return (
    <>
      <h1>Title</h1>
      <p>Some description</p>
    </>
  );

//2)Full Syntax: This allows you to pass attributes, like key, which is useful when rendering lists.

return (
  <React.Fragment>
    <h1>Title</h1>
    <p>Some description</p>
  </React.Fragment>
);
  
//Fragments can also take key attributes, which is helpful when mapping lists of elements.
const items = ['item1', 'item2', 'item3'];

return (
  <>
    {items.map((item, index) => (
      <React.Fragment key={index}>
        <h1>{item}</h1>
      </React.Fragment>
    ))}
  </>
);

//When to Use Fragments
//When you don't want to add extra nodes to the DOM that could break your CSS layout or make the DOM tree unnecessarily deep.
//Wrapping multiple elements without needing an additional parent element.
//Fragments help improve performance and keep the DOM cleaner, especially in large applications.