/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import TooltipTest from './TooltipTest.svelte';
import {render, fireEvent} from '@testing-library/svelte';

test('It does not render by default', async () => {
  const {getByText} = render(TooltipTest);
  await fireEvent.mouseOver(getByText('Button'));
  expect(() => getByText('Tooltip')).toThrow();
});
