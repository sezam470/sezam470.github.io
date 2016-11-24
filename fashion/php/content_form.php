<?

echo
"<div class='content-1'>".
	"<div class='form1'>".
	"<h1>REGISTRATION FORM</h1>".
"<form name='registr' action='form_transmit.php' method='post' class='form form-horizontal'>".
	"<div class='form-group'>".
		"<label for='inputName1' class='col-sm-2 control-label'>Name</label>".
		"<div class='col-sm-10'>".
			"<input type='text' name='Name1' class='validate form-control' id='inputName1' placeholder='Name' />".
		"</div>".
	"</div>".
	"<div class='form-group'>".
		"<label for='inputSurname1' class='col-sm-2 control-label'>Surname</label>".
		"<div class='col-sm-10'>".
			"<input type='text' name='Surname1' class='validate form-control' id='inputSurname1' placeholder='Surname' />".
		"</div>".
	"</div>".
	"<div class='form-group'>".
		"<label for='inputGender' class='col-sm-2 control-label'>Gender</label>".
			"<div class='col-sm-10' id='inputGender'>".
				"<label class='radio-inline'>".
					"<input type='radio' name='inlineRadioOptions' id='inlineRadio1' value='man'>Man
				</label>".
				"<label class='radio-inline'>".
					"<input type='radio' name='inlineRadioOptions' id='inlineRadio2' value='woman'>Woman
				</label>".
			"</div>".
	"</div>".
	"<div class='form-group'>".
		"<label for='inputDate1' class='col-sm-2 control-label'>Birth Date</label>".
		"<div class='col-sm-10'>".
			"<input type='date' name='Date1' class='form-control' id='inputDate1' placeholder='Birth Date'>".
		"</div>".
	"</div>".
	"<div class='form-group'>".
		"<label for='inputCity1' class='col-sm-2 control-label'>City</label>".
		"<div class='col-sm-10'>".
			"<input type='text' name='City1' class='form-control' id='inputCity1' placeholder='City'>".
		"</div>".
	"</div>".
	"<div class='form-group'>".
		"<label for='inputAddress1' class='col-sm-2 control-label'>Address</label>".
		"<div class='col-sm-10'>".
			"<input type='text' name='Address1' class='form-control' id='inputAddress1' placeholder='Address'>".
		"</div>".
	"</div>".
	"<div class='form-group'>".
		"<label for='inputTel1' class='col-sm-2 control-label'>Phone number</label>".
		"<div class='col-sm-10'>".
			"<input type='tel' name='Tel1' class='form-control' id='inputTel1' placeholder='Phone number'>".
		"</div>".
	"</div>".
	"<div class='form-group'>".
		"<label for='inputEmail1' class='col-sm-2 control-label'>Email</label>".
		"<div class='col-sm-10'>".
			"<input type='email' name='Email1' class='form-control' id='inputEmail1' placeholder='Email'>".
		"</div>".
	"</div>".
	"<div class='form-group'>".
		"<label for='inputPassword1' class='col-sm-2 control-label'>Password</label>".
		"<div class='col-sm-10'>".
			"<input type='password' name='Password1' class='form-control pass' id='inputPassword1' placeholder='Password'>".
		"</div>".
	"</div>".
	"<div class='form-group'>".
		"<div class='col-sm-offset-2 col-sm-10'>".
			"<div class='checkbox'>".
				"<label>".
					"<input type='checkbox' name='Remember1'/>Remember me
				</label>".
			"</div>".
		"</div>".
	"</div>".
	
	"<div class='form-group'>".
		"<label for='inputPassword1' class='col-sm-2 control-label'>Select number</label>".
		"<div class='col-sm-10'>".
			"<select class='form-control'>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
			</select>".
		"</div>".
	"</div>".
	
	"<div class='form-group'>".
		"<div class='col-sm-offset-2 col-sm-10'>".
			"<input type='submit' name='Submit1' class='btn btn-default' value='SigIn' />".
		"</div>".
	"</div>".
"</form><!--endformRegistr-->".
"</div>".
"</div>";

?>