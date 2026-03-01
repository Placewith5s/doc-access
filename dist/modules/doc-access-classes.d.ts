export type Heading_Choice = "h2" | "h3" | "h4" | "h5" | "h6";
declare class Detacher {
    parent: HTMLElement;
    err_msg: string;
    constructor(parent: HTMLElement, err_msg: string);
    /** Removes parent node, removing its children in the process
     *
     * @returns {void}
     */
    detach(): void;
}
export declare class Elem extends Detacher {
    #private;
    self: Element | HTMLElement | null;
    tag_name: keyof HTMLElementTagNameMap;
    parent: HTMLElement;
    id?: string;
    /**
     *
     * @param {keyof HTMLElementTagNameMap} tag_name
     * @param {HTMLElement} [parent] - Default: body
     * @param {string} [id]
     */
    constructor(tag_name: keyof HTMLElementTagNameMap, parent?: HTMLElement, id?: string);
}
export declare class Accessible_Section extends Detacher {
    #private;
    self: HTMLElement;
    heading: HTMLHeadingElement;
    parent: HTMLElement;
    heading_choice: Heading_Choice;
    /** Creates an WCAG friendly section with a describer heading of your choice (omitting contrast)
     *
     * @typedef {"h2" | "h3" | "h4" | "h5" | "h6"} Heading_Choice
     *
     * @param {Heading_Choice} heading_choice
     * @param {HTMLElement} [parent] - Default: body
     * @param {string} [heading_text]
     */
    constructor(heading_choice: Heading_Choice, parent?: HTMLElement, heading_text?: string);
    /** Parents both the section and heading
     *
     * @returns {void}
     */
    attach(): void;
    /** heading's textContent property
     *
     */
    get heading_text(): string;
    /** heading's textContent property
     *
     */
    set heading_text(value: string);
}
export declare class Tab_Link extends Detacher {
    #private;
    self: HTMLAnchorElement;
    secure: boolean;
    parent: HTMLElement;
    accessible: boolean;
    /** Creates a link that opens in a new tab when activated
     *
     * @param {HTMLElement} [parent] - Default: body
     * @param {boolean} [secure] - Default: true
     * @param {boolean} [accessible] - Default: true
     */
    constructor(parent?: HTMLElement, secure?: boolean, accessible?: boolean, link_text?: string);
    /** Parents the new tab link
     *
     * @returns {void}
     */
    attach(): void;
    /** heading's textContent property
     *
     */
    get link_text(): string;
    /** heading's textContent property
     *
     */
    set link_text(value: string);
}
export {};
