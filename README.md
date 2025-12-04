# Fixed Bootstrap Scrollspy

* The basic Bootstrap [Scrollspy](https://getbootstrap.com/docs/5.3/components/scrollspy/#nested-nav) (nested nav) behaves poorly. Even when configured correctly, it often highlights the wrong links and doesn’t reflect the actual active element.
* Bootstrap generally tries to highlight whichever element occupies the largest visible portion of the screen. For example, if you have three short paragraphs taking up about 40% of the viewport and then a longer one that takes up more space, Scrollspy will mark the last paragraph as active simply because it dominates the screen — even though the first visible paragraph should be considered active.
* The code in this repository fixes that behavior and makes the highlighting far more intuitive.

<br>

## How to implement

* Remove these attributes from your code; everything else can remain unchanged:
  `data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0"`
* Insert the JS code from this repository into your page. It must be placed **after** the Scrollspy instance you are using (not before it).
* Adjust the selector so it points to the menu (nav) containing all relevant links. If your last paragraph is significantly longer, you may also want to adjust the value marked with `TODO: ...` in the code.

<br>

## How it works

* The script analyzes how much of each paragraph is visible and marks the first clearly visible one as active.
* The last paragraph is marked as active once it becomes at least partially visible. This is primarily to ensure that short final paragraphs can still be highlighted, but you can customize this behavior as needed.
