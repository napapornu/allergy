
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta content="IE=edge" http-equiv="X-UA-Compatible">
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<link href="./assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<script src="./assets/plugins/jquery/jquery-3.3.1.min.js">
	</script>
	<script src="./assets/plugins/bootstrap/js/bootstrap.min.js">
	</script>
	<title>พยาการณ์การเกิดโรคภูมิแพ้</title>
</head><!-- Bootstrap -->
<body>
	<style type="text/css">
	    body  { background-image : url('pic/backg.jpg');
	            background-repeat : repeat;
	            background-attachment : fixed}
	</style><!-- body ส่วนของพยากรณ์ -->
	<div class="container-fluid">
		<div class="container">
			<div class="col-md-12">
				<div class="panel-heading">
					<center>
						<h2><font color="#008000">ผลลัพธ์การพยากรณ์และวิเคราะห์</font></h2>
					</center>
				</div>
				<div class="panel-body">
					<form class="form-horizontal text-center" id="p1" method="post" name="p1" onsubmit="JavaScript:return sent();">
						<div class="alert alert-default">
							<div class="well">
								<p align="default"></p>
								<h3><b>พยากรณ์ได้ว่าโรงเรียนนี้ :</b> มีปริมาณโรคอ้วนอยู่ในระดับปานกลาง<br></h3>
								<h3><b>มีปริมาณคนอ้วนประมาณ :</b> 0 คน<br></h3><br>
								<a href="index.php.html"><input class="btn btn-danger" type="button" value="กลับสู่หน้าหลัก"></a> &nbsp; &nbsp; &nbsp;
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

<SCRIPT Language="JavaScript">

  function sent() {
    var fff = document.p1.fat.value;
    var nums = document.p1.numstd.value;
    var sum = 0;
    if (fff == "" && nums == "") {
      alert('กรุณาใส่ข้อมูล');
      return false;
    }
    if (fff > 0 && nums > 0) {
      sum = (nums - fff);
      result = Math.abs(sum / fff * 100);
      document.p1.error2.value = Math.round(result);
    } else {
      alert("ใส่ค่าในช่องไม่ครบ")
    }
  }

</SCRIPT>

  </body>
</html>
