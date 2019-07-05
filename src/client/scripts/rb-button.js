/***************************************
 * RB-BUTTON
 * rb-icon in template twice to ensure
 * proper spacing between icon and slot
 * (could not get around it)
 ***************************************/
import { RbBase, props, html } from '../../rb-base/scripts/rb-base.js';
import Converter               from '../../rb-base/scripts/public/props/converters.js';
import View                    from '../../rb-base/scripts/public/view/directives.js';
import template                from '../views/rb-button.html';
import '../../rb-icon/scripts/rb-icon.js';

export class RbButton extends RbBase() {
	/* Lifecycle
	 ************/
	constructor() {
		super();
		this.version = '0.0.17';
		this.rb.events.host.add(['click']);
		this.rb.events.add(this, 'click', evt => { // rb-button.click()
			if (evt.composedPath()[0] !== this) return;
			this.rb.elms.button.click();
		});
	}
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
		Object.assign(this.rb.elms, {
			button: this.shadowRoot.querySelector('button')
		});
		this.rb.events.add(this.rb.elms.button, 'click', this._handleClick);
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
			iconRight: props.boolean,
			iconRotate: props.number,
			iconSource: props.string,
			iconValign: props.string,
			iconBurst: Object.assign({}, props.boolean, {
				deserialize: Converter.valueless
			}),
			iconPulse: Object.assign({}, props.boolean, {
				deserialize: Converter.valueless
			}),
			iconSpin: Object.assign({}, props.boolean, {
				deserialize: Converter.valueless
			}),
			text: Object.assign({}, props.any, { // :boolean | object
				deserialize(val) {
					val = val.trim();
					val = !val // valueless attr is empty string
						? true
						: /^true$/i.test(val) // :boolean
							? true
							: /^{[^]*}$/.test(val) // :object (options)
								? JSON.parse(val)
								: false;
					return val;
				}
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
		this.rb.elms.hiddenInput.setAttribute('hidden', '');
		this.rb.elms.hiddenInput.style.cssText = 'display: none !important'; // just in case
		this.rb.elms.form.appendChild(this.rb.elms.hiddenInput);
	}
	_removeHiddenInput() { // :void
		if (!this.hasForm) return;
		if (!this.isResetOrSubmit) return;
		this.rb.elms.hiddenInput.remove();
	}

	/* Form Actions
	 ***************/
	_click(evt) { // :void
		this.rb.events.emit(this, 'clicked');
	}
	_reset(evt) { // :void
		if (!this.hasForm) return;
		this.rb.elms.hiddenInput.click();
	}
	async _submit(evt) { // :void
		if (!this.hasForm) return;
		const { form } = this.rb.elms;
		if (!form.rb) return this.rb.elms.hiddenInput.click();
		await form.rb.validate(true);
		if (!form.checkValidity()) return;
		this.rb.elms.hiddenInput.click(); // submit form
	}

	/* Event Handlers
	 *****************/
	async _handleClick(evt) { // :void
		if (this.rb.events.host.isPending(evt)) return; // if promise wait for it
		const result = await this.rb.events.host.run(evt);

		switch (this.type) {
			case 'reset':
				this._reset(evt);
				break;
			case 'submit':
				this._submit(evt);
				break;
			default: // type = button
				this._click(evt);
		}
	}

	/* Template
	 ***********/
	render({ props }) {
		return html template;
	}
}

customElements.define('rb-button', RbButton);
