import Introduction from './Introduction';
import ThreeIdea from './ThreeIdea';
import IsItOnlyAlib from './IsItOnlyAlib';
import GetStarted from './GetStarted';
import ComponentsAndProps from './ComponentsAndProps';
import ComponentsAndState from './ComponentsAndState';
import ExoNChronos from './exo/ExoNChronos';
import ExoSplitChronos from './exo/ExoSplitChronos';

const tree = [
  {
    path: '/intro',
    exact: true,
    component: Introduction,
    desc: 'Introduction',
    children: [{
      path: '/intro/3-idea',
      exact: false,
      component: ThreeIdea,
      desc: '3 Idées'
    },
    {
      path: '/intro/are-you-sure-it-is-only-a-lib--confuse',
      exact: false,
      component: IsItOnlyAlib,
      desc: 'Seulement une librairie ?'
    }]
  },
  {
    path: '/get-started',
    exact: true,
    component: GetStarted,
    desc: 'Get started'
  },
  {
    path: '/only-components-and-props',
    exact: false,
    component: ComponentsAndProps,
    desc: 'Des components et des props',
  },
  {
    path: '/components-and-state',
    exact: false,
    component: ComponentsAndState,
    desc: 'Etat interne : le state'
  },
  {
    path: '/exo-create-chronos',
    exact: false,
    component: ExoNChronos,
    desc: 'Exercice : créer N chronos'
  },
  {
    path: '/exo-split-chronos',
    exact: false,
    component: ExoSplitChronos,
    desc: 'Exercice : split chronos'
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
