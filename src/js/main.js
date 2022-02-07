import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

import {componentAnchors} from "./components/anchors";
import {componentAos} from "./components/aos";
import {componentHeaderAnimation} from "./components/header-animation";
import {componentVideo} from "./components/video";

import {burger} from './functions/burger';

document.addEventListener('DOMContentLoaded', () => {
  componentAnchors();
  componentAos();
  componentHeaderAnimation();
  componentVideo();
  burger();
});
