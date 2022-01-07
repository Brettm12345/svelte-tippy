import runTippy from 'tippy.js';
import type {Props} from 'tippy.js';

export type TippyProps = Partial<Omit<Props, 'trigger'>>;

export interface TippyReturn {
  update: (newProps: TippyProps) => void;
  destroy: () => void;
}
export type Tippy = (element: HTMLElement, props?: TippyProps) => TippyReturn;
export const tippy: Tippy = (element, props) => {
  const {destroy, setProps} = runTippy(element, props);
  return {
    destroy,
    update: setProps
  };
};

export type CreateTippy = (defaultProps: TippyProps) => Tippy;
export const createTippy: CreateTippy = defaultProps => (element, props) =>
  tippy(element, {...props, ...defaultProps});
