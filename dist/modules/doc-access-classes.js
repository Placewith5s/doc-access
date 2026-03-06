import { check_inv_html_elem, err_msg_finisher } from "./doc-access-extra.js";
class Detacher {
    parent;
    err_msg;
    constructor(parent, err_msg) {
        this.parent = parent;
        this.err_msg = err_msg;
    }
    /** Removes parent node, removing its children in the process
     *
     * @returns {void}
     */
    detach() {
        check_inv_html_elem(this.parent, this.err_msg);
        this.parent.remove();
        // console.info("Removed parent node");
    }
}
export class Elem extends Detacher {
    self;
    tag_name;
    parent;
    id;
    /**
     *
     * @param {keyof HTMLElementTagNameMap} tag_name
     * @param {HTMLElement} [parent] - Default: body
     * @param {string} [id]
     */
    constructor(tag_name, parent, id) {
        super(parent || document.body, err_msg_finisher("new creation", parent));
        this.self = null;
        this.tag_name = tag_name;
        this.parent = parent ?? document.body;
        if (id)
            this.id = id;
        this.#call();
    }
    #call() {
        this.self = document.createElement(this.tag_name);
        this.parent.appendChild(this.self);
        if (this.id)
            this.self.id = this.id;
    }
}
export class Accessible_Section extends Detacher {
    self;
    heading;
    parent;
    heading_choice;
    #heading_text;
    /** Creates an WCAG friendly section with a describer heading of your choice (omitting contrast)
     *
     * @typedef {"h2" | "h3" | "h4" | "h5" | "h6"} Heading_Choice
     *
     * @param {Heading_Choice} heading_choice
     * @param {HTMLElement} [parent] - Default: body
     * @param {string} [heading_text]
     */
    constructor(heading_choice, parent, heading_text) {
        super(parent || document.body, err_msg_finisher("new section", parent));
        this.parent = parent ?? document.body;
        this.heading_choice = heading_choice;
        this.self = document.createElement("section");
        this.heading = document.createElement(this.heading_choice);
        this.#heading_text = heading_text ?? "";
        if (heading_text)
            this.#upd(heading_text);
        this.attach();
    }
    /** Updates section to keep it accessible
     *
     * @returns {void}
     */
    #upd(value) {
        this.#heading_text = value;
        this.heading.textContent = this.#heading_text;
        const heading_text_copy = this.heading.textContent
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "") + "-heading";
        this.heading.id = heading_text_copy;
        this.self.setAttribute("aria-labelledby", this.heading.id);
        // console.info("Updated heading text");
    }
    /** Parents both the section and heading
     *
     * @returns {void}
     */
    attach() {
        check_inv_html_elem(this.parent, `Can't parent section - invalid parent! Parent: ${parent}`);
        this.parent.append(this.self);
        this.self.appendChild(this.heading);
        // console.info("Parented new section and heading");
    }
    /** heading's textContent property
     *
     */
    get heading_text() {
        return this.#heading_text;
    }
    /** heading's textContent property
     *
     */
    set heading_text(value) {
        this.#upd(value);
    }
}
export class Tab_Link extends Detacher {
    self;
    secure;
    parent;
    accessible;
    #link_text;
    /** Creates a link that opens in a new tab when activated
     *
     * @param {HTMLElement} [parent] - Default: body
     * @param {boolean} [secure] - Default: true
     * @param {boolean} [accessible] - Default: true
     */
    constructor(parent, secure, accessible, link_text) {
        super(parent || document.body, err_msg_finisher("new link", parent));
        this.self = document.createElement("a");
        this.parent = parent ?? document.body;
        this.secure = secure ?? true;
        this.accessible = accessible ?? true;
        this.#link_text = link_text ?? "";
        if (link_text)
            this.#upd(this.link_text);
        this.attach();
    }
    /**
     *
     * @returns {void}
     */
    #upd(value) {
        this.#link_text = value;
        this.self.textContent = this.#link_text;
        this.self.target = "_blank";
        if (this.secure) {
            this.self.rel = "noopener noreferrer";
        }
        if (this.accessible) {
            this.self.title = "opens in a new tab";
        }
    }
    /** Parents the new tab link
     *
     * @returns {void}
     */
    attach() {
        check_inv_html_elem(this.parent, `Can't parent new link - invalid parent! Parent: ${this.parent}`);
        this.parent.append(this.self);
        // console.info("Parented new tab link");
    }
    /** heading's textContent property
     *
     */
    get link_text() {
        return this.#link_text;
    }
    /** heading's textContent property
     *
     */
    set link_text(value) {
        this.#upd(value);
    }
}
