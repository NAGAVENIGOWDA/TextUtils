import React from "react";

function About(props) {
    document.title="Text Utils -About"
    props.lightMode?document.body.style.backgroundColor="white":document.body.style.backgroundColor="black"
  return (
    <div className="container " >
      <div class="accordion" id="accordionExample" >
        <div class="accordion-item" style={!props.lightMode?{backgroundColor:"black",color:"white"}:{}}>
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is ReactJs?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>What is React.js? </strong> 
              React.js, more commonly known as React, is a free, open-source JavaScript library. It works best to build user interfaces by combining sections of code (components) into full websites. Originally built by Facebook, Meta and the open-source community now maintain it. One of the good things about React is that you can use it as much or as little as you want! For example, you can build your entire site in React or just use one single React component on one page.

              React.js is built using JSX – A combination of JavaScript and XML. Elements are created using JSX, then use JavaScript to render them on your site. While React has a steep learning curve for a junior developer, it’s quickly shaping into one of the most popular and in-demand JavaScript libraries.

              React is considered a JavaScript library rather than a framework, whereas the other options we’ll consider today are considered frameworks. It helps to think of a library as a tool that developers could use in any project and a framework as a whole design.
            

            
            There has been a massive rise in the popularity of React.js, as found in the studies by <code>State Of JS</code>. This is partially due to its flexibility and speed of development but also helped by the fact that it is supported by Meta, making developers and companies feel safe in their decision to use React. Therefore, the demand for React developers is very high. As a result, there is a wide range of jobs for developers who know how to use React.
            
            </div>
          </div>
       
      </div>
    </div>
    </div>
  );
}

export default About;
