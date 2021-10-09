export const SHOW_ALERT: string = "SIDE_EFFECTS/SHOW_ALERT";
export const HIDE_ALERT: string = "SIDE_EFFECTS/HIDE_ALERT";

interface ShowAlertAction {
    type: typeof SHOW_ALERT;
}

interface HideAlertAction {
    type: typeof HIDE_ALERT;
}

export type SideEffectsAction = ShowAlertAction | HideAlertAction;

export interface SideEffectsState {
    alert: boolean | null;
}