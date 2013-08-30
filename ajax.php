<?php

	if(isset($_POST["act"]))
	{
		$act = $_POST["act"];
		if( $act == "list-1" )
		{
			$html = '<li>
						<h3 idrow="4">Item 4</h3>
						<span>Choose</span>
					</li>
					<li>
						<h3 idrow="5">Item 5</h3>
						<span>Choose</span>
					</li>
					<li>
						<h3 idrow="6">Item 6</h3>
						<span>Choose</span>
					</li>';
					
			echo $html;
		}
		elseif( $act == "list-2" )
		{
			$html = '<li>
						<h3 idrow="7">Item 7</h3>
						<span>Choose</span>
					</li>
					<li>
						<h3 idrow="8">Item 8</h3>
						<span>Choose</span>
					</li>
					<li>
						<h3 idrow="9">Item 9</h3>
						<span>Choose</span>
					</li>';
					
			echo $html;	
		
		}
		
	}