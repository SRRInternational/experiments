const EventEmitter = require("events").EventEmitter;
const domain = require("domain");

const emitterExplicit = new EventEmitter();

// Create a firstDomain for explicit binding
const firstDomain = domain.create();

firstDomain.on('error', function (err) {
  console.log("This error will be handled by	using firstDomain("+err.message+")");
});

// Explicit binding using add method
firstDomain.add(emitterExplicit);

emitterExplicit.on('error', function (err) {
  console.log("This error will be handled by	using listener("+err.message+")");
});

emitterExplicit.emit('error', new Error('listener will handle'));
emitterExplicit.removeAllListeners('error');
emitterExplicit.emit('error', new Error('firstDomain will handle'));

// Create secondDomain for implicit binding
const secondDomain = domain.create();

secondDomain.on('error', function (err) {
  console.log("This error will be handled by	using secondDomain("+err.message+")");
});

// Implicit binding using run method
secondDomain.run(function () {
  const emitterImplicit = new EventEmitter();
  emitterImplicit.emit('error', new Error('secondDomain	will handle'));
});

firstDomain.remove(emitterExplicit);
emitterExplicit.emit('error', new Error('Exception error	message.The system may crash!'));
