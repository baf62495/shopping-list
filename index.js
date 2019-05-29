$(function addNewItemToList() {

	$('#js-shopping-list-form').submit(event => {
		
		// remove default submit behavior
		event.preventDefault();

		// set variable to whatever input was submitted
		const newItem = $(this).find('#shopping-list-entry').val();

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

});


$(function checkAndUncheckItem() {

	$('ul').on('click', '.shopping-item-toggle', function(event) {

		// add item checked class to element
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

	});

});