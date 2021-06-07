{
  //차별화되는 union 타입 즉 같은 result라는 키를 가지고 각각 다른값을 할당함
  type SuccessState ={
    result: 'success';
    response: {
      body: string;
    },
  };
  type failState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState|failState;

  function Login(): LoginState{
    return {
      result: 'success',
      response: {
        body: 'logging!'
      },
    };

    function printLoginState(state:LoginState) {
      if(state.result === 'success') {
        console.log(state.response.body);
      } else {
        console.log(state.reason);
      }
    }
  }
}