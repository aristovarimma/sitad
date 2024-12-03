// Symmetrical log transformation function
function symlogish(x) {
    const c = 1; // Constant that determines the transition point between linear and logarithmic
    return Math.sign(x) * Math.log1p(Math.abs(x) / c);
}

// Transformer function (assuming it returns a scale)
function transformer$1() {
    return d3.scaleLinear(); // Using a basic linear scale for simplicity
}

// Apply the custom transformation to the scale
var scale = transformer$1().domain([0, 100]).range([0, 500]).interpolate(d3.interpolateRound);

// Applying the symlogish transformation
scale.symlogish = function(x) {
    return symlogish(scale(x));
};
