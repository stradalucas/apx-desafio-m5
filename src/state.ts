type Move = "piedra" | "papel" | "tijera";

export const state = {
  data: {
    currentRound: {
      computerPlay: "",
      myPlay: "",
    },
    history: {
      computerWin: 0,
      myWin: 0,
    },
  },

  
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
  },
  setMove(move: Move) {
    const options = ["papel", "piedra", "tijera"];
    const { currentRound } = this.getState();
    currentRound.myPlay = move;
    currentRound.computerPlay = options[Math.floor(Math.random() * 3)];
    this.historyState();
    
  },
  whoWins() {
    const { currentRound } = this.getState();
    const myPlay = currentRound.myPlay;
    const computerPlay = currentRound.computerPlay;
    const result =
      (myPlay == "papel" && computerPlay == "piedra") ||
      (myPlay == "tijera" && computerPlay == "papel") ||
      (myPlay == "piedra" && computerPlay == "tijera")
        ? "win"
        : myPlay == computerPlay
        ? "tie"
        : "lose";

    return result;
  },

  historyState() {
    const result = this.whoWins();
    const currentState = this.getState();
    const myScore = currentState.history.myWin;
    const computerScore = currentState.history.computerWin;

    if (result == "win") {
      this.setState({
        ...currentState,
        history: {
          myWin: myScore + 1,
          computerWin: computerScore,
        },
      });
    }
    if (result == "lose") {
      this.setState({
        ...currentState,
        history: {
          myWin: myScore,
          computerWin: computerScore + 1,
        },
      });
    }
    localStorage.setItem("state", JSON.stringify(state.getState()));
  },
};
