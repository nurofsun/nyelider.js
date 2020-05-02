# Nyelider.js
Standalone javascript library to make carousel component.

## Basic Markup
```html
<div class="nyelider" id="nyelider-1">
  <div class="nyelider-inner">
    <div class="nyelider-grid">
      <!-- you can add more nyelider item --> 
      <div class="nyelider-item"></div>
      <div class="nyelider-item"></div>
      <div class="nyelider-item"></div>
    </div>
  </div>
  <!-- control -->
  <div class="nyelider-control">
    <div class="nyelider-prev">
      <!-- add icon here -->
    </div>
    <div class="nyelider-next">
      <!-- and also here -->
    </div>
  </div>
  <!-- if you enable withIndicator options, you must have add this element -->
  <div class="nyelider-indicator"></div>
</div>
```
after you load the nyelider code. just put this code below.

### Options
- `el` [string]: The target element, by default `.vlider`, but if you have more than one carousel you must set this option with different target element.
- `size` [number]: Column size, by default `3`.
- `withIndicator [boolean]`: Adding clickable indicator icons. default is `false`.
- `autoPlay [boolean]`: autoplay the carousel. By default is `false`.
- `delay` [number]: delay of autoplay, if you are not yet set the `autoPlay` option to `true`, you don't need this option. By default is `3000`.

```js
document.addEventListener('DOMContentLoaded', function() {
  var nyelider = new Nyelider({
    /* 
    * if you want to make more than one carousel in one page, you must to set this option to given id of element with class='nyelider'
    */
    el: '#nyelider-1',
    /*
    * the size of grid, default is 3
    */
    size: 2,
    // to add indicator icons, default is false
    withIndicator: true
  })
});
```
if you add `with-shadow` class on class="nyelider", it will add shadow white at edge.

### Todo
- [x] Styling
- [x] Functionality with JS
- [x] AutoPlay Feature
