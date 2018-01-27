import React from 'react';
import DemoUsers from './demo/DemoUsers';

const FirstStepUsers = () => (
  <div>
    <h2>Créer dynamiquement des noeuds</h2>
    <p>On veut créer des utilisateurs: un prénom, un nom</p>
    <p>Puis afficher la liste</p>
    <DemoUsers />
  </div>
)

export default FirstStepUsers;
