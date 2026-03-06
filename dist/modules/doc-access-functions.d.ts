import { Heading_Choice } from "./doc-access-classes";
/** Makes existing grouped sections containing the describer heading WCAG friendly (omitting contrast)
 *
 * WARNING: Replaces both the section and heading ID
 *
 * @typedef {"h2" | "h3" | "h4" | "h5" | "h6"} Heading_Choice
 *
 * @param {string} class_name
 * @param {Heading_Choice} heading_choice
 * @param {HTMLElement} [search_parent] - Default: body
 * @throws - If no sections are found
 * @throws - If no heading is found (based on section parent and heading choice)
 * @returns {void}
 */
export declare const grouped_sections_accessible: (class_name: string, heading_choice: Heading_Choice, search_parent?: HTMLElement) => void;
/** Make all headings navigation friendly (excludes h1)
 *
 * @param {HTMLElement} [parent] - Default: body. Recommended: main
 * @returns {void}
 */
export declare const all_headings_nav_friendly: (parent?: HTMLElement) => void;
/** Makes an existing link open in a new tab when activated
 *
 * @param {HTMLAnchorElement} existing_link
 * @param {boolean} [secure] - Default: true
 * @param {boolean} [accessible] - Default: true
 */
export declare const new_tab_existing: (existing_link: HTMLAnchorElement, secure?: boolean, accessible?: boolean) => void;
/**
 *
 * @param {number} time_in_ms
 * @param {AbortSignal} [abort]
 * @returns {Promise<void>}
 */
export declare const wait: (time_in_ms: number, abort?: AbortSignal) => Promise<void>;
