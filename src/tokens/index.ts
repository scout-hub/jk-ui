
const tokenList = [
  'colorNeutral',
  'colorNeutralBackground',
  'boxShadowNeutral',
  'borderColorNeutral',
  'fontSizeNeutral',
  'heightNeutral',
  'paddingNeutral',
] as const;

type TokenList = typeof tokenList[number];

export type Theme = Partial<{
  [K in TokenList]: string;
}>;

export const tokens: Theme = ((tokenList) => tokenList.reduce(
  (result: Record<string, string>, token: string) => (result[token] = `var(--${token})`, result)
  , {}))(tokenList);