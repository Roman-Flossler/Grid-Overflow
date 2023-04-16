# Grid Overflow - responsive CSS grid layout

CSS layout based on CSS grid with optional animated 3D effect, utility classes and adjustable via CSS variables.

Grid overflow crea­tes respon­sive square grid, where grid items can be given vertigo, pa­no­rama or VIP class to set their over­flow into the next cell.

![Grid Overflow example](https://raw.githubusercontent.com/Roman-Flossler/Grid-Overflow/main/gridOverflow.jpg)

.

You can try this example and view its source code at https://www.flor.cz/gridOverflow 

# Implementation

import Grid Overflow CSS

```html
<link rel="stylesheet" href="path/to/GridOverflow3D.css" />
```

Create some parent element, its children with content and add neccessary classes:

```html
<!-- parent grid element - gridOverflow class creates responsive square grid from grid's direct children (items) -->
<!-- go-3Dfx class adds to each grid item 3D animated effect on mouse over  -->
<!-- go-actionIcon class adds to top right corner of grid items some symbol, but only if grid item is <a> tag  -->
<div class="gridOverflow go-3Dfx go-actionIcon">

  <!-- grid item (grid's direct child) should have go_gridItem class. Grid item has square form (1x1) -->
  <a class="go_gridItem href="someURL">
    grid item content - thumbnail image <img>, text <p>
    <!-- go_caption class is for creating captions inside grid items -->
    <span class="go_caption">some caption</span>
  </a>

  <!-- go_gridItem-panorama class creates a grid item in the form of a vertical rectangle (1x2) -->
  <a class="go_gridItem go_gridItem-panorama" href="someURL"> grid item content - thumbnail image <img>, text <p> </a>

  <!-- go_gridItem-panorama class creates a grid item in the form of a horizontal rectangle (2x1) -->
  <a class="go_gridItem go_gridItem-panorama" href="someURL"> grid item content - thumbnail image <img>, text <p> </a>

  <!-- go_gridItem-VIP class creates a grid item in the form of a large square (2x2) -->
  <a class="go_gridItem go_gridItem-VIP" href="someURL"> grid item content - thumbnail image <img>, text <p> </a>

  <!-- if grid item isn't <a> tag, there will be no symbol in top right corner  -->
  <div class="go_gridItem go_gridItem-centered" href="someURL"> centered content - typically some text </div>
</div>
```

GridOverflow element will expand to fill 100% width of its parent element.

GridOverflow class has grid-auto-flow se to **dense**, it means that grid items may appear out of order to fill in holes left by larger items. It happens only if you use panorama, vertigo or VIP class. Without this classes each grid item will be square of the same size and there will be no problem to keep correct order of items.

Basic parameters of Grid Overflow can be set via CSS parameters

```css
.gridOverflow {
  --gridGap: 10px;
  --itemMinWidth: 210px;
  --itemRounding: 3px;
  --linkActionIcon: "⤢";
  --mobileRowItemsCount: 2;
}
```

--mobileRowItemsCount defines grid's row items count in resolutions under 600px

In resolutions above 600px row items count is determined by --itemMinWidth.

If the parent element of the gridOverflow has width set to 700px, grid will have 3 item in the row - 3 x 210px + 2 * 10px for grid gap.
Items will expand to fill whole width of the parent element.

