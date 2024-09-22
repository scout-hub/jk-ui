import { makeStyles } from "@griffel/react";
import { colorMap, sizeMap, Theme } from "jkyun-ui";
import { SizeTypes } from "../button.types";

const {
  disabledBgColorPrimary,
  colorWhite,
  hoverColorPrimary,
  colorBlack,
  colorWarning,
  hoverColor,
  hoverBorderColor,
  hoverBgColor,
  colorInfo,
  borderColor,
  colorDanger,
  colorSuccess,
  hoverColorSucess,
  hoverColorDanger,
  hoverColorInfo,
  hoverColorWarning,
  disabledColor,
  disabledBorderColor,
  disabledBgColorDanger,
  disabledBgColorInfo,
  disabledBgColorSuccess,
  disabledBgColorWarning,
} = colorMap;

const {
  largeFontSize,
  smallFontSize,
  largeHeight,
  middleHeight,
  smallHeight,
  largePadding,
  smallPadding,
  middlePadding
} = sizeMap;

export const Default: Theme = {
  colorNeutral: colorBlack,
  colorNeutralBackground: colorWhite,
  borderColorNeutral: borderColor,
}

export const Primary: Theme = {
  colorNeutral: colorWhite,
  colorNeutralBackground: hoverColor,
  borderColorNeutral: hoverColor
}

export const Danger: Theme = {
  colorNeutral: colorWhite,
  colorNeutralBackground: colorDanger,
  borderColorNeutral: colorDanger
}

export const Success: Theme = {
  colorNeutral: colorWhite,
  colorNeutralBackground: colorSuccess,
  borderColorNeutral: colorSuccess
}

export const Info: Theme = {
  colorNeutral: colorWhite,
  colorNeutralBackground: colorInfo,
  borderColorNeutral: colorInfo
}

export const Warning: Theme = {
  colorNeutral: colorWhite,
  colorNeutralBackground: colorWarning,
  borderColorNeutral: colorWarning
}

export const useBaseButtonStyle = makeStyles({
  root: {
    boxSizing: 'border-box',
    outline: 'none',
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    border: '1px solid transparent',
    borderRadius: '4px'
  },
});

export const getNormalButtonStyle = makeStyles({
  default: {
    '&:hover': {
      color: hoverColor,
      'border-color': hoverBorderColor,
      backgroundColor: hoverBgColor
    },
  },
  primary: {
    '&:hover': {
      color: colorWhite,
      'border-color': hoverColorPrimary,
      backgroundColor: hoverColorPrimary,
    },
  },
  info: {
    '&:hover': {
      color: colorWhite,
      'border-color': hoverColorInfo,
      backgroundColor: hoverColorInfo,
    },
  },
  success: {
    '&:hover': {
      color: colorWhite,
      'border-color': hoverColorSucess,
      backgroundColor: hoverColorSucess,
    },
  },
  danger: {
    '&:hover': {
      color: colorWhite,
      'border-color': hoverColorDanger,
      backgroundColor: hoverColorDanger,
    },
  },
  warning: {
    '&:hover': {
      color: colorWhite,
      'border-color': hoverColorWarning,
      backgroundColor: hoverColorWarning,
    },
  }
});

export const DisabledDefault = {
  colorNeutral: disabledColor,
  colorNeutralBackground: colorWhite,
  borderColorNeutral: disabledBorderColor
}

export const DisabledPrimary = {
  colorNeutral: colorWhite,
  colorNeutralBackground: disabledBgColorPrimary,
  borderColorNeutral: disabledBgColorPrimary
};

export const DisabledDanger = {
  colorNeutral: colorWhite,
  colorNeutralBackground: disabledBgColorDanger,
  borderColorNeutral: disabledBgColorDanger
};

export const DisabledInfo = {
  colorNeutral: colorWhite,
  colorNeutralBackground: disabledBgColorInfo,
  borderColorNeutral: disabledBgColorInfo
};

export const DisabledSuccess = {
  colorNeutral: colorWhite,
  colorNeutralBackground: disabledBgColorSuccess,
  borderColorNeutral: disabledBgColorSuccess
};

export const DisabledWarning = {
  colorNeutral: colorWhite,
  colorNeutralBackground: disabledBgColorWarning,
  borderColorNeutral: disabledBgColorWarning
};

export const getDisabledButtonStyle = makeStyles({
  root: {
    '&:hover': {
      cursor: 'not-allowed',
    }
  }
});

export const SizeTheme: Record<SizeTypes, Theme> = {
  large: {
    heightNeutral: largeHeight,
    paddingNeutral: largePadding,
    fontSizeNeutral: largeFontSize,
  },
  small: {
    heightNeutral: smallHeight,
    paddingNeutral: smallPadding,
    fontSizeNeutral: smallFontSize,
  },
  middle: {
    heightNeutral: middleHeight,
    fontSizeNeutral: largeFontSize,
    paddingNeutral: middlePadding,
  }
}