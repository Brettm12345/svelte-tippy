import runTippy from 'tippy.js';
import type {Props} from 'tippy.js';

export interface TippyReturn {
  update: (newProps: Partial<Props>) => void;
  destroy: () => void;
}
export type Tippy = (element: HTMLElement, props?: Partial<Props>) => TippyReturn;
export const tippy: Tippy = (element, props) => {
  const {destroy, setProps} = runTippy(element, props);
  return {
    destroy,
    update: setProps
  };
};

export type CreateTippy = (defaultProps: Partial<Props>) => Tippy;
export const createTippy: CreateTippy = defaultProps => (element, props) =>
  tippy(element, {...props, ...defaultProps});
