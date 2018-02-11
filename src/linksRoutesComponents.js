import Introduction from './Introduction';
import ThreeIdea from './ThreeIdea';
import IsItOnlyAlib from './IsItOnlyAlib';
import SomeExamples from './SomeExamples';
import Training from './Training';
import Readme from './Readme';
import HelloWorld from './HelloWorld';
import ComponentsAndProps from './ComponentsAndProps';
import ComponentsAndState from './ComponentsAndState';
import ExoNChronos from './exo/ExoNChronos';
import GameSVG from './GameSVG';

const tree = [
  {
    path: '/intro',
    component: Introduction,
    desc: 'Introduction',
    children: [
      {
        path: '/intro/3-idees',
        component: ThreeIdea,
        desc: '3 Idées',
      },
      {
        path: '/intro/seulement-une-librairie',
        component: IsItOnlyAlib,
        desc: 'Seulement une librairie ?'
      },
      {
        path: '/intro/quelques-exemples',
        component: SomeExamples,
        desc: `Quelques exemples`
      },
    ]
  },
  {
    path: '/la-formation',
    component: Training,
    desc: 'La formation',
    children: [
      {
        path: '/readme',
        component: Readme,
        desc: 'Le support de formation',
      },
    ]
  },
  {
    path: '/hello-world',
    component: HelloWorld,
    desc: 'Hello World'
  },
  {
    path: '/components-and-props',
    component: ComponentsAndProps,
    desc: 'Des components et des props',
  },
  {
    path: '/components-and-state',
    component: ComponentsAndState,
    desc: 'Etat interne : le state'
  },
  {
    path: '/exo-create-chronos',
    component: ExoNChronos,
    desc: 'Exercice : créer N chronos'
  },
  {
    path: '/game-svg',
    component: GameSVG,
    desc: 'Un jeu'
  },
]

function flat(a, b) {
  return a.concat(b).concat((b.children || []).reduce(flat, []));
}

const flatten = tree.reduce(flat, []);

export default {
  tree,
  flatten,
}
