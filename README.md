# Vlider
JavaScript library for building carousel without any dependencies.

## Basic Markup
```html
<div class="vlider" id="vlider-1">
  <div class="vlider-inner">
    <div class="vlider-grid"></div>
  </div>
  <!-- control -->
  <div class="vlider-control">
    <div class="vlider-prev">
    
    </div>
    <div class="vlider-next">
    
    </div>
  </div>
</div>
```
after you load the vlider code. just put this code below.
```js
document.addEventListener('DOMContentLoaded', function() {
  var vlider = new Vlider({
    /* 
    * if you want to make more than one carousel in one page, you must to set this option to given id of element with class='vlider'
    */
    el: '#vlider-1',
    /*
    * the size of grid, default is 3
    */
    size: 2,
    // to add indicator icons, default is false
    withIndicator: true
  })
});
```
if you add `with-shadow` class on class="vlider", it will add shadow white at edge.

### Todo
[] Styling
[] Functionality with JS
