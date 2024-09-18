
const tokenList = ['colorNeutral', 'colorNeutralBackground'];

export const tokens = ((tokenList) => tokenList.reduce(
  (result: Record<string, string>, token: string) => (result[token] = `var(--${token})`, result)
  , {}))(tokenList);

export * from './type';
export * from './theme';