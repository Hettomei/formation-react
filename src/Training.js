import React from 'react';

const Training = () => (
  <div>
    <h2>Sujets abordés</h2>
    <ul>
      <li>React : les bases, les events, les pièges</li>
      <li>Redux : Une seule source de vérité <a href='https://en.wikipedia.org/wiki/Single_source_of_truth'>SST (en)</a></li>
      <li>react-router : pour les 'Single Page Application'</li>
      <li>Méthodologie : exemple : Construire une application de gestion de comtpe</li>
      <li>Debugger / Performance</li>
      <li>Test unitaire</li>
    </ul>

    <h2>Sujets non abordés</h2>
    <ul>
      <li>React server side</li>
      <li><a href='https://facebook.github.io/react-native/'>React native</a></li>
      <li><a href='https://facebook.github.io/react-vr/'>React vr</a></li>
    </ul>
  </div>
)

export default Training;
