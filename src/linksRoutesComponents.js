import Introduction from './Introduction';
import ThreeIdea from './ThreeIdea';
import IsItOnlyAlib from './IsItOnlyAlib';
import SomeExamples from './SomeExamples';
import Training from './Training';
import Readme from './Readme';
import HelloWorld from './HelloWorld';
import ComponentsIntroduction from './ComponentsIntroduction';
import ComponentsAndState from './ComponentsAndState';
import ComponentsAndChildren from './ComponentsAndChildren';
import ExoNChronos from './exo/ExoNChronos';
import GameSVG from './GameSVG';
import Redux from './Redux';
import Debugger from './Debugger';
import UnitTest from './UnitTest';

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
    path: '/components',
    component: ComponentsIntroduction,
    desc: 'Les Components',
    children: [
      {
        path: '/components/state',
        component: ComponentsAndState,
        desc: 'Etat interne : le state'
      },
    ]
  },
  {
    path: '/debugger',
    component: Debugger,
    desc: 'Le debugger'
  },
  {
    path: '/unit-test',
    component: UnitTest,
    desc: 'Test unitaire'
  },
  {
    path: '/misc',
    desc: 'Misc',
    children: [
      {
        path: '/misc/components/children',
        component: ComponentsAndChildren,
        desc: 'les children'
      },
      {
        path: '/misc/exo-create-chronos',
        component: ExoNChronos,
        desc: 'Exercice : créer N chronos'
      },
      {
        path: '/misc/game-svg',
        component: GameSVG,
        desc: 'Un jeu'
      },
      {
        path: '/misc/redux',
        component: Redux,
        desc: 'Redux'
      },
    ]
  }
]

function flat(a, b) {
  return a.concat(b).concat((b.children || []).reduce(flat, []));
}

const flatten = tree.reduce(flat, []);

export default {
  tree,
  flatten,
}
