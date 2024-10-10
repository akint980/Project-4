 $(document).foundation();

    // Example JavaScript functionality
    $(document).ready(function() {
      // Highlight sections on hover
      $('.section').hover(
        function() {
          $(this).css('background-color', '#e9ecef');
        },
        function() {
          $(this).css('background-color', 'white');
        }
      );
    });