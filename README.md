# What I learned
## Types of directives
- Directives are instructions in the DOM
    - Component directives
        - it can modify the sturcture, behaviour, and appearance of the user interface
        - Such as when we use selector in the template, we are instucting angular to add
          the content of the Component, such as our bussiness logic(TS code), template in
          a certain place
    - Attribute directives
        - can be customized
        - it modify the EXISTING elements
        - uses attribute selector
        - built-in: ngStyle and ngClass
        - The ngStyle directive in Angular is used for property binding and provides a way 
          to apply inline styles to HTML elements.
          - By using ngStyle, you can dynamically set CSS styles based on component 
            properties or expressions. This allows you to manipulate the appearance of HTML 
            elements based on runtime conditions or data value
        - The ngClass directive in Angular is similar to ngStyle, but instead of applying
          inline styles, it allows you to dynamically add or remove CSS classes to HTML
          elements
          -With ngClass, you can conditionally apply CSS classes based on component 
           properties or expressions. This provides a way to dynamically control the 
           styling and behavior of HTML elements based on runtime conditions or data values.
          -CSS class need to be defined 
    - Sturctural Directives
        - Modify the sturcture of DOM
          - can add, remove or manipulate elements
          - common built-in: *ngFor, *ngIf, *ngSwitch
          - The *ngIf is normally used as if statements, it provide a condition for controlling
            the visibility or presence of the element
            -with ngIf, you can conditionally render an element in the DOM with a boolean
             expressions. If true, render the elements, if false, do not render.
          - The *ngFor enables iteration over a collection or array, allowing you to
            dynamically generate HTML elements based on each item in the collection. 
            It provides a convenient and efficient way to display dynamic lists or tables in your Angular templates
            -As the example used in this exercise, an array of msg is created in the TS, and *ngFor is used to iterate
            over this array, and then dynamically generate the short paragraph accordingly.
