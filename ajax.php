<?php
public function automaticly()
{
            // $userId = $_GET['userId'];
          $userId =  $this->input->post('userId');
          $data = $this->db->query("select * from student_db where id = '$userId' ")->row();
        //   print_r($data);exit;
          echo json_encode($data);
    
}
?>
