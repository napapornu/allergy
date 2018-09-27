
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./assets/plugins/bootstrap/css/bootstrap.min.css">
    <script src="./assets/plugins/jquery/jquery-3.3.1.min.js"></script>
    <script src="./assets/plugins/bootstrap/js/bootstrap.min.js"></script>
</head>

    <title>พยาการณ์การเกิดโรคภูมิแพ้</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>

    <style type="text/css">
     body  { background-image : url('pic/backg.jpg');
             background-repeat : repeat;
             background-attachment : fixed}
    </style>



<!-- body ส่วนของพยากรณ์ -->
<div class="container-fluid">
	<div class="container">
		<div class="col-md-12">
				<div class="panel-heading">
            	<center><h2><font color="#008000"> ผลลัพธ์การพยากรณ์และวิเคราะห์ </font></h2></center>
          		</div>
    				<div class="panel-body">
                    <form id="p1" name="p1" method="post" class="form-horizontal text-center" action" onSubmit="JavaScript:return sent();" >


   <div class="alert alert-default"> <div class="well">

   <p align="default">

   <h3><b>พยากรณ์ได้ว่าโรงเรียนนี้ : </b>มีปริมาณโรคอ้วนอยู่ในระดับปานกลาง<br /></h3>

   <h3><b>มีปริมาณคนอ้วนประมาณ : </b>0 คน <br /></h3>

   <br>
   <a href="index.php.html"><input type="button"  value="กลับสู่หน้าหลัก"  class="btn btn-danger"></a>
   &nbsp; &nbsp; &nbsp;

   </form></div>


      </div>
    </div>
  </div>
</div>

<SCRIPT Language="JavaScript">

function sent(){

 var fff = document.p1.fat.value;
 var nums = document.p1.numstd.value;
 var sum = 0;

 if(fff == "" && nums == ""){
	alert('กรุณาใส่ข้อมูล');
        return false;
    }
 if(fff > 0 && nums >0){
 	 sum = (nums-fff);

     result = Math.abs(sum/fff*100);
    document.p1.error2.value=Math.round(result);
    }
 else {
 	alert("ใส่ค่าในช่องไม่ครบ")
 }

}


</SCRIPT>

</body>
</html>
