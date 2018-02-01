import React from 'react';

const Introduction = () => (
  <div>
    <h2>React ?</h2>
    <ul>
      <li>Simple librairie manipulant le DOM.</li>
      <li>Abstraction des évènements, <a href="https://reactjs.org/blog/2016/01/12/discontinuing-ie8-support.html">browser > IE 8</a></li>
    </ul>

  <h2>React / Angular / Ember / Backbone <a href="https://dzone.com/articles/comparison-of-js-frameworks-angularjs-vs-reactjs-v">(Comparatif)</a></h2>
  <ul>
    <li>Librairie vs framework</li>
    <li>"not opiniotated, vs strong opinionated"</li>
    <li>Pas incompatible : React peut etre utilisé avec angular.</li>
  </ul>

  <h2>et <a href="https://vuejs.org/">Vue.js</a> ?</h2>
  <ul>
    <li>Librairie vs framework : Vue integre le datastore</li>
  </ul>
</div>
)

export default Introduction;
