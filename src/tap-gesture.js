// Track movement over the whole gesture, not just its final position. A drag
// that returns to its starting point and the end of a pinch are not taps.
export class TapGesture {
  constructor() { this.pointers=new Map(); this.cancelled=false; }
  down(event) {
    if (!this.pointers.size) this.cancelled=false;
    this.pointers.set(event.pointerId,{x:event.clientX,y:event.clientY,moved:false});
    if (this.pointers.size>1) this.cancelled=true;
  }
  move(event) {
    const start=this.pointers.get(event.pointerId);
    if (start && Math.hypot(event.clientX-start.x,event.clientY-start.y)>10) start.moved=true;
  }
  up(event) {
    this.move(event);
    const start=this.pointers.get(event.pointerId);
    const tapped=Boolean(start && !start.moved && !this.cancelled && this.pointers.size===1);
    this.pointers.delete(event.pointerId);
    return tapped;
  }
  cancel(event) { this.cancelled=true; this.pointers.delete(event.pointerId); }
}
