/************
 * RB-BUTTON
 ************/
import { RbBase, props, html } from '../../rb-base/scripts/rb-base.js';
import Converter               from '../../rb-base/scripts/public/props/converters.js';
import View                    from '../../rb-base/scripts/public/view/directives.js';
import template                from '../views/rb-button.html';
import '../../rb-icon/scripts/rb-icon.js';

export class RbButton extends RbBase() {
	/* Lifecycle
	 ************/
	connectedCallback() { // :void
		super.connectedCallback && super.connectedCallback();
		this.rb.elms.form = this.closest('form');
		this._addHiddenInput();
	}
	disconnectedCallback() { // :void
		super.disconnectedCallback && super.disconnectedCallback();
		this._removeHiddenInput();
	}
	viewReady() {
		super.viewReady && super.viewReady();
		this.rb.events.emit(this.shadowRoot.querySelector('slot'), 'slotchange'); // needed for safari
	}

	/* Properties
	 *************/
	static get props() {
		return {
			disabled: Object.assign({}, props.boolean, {
				deserialize: Converter.valueless
			}),
			kind: Object.assign({}, props.string, {
				default: 'default'
			}),
			size: props.string,
			type: Object.assign({}, props.string, {
				default: 'button'
			}),
			iconFlip: props.string,
			iconKind: props.string,
			iconSize: props.number,
			iconSpeed: props.number,
			iconRotate: props.number,
			iconSource: props.string,
			iconValign: props.string,
			iconPosition: props.string,
			iconBurst: Object.assign({}, props.boolean, {
				deserialize: Converter.valueless
			}),
			iconPulse: Object.assign({}, props.boolean, {
				deserialize: Converter.valueless
			}),
			iconSpin: Object.assign({}, props.boolean, {
				deserialize: Converter.valueless
			})
		}
	}

	/* Getters
	 **********/
	get hasForm() { // :boolean (readonly: true if inside form)
		return !!this.rb.elms.form;
	}
	get isResetOrSubmit() { // :boolean (readonly)
		if (this.type === 'reset') return true;
		if (this.type === 'submit') return true;
		return false;
	}

	/* Private Methods
	 ******************/
	_addHiddenInput() { // :void (required to do native browser submit)
		if (!this.hasForm) return;
		if (!this.isResetOrSubmit) return;
		this.rb.elms.hiddenInput = document.createElement('input');
		this.rb.elms.hiddenInput.setAttribute('type', this.type);
		this.rb.elms.hiddenInput.style.cssText = 'display: none !important';
		this.rb.elms.form.appendChild(this.rb.elms.hiddenInput);
	}
	_removeHiddenInput() { // :void
		if (!this.hasForm) return;
		if (!this.isResetOrSubmit) return;
		this.rb.elms.hiddenInput.remove();
	}

	/* Slot Event Handlers
	 **********************/
	_trimSlot(slot) { // :void (mutator: slot.textContent)
		const rx = /\S/; // single character other than white space
		for (let child of slot.assignedNodes()) {
			if (child.nodeType !== 3) continue;
			const text = child.textContent;
			if (!text) continue;
			const trimmed = rx.test(text[0]) && rx.test(text.slice(-1));
			if (trimmed) continue;
			child.textContent = text.trim();
		}
	}
	_setHasContent(e) { // :void
		const slot = e.currentTarget;
		this._trimSlot(slot);
		let hasContent = false;
		for (let child of slot.assignedNodes()) {
			if (child.nodeType !== 3) continue;
			if (!child.textContent.length) continue;
			hasContent = true; break;
		}
		const action = hasContent ? 'remove' : 'add';
		// e.composedPath()[1] = button
		e.composedPath()[1].classList[action]('no-content');
	}

	/* Form Actions
	 ***************/
	_click(e) { // :void
		this.rb.events.emit(this, 'clicked');
	}
	_reset(e) { // :void
		if (!this.hasForm) return;
		this.rb.elms.hiddenInput.click();
	}
	_submit(e) { // :void
		if (!this.hasForm) return;
		this.rb.elms.hiddenInput.click();
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
	render({ props }) {
		return html template;
	}
}

customElements.define('rb-button', RbButton);
