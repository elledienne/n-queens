/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  // create count function
  var trySolution = function(row){
    // if row === n
    if( row === n ){
      // increment solution
      solutionCount++;
      // return;
      return;
    }

    // loop over every column
    for( var i = 0; i < n; i++ ){
      // put a piece in chessboard
      board.togglePiece(row, i);
      // check for conflicts
      if( !board.hasAnyRooksConflicts() ){
        // if not start recursion
        trySolution(row+1, i);
      }
      board.togglePiece(row, i);
    }
  }

  // call function passing row 0
  trySolution(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var matrix = [];
  var board = new Board({n: n});


  // create count function
  var trySolution = function(row){
    //debugger;
    // if row === n
    if( row === n ){
      // return;
      
      matrix.push(board.rows().slice());
      
      return;
    }

    // loop over every column
    for( var i = 0; i < n; i++ ){
      // put a piece in chessboard
      board.togglePiece(row, i);
      // check for conflicts
      if( !board.hasAnyQueensConflicts() ){
        // if not start recursion
        trySolution(row+1, i);
      }
      board.togglePiece(row, i);
    }
  }

  // call function passing row 0
  var solution = trySolution(0);
  if(n === 0){
    return {n: 0};
  } else {
    console.log(matrix);
    //debugger;
    return matrix;
  }
  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  //return solutionCount;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  // create count function
  var trySolution = function(row){
    // if row === n
    if( row === n ){
      // increment solution
      solutionCount++;
      // return;
      return;
    }

    // loop over every column
    for( var i = 0; i < n; i++ ){
      // put a piece in chessboard
      board.togglePiece(row, i);
      // check for conflicts
      if( !board.hasAnyQueensConflicts() ){
        // if not start recursion
        trySolution(row+1, i);
      }
      board.togglePiece(row, i);
    }
  }

  // call function passing row 0
  trySolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
