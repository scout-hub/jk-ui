import { ButtonGroupProps } from '../button/button.types';
import { GroupButtonContext } from '../button/context';
import { useStyleByProps } from './style';

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const { children, type, size, gap, style, ...restProps } = props;
  const { cls, dynamicStyle } = useStyleByProps({ gap, style });
  return (
    <GroupButtonContext.Provider
      value={{
        type,
        size,
      }}
    >
      <div className={cls} style={dynamicStyle} {...restProps}>
        {children}
      </div>
    </GroupButtonContext.Provider>
  );
};
