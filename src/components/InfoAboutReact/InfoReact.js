import React from 'react';
import "./InfoReact.css"
const InfoReact = () => {
    return (
      <div className="info">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How React Works?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                React is a popular library for frontend web developer.when we
                are declaring content in a component react render it and show it
                in our website means in actual dom. React is also creating a
                virtual dom in the same time.When we are changing something in
                component,react is creating a new virtual dom and comparing with
                the old one then updating only that content in actual dom.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What's diffrent between Props and State?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Props are working like function arrgumanets. Props is mainly an object. we can pass data one component to another component by props.
                State is like storage.It can store data or information of Component.State can be updatable and  will change by user action.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default InfoReact;