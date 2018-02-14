/************
 * RB-BUTTON
 ************/
import { Element as PolymerElement } from '../../../@polymer/polymer/polymer-element.js';
import { DomIf as DomIf } from '../../../@polymer/polymer/lib/elements/dom-if.js';
import template from '../views/rb-button.html';

export class RbButton extends PolymerElement {
	/* Lifecycle
	 ************/
	constructor() {
		super();
	}

	ready() {
		super.ready();
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
	_hasIcon(icon) { // :string
		if(!icon) return null;
		return `with-icon`;
	}
	_iconPosition(icon, position) { // :string
		if(!icon) return null;
		if(!position) return null;
		return `icon-${position}`;
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
		return template;
	}
}

customElements.define('rb-button', RbButton);
