import Home from './Home';
import ComponentsAndProps from './ComponentsAndProps';
import ComponentsAndState from './ComponentsAndState';
import ExoNChronos from './exo/ExoNChronos';
import ExoSplitChronos from './exo/ExoSplitChronos';

const linksRoutesComponents = [
  { path: '/'                          , exact: true  , component: Home               , desc: 'Home' }                        ,
  { path: '/only-components-and-props' , exact: false , component: ComponentsAndProps , desc: 'Des components et des props' } ,
  { path: '/components-and-state'      , exact: false , component: ComponentsAndState , desc: 'Etat interne : le state' }     ,
  { path: '/exo-create-chronos'        , exact: false , component: ExoNChronos        , desc: 'Exercice : créer N chronos' }  ,
  { path: '/exo-split-chronos'         , exact: false , component: ExoSplitChronos    , desc: 'Exercice : split chronos' }    ,
]

export default linksRoutesComponents;
