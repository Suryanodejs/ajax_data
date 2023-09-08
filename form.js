
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  <script>
 
    // Attach a change event handler to the dropdown
    $('#user-select').on('change', function() {
      // Get the selected user's ID from the dropdown
      var userId = $(this).val();
      
      alert(userId);

      // Use AJAX to retrieve the user's details from get_record.php
      $.ajax({
        type:"post",
        url: '<?php echo base_url('DashboardController/automaticly'); ?>',
        dataType: 'json',
        data: { userId: userId },
        success: function(data) {
            console.log(data)
          // Populate the input boxes with the retrieved data
          $('#courses-input').val(data.courses);
          $('#passport_no-input').val(data.passport_no);
        //   $('#phone-input').val(data.phone);
        },
        error: function() {
          alert('Error: Unable to retrieve user details.');
        }
      });
    });
  </script>
<!-- END: Content-->
