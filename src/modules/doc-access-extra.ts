/** Checks if provided HTML element is invalid
 *
 * @param {HTMLElement} html_elem
 * @param {string} msg
 * @throws - If provided HTML element is invalid
 * @returns {void}
 */
export const check_inv_html_elem = (html_elem: HTMLElement | undefined | null, msg: string): void => {
    if (!html_elem) throw new Error(msg);
};

/** (No throw) error message meant for a parent defaulting to body, only if null or undefined
 *
 * @param what - Can't parent {{ what }}
 * @param [parent]
 * @returns {string}
 */
export const err_msg_finisher = (what: string, parent?: HTMLElement): string => {
    return `Can't parent ${what} - invalid parent! Parent: ${parent || document.body}`;
};