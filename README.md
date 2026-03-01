# Doc Access
A JS/TS module that reduces coding time spent on accessibility.

## Usage
```js
import { 
    Accessible_Section,
    Tab_Link,
    Elem,
    grouped_sections_accessible,
    all_headings_nav_friendly,
    new_tab_existing
} from 'doc_access.js';

const main_elem = document.body.querySelector('main');

const section = new Accessible_Section(
    "h2", // heading choice
    main_elem,
    "Introduction"); // heading text

const link = new Tab_Link(section.self,
    true, // secure?
    true, // accessible tool tip?
    "Click me"
);
link.self.href = "https://example.com";

const p = new Elem(
    "p", 
    section.self
    // optional id
);
p.self.textContent = "Hey there!";

grouped_sections_accessible(".intro", "h2");

// access any heading with #id
all_headings_nav_friendly(main_elem);

const same_tab_link = new Elem("a", main_elem);
same_tab_link.self.href = "/";
same_tab_link.self.textContent = "Home";

// default: secure and accessible
new_tab_existing(same_tab_link);
```

## Documentation
**Docs:** For now: JSDoc

### Classes
```js
new Accessible_Section();
new Tab_Link();
new Elem();
```

### Functions
```js
grouped_sections_accessible();
all_headings_nav_friendly();
new_tab_existing();
```

### Extra
```js
wait();
check_inv_html_elem();
```