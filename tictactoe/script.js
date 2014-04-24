function tttController($scope) {
	$scope.board = [" "," "," "," "," "," "," "," "," "]

	var clickedspaces = 0;

	$scope.counterX=0;
	$scope.counterO=0;
	var win = false;


	var checkWin = function() {
		console.log($scope.counterX);
		console.log($scope.counterO);
		
		
		
		if ($scope.board[0] == $scope.board[1] && $scope.board[2]==$scope.board[1] && $scope.board[1]!==" "){
			win = true;
			if ($scope.board[0] == 'X') {
				$scope.counterX++;
				alert("X wins!");	
			} else {
				$scope.counterO++;
				alert("O wins!");				
			}
			//reset button here?
		}
		if ($scope.board[3] == $scope.board[4] && $scope.board[5]==$scope.board[4] && $scope.board[5]!==" "){
			win = true;
			if ($scope.board[3] == 'X') {
				$scope.counterX++;
				alert("X wins!");		
			} else {
				$scope.counterO++;
				alert("O wins!");				
			}

		}
		if ($scope.board[6] == $scope.board[7] && $scope.board[8]==$scope.board[7] && $scope.board[8]!==" "){
			win = true;
			if ($scope.board[6] == 'X') {
				$scope.counterX++;
				alert("X wins!");				
			} else {
				$scope.counterO++;
				alert("O wins!");				
			}
		}
		if ($scope.board[0] == $scope.board[3] && $scope.board[6]==$scope.board[3] && $scope.board[6]!==" "){
			win = true;
			if ($scope.board[0] == 'X') {
				$scope.counterX++;
				alert("X wins!");				
			} else {
				$scope.counterO++;
				alert("O wins!");
			}
		}
		if ($scope.board[1] == $scope.board[4] && $scope.board[7]==$scope.board[4] && $scope.board[7]!==" "){
			win = true;
			if ($scope.board[1] == 'X') {
				$scope.counterX++;
				alert("X wins!");
			} else {
				$scope.counterO++;
				alert("O wins!");
			}
		}
		if ($scope.board[2] == $scope.board[5] && $scope.board[8]==$scope.board[5] && $scope.board[8]!==" "){
			win = true;
			if ($scope.board[2] == 'X') {
				$scope.counterX++;
				alert("X wins!");
			} else {
				$scope.counterO++;
				alert("O wins!");
			}
		}
		if ($scope.board[0] == $scope.board[4] && $scope.board[8]==$scope.board[4] && $scope.board[8]!==" "){
			win = true;
			if ($scope.board[0] == 'X') {
				$scope.counterX++;
				alert("X wins!");				
			} else {
				$scope.counterO++;
				alert("O wins!");
			}		
		}
		if ($scope.board[2] == $scope.board[4] && $scope.board[6]==$scope.board[4] && $scope.board[6]!==" "){
			win = true;
			if ($scope.board[2] == 'X') {
				$scope.counterX++;
				alert("X wins!");				
			} else {
				$scope.counterO++;
				alert("O wins!");				
			}
		}	else if (clickedspaces === 9 && !win) {
			alert("Draw!");}
}
	

	$scope.clicker = function(cellindex) {
		
		if($scope.board[cellindex] === " " && !win) {
			clickedspaces++;
	  		if (clickedspaces % 2 == 0) { 
				$scope.board[cellindex] = 'O';
				$scope.board.push[cellindex];
				console.log($scope.board);
				checkWin();
				

			} else {
				$scope.board[cellindex] = 'X';
				$scope.board.push[cellindex];
				console.log($scope.board);
				checkWin();
			} 
		} else {
			alert("choose another box!");
			}
	}	



	// var display = function() {
	// 	if ($scope.justWon == "X") {
	// 		return "X wins!"
		//}	

	//} 	//endbracket for display function. purpose of the function is to display text 
		//in the displayArea div for X and O wins, as well as 'choose another box' and 'play again?''

	$scope.reset = function(){
		// $scope.board = $scope.initial;		
		$scope.board = [" "," "," "," "," "," "," "," "," "];
		clickedspaces = 0;
		win = false;
		};	

};  //end controller bracket


	
		

	



