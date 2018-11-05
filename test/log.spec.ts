const sinon  = require('sinon');
const assert = require('assert');
import Log from "../log.ts";

describe("log", () => {
  const spy = sinon.spy(console, 'log');
  const msg = "log message";

  after(() => {
    spy.restore();
  })

  it("should log debug messages", () => {
    Log.debug(msg);
    assert(spy.calledWith(`<D>: ${msg}`));
  });

  it("should log trace messages", () => {
    Log.trace(msg);
    assert(spy.calledWith(`<T>: ${msg}`));
  });

  it("should log information messages", () => {
    Log.info(msg);
    assert(spy.calledWith(`<I>: ${msg}`));
  });

  it("should log warning messages", () => {
    Log.warn(msg);
    assert(spy.calledWith(`<W>: ${msg}`));
  });

  it("should log error messages", () => {
    Log.error(msg);
    assert(spy.calledWith(`<E>: ${msg}`));
  });
});
