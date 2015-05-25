$(document).on('ready', start);

function start(event){

	var $inputBox = $('#inputBox');
	var $btn = $('#btn');
	var $clear = $('#clear');
	var $sect = $('#sect');
	var $form = $('#myForm');
	var arraylist = [];
	var list = []
	var obj = {};
	var count = 0;

	$form.on('submit', render);

	function render(e){
		//console.log($btn);
		count++;
		e.preventDefault();
		obj = {};
		obj.id = count;
		obj.todo = obj.id+') '+$inputBox.val();
		obj.completed = false;
		obj.deleted = false;	
		arraylist.push(obj);
		//clears input box
		$inputBox.val('');

		
		
		for(var i = 0; i< arraylist.length; i++){

			list.push('<div id='+ arraylist[i].id+'>'+arraylist[i].todo+'</div>');
			
		}
		
		$sect.html('');
		$sect.html(list);
		check();
		
		$sect.on('click','div', strikeThru);
		//resets array
		list = [];

		
	}
	//checks the arraylist for completed values that render a strikethrough
	function check(){

		for(var i = 0; i< arraylist.length; i++){

			if(arraylist[i].completed === true){
					console.log(list[i]);
					console.log($sect.find('#'+arraylist[i].id))
					var $div = $($sect.find('#'+arraylist[i].id));
						$div.css('text-decoration', 'line-through');
			}
		}
	}

	function strikeThru(e){

		var $this = $(this);

		for(var i = 0; i < arraylist.length; i++){

			if($this.html() === arraylist[i].todo ){
				//console.log($this.html());

				if(arraylist[i].completed === false){
					//set completed to true and scrathes it off
					arraylist[i].completed = true;
					$this.css('text-decoration', 'line-through');
					console.log(arraylist[i]);
				}
			}
		}
	}

	



}
