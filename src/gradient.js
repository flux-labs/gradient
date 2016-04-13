/**
 * Given an array of RGB colors, color values by their relative position in the gradient.
 *
 */
export default function gradient(colors, values) {

  var tvalues = [];

  for (var i = 0; i < colors.length; i++) {
    tvalues.push(0 + i/(colors.length-1));
  }

  return gradientWithTValues(colors, tvalues, values);
}


export function gradientWithTValues(colors, t, values) {

  var colorsOut = [];

  if (colors.length !== t.length) {
    console.error("mismatched color and t value list lengths.");
  }

  var minValue = Math.min.apply(null, values);
  var maxValue = Math.max.apply(null, values);
  var valueSpread = maxValue - minValue;

  var normalizedValue, bucket, bucketSize, redStep, greenStep, blueStep, offset;

  for (var i=0; i<values.length; i++) {

    normalizedValue = (values[i] - minValue) / valueSpread;


    bucket = 0;

    for (var j=0; j<t.length-1; j++) {
      if ((t[j] <= normalizedValue) && (t[j+1] >= normalizedValue)) {
        bucket = j;
      }
    }

    bucketSize = t[bucket+1] - t[bucket];

    redStep = (colors[bucket+1][0] - colors[bucket][0]) / bucketSize;
    greenStep = (colors[bucket+1][1] - colors[bucket][1]) / bucketSize;
    blueStep = (colors[bucket+1][2] - colors[bucket][2]) / bucketSize;

    offset = normalizedValue-t[bucket];

    colorsOut.push({color: [
      colors[bucket][0] + redStep*offset,
      colors[bucket][1] + greenStep*offset,
      colors[bucket][2] + blueStep*offset,
      ]});
  }

  return colorsOut;

}