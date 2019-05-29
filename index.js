$(function() {

	$('#js-shopping-list-form').submit(event => {
		
		// remove default submit behavior
		event.preventDefault();

		// set variable to whatever input was submitted
		const newItem = $(this).find('input[name="shopping-list-entry"]').val();

		// add item to list with item name based on newItem
		$('ul').append(
			`<li>
		        <span class="shopping-item">${newItem}</span>
		        <div class="shopping-item-controls">
		          <button class="shopping-item-toggle">
		            <span class="button-label">check</span>
		          </button>
		          <button class="shopping-item-delete">
		            <span class="button-label">delete</span>
		          </button>
		        </div>
		      </li>`);

		// clear input after submission


	});

});