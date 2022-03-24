{
  /**
   * Union Types: OR
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  type Success = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = Success | FailState;

  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: "logged in",
      },
    };
  }

  // printLoginState(state)
  //Success -> body
  // fail -> reason
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`${state.response.body}!`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}
