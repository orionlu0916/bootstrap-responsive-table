# bootstrap-responsive-table
using div tags to replace table tags, and if the browser width is fit with preset breaking point, then the table will become horizontal rows with table head.

Usage
-----
### Simple example
First of all, you need to include Bootstrap and this extension:

css styles
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/responsive-table.css">
```

javascript
```html
<script  src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="js/responsive-table.js"></script>
```

Then you can create div-table html template and initialize it with javascript:

html
```html
<div class="container">
	<div class="row">
		<div class="col-md-6 col-md-offset-3">
			<!--this is the main table part-->
			<div class="table">
				<div class="thead">
					<div class="tr">
						<div class="th">Name</div>
						<div class="th">Gender</div>
						<div class="th">ID Number</div>
						<div class="th">Address</div>
					</div>
				</div>
				<div class="tbody">
					<div class="tr">
						<div class="td">Andy</div>
						<div class="td">man</div>
						<div class="td">Z000000000</div>
						<div class="td">000 Apple Street, Candy City.</div>
					</div>
				</div>
			</div>
			<!--end-->
		</div>
	</div>
</div>
```

javascript(for initialization)
```javascript
<script type="text/javascript">
	$( document ).ready(function() {
		$('.table').responsiveTable();
	});
</script>
```

initialize with options
```javascript
<script type="text/javascript">
	$( document ).ready(function() {
		$('.table').responsiveTable({
			displayTitle: true,  //true or false(default is true)
			width: 480	//breaking point
		});
	});
</script>
```

Options
-----
| option name   | description   |default value|
| ------------- |---------------| ------|
| displayTitle  | display table head when the width is fit breaking point. |  true |
| width         | breaking point|  480  |
