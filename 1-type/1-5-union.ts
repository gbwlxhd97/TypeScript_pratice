{
  //union type : or .활용도가 매우 높은 타입임.!
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move (direction:Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 |32;
  const tile:TileSize = 16;

  //ex: login function => success, fail
  
  type SuccessState ={
    response: {
      body: string
    },
  };
  type failState = {
    reason: string
  };
  type LoginState = SuccessState|failState;

  function Login2(): LoginState{
    return {
      response: {
        body: 'logging!'
      },
    };

    function printLoginState(state:LoginState) {
      if('response' in state) {
        console.log(state.response.body);
      } else {
        console.log(state.reason);
      }
    }
  }


}