export const CHANGE_STATE = "CHANGE_STATE";

export function changeState(state) {
  return {
    type: CHANGE_STATE,
    setState: state,
  };
}
