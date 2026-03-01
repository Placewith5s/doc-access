import { Heading_Choice } from './doc-access-classes';

const returning_msg_: string = "Returning...";


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
export const grouped_sections_accessible = (class_name: string, heading_choice: Heading_Choice,
    search_parent?: HTMLElement): void => {
    if (!search_parent) search_parent = document.body;

    if (!(class_name.trim().startsWith("."))) {
        console.warn("Class name must start with a dot!");
    }

    const sections: NodeListOf<HTMLElement> = search_parent.
    querySelectorAll(`${class_name}`);

    if (!sections.length) {
        throw new Error(`Can't find sections! ${returning_msg_}`);
    }

    sections.forEach(section => {
        const heading: HTMLHeadingElement | null = section
        .querySelector(heading_choice);

        if (!heading) {
            throw new Error(
                `Can't find ${heading_choice}! ${returning_msg_}`);
        }
        if (!heading.textContent) {
            console.warn(
                `${heading_choice} text content - empty! ${returning_msg_}`);
                return;
        }

        const heading_text_copy: string = heading.textContent
        .replaceAll(" ", "")
        .toLowerCase() + "-heading";

        heading.id = heading_text_copy;
        section.setAttribute("aria-labelledby", heading.id);
    });
};

/** Make all headings navigation friendly (excludes h1)
 *
 * @param {HTMLElement} [parent] - Default: body. Recommended: main
 * @returns {void}
 */
export const all_headings_nav_friendly = (parent?: HTMLElement): void => {
    if (!parent) parent = document.body;

    const all_headings: NodeListOf<HTMLHeadingElement> = parent
    .querySelectorAll<HTMLHeadingElement>("h2, h3, h4, h5, h6");

    all_headings.forEach(heading => {
        if (!(heading.textContent)) {
            console.warn(`A heading's text content is empty! Heading number: ${heading.tagName}`);
        }

        heading.id = heading.textContent.toLowerCase().replaceAll(" ", "-") +
        "-heading";
    });
};

/** Makes an existing link open in a new tab when activated
 *
 * @param {HTMLAnchorElement} existing_link
 * @param {boolean} [secure] - Default: true
 * @param {boolean} [accessible] - Default: true
 */
export const new_tab_existing = (existing_link: HTMLAnchorElement,
    secure?: boolean, accessible?: boolean): void => {
    const skipping_msg_: string = "Skipping...";
    
    existing_link.target = "_blank";

    if (typeof(secure) !== "boolean") secure = true;
    if (typeof(accessible) != "boolean") accessible = true;

    if (existing_link.rel === "noopener noreferrer") {
        console.warn(
            `${existing_link.id || "Existing link"} - already secure! ${skipping_msg_}`);
    } else {
        if (secure) {
            // console.info("Wants a new secure link");
            existing_link.rel = "noopener noreferrer";
        }
    }
    if (existing_link.title === "opens in a new tab") {
        console.warn(
            `${existing_link.id || "Existing link"} - already secure! ${skipping_msg_}`);
    } else {
        if (accessible) {
            // console.info("Wants a new accessible link");
            existing_link.title = "opens in a new tab";
        }
    }
};

/**
 *
 * @param {number} time_in_ms
 * @param {AbortSignal} [abort]
 * @returns {Promise<void>}
 */
export const wait = (time_in_ms: number, abort?: AbortSignal): Promise<void> => {
    return new Promise((resolve, reject) => {
        const timeout: number = setTimeout(resolve, time_in_ms);
        
        abort?.addEventListener('abort', () => {
            clearTimeout(timeout);
            reject(new Error(`Delay removed! ${time_in_ms}`));
        }, { once: true });
    });
}