export enum Routes {
  REGISTER = 'REGISTER',
  OTP = 'OTP',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
}

export type RootStackParamType = {
  [Routes.REGISTER]: undefined;
  [Routes.OTP]: {
    phoneNumber: string;
  };
  [Routes.LOGIN]: undefined;
  [Routes.HOME]: undefined;
};
