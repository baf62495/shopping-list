$(function() {

	$('#js-shopping-list-form').submit(event => {
		
		// remove default submit behavior
		event.preventDefault();

		// set variable to whatever input was submitted
		const newItem = $('#shopping-list-entry').val();

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
		$(this).find('#shopping-list-entry').val("");

	});


	// when a toggle button is clicked inside a ul start this event
	$('ul').on('click', '.shopping-item-toggle', function(event) {

		// take current target(toggle button) and select the container of it
		// find what we want to add class to
		// add class to element
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

	});


	// when delete button is clicked inside a ul start this event
	$('ul').on('click', '.shopping-item-delete', function(event) {

		// take current target(delete button) and select the container and then remove it
		$(this).closest('li').remove();

	});

});