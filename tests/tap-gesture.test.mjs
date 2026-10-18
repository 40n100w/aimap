import test from 'node:test';
import assert from 'node:assert/strict';
import { TapGesture } from '../src/tap-gesture.js';

const pointer=(pointerId,clientX=100,clientY=100)=>({pointerId,clientX,clientY});
test('touch taps tolerate small motion but never select after dragging back to the start',()=>{
  const gesture=new TapGesture();
  gesture.down(pointer(1)); assert.equal(gesture.up(pointer(1,104,103)),true);
  gesture.down(pointer(2)); gesture.move(pointer(2,150)); assert.equal(gesture.up(pointer(2)),false);
});
test('pinching and cancelled gestures cannot become selections when fingers lift',()=>{
  const gesture=new TapGesture();
  gesture.down(pointer(1)); gesture.down(pointer(2,200));
  assert.equal(gesture.up(pointer(1)),false); assert.equal(gesture.up(pointer(2,200)),false);
  gesture.down(pointer(3)); gesture.cancel(pointer(3)); assert.equal(gesture.up(pointer(3)),false);
  gesture.down(pointer(4)); assert.equal(gesture.up(pointer(4)),true);
});
