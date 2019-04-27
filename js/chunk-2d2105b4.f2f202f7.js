(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2105b4"],{b819:function(n,e){n.exports='<nav class="jsdoc-nav">\n<li class="nav-link nav-home-link"><a href="/docs/api/index.html">Home</a></li><li class="nav-heading">Classes</li><li class="nav-heading"><span class="nav-item-type type-class">C</span><span class="nav-item-name"><a href="DropEvent.html">DropEvent</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="DropEvent.html#reject">reject</a></span></li><li class="nav-heading"><span class="nav-item-type type-class">C</span><span class="nav-item-name"><a href="Interactable.html">Interactable</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#context">context</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#deltaSource">deltaSource</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#draggable">draggable</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#dropCheck">dropCheck</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#dropzone">dropzone</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#fire">fire</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#gesturable">gesturable</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#getRect">getRect</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#off">off</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#on">on</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#origin">origin</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#rectChecker">rectChecker</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#reflow">reflow</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#resizable">resizable</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#set">set</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="Interactable.html#unset">unset</a></span></li><li class="nav-heading"><span class="nav-item-type type-class">C</span><span class="nav-item-name"><a href="InteractEvent_InteractEvent.html">InteractEvent</a></span></li><li class="nav-heading"><span class="nav-item-type type-class">C</span><span class="nav-item-name"><a href="module.exports.html">exports</a></span></li><li class="nav-heading">Modules</li><li class="nav-heading"><span class="nav-item-type type-module">M</span><span class="nav-item-name"><a href="module-interact.html">interact</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="module-interact.html#.maxInteractions">maxInteractions</a></span></li><li class="nav-heading"><span class="nav-item-type type-module">M</span><span class="nav-item-name"><a href="module-modifiers_snapEdges.html">modifiers/snapEdges</a></span></li><li class="nav-heading"><a href="global.html">Globals</a></li><li class="nav-item"><span class="nav-item-type type-member">M</span><span class="nav-item-name"><a href="global.html#interact">interact</a></span></li><li class="nav-item"><span class="nav-item-type type-function">F</span><span class="nav-item-name"><a href="global.html#preventDefault">preventDefault</a></span></li>\n</nav>\n\n\n<h1 class="page-title">/auto-start/base.ts</h1>\n\n\n\n\n\n\n    \n    <section>\n        <article>\n            <pre class="prettyprint source linenums"><code>import * as utils from \'@interactjs/utils\'\nimport InteractableMethods from \'./InteractableMethods\'\n\ndeclare module \'@interactjs/interact/interact\' {\n  interface InteractStatic {\n    maxInteractions: (newValue: any) => any\n  }\n}\n\ndeclare module \'@interactjs/core/scope\' {\n  interface Scope {\n    autoStart: AutoStart\n    maxInteractions: (...args: any) => any\n  }\n}\n\ndeclare module \'@interactjs/core/defaultOptions\' {\n  interface BaseDefaults {\n    actionChecker?\n    styleCursor?\n  }\n\n  interface PerActionDefaults {\n    manualStart?: boolean\n    max?: number\n    maxPerElement?: number\n    allowFrom?: string | Element\n    ignoreFrom?: string | Element\n\n    // only allow left button by default\n    // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons#Return_value\n    mouseButtons?: 0 | 1 | 2 | 4 | 16\n  }\n}\n\nexport interface AutoStart {\n  // Allow this many interactions to happen simultaneously\n  maxInteractions: number\n  withinInteractionLimit: typeof withinInteractionLimit\n  cursorElement: HTMLElement\n  signals: utils.Signals\n}\n\nfunction install (scope: Interact.Scope) {\n  const {\n    interact,\n    interactions,\n    defaults,\n  } = scope\n\n  scope.usePlugin(InteractableMethods)\n\n  // set cursor style on mousedown\n  interactions.signals.on(\'down\', ({ interaction, pointer, event, eventTarget }) => {\n    if (interaction.interacting()) { return }\n\n    const actionInfo = getActionInfo(interaction, pointer, event, eventTarget, scope)\n    prepare(interaction, actionInfo, scope)\n  })\n\n  // set cursor style on mousemove\n  interactions.signals.on(\'move\', ({ interaction, pointer, event, eventTarget }) => {\n    if (interaction.pointerType !== \'mouse\' ||\n        interaction.pointerIsDown ||\n        interaction.interacting()) { return }\n\n    const actionInfo = getActionInfo(interaction, pointer, event, eventTarget, scope)\n    prepare(interaction, actionInfo, scope)\n  })\n\n  interactions.signals.on(\'move\', (arg) => {\n    const { interaction } = arg\n\n    if (!interaction.pointerIsDown ||\n        interaction.interacting() ||\n        !interaction.pointerWasMoved ||\n        !interaction.prepared.name) {\n      return\n    }\n\n    scope.autoStart.signals.fire(\'before-start\', arg)\n\n    const { interactable } = interaction\n\n    if (interaction.prepared.name &amp;&amp; interactable) {\n      // check manualStart and interaction limit\n      if (interactable.options[interaction.prepared.name].manualStart ||\n          !withinInteractionLimit(interactable, interaction.element, interaction.prepared, scope)) {\n        interaction.stop()\n      }\n      else {\n        interaction.start(interaction.prepared, interactable, interaction.element)\n      }\n    }\n  })\n\n  interactions.signals.on(\'stop\', ({ interaction }) => {\n    const { interactable } = interaction\n\n    if (interactable &amp;&amp; interactable.options.styleCursor) {\n      setCursor(interaction.element as HTMLElement, \'\', scope)\n    }\n  })\n\n  defaults.base.actionChecker = null\n  defaults.base.styleCursor = true\n\n  utils.extend(defaults.perAction, {\n    manualStart: false,\n    max: Infinity,\n    maxPerElement: 1,\n    allowFrom:  null,\n    ignoreFrom: null,\n\n    // only allow left button by default\n    // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons#Return_value\n    mouseButtons: 1,\n  })\n\n  /**\n   * Returns or sets the maximum number of concurrent interactions allowed.  By\n   * default only 1 interaction is allowed at a time (for backwards\n   * compatibility). To allow multiple interactions on the same Interactables and\n   * elements, you need to enable it in the draggable, resizable and gesturable\n   * `\'max\'` and `\'maxPerElement\'` options.\n   *\n   * @alias module:interact.maxInteractions\n   *\n   * @param {number} [newValue] Any number. newValue &lt;= 0 means no interactions.\n   */\n  interact.maxInteractions = (newValue) => maxInteractions(newValue, scope)\n\n  scope.autoStart = {\n    // Allow this many interactions to happen simultaneously\n    maxInteractions: Infinity,\n    withinInteractionLimit,\n    cursorElement: null,\n    signals: new utils.Signals(),\n  }\n}\n\n// Check if the current interactable supports the action.\n// If so, return the validated action. Otherwise, return null\nfunction validateAction (action, interactable, element, eventTarget, scope) {\n  if (interactable.testIgnoreAllow(interactable.options[action.name], element, eventTarget) &amp;&amp;\n      interactable.options[action.name].enabled &amp;&amp;\n      withinInteractionLimit(interactable, element, action, scope)) {\n    return action\n  }\n\n  return null\n}\n\nfunction validateMatches (interaction: Interact.Interaction, pointer, event, matches: Interact.Interactable[], matchElements: Element[], eventTarget: Element, scope: Interact.Scope) {\n  for (let i = 0, len = matches.length; i &lt; len; i++) {\n    const match = matches[i]\n    const matchElement = matchElements[i]\n    const matchAction = match.getAction(pointer, event, interaction, matchElement)\n\n    if (!matchAction) { continue }\n\n    const action = validateAction(\n      matchAction,\n      match,\n      matchElement,\n      eventTarget,\n      scope)\n\n    if (action) {\n      return {\n        action,\n        interactable: match,\n        element: matchElement,\n      }\n    }\n  }\n\n  return { action: null, interactable: null, element: null }\n}\n\nfunction getActionInfo (interaction: Interact.Interaction, pointer: Interact.PointerType, event: Interact.PointerEventType, eventTarget: Element, scope: Interact.Scope) {\n  let matches = []\n  let matchElements = []\n\n  let element = eventTarget\n\n  function pushMatches (interactable) {\n    matches.push(interactable)\n    matchElements.push(element)\n  }\n\n  while (utils.is.element(element)) {\n    matches = []\n    matchElements = []\n\n    scope.interactables.forEachMatch(element, pushMatches)\n\n    const actionInfo = validateMatches(interaction, pointer, event, matches, matchElements, eventTarget, scope)\n\n    if (actionInfo.action &amp;&amp;\n      !actionInfo.interactable.options[actionInfo.action.name].manualStart) {\n      return actionInfo\n    }\n\n    element = utils.dom.parentNode(element)\n  }\n\n  return { action: null, interactable: null, element: null }\n}\n\nfunction prepare (interaction: Interact.Interaction, { action, interactable, element }, scope: Interact.Scope) {\n  action = action || {}\n\n  if (interaction.interactable &amp;&amp; interaction.interactable.options.styleCursor) {\n    setCursor(interaction.element as HTMLElement, \'\', scope)\n  }\n\n  interaction.interactable = interactable\n  interaction.element = element\n  utils.copyAction(interaction.prepared, action)\n\n  interaction.rect = interactable &amp;&amp; action.name\n    ? interactable.getRect(element)\n    : null\n\n  if (interactable &amp;&amp; interactable.options.styleCursor) {\n    const cursor = action ? scope.actions[action.name].getCursor(action) : \'\'\n    setCursor(interaction.element as HTMLElement, cursor, scope)\n  }\n\n  scope.autoStart.signals.fire(\'prepared\', { interaction })\n}\n\nfunction withinInteractionLimit (interactable: Interact.Interactable, element: Element, action, scope: Interact.Scope) {\n  const options = interactable.options\n  const maxActions = options[action.name].max\n  const maxPerElement = options[action.name].maxPerElement\n  const autoStartMax = scope.autoStart.maxInteractions\n  let activeInteractions = 0\n  let interactableCount = 0\n  let elementCount = 0\n\n  // no actions if any of these values == 0\n  if (!(maxActions &amp;&amp; maxPerElement &amp;&amp; autoStartMax)) { return false }\n\n  for (const interaction of scope.interactions.list) {\n    const otherAction = interaction.prepared.name\n\n    if (!interaction.interacting()) { continue }\n\n    activeInteractions++\n\n    if (activeInteractions >= autoStartMax) {\n      return false\n    }\n\n    if (interaction.interactable !== interactable) { continue }\n\n    interactableCount += otherAction === action.name ? 1 : 0\n\n    if (interactableCount >= maxActions) {\n      return false\n    }\n\n    if (interaction.element === element) {\n      elementCount++\n\n      if (otherAction === action.name &amp;&amp; elementCount >= maxPerElement) {\n        return false\n      }\n    }\n  }\n\n  return autoStartMax > 0\n}\n\nfunction maxInteractions (newValue, scope: Interact.Scope) {\n  if (utils.is.number(newValue)) {\n    scope.autoStart.maxInteractions = newValue\n\n    return this\n  }\n\n  return scope.autoStart.maxInteractions\n}\n\nfunction setCursor (element: HTMLElement, cursor, scope: Interact.Scope) {\n  if (scope.autoStart.cursorElement) {\n    scope.autoStart.cursorElement.style.cursor = \'\'\n  }\n\n  element.ownerDocument.documentElement.style.cursor = cursor\n  element.style.cursor = cursor\n  scope.autoStart.cursorElement = cursor ? element : null\n}\n\nexport default {\n  id: \'auto-start/base\',\n  install,\n  maxInteractions,\n  withinInteractionLimit,\n  validateAction,\n} as Interact.Plugin\n</code></pre>\n        </article>\n    </section>\n\n\n\n\n'}}]);
//# sourceMappingURL=chunk-2d2105b4.f2f202f7.js.map