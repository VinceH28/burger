// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  // UPDATE
  const changeDevouredBtns = document.querySelectorAll('.change-devoured');

// Set up the event listener for the create button
if (changeDevouredBtns) {
    changeDevouredBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');
        const newDevour = e.target.getAttribute('data-newdevour');

        const newDevourState = {
          devoured: newDevour,
        };

        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(newDevorState),
        }).then((response) => {
          // Check that the response is good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed sleep to: ${newDevour}`);
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }  
  