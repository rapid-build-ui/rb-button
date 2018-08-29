/************
 * RB-BUTTON
 ************/
import { props, html, RbBase } from '../../rb-base/scripts/rb-base.js';
import '../../rb-icon/scripts/rb-icon.js';
import template from '../views/rb-button.html';

export class RbButton extends RbBase() {
	/* Lifecycle
	 ************/
	viewReady() {
		super.viewReady && super.viewReady();
		this._form = this.closest('form');
		this.rb.events.emit(this.shadowRoot.querySelector('slot'), 'slotchange'); // needed for safari
	}

	/* Properties
	 *************/
	static get props() {
		return {
			disabled: props.boolean,
			kind: Object.assign({}, props.string, {
				default: 'default'
			}),
			size: props.string,
			type: Object.assign({}, props.string, {
				default: 'button'
			}),
			icon: props.string,
			iconSize: props.number,
			iconSource: props.string,
			iconPosition: props.string
		}
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
		if (!this._form) return;
		this._form.reset(); // new CustomEvent('reset') doesn't reset form
	}
	_submit(e) { // :void
		if (!this._form) return;
		this.rb.events.emit(this._form, 'submit'); // TODO: fix, doesn't do native browser submit
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
