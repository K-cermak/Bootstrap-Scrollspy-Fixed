# Fixed Bootstrap Scrollspy

- Basic Bootstrap [Scrollspy](https://getbootstrap.com/docs/5.3/components/scrollspy/#nested-nav) (Nested nav) works horribly. Even if it is set correctly, it colors the links wrong and does not reflect the actual active element.
- Bootstrap mostly trying to color an element that is visible across half the screen. For example, if you have 3 short paragraphs that take up 40% of the screen and then a longer one that takes up a bigger part, Scrollspy marks the last paragraph as active because it takes up most of the screen (correctly, the first visible paragraph should be active).
- The code in this repo fixes that behavior and makes the coloring much more normal.

<br>

## How to implement?
- Remove these elements from the code, otherwise you can leave everything the same. `data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0"`
- Paste the JS code from this repository into the page. It must be inserted after the used Scrollspy (not before it).
- Edit the selector (where your menu (nav) with all links should be) and if you have a longer last paragraph, you can also edit the value for the comment `TODO: ...` in the code.

<br>

## How it works?
- The code just analyzes how visible a paragraph is and marks the one that is visible first as active.
- The last paragraph is then marked as active if it is at least partially visible. This is mainly because of the short last paragraphs to ever mark as active. However, the behavior can be changed.