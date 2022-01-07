/**
 * @jest-environment jsdom
 */

import TooltipTest from './TooltipTest.svelte';
import {render, fireEvent} from '@testing-library/svelte';

test('It renders on hover', async () => {
  const {getByText} = render(TooltipTest);
  fireEvent.mouseOver(getByText('Button'));
  expect(() => getByText('Tooltip')).toBeDefined();
});
