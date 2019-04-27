(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ee22"],{b0ec:function(n,e){n.exports='<nav class="jsdoc-nav">\n<li class="nav-link nav-home-link"><a href="/docs/api/index.html">Home</a></li><li class="nav-heading">Classes</li><li class="nav-heading"><span class="nav-item-type type-class">C</span><span class="nav-item-name"><a href="DropEvent.html">DropEvent</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="DropEvent.html#reject">reject</a></span></li><li class="nav-heading"><span class="nav-item-type type-class">C</span><span class="nav-item-name"><a href="Interactable.html">Interactable</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#context">context</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#deltaSource">deltaSource</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#draggable">draggable</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#dropCheck">dropCheck</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#dropzone">dropzone</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#fire">fire</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#gesturable">gesturable</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#getRect">getRect</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#off">off</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#on">on</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#origin">origin</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#rectChecker">rectChecker</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#reflow">reflow</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#resizable">resizable</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#set">set</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#unset">unset</a></span></li><li class="nav-heading"><span class="nav-item-type type-class">C</span><span class="nav-item-name"><a href="InteractEvent_InteractEvent.html">InteractEvent</a></span></li><li class="nav-heading"><span class="nav-item-type type-class">C</span><span class="nav-item-name"><a href="module.exports.html">exports</a></span></li><li class="nav-heading">Modules</li><li class="nav-heading"><span class="nav-item-type type-module">M</span><span class="nav-item-name"><a href="module-interact.html">interact</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="module-interact.html#.maxInteractions">maxInteractions</a></span></li><li class="nav-heading"><span class="nav-item-type type-module">M</span><span class="nav-item-name"><a href="module-modifiers_snapEdges.html">modifiers/snapEdges</a></span></li><li class="nav-heading"><a href="global.html">Globals</a></li><li class="nav-item"><span class="nav-item-type type-member">M</span><span class="nav-item-name"><a href="global.html#interact">interact</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="global.html#preventDefault">preventDefault</a></span></li>\n</nav>\n\n\n<h1 class="page-title">/actions/gesture.ts</h1>\n\n\n\n\n\n\n    \n    <section>\n        <article>\n            <pre class="prettyprint source linenums"><code>import InteractEvent from \'@interactjs/core/InteractEvent\'\nimport { ActionName, Scope } from \'@interactjs/core/scope\'\nimport * as utils from \'@interactjs/utils\'\n\nexport type GesturableMethod = Interact.ActionMethod&lt;Interact.GesturableOptions>\n\ndeclare module \'@interactjs/core/Interaction\' {\n  interface Interaction {\n    gesture?: {\n      angle: number,          // angle from first to second touch\n      distance: number,\n      scale: number,          // gesture.distance / gesture.startDistance\n      startAngle: number,     // angle of line joining two touches\n      startDistance: number,  // distance between two touches of touchStart\n    }\n  }\n}\n\ndeclare module \'@interactjs/core/Interactable\' {\n  interface Interactable {\n    gesturable: GesturableMethod\n  }\n}\n\ndeclare module \'@interactjs/core/defaultOptions\' {\n  interface ActionDefaults {\n    gesture: Interact.GesturableOptions\n  }\n}\n\ndeclare module \'@interactjs/core/scope\' {\n  interface Actions {\n    [ActionName.Gesture]?: typeof gesture\n  }\n\n  // eslint-disable-next-line no-shadow\n  enum ActionName {\n    Gesture = \'gesture\'\n  }\n}\n\n(ActionName as any).Gesture = \'gesture\'\n\nexport interface GestureEvent extends Interact.InteractEvent&lt;ActionName.Gesture> {\n  distance: number\n  angle: number\n  da: number // angle change\n  scale: number // ratio of distance start to current event\n  ds: number // scale change\n  box: Interact.Rect // enclosing box of all points\n  touches: Interact.PointerType[]\n}\n\nexport interface GestureSignalArg extends Interact.SignalArg {\n  iEvent: GestureEvent\n  interaction: Interact.Interaction&lt;ActionName.Gesture>\n  event: Interact.PointerEventType | GestureEvent\n}\n\nfunction install (scope: Scope) {\n  const {\n    actions,\n    Interactable,\n    interactions,\n    defaults,\n  } = scope\n\n  /**\n   * ```js\n   * interact(element).gesturable({\n   *     onstart: function (event) {},\n   *     onmove : function (event) {},\n   *     onend  : function (event) {},\n   *\n   *     // limit multiple gestures.\n   *     // See the explanation in {@link Interactable.draggable} example\n   *     max: Infinity,\n   *     maxPerElement: 1,\n   * })\n   *\n   * var isGestureable = interact(element).gesturable()\n   * ```\n   *\n   * Gets or sets whether multitouch gestures can be performed on the target\n   *\n   * @param {boolean | object} [options] true/false or An object with event\n   * listeners to be fired on gesture events (makes the Interactable gesturable)\n   * @return {boolean | Interactable} A boolean indicating if this can be the\n   * target of gesture events, or this Interactable\n   */\n  Interactable.prototype.gesturable = function (this: Interact.Interactable, options: Interact.GesturableOptions | boolean) {\n    if (utils.is.object(options)) {\n      this.options.gesture.enabled = options.enabled !== false\n      this.setPerAction(\'gesture\', options)\n      this.setOnEvents(\'gesture\', options)\n\n      return this\n    }\n\n    if (utils.is.bool(options)) {\n      this.options.gesture.enabled = options\n\n      return this\n    }\n\n    return this.options.gesture as Interact.Options\n  } as GesturableMethod\n\n  interactions.signals.on(\'action-start\', updateGestureProps)\n  interactions.signals.on(\'action-move\', updateGestureProps)\n  interactions.signals.on(\'action-end\', updateGestureProps)\n\n  interactions.signals.on(\'new\', ({ interaction }) => {\n    interaction.gesture = {\n      angle: 0,\n      distance: 0,\n      scale: 1,\n      startAngle: 0,\n      startDistance: 0,\n    }\n  })\n\n  actions[ActionName.Gesture] = gesture\n  actions.names.push(ActionName.Gesture)\n  utils.arr.merge(actions.eventTypes, [\n    \'gesturestart\',\n    \'gesturemove\',\n    \'gestureend\',\n  ])\n  actions.methodDict.gesture = \'gesturable\'\n\n  defaults.actions.gesture = gesture.defaults\n}\n\nconst gesture = {\n  id: \'actions/gesture\',\n  install,\n  defaults: {\n  },\n\n  checker (_pointer, _event, _interactable, _element, interaction: { pointers: { length: number; }; }) {\n    if (interaction.pointers.length >= 2) {\n      return { name: \'gesture\' }\n    }\n\n    return null\n  },\n\n  getCursor () {\n    return \'\'\n  },\n}\n\nfunction updateGestureProps ({ interaction, iEvent, event, phase }: GestureSignalArg) {\n  if (interaction.prepared.name !== \'gesture\') { return }\n\n  const pointers = interaction.pointers.map((p) => p.pointer)\n  const starting = phase === \'start\'\n  const ending = phase === \'end\'\n  const deltaSource = interaction.interactable.options.deltaSource\n\n  iEvent.touches = [pointers[0], pointers[1]]\n\n  if (starting) {\n    iEvent.distance = utils.pointer.touchDistance(pointers, deltaSource)\n    iEvent.box      = utils.pointer.touchBBox(pointers)\n    iEvent.scale    = 1\n    iEvent.ds       = 0\n    iEvent.angle    = utils.pointer.touchAngle(pointers, deltaSource)\n    iEvent.da       = 0\n\n    interaction.gesture.startDistance = iEvent.distance\n    interaction.gesture.startAngle = iEvent.angle\n  }\n  else if (ending || event instanceof InteractEvent) {\n    const prevEvent = interaction.prevEvent as GestureEvent\n\n    iEvent.distance = prevEvent.distance\n    iEvent.box      = prevEvent.box\n    iEvent.scale    = prevEvent.scale\n    iEvent.ds       = 0\n    iEvent.angle    = prevEvent.angle\n    iEvent.da       = 0\n  }\n  else {\n    iEvent.distance = utils.pointer.touchDistance(pointers, deltaSource)\n    iEvent.box      = utils.pointer.touchBBox(pointers)\n    iEvent.scale    = iEvent.distance / interaction.gesture.startDistance\n    iEvent.angle    = utils.pointer.touchAngle(pointers, deltaSource)\n\n    iEvent.ds = iEvent.scale - interaction.gesture.scale\n    iEvent.da = iEvent.angle - interaction.gesture.angle\n  }\n\n  interaction.gesture.distance = iEvent.distance\n  interaction.gesture.angle = iEvent.angle\n\n  if (utils.is.number(iEvent.scale) &amp;&amp;\n      iEvent.scale !== Infinity &amp;&amp;\n      !isNaN(iEvent.scale)) {\n    interaction.gesture.scale = iEvent.scale\n  }\n}\n\nexport default gesture\n</code></pre>\n        </article>\n    </section>\n\n\n\n\n'}}]);
//# sourceMappingURL=chunk-2d20ee22.dfa46035.js.map