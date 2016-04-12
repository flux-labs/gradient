/**
 * Tests for gradients (incl helper functions).
 *
 * @author Drew <drew@flux.io>
 * @version 0.0.1
 */

'use strict';

import test from 'tape';
import gradient from './gradient.js'


test('Gradients', _gradientTestSuite);

function _gradientTestSuite (t) {

  _testTwoColors(t);
  _testThreeColors(t);

  t.end();
}

var red = [255, 0, 0];
var green = [0, 255, 0];
var blue = [0, 0, 255];

function _testTwoColors (t) {
  t.deepEqual(
    gradient([red, blue], [0,1]),
    [{color: red}, {color: blue}],
    "Red blue gradient on two points in-order should be red and blue."
  );

  t.deepEqual(
    gradient([red, blue], [1,0]),
    [{color: blue}, {color: red}],
    "Red blue gradient on two reversed points should be blue and red."
  );

  t.deepEqual(
    gradient([red, blue], [0, 1, 2, 3]),
    [ { color: red }, { color: [ 170, 0, 85 ] }, { color: [ 85, 0, 170 ] }, { color: blue } ],
    "Red blue gradient on four points should produce interpolated colors."
  );

  t.deepEqual(
    gradient([red, blue], [0, 4, 2, 1]),
    [ { color: [ 255, 0, 0 ] }, { color: [ 0, 0, 255 ] }, { color: [ 127, 0, 127 ] }, { color: [ 191, 0, 63 ] } ],
    "Red blue gradient on four points out of order should produce interpolated colors."
  );

}

function _testThreeColors (t) {

  t.deepEqual(
    gradient([red, green, blue], [0, 1, 2]),
    [ { color: red }, { color: green }, { color: blue } ],
    "Red green blue on three equally spaced points should produce red green blue."
  );

  t.deepEqual(
    gradient([red, green, blue], [0, 1, 2, 3, 4]),
    [ { color: red }, {color: [127, 127, 0]}, { color: green }, {color: [0, 127, 127]}, { color: blue } ],
    "Red green blue on five equally spaced points should produce red brown green teal blue."
  );

}