/**********
 * RB-BUTTON
 **********/
import { Element as PolymerElement } from '../../../@polymer/polymer/polymer-element.js';
import { DomIf as DomIf } from '../../../@polymer/polymer/lib/elements/dom-if.js';
import template from '../views/rb-button.html';

export class RbButton extends PolymerElement {
	/* Lifecycle
	 ************/
	constructor() {
		super();
		this.importPath = '/node_modules/@rapid-build-ui/rb-button';
	}

	ready() {
		super.ready();
	}

	/* Properties
	 ************/
	static get properties() {
		return {
			disabled: {
				type: Boolean,
				value: false
			},
			kind: {
				type: String,
				value: ''
			},
			size: {
				type: String,
				value: ''
			},
			iconKind: {
				type: String
			},
			iconSource: {
				type: String
			},
			iconPosition: {
				type: String
			},
			type: {
				type: String,
				value: 'submit'
			}
		}
	}

	_getKind(kind) {
		if (!kind) {
			return 'default';
		}
		kind = kind.toLowerCase();

		return kind;
	}

	_getIconPosition(iconPosition) {
		if(!!iconPosition) return `icon-${iconPosition}`;
		return '';
	}

	handleClick(){
		this.dispatchEvent(new CustomEvent('button-click', {detail: {kicked: true}}));

	}

	/* Template
	 ***********/
	static get template() {
		return template;
	}
}

customElements.define('rb-button', RbButton);
