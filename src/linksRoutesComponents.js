import Introduction from './Introduction';
import ThreeIdea from './ThreeIdea';
import IsItOnlyAlib from './IsItOnlyAlib';
import ConcretApplication from './ConcretApplication';
import Training from './Training';
import Readme from './Readme';
import GetStarted from './GetStarted';
import ComponentsAndProps from './ComponentsAndProps';
import ComponentsAndState from './ComponentsAndState';
import ExoNChronos from './exo/ExoNChronos';

const tree = [
  {
    path: '/intro',
    component: Introduction,
    desc: 'Introduction',
    children: [
      {
        path: '/intro/3-idea',
        component: ThreeIdea,
        desc: '3 Idées',
      },
      {
        path: '/intro/are-you-sure-it-is-only-a-lib--confuse',
        component: IsItOnlyAlib,
        desc: 'Seulement une librairie ?'
      },
      {
        path: '/intro/concret-application',
        component: ConcretApplication,
        desc: `Exemples`
      },
    ]
  },
  {
    path: '/the-training',
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
    path: '/get-started',
    component: GetStarted,
    desc: 'Get started'
  },
  {
    path: '/only-components-and-props',
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
]

function flat(a, b) {
  return a.concat(b).concat((b.children || []).reduce(flat, []));
}

const flatten = tree.reduce(flat, []);

export default {
  tree,
  flatten,
}
