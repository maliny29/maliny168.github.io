// JavaScript Document


 const open = document.querySelectorAll('.open');

  // Add click event listener to each toggle button
  open.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      // Toggle the target element
      targetElement.classList.toggle('active');
		
		button.classList.add('active');
      // Close other elements except the target element
     open.forEach((otherButton) => {
        if (otherButton !== button) {
          const otherTargetId = otherButton.getAttribute('data-target');
          const otherTargetElement = document.getElementById(otherTargetId);

          // Close the other target element
          otherTargetElement.classList.remove('active');
			otherButton.classList.remove('active');
		}
      });
    });
  });
