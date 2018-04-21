/************
 * RB-BUTTON
 ************/
import { PolymerElement, html } from '../../../@polymer/polymer/polymer-element.js';
import { DomIf as DomIf } from '../../../@polymer/polymer/lib/elements/dom-if.js';
import '../../rb-icon/scripts/rb-icon.js';
import template from '../views/rb-button.html';

export class RbButton extends PolymerElement {
	/* Lifecycle
	 ************/
	constructor() {
		super();
	}
	connectedCallback() {
		super.connectedCallback();
		if (!this._slot) this._slot = this.root.querySelector('slot');
		this.__setHasContent();
		this._attachEvents();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this._detachEvents();
	}

	/* Properties
	 *************/
	static get properties() {
		return {
			disabled: {
				type: Boolean,
				value: false
			},
			kind: {
				type: String,
				value: 'default'
			},
			size: {
				type: String,
			},
			type: {
				type: String,
				value: 'button'
			},
			icon: {
				type: String
			},
			iconSize: {
				type: Number
			},
			iconSource: {
				type: String
			},
			iconPosition: {
				type: String
			},
			_form: { // computed props are read-only
				type: Object,
				computed: 'computeForm(type)'
			}
		}
	}

	/* Computed Properties
	 **********************/
	computeForm(type) { // :element | null (for reset and submit)
		if (type === 'button') return null;
		return this.closest('form');
	}

	/* Computed Bindings
	 ********************/
	_hasContent(__hasContent) { // :string
		if (!!__hasContent) return null;
		return 'no-content';
	}
	_hasIcon(icon) { // :string
		if(!icon) return null;
		return 'with-icon';
	}
	_iconPosition(icon, position) { // :string
		if(!icon) return null;
		if(!position) return null;
		return `icon-${position}`;
	}

	/* Event Management
	 *******************/
	_attachEvents() { // :void
		this.__hasContentListner = this.__setHasContent.bind(this);
		this._slot.addEventListener('slotchange', this.__hasContentListner);
	}
	_detachEvents() { // :void
		this._slot.removeEventListener('slotchange', this.__hasContentListner);
	}

	/* Slot Event Handlers
	 **********************/
	_trimSlot() { // :void (mutator: slot.textContent)
		for (let child of this._slot.assignedNodes()) {
			if (child.nodeType !== 3) continue;
			child.textContent = child.textContent.trim();
		}
	}
	__setHasContent() { // :void
		this._trimSlot();
		let hasContent = false;
		for (let child of this._slot.assignedNodes()) {
			if (child.nodeType !== 3) continue;
			if (!child.textContent.length) continue;
			hasContent = true; break;
		}
		this.__hasContent = hasContent;
	}

	/* Form Actions
	 ***************/
	_click(e) { // :void
		var opts = {}
		var event = new CustomEvent('clicked', opts);
		this.dispatchEvent(event);
	}
	_reset(e) { // :void
		if (!this._form) return
		this._form.reset(); // new CustomEvent('reset') doesn't reset form
	}
	_submit(e) { // :void
		var opts  = {}; // can pass data via opts.detail
		var event = new CustomEvent('submit', opts); // not supported in ie
		this._form.dispatchEvent(event); // doesn't do native browser submit
	}

	/* Event Handlers
	 *****************/
	_handleClick(e) { // :void
		switch (this.type) {
			case 'reset':
				this._reset(e);
				break;
			case 'submit':
				this._submit(e);
				break;
			default: // type = button
				this._click(e);
		}
	}

	/* Template
	 ***********/
	static get template() { // :string
		return html template;
	}
}

customElements.define('rb-button', RbButton);
